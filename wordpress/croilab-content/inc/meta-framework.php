<?php
/**
 * Framework de metaboxes nativas para Croilab Content.
 *
 * Sin dependencias externas (no requiere ACF). Proporciona una API
 * declarativa para definir campos, renderizar la UI, guardar/sanear y
 * exponerlos en la REST API.
 *
 * Tipos de campo soportados:
 *   text, textarea, url, email, select, number,
 *   image (URL/ID), repeater (de subcampos), group
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Croilab_Meta {

	/** @var array Registro de metaboxes: key => config */
	private static $metaboxes = array();

	/** @var array Registro de grupos de opciones (settings) */
	private static $settings = array();

	/**
	 * Declara una metabox para un CPT.
	 *
	 * @param string $key     Identificador único (prefijo `croilab_`).
	 * @param array  $config  { title, post_types[], fields[] }
	 */
	public static function add( string $key, array $config ): void {
		self::$metaboxes[ $key ] = wp_parse_args(
			$config,
			array(
				'title'      => 'Contenido',
				'post_types' => array(),
				'fields'     => array(),
				'context'    => 'normal',
				'priority'   => 'default',
				'prefix'     => $key . '_',
			)
		);
	}

	/**
	 * Declara un grupo de opciones (campo de configuración global).
	 *
	 * @param string $key    Clave de opción (sin prefijo de meta).
	 * @param array  $fields Definición de campos.
	 */
	public static function add_settings( string $key, array $fields ): void {
		self::$settings[ $key ] = $fields;
	}

	/** @return array Todas las metaboxes declaradas. */
	public static function get_all(): array {
		return self::$metaboxes;
	}

	/** @return array Todos los grupos de settings. */
	public static function get_all_settings(): array {
		return self::$settings;
	}

	/** @return array Fields de una metabox. */
	public static function fields_of( string $key ): array {
		return isset( self::$metaboxes[ $key ] ) ? self::$metaboxes[ $key ]['fields'] : array();
	}

	/**
	 * Registra las metaboxes y los hooks de guardado.
	 */
	public static function init(): void {
		foreach ( self::$metaboxes as $key => $mb ) {
			$screen = $mb['post_types'];
			add_action(
				'add_meta_boxes',
				function () use ( $key, $mb, $screen ) {
					foreach ( (array) $screen as $pt ) {
						add_meta_box( $key, $mb['title'], array( __CLASS__, 'render' ), $pt, $mb['context'], $mb['priority'], array( 'key' => $key ) );
					}
				}
			);
			add_action( 'save_post', function ( $post_id ) use ( $key, $mb ) {
				if ( in_array( get_post_type( $post_id ), (array) $mb['post_types'], true ) ) {
					self::save( $post_id, $mb, $mb['prefix'] );
				}
			} );

			// Exponer en REST API.
			foreach ( (array) $screen as $pt ) {
				self::register_rest_fields( $pt, $key, $mb['prefix'] );
			}
		}

		add_action( 'admin_init', array( __CLASS__, 'register_settings' ) );
		add_action( 'admin_footer', array( __CLASS__, 'media_script' ) );
	}

	/**
	 * Script para el botón "Subir imagen" de los campos de tipo image.
	 */
	public static function media_script(): void {
		?>
		<script>
		(function () {
			if (typeof window.croilabMedia !== 'undefined') { return; }
			window.croilabMedia = 1;
			if (typeof wp === 'undefined' || !wp.media) { return; }
			document.addEventListener('click', function (e) {
				var btn = e.target.closest ? e.target.closest('.croilab-image-btn') : null;
				if (!btn) { return; }
				e.preventDefault();
				var inputName = btn.getAttribute('data-input');
				var input = document.querySelector(inputName);
				var frame = wp.media({ title: 'Seleccionar imagen', multiple: false });
				frame.on('select', function () {
					var attachment = frame.state().get('selection').first().toJSON();
					if (input) {
						input.value = attachment.id;
						input.dispatchEvent(new Event('change'));
					}
					btn.innerHTML = 'Cambiar imagen';
				});
				frame.open();
			});
		})();
		</script>
		<?php
	}

	/**
	 * Registra los campos como field group en la REST API bajo la clave `croilab`.
	 *
	 * @param string $post_type
	 * @param string $key
	 * @param string $prefix
	 */
	private static function register_rest_fields( string $post_type, string $key, string $prefix ): void {
		register_rest_field(
			$post_type,
			'croilab_' . $key,
			array(
				'get_callback' => function ( array $object ) use ( $prefix ) {
					return self::read( (int) $object['id'], $prefix );
				},
				'update_callback' => null,
				'schema' => array( 'type' => 'object' ),
			)
		);
	}

	/**
	 * Lee todos los valores de una metabox para un post.
	 *
	 * @param int    $post_id
	 * @param string $prefix
	 * @return array
	 */
	public static function read( int $post_id, string $prefix ): array {
		$out = array();
		foreach ( self::$metaboxes as $mb ) {
			if ( $mb['prefix'] !== $prefix ) {
				continue;
			}
			foreach ( $mb['fields'] as $field ) {
				$value = get_post_meta( $post_id, $prefix . $field['name'], true );
				$out[ $field['name'] ] = self::sanitize_out( $field, $value );
			}
		}
		return $out;
	}

	/**
	 * Render de la metabox (backoffice).
	 *
	 * @param WP_Post $post
	 * @param array   $args
	 */
	public static function render( WP_Post $post, array $args ): void {
		$key    = $args['args']['key'];
		$prefix = self::$metaboxes[ $key ]['prefix'];
		wp_nonce_field( 'croilab_save', "croilab_nonce_{$key}" );
		echo '<div class="croilab-meta">';
		foreach ( self::$metaboxes[ $key ]['fields'] as $field ) {
			$name  = $prefix . $field['name'];
			$value = get_post_meta( $post->ID, $name, true );
			echo '<div class="croilab-field" style="margin-bottom:16px;">';
			echo '<label style="font-weight:600;display:block;margin-bottom:6px;">' . esc_html( $field['label'] ) . '</label>';
			if ( ! empty( $field['instructions'] ) ) {
				echo '<p class="description" style="margin:0 0 6px;">' . esc_html( $field['instructions'] ) . '</p>';
			}
			self::render_field( $field, $name, $value, $post->ID );
			echo '</div>';
		}
		echo '</div>';
		echo '<style>.croilab-meta input[type=text],.croilab-meta input[type=url],.croilab-meta input[type=email],.croilab-meta textarea,.croilab-meta select{width:100%;max-width:100%;}.croilab-repeater-row{border:1px solid #ddd;border-radius:4px;padding:10px;margin-bottom:8px;background:#fafafa;}.croilab-repeater-row .croilab-repeater-fields{display:flex;flex-direction:column;gap:8px;}</style>';
	}

	/**
	 * Render de un campo individual.
	 *
	 * @param array  $field
	 * @param string $name  Clave completa del meta.
	 * @param mixed  $value
	 * @param int    $post_id
	 */
	private static function render_field( array $field, string $name, $value, int $post_id ): void {
		$type = $field['type'];

		switch ( $type ) {
			case 'textarea':
			case 'textarea_code':
				printf(
					'<textarea name="%1$s" rows="%2$d">%3$s</textarea>',
					esc_attr( $name ),
					(int) ( isset( $field['rows'] ) ? $field['rows'] : 3 ),
					esc_textarea( (string) $value )
				);
				break;

			case 'select':
				echo '<select name="' . esc_attr( $name ) . '">';
				foreach ( $field['choices'] as $val => $label ) {
					printf(
						'<option value="%1$s" %2$s>%3$s</option>',
						esc_attr( $val ),
						selected( (string) $value, (string) $val, false ),
						esc_html( $label )
					);
				}
				echo '</select>';
				break;

			case 'number':
				printf(
					'<input type="number" name="%1$s" value="%2$s" step="any" />',
					esc_attr( $name ),
					esc_attr( (string) $value )
				);
				break;

			case 'image':
				$src = is_numeric( $value ) ? wp_get_attachment_url( (int) $value ) : $value;
				printf(
					'<input class="croilab-image-input" type="text" name="%1$s" value="%2$s" placeholder="URL de la imagen" style="margin-bottom:4px;" /><br>
					<button type="button" class="button croilab-image-btn" data-input="[name=%1$s]">Subir imagen</button>',
					esc_attr( $name ),
					esc_attr( (string) $value )
				);
				echo $src ? '<br><img src="' . esc_url( $src ) . '" style="max-width:160px;margin-top:6px;border-radius:4px;" />' : '';
				break;

			case 'repeater':
				self::render_repeater( $field, $name, (array) $value, $post_id );
				break;

			case 'group':
				$group_vals = is_array( $value ) ? $value : array();
				echo '<div class="croilab-group" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">';
				foreach ( $field['sub_fields'] as $sf ) {
					$sf_name = $name . '[' . $sf['name'] . ']';
					$sf_val  = isset( $group_vals[ $sf['name'] ] ) ? $group_vals[ $sf['name'] ] : '';
					echo '<div><label style="font-size:12px;color:#666;display:block;">' . esc_html( $sf['label'] ) . '</label>';
					self::render_field( $sf, $sf_name, $sf_val, $post_id );
					echo '</div>';
				}
				echo '</div>';
				break;

			default: // text / url / email
				$input_type = in_array( $field['type'], array( 'url', 'email' ), true ) ? $field['type'] : 'text';
				printf(
					'<input type="%1$s" name="%2$s" value="%3$s" />',
					esc_attr( $input_type ),
					esc_attr( $name ),
					esc_attr( (string) $value )
				);
				break;
		}
	}

	/**
	 * Render de un repeater en el backoffice.
	 *
	 * @param array  $field
	 * @param string $name
	 * @param array  $rows
	 * @param int    $post_id
	 */
	private static function render_repeater( array $field, string $name, array $rows, int $post_id ): void {
		$rows = array_values( $rows );
		$label_btn = isset( $field['button_label'] ) ? $field['button_label'] : 'Añadir fila';
		$sub       = $field['sub_fields'];
		?>
		<div class="croilab-repeater" data-repeater>
			<div class="croilab-repeater-list">
				<?php if ( empty( $rows ) ) : ?>
					<div class="croilab-repeater-empty">Sin filas.</div>
				<?php else : ?>
					<?php foreach ( $rows as $row ) : ?>
						<?php self::render_repeater_row( $sub, $name, (array) $row ); ?>
					<?php endforeach; ?>
				<?php endif; ?>
			</div>
			<button type="button" class="button croilab-repeater-add" data-name="<?php echo esc_attr( $name ); ?>"><?php echo esc_html( $label_btn ); ?></button>
		</div>
		<script>
		(function () {
			window.croilabRepeatInit = window.croilabRepeatInit || function (root) {
				root.querySelectorAll('[data-repeater]').forEach(function (rep) {
					var list = rep.querySelector('.croilab-repeater-list');
					var add = rep.querySelector('.croilab-repeater-add');
					if (add && !add.__bound) {
						add.__bound = 1;
						add.addEventListener('click', function () {
							var name = add.getAttribute('data-name');
							var fields = JSON.parse(add.getAttribute('data-subfields') || '[]');
							var row = document.createElement('div');
							row.className = 'croilab-repeater-row';
							var cols = '';
							fields.forEach(function (f) {
								var tag = f.type === 'textarea' ? 'textarea' : 'input';
								var tagType = tag === 'input' ? 'type="' + (f.type === 'url' ? 'url' : 'text') + '"' : '';
								cols += '<div><label style="font-size:12px;color:#666;">' + f.label + '</label><' + tag + ' ' + tagType + ' name="' + name + '[' + (list.children.length - 1) + '][' + f.name + ']" style="width:100%;"></' + (tag === 'textarea' ? 'textarea' : tag) + '></div>';
							});
							row.innerHTML = '<div class="croilab-repeater-fields" style="display:flex;flex-wrap:wrap;gap:8px;">' + cols + '</div><button type="button" class="button croilab-repeater-remove">Eliminar</button>';
							row.querySelector('.croilab-repeater-remove').addEventListener('click', function () { row.remove(); });
							list.appendChild(row);
						});
					}
				});
				document.querySelectorAll('.croilab-repeater-remove').forEach(function (b) {
					if (!b.__bound) { b.__bound = 1; b.parentNode === b; }
				});
			};
			window.croilabRepeatInit(document);
		})();
		</script>
		<?php
	}

	/**
	 * Render de una fila de repeater existente.
	 *
	 * @param array  $sub
	 * @param string $name
	 * @param array  $row
	 */
	private static function render_repeater_row( array $sub, string $name, array $row ): void {
		echo '<div class="croilab-repeater-row">';
		echo '<div class="croilab-repeater-fields" style="display:flex;flex-wrap:wrap;gap:8px;align-items:flex-end;">';
		foreach ( $sub as $sf ) {
			$val = isset( $row[ $sf['name'] ] ) ? $row[ $sf['name'] ] : '';
			echo '<div style="flex:1;min-width:140px;"><label style="font-size:12px;color:#666;display:block;">' . esc_html( $sf['label'] ) . '</label>';
			if ( 'image' === $sf['type'] ) {
				self::render_image_subfield( $name . '[' . $sf['name'] . ']', $val );
			} elseif ( 'textarea' === $sf['type'] ) {
				printf( '<textarea name="%1$s" rows="2" style="width:100%%;">%2$s</textarea>', esc_attr( $name . '[]' . '[' . $sf['name'] . ']' ), esc_textarea( (string) $val ) );
			} else {
				printf(
					'<input type="%1$s" name="%2$s[][%3$s]" value="%4$s" style="width:100%%;" />',
					esc_attr( in_array( $sf['type'], array( 'url', 'email' ), true ) ? $sf['type'] : 'text' ),
					esc_attr( $name ),
					esc_attr( $sf['name'] ),
					esc_attr( (string) $val )
				);
			}
			echo '</div>';
		}
		echo '</div><input type="hidden" name="' . esc_attr( $name ) . '" value="repeater" class="croilab-repeater-marker" />';
		echo '<button type="button" class="button croilab-repeater-remove">Eliminar</button>';
		echo '</div>';
	}

	/**
	 * Render de un sub-campo de imagen (con botón de subir desde la biblioteca).
	 *
	 * @param string $name  Nombre del input.
	 * @param mixed  $value
	 */
	private static function render_image_subfield( string $name, $value ): void {
		$name_esc = esc_attr( $name );
		$src      = is_numeric( $value ) ? wp_get_attachment_url( (int) $value ) : $value;
		printf(
			'<input class="croilab-image-input" type="text" name="%1$s" value="%2$s" placeholder="URL o sube una imagen" style="width:100%%;margin-bottom:4px;" /><br>
			<button type="button" class="button croilab-image-btn" data-input="[name=%1$s]">Subir imagen</button>',
			$name_esc,
			esc_attr( (string) $value )
		);
		echo $src ? '<br><img src="' . esc_url( $src ) . '" style="max-width:120px;margin-top:4px;border-radius:4px;" />' : '';
	}

	/**
	 * Guarda los campos de una metabox al guardar el post.
	 *
	 * @param int    $post_id
	 * @param array  $mb
	 * @param string $prefix
	 */
	private static function save( int $post_id, array $mb, string $prefix ): void {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		$nonce_key = "croilab_nonce_{$mb['key']}";
		if ( ! isset( $_POST[ $nonce_key ] ) || ! wp_verify_nonce( sanitize_key( $_POST[ $nonce_key ] ), 'croilab_save' ) ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		foreach ( $mb['fields'] as $field ) {
			$meta_key = $prefix . $field['name'];
			$raw      = isset( $_POST[ $prefix . $field['name'] ] ) ? wp_unslash( $_POST[ $prefix . $field['name'] ] ) : null;
			$value    = self::sanitize_in( $field, $raw );
			if ( $value === '' || $value === array() || $value === null ) {
				delete_post_meta( $post_id, $meta_key );
			} else {
				update_post_meta( $post_id, $meta_key, $value );
			}
		}
	}

	/**
	 * Sanea un valor de entrada según el tipo de campo.
	 *
	 * @param array $field
	 * @param mixed $raw
	 * @return mixed
	 */
	private static function sanitize_in( array $field, $raw ) {
		if ( $raw === null ) {
			return '';
		}
		switch ( $field['type'] ) {
			case 'textarea':
			case 'textarea_code':
				return sanitize_textarea_field( (string) $raw );

			case 'url':
				return esc_url_raw( (string) $raw );

			case 'email':
				return sanitize_email( (string) $raw );

			case 'number':
				return is_numeric( $raw ) ? $raw : '';
			case 'select':
				return sanitize_text_field( (string) $raw );

			case 'image':
				if ( is_numeric( $raw ) ) {
					return absint( $raw );
				}
				return esc_url_raw( (string) $raw );

			case 'group':
				if ( ! is_array( $raw ) ) {
					return array();
				}
				$out = array();
				foreach ( $field['sub_fields'] as $sf ) {
					$name = $sf['name'];
					$out[ $name ] = isset( $raw[ $name ] )
						? self::sanitize_in( $sf, $raw[ $name ] )
						: '';
				}
				return $out;

			case 'repeater':
				return self::sanitize_repeater( $field, $raw );

			default:
				return sanitize_text_field( (string) $raw );
		}
	}

	/**
	 * Sanea un repeater completo.
	 *
	 * @param array $field
	 * @param mixed $raw
	 * @return array
	 */
	private static function sanitize_repeater( array $field, $raw ): array {
		if ( ! is_array( $raw ) ) {
			return array();
		}
		$out = array();
		foreach ( array_values( $raw ) as $row ) {
			if ( ! is_array( $row ) ) {
				continue;
			}
			$clean = array();
			foreach ( $field['sub_fields'] as $sf ) {
				$name = $sf['name'];
				$clean[ $name ] = isset( $row[ $name ] )
					? self::sanitize_in( $sf, $row[ $name ] )
					: '';
			}
			$out[] = $clean;
		}
		return $out;
	}

	/**
	 * Prepara un valor para la salida en REST (imágenes como URL).
	 *
	 * @param array $field
	 * @param mixed $value
	 * @return mixed
	 */
	private static function sanitize_out( array $field, $value ) {
		if ( 'image' === $field['type'] && is_numeric( $value ) ) {
			return wp_get_attachment_url( (int) $value ) ?: '';
		}
		if ( 'repeater' === $field['type'] && is_array( $value ) ) {
			$out = array();
			foreach ( $value as $row ) {
				$clean = array();
				foreach ( $field['sub_fields'] as $sf ) {
					$val = isset( $row[ $sf['name'] ] ) ? $row[ $sf['name'] ] : '';
					if ( 'image' === $sf['type'] && is_numeric( $val ) ) {
						$val = wp_get_attachment_url( (int) $val ) ?: '';
					}
					$clean[ $sf['name'] ] = $val;
				}
				$out[] = $clean;
			}
			return $out;
		}
		if ( 'group' === $field['type'] && is_array( $value ) ) {
			$out = array();
			foreach ( $field['sub_fields'] as $sf ) {
				$val = isset( $value[ $sf['name'] ] ) ? $value[ $sf['name'] ] : '';
				if ( 'image' === $sf['type'] && is_numeric( $val ) ) {
					$val = wp_get_attachment_url( (int) $val ) ?: '';
				}
				$out[ $sf['name'] ] = $val;
			}
			return $out;
		}
		return $value;
	}

	/**
	 * Registra los grupos de settings como opciones y su endpoint REST.
	 */
	public static function register_settings(): void {
		register_setting(
			'croilab_options',
			'croilab_options',
			array(
				'type'              => 'object',
				'default'           => array(),
				'sanitize_callback' => function ( $input ) {
					$sanitized = array();
					foreach ( self::$settings as $group_key => $fields ) {
						$raw = isset( $input[ $group_key ] ) ? $input[ $group_key ] : array();
						$sanitized[ $group_key ] = self::sanitize_settings_group( $fields, $raw );
					}
					return $sanitized;
				},
			)
		);

		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'croilab/v1',
					'/settings',
					array(
						'methods'             => WP_REST_Server::READABLE,
						'callback'            => function () {
							$data = get_option( 'croilab_options', array() );
							return new WP_REST_Response( is_array( $data ) ? $data : array(), 200 );
						},
						'permission_callback' => '__return_true',
					)
				);
			}
		);
	}

	/**
	 * Sanea un grupo de settings.
	 *
	 * @param array $fields
	 * @param mixed $raw
	 * @return array
	 */
	private static function sanitize_settings_group( array $fields, $raw ): array {
		if ( ! is_array( $raw ) ) {
			return array();
		}
		$out = array();
		foreach ( $fields as $name => $field ) {
			$out[ $name ] = isset( $raw[ $name ] )
				? self::sanitize_in( $field, $raw[ $name ] )
				: '';
		}
		return $out;
	}

	/**
	 * Lee el valor de una opción de settings.
	 *
	 * @param string $group Clave del grupo (site, social...).
	 * @return array
	 */
	public static function get_settings( string $group ): array {
		$data   = get_option( 'croilab_options', array() );
		$gv     = isset( $data[ $group ] ) && is_array( $data[ $group ] ) ? $data[ $group ] : array();
		$fields = isset( self::$settings[ $group ] ) ? self::$settings[ $group ] : array();
		$out    = array();
		foreach ( $fields as $name => $spec ) {
			if ( 'items' === $name ) {
				// repeater de items
				$out['items'] = isset( $gv['items'] ) && is_array( $gv['items'] ) ? $gv['items'] : array();
				continue;
			}
			$value = isset( $gv[ $name ] ) ? $gv[ $name ] : '';
			$out[ $name ] = self::sanitize_out( $spec, $value );
		}
		return $out;
	}
}
