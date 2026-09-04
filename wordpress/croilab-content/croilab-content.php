<?php
/**
 * Plugin Name:       Croilab Content
 * Plugin URI:        https://croilab.com
 * Description:       Modelo de contenido para el sitio Croilab (headless Astro + WordPress REST API). Registra CPTs, campos nativos (metaboxes) y un endpoint REST de configuración global.
 * Version:           1.2.0
 * Author:            Croilab
 * Text Domain:       croilab-content
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CROILAB_CONTENT_VERSION', '1.2.0' );
define( 'CROILAB_CONTENT_DIR', plugin_dir_path( __FILE__ ) );

require_once CROILAB_CONTENT_DIR . 'inc/custom-post-types.php';
require_once CROILAB_CONTENT_DIR . 'inc/meta-framework.php';
require_once CROILAB_CONTENT_DIR . 'inc/meta-boxes.php';
require_once CROILAB_CONTENT_DIR . 'inc/settings-page.php';
require_once CROILAB_CONTENT_DIR . 'inc/rest-api.php';
require_once CROILAB_CONTENT_DIR . 'inc/importer.php';
require_once CROILAB_CONTENT_DIR . 'inc/seed.php';

/**
 * Inicializa las metaboxes declarativas al arrancar.
 */
function croilab_content_init_meta(): void {
	Croilab_Meta::init();
}
add_action( 'init', 'croilab_content_init_meta', 20 );

/**
 * Registra la página de registro de CPTs (flush de rewrite rules) y siembra el
 * contenido de `seed/` automáticamente al activar el plugin.
 */
function croilab_content_activate(): void {
	croilab_content_register_post_types();

	// Los CPT ya registrados nos permiten resolver/get_page_by_path al sembrar.
	$seed_dir = CROILAB_CONTENT_DIR . 'seed';
	if ( is_dir( $seed_dir ) ) {
		$importer = new Croilab_Seed_Importer(
			static function ( $msg, $level = 'log' ) {
				if ( 'error' === $level ) {
					error_log( "[Croilab Seed] $msg" );
				} elseif ( 'warning' === $level ) {
					error_log( "[Croilab Seed] AVISO: $msg" );
				} else {
					error_log( "[Croilab Seed] $msg" );
				}
			}
		);
		$importer->import_all( $seed_dir );
	}

	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'croilab_content_activate' );

register_deactivation_hook( __FILE__, 'flush_rewrite_rules' );
