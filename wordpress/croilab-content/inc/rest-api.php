<?php
/**
 * Personalización de la REST API para el frontend Astro.
 *
 *  - Expone cada metabox declarativa bajo la clave `croilab_<key>` (el
 *    framework Croilab_Meta ya lo registra).
 *  - Expone los campos legacy de proyectos (imagen_url, enlace_proyecto)
 *    para no romper la compatibilidad con el código actual.
 *  - Endpoint /croilab/v1/settings con la configuración global.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registra campos legacy de proyecto en la REST API.
 */
function croilab_content_legacy_rest_fields(): void {
	foreach ( array( 'enlace_proyecto', 'imagen_url' ) as $field ) {
		register_rest_field(
			'proyecto',
			$field,
			array(
				'get_callback' => function ( array $object ) use ( $field ) {
					$value = get_post_meta( (int) $object['id'], $field, true );
					return $value ?: '';
				},
				'schema' => array( 'type' => 'string' ),
			)
		);
	}
}
add_action( 'rest_api_init', 'croilab_content_legacy_rest_fields' );
