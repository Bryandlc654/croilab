<?php
/**
 * Comando WP-CLI `wp croilab seed` para importar el contenido Croilab.
 *
 * También disponible sin CLI mediante `Croilab_Seed_Importer` (ver inc/importer.php),
 * que se ejecuta automáticamente en la activación del plugin.
 *
 * Uso:
 *   wp croilab seed --dir=seed
 *   wp croilab seed --dir=seed --dry-run
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( defined( 'WP_CLI' ) && WP_CLI ) {

	require_once dirname( __FILE__ ) . '/importer.php';

	class Croilab_Seed_Command extends WP_CLI_Command {

		/**
		 * Importa contenido desde archivos JSON.
		 *
		 * ## OPTIONS
		 *
		 * [--dir=<path>]
		 * : Ruta a la carpeta con los JSON. Por defecto `seed`.
		 *
		 * [--dry-run]
		 * : Muestra los cambios sin escribirlos.
		 *
		 * @param array $args
		 * @param array $assoc_args
		 */
		public function seed( array $args, array $assoc_args ): void {
			$rel    = isset( $assoc_args['dir'] ) ? $assoc_args['dir'] : 'seed';
			$dry    = isset( $assoc_args['dry-run'] );
			$dir    = ( 0 === strpos( $rel, '/' ) || 1 === preg_match( '/^[A-Za-z]:[\\\\\/]/', $rel ) )
				? $rel
				: trailingslashit( CROILAB_CONTENT_DIR ) . $rel;

			if ( ! is_dir( $dir ) ) {
				WP_CLI::error( "La carpeta '$dir' no existe." );
			}

			$importer = new Croilab_Seed_Importer(
				static function ( $msg, $level ) {
					if ( 'error' === $level ) {
						WP_CLI::error( $msg );
					} elseif ( 'warning' === $level ) {
						WP_CLI::warning( $msg );
					} elseif ( 'success' === $level ) {
						WP_CLI::success( $msg );
					} else {
						WP_CLI::log( $msg );
					}
				},
				$dry
			);

			$importer->import_all( $dir );
		}
	}

	WP_CLI::add_command( 'croilab seed', 'Croilab_Seed_Command' );
}