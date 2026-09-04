<?php
/**
 * Importador/Seeder de contenido Croilab (reutilizable, sin depender de WP-CLI).
 *
 * Escribe metadatos nativos usando los prefijos del framework Croilab_Meta
 * (p. ej. `croilab_proyecto_enlace_proyecto`). Al no requerir WP-CLI, puede
 * ejecutarse tanto desde el comando CLI como en la activación del plugin.
 *
 * Lee JSON generados por `scripts/export-data.mjs` del repo Astro:
 *   casos.json, clientes.json, testimonios.json, servicios.json,
 *   proyectos.json, settings.json
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Croilab_Seed_Importer {

	/** @var callable */
	private $log;

	/** @var bool */
	private $dry_run;

	/** @var array|null */
	private $dry_items;

	public function __construct( callable $log = null, bool $dry_run = false ) {
		$this->log      = $log ?: static function ( $msg, $level = 'log' ) {};
		$this->dry_run  = $dry_run;
		$this->dry_items = array();
	}

	/**
	 * Importa todos los tipos desde una carpeta de JSON.
	 *
	 * @param string $dir Ruta absoluta a la carpeta `seed`.
	 * @return array Resumen: array de {file, cpt, created, updated, count}
	 */
	public function import_all( string $dir ): array {
		if ( ! is_dir( $dir ) ) {
			$this->emit( "La carpeta '$dir' no existe.", 'error' );
			return array();
		}

		$map  = $this->type_map();
		$sums = array();

		foreach ( $map as $file => $cfg ) {
			$path = trailingslashit( $dir ) . $file . '.json';
			if ( ! file_exists( $path ) ) {
				continue;
			}
			$items = json_decode( file_get_contents( $path ), true );
			if ( is_array( $items ) ) {
				$sums[] = $this->import_type( $cfg, $items, $file );
			}
		}

		$settings_file = trailingslashit( $dir ) . 'settings.json';
		if ( file_exists( $settings_file ) ) {
			$this->import_settings( $settings_file );
			$sums[] = array( 'file' => 'settings', 'cpt' => 'options', 'created' => 0, 'updated' => 1, 'count' => 1 );
		}

		$this->emit( 'Importación completada.', 'success' );
		return $sums;
	}

	private function type_map(): array {
		return array(
			'casos'       => array( 'cpt' => 'caso',       'slug_of' => 'slug', 'fields' => 'caso_fields' ),
			'clientes'    => array( 'cpt' => 'cliente',    'slug_of' => 'slug', 'fields' => 'cliente_fields' ),
			'testimonios' => array( 'cpt' => 'testimonio', 'slug_of' => 'slug', 'fields' => 'testimonio_fields' ),
			'servicios'   => array( 'cpt' => 'servicio',   'slug_of' => 'slug', 'fields' => 'servicio_fields' ),
			'proyectos'   => array( 'cpt' => 'proyecto',   'slug_of' => 'slug', 'fields' => 'proyecto_fields' ),
		);
	}

	private function import_type( array $cfg, array $items, string $file ): array {
		$created = 0;
		$updated = 0;
		$count   = 0;

		foreach ( $items as $i => $item ) {
			$slug  = isset( $item[ $cfg['slug_of'] ] ) ? sanitize_title( $item[ $cfg['slug_of'] ] ) : 'item-' . $i;
			$title = isset( $item['title'] ) && '' !== $item['title'] ? $item['title'] : $slug;

			$existing = get_page_by_path( $slug, OBJECT, $cfg['cpt'] );
			$post_id  = $existing ? (int) $existing->ID : 0;

			if ( $this->dry_run ) {
				$this->emit( "[dry-run] {$cfg['cpt']}: " . ( $post_id ? 'Actualizar' : 'Crear' ) . " '$title' ($slug)" );
				$this->dry_items[] = $slug;
				++$count;
				continue;
			}

			$args = array(
				'post_type'   => $cfg['cpt'],
				'post_status' => 'publish',
				'post_title'  => $title,
				'post_name'   => $slug,
			);
			if ( isset( $item['content'] ) && is_string( $item['content'] ) ) {
				$args['post_content'] = $item['content'];
			}
			if ( isset( $item['excerpt'] ) && is_string( $item['excerpt'] ) ) {
				$args['post_excerpt'] = $item['excerpt'];
			}

			$new_id = $post_id ? wp_update_post( $args + array( 'ID' => $post_id ), true ) : wp_insert_post( $args, true );

			if ( is_wp_error( $new_id ) ) {
				$this->emit( "{$cfg['cpt']}: error en '$title': " . $new_id->get_error_message(), 'warning' );
				continue;
			}

			if ( $post_id ) {
				++$updated;
			} else {
				++$created;
			}

			$this->{$cfg['fields']}((int) $new_id, $item );
			++$count;
		}

		$this->emit( "{$cfg['cpt']}: $count items procesados." );
		return array(
			'file'    => $file,
			'cpt'     => $cfg['cpt'],
			'created' => $created,
			'updated' => $updated,
			'count'   => $count,
		);
	}

	private function write_meta( int $post_id, string $prefix, array $fields ): void {
		foreach ( $fields as $key => $value ) {
			$meta_key = $prefix . $key;
			if ( $value === '' || $value === array() || $value === null ) {
				delete_post_meta( $post_id, $meta_key );
			} else {
				update_post_meta( $post_id, $meta_key, $value );
			}
		}
	}

	private function caso_fields( int $post_id, array $item ): void {
		$this->write_meta( $post_id, 'croilab_caso_', array(
			'service'     => isset( $item['service'] ) ? $item['service'] : '',
			'client'      => isset( $item['client'] ) ? $item['client'] : '',
			'industry'    => isset( $item['industry'] ) ? $item['industry'] : '',
			'result'      => isset( $item['result'] ) ? $item['result'] : '',
			'metric'      => isset( $item['metric'] ) ? $item['metric'] : '',
			'description' => isset( $item['description'] ) ? $item['description'] : '',
			'image'       => isset( $item['image'] ) ? $item['image'] : '',
			'challenge'   => isset( $item['challenge'] ) ? $item['challenge'] : '',
			'solution'    => isset( $item['solution'] ) ? $item['solution'] : '',
			'problems'    => $this->rows( isset( $item['problems'] ) ? $item['problems'] : array(), 'problem' ),
			'actions'     => $this->rows( isset( $item['actions'] ) ? $item['actions'] : array(), 'action' ),
			'metrics'     => $this->pairs( isset( $item['metrics'] ) ? $item['metrics'] : array(), 'value', 'label' ),
			'process'     => $this->pairs( isset( $item['process'] ) ? $item['process'] : array(), 'title', 'desc' ),
			'testimonial' => isset( $item['testimonial'] ) ? $item['testimonial'] : array(),
		) );
	}

	private function cliente_fields( int $post_id, array $item ): void {
		$this->write_meta( $post_id, 'croilab_cliente_', array(
			'logo'      => isset( $item['logo'] ) ? $item['logo'] : ( isset( $item['image'] ) ? $item['image'] : '' ),
			'logo_dark' => isset( $item['logo_dark'] ) ? $item['logo_dark'] : '',
			'url'       => isset( $item['url'] ) ? $item['url'] : '',
		) );
	}

	private function testimonio_fields( int $post_id, array $item ): void {
		$this->write_meta( $post_id, 'croilab_testimonio_', array(
			'quote'  => isset( $item['quote'] ) ? $item['quote'] : '',
			'author' => isset( $item['author'] ) ? $item['author'] : '',
			'role'   => isset( $item['role'] ) ? $item['role'] : '',
			'avatar' => isset( $item['avatar'] ) ? $item['avatar'] : '',
		) );
	}

	private function servicio_fields( int $post_id, array $item ): void {
		$this->write_meta( $post_id, 'croilab_servicio_', array(
			'num'             => isset( $item['num'] ) ? $item['num'] : '',
			'slug'            => isset( $item['slug'] ) ? $item['slug'] : '',
			'desc'            => isset( $item['desc'] ) ? $item['desc'] : '',
			'icon'            => isset( $item['icon'] ) ? $item['icon'] : '',
			'hero'            => $this->subset( isset( $item['hero'] ) ? $item['hero'] : array(), array( 'kicker', 'title', 'highlight', 'intro' ) ),
			'hero_stats'      => $this->pairs( isset( $item['hero']['stats'] ) ? $item['hero']['stats'] : array(), 'value', 'label' ),
			'problem'         => $this->subset( isset( $item['problem'] ) ? $item['problem'] : array(), array( 'title', 'intro' ) ),
			'problem_points'  => $this->rows( isset( $item['problem']['points'] ) ? $item['problem']['points'] : array(), 'point' ),
			'solution'        => $this->subset( isset( $item['solution'] ) ? $item['solution'] : array(), array( 'title', 'intro' ) ),
			'solution_points' => $this->pairs( isset( $item['solution']['points'] ) ? $item['solution']['points'] : array(), 'title', 'description' ),
			'benefits'        => $this->pairs( isset( $item['benefits'] ) ? $item['benefits'] : array(), 'title', 'description' ),
			'process'         => $this->pairs( isset( $item['process'] ) ? $item['process'] : array(), 'num', 'title', 'description' ),
			'features'        => $this->pairs( isset( $item['features'] ) ? $item['features'] : array(), 'title', 'description' ),
			'faq'             => $this->pairs( isset( $item['faq'] ) ? $item['faq'] : array(), 'question', 'answer' ),
			'cta'             => $this->subset( isset( $item['cta'] ) ? $item['cta'] : array(), array( 'title', 'highlight', 'subtitle' ) ),
			'related'         => $this->rows( isset( $item['relatedProjects'] ) ? $item['relatedProjects'] : array(), 'project' ),
			'seo'             => $this->subset( isset( $item['seo'] ) ? $item['seo'] : array(), array( 'title', 'description' ) ),
		) );
	}

	private function proyecto_fields( int $post_id, array $item ): void {
		$gallery = isset( $item['gallery'] ) && is_array( $item['gallery'] ) ? $item['gallery'] : array();
		$this->write_meta( $post_id, 'croilab_proyecto_', array(
			'enlace_proyecto' => isset( $item['enlace_proyecto'] ) ? $item['enlace_proyecto'] : '',
			'imagen_url'      => isset( $item['imagen_url'] ) ? $item['imagen_url'] : '',
			'category'        => isset( $item['category'] ) ? $item['category'] : 'otro',
			'client'          => isset( $item['client'] ) ? $item['client'] : '',
			'industry'        => isset( $item['industry'] ) ? $item['industry'] : '',
			'duration'        => isset( $item['duration'] ) ? $item['duration'] : '',
			'metrics'         => $this->pairs( isset( $item['metrics'] ) ? $item['metrics'] : array(), 'value', 'label' ),
			'problem'         => $this->group_points( isset( $item['problem'] ) ? $item['problem'] : array() ),
			'solution'        => $this->group_points( isset( $item['solution'] ) ? $item['solution'] : array() ),
			'process'         => $this->pairs( isset( $item['process'] ) ? $item['process'] : array(), 'title', 'desc' ),
			'stack'           => $this->pairs( isset( $item['stack'] ) ? $item['stack'] : array(), 'name', 'logo' ),
			'results_title'   => isset( $item['results_title'] ) ? $item['results_title'] : '',
			'results'         => $this->pairs( isset( $item['results'] ) ? $item['results'] : array(), 'title', 'desc', 'icon' ),
			'testimonial'     => isset( $item['testimonial'] ) ? $item['testimonial'] : array(),
			'gallery'         => implode( "\n", $gallery ),
		) );
		if ( isset( $item['enlace_proyecto'] ) ) {
			update_post_meta( $post_id, 'enlace_proyecto', $item['enlace_proyecto'] );
		}
		if ( isset( $item['imagen_url'] ) ) {
			update_post_meta( $post_id, 'imagen_url', $item['imagen_url'] );
		}
	}

	/**
	 * Normaliza { title, points } de un grupo problema/solución al formato que
	 * consume el framework: points es un repeater de { point: string }.
	 */
	private function group_points( array $group ): array {
		$out = array(
			'title'  => isset( $group['title'] ) ? $group['title'] : '',
			'points' => array(),
		);
		if ( isset( $group['points'] ) && is_array( $group['points'] ) ) {
			foreach ( $group['points'] as $p ) {
				$out['points'][] = array( 'point' => is_array( $p ) && isset( $p['point'] ) ? $p['point'] : $p );
			}
		}
		return $out;
	}

	private function import_settings( string $file ): void {
		$data = json_decode( file_get_contents( $file ), true );
		if ( ! is_array( $data ) ) {
			return;
		}
		if ( $this->dry_run ) {
			$this->emit( '[dry-run] settings: se actualizaría la opción global.' );
			return;
		}
		$existing = get_option( 'croilab_options', array() );
		$existing['site'] = isset( $data['site'] ) ? $data['site'] : array();
		$existing['differentiators']['items'] = $this->to_items( isset( $data['differentiators'] ) ? $data['differentiators'] : array() );
		$existing['stack']['items']           = $this->to_items( isset( $data['stack'] ) ? $data['stack'] : array() );
		$existing['social']['items']          = $this->to_items( isset( $data['social'] ) ? $data['social'] : array() );
		update_option( 'croilab_options', $existing );
		$this->emit( 'settings: opción global actualizada.' );
	}

	private function rows( array $list, string $key ): array {
		$out = array();
		foreach ( $list as $v ) {
			$out[] = array( $key => is_array( $v ) && isset( $v[ $key ] ) ? $v[ $key ] : $v );
		}
		return $out;
	}

	private function pairs( array $list, ...$keys ): array {
		$out = array();
		$only_first = ( 1 === count( $keys ) );
		foreach ( $list as $row ) {
			$r = array();
			if ( $only_first ) {
				$r[ $keys[0] ] = is_array( $row ) ? ( isset( $row[ $keys[0] ] ) ? $row[ $keys[0] ] : '' ) : $row;
			} else {
				foreach ( $keys as $k ) {
					$r[ $k ] = is_array( $row ) && isset( $row[ $k ] ) ? $row[ $k ] : '';
				}
			}
			$out[] = $r;
		}
		return $out;
	}

	private function subset( array $group, array $keys ): array {
		$out = array();
		foreach ( $keys as $k ) {
			$out[ $k ] = isset( $group[ $k ] ) ? $group[ $k ] : '';
		}
		return $out;
	}

	private function to_items( array $list ): array {
		$out = array();
		foreach ( $list as $row ) {
			if ( is_array( $row ) ) {
				$out[] = $row;
			}
		}
		return $out;
	}

	private function emit( string $msg, string $level = 'log' ): void {
		call_user_func( $this->log, $msg, $level );
	}
}