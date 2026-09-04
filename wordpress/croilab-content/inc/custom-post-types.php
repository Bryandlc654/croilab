<?php
/**
 * Registro de Custom Post Types de Croilab.
 *
 * Cada CPT se registra con un `rest_base` predecible que el frontend
 * (Astro) consume vía REST API. `show_in_rest` debe estar activo.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registro de todos los Custom Post Types.
 */
function croilab_content_register_post_types(): void {

	// ------------------------------------------------------------
	// 1. Casos de éxito (CPT: caso)
	// ------------------------------------------------------------
	register_post_type(
		'caso',
		array(
			'labels'        => array(
				'name'          => __( 'Casos de Éxito', 'croilab-content' ),
				'singular_name' => __( 'Caso de Éxito', 'croilab-content' ),
				'add_new_item'  => __( 'Añadir nuevo caso', 'croilab-content' ),
				'edit_item'     => __( 'Editar caso', 'croilab-content' ),
			),
			'public'        => true,
			'has_archive'   => false,
			'menu_icon'     => 'dashicons-awards',
			'menu_position' => 5,
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
			'show_in_rest'  => true,
			'rest_base'     => 'casos',
			'rewrite'       => array( 'slug' => 'casos' ),
		)
	);

	// ------------------------------------------------------------
	// 2. Clientes / logos (CPT: cliente)
	// ------------------------------------------------------------
	register_post_type(
		'cliente',
		array(
			'labels'        => array(
				'name'          => __( 'Clientes', 'croilab-content' ),
				'singular_name' => __( 'Cliente', 'croilab-content' ),
				'add_new_item'  => __( 'Añadir cliente', 'croilab-content' ),
			),
			'public'        => true,
			'has_archive'   => false,
			'menu_icon'     => 'dashicons-groups',
			'menu_position' => 6,
			'supports'      => array( 'title', 'thumbnail' ),
			'show_in_rest'  => true,
			'rest_base'     => 'clientes',
			'rewrite'       => array( 'slug' => 'clientes' ),
		)
	);

	// ------------------------------------------------------------
	// 3. Testimonios (CPT: testimonio)
	// ------------------------------------------------------------
	register_post_type(
		'testimonio',
		array(
			'labels'        => array(
				'name'          => __( 'Testimonios', 'croilab-content' ),
				'singular_name' => __( 'Testimonio', 'croilab-content' ),
				'add_new_item'  => __( 'Añadir testimonio', 'croilab-content' ),
			),
			'public'        => true,
			'has_archive'   => false,
			'menu_icon'     => 'dashicons-format-quote',
			'menu_position' => 7,
			'supports'      => array( 'title' ),
			'show_in_rest'  => true,
			'rest_base'     => 'testimonios',
			'rewrite'       => array( 'slug' => 'testimonios' ),
		)
	);

	// ------------------------------------------------------------
	// 4. Servicios (CPT: servicio)
	// ------------------------------------------------------------
	register_post_type(
		'servicio',
		array(
			'labels'        => array(
				'name'          => __( 'Servicios', 'croilab-content' ),
				'singular_name' => __( 'Servicio', 'croilab-content' ),
				'add_new_item'  => __( 'Añadir servicio', 'croilab-content' ),
			),
			'public'        => true,
			'has_archive'   => false,
			'menu_icon'     => 'dashicons-admin-generic',
			'menu_position' => 4,
			'supports'      => array( 'title', 'editor', 'excerpt' ),
			'show_in_rest'  => true,
			'rest_base'     => 'servicios',
			'rewrite'       => array( 'slug' => 'servicios' ),
		)
	);

	// ------------------------------------------------------------
	// 5. Proyectos / portafolio (CPT: proyecto) — ya existente.
	//    Se re-registra para garantizar rest_base uniforme.
	// ------------------------------------------------------------
	register_post_type(
		'proyecto',
		array(
			'labels'        => array(
				'name'          => __( 'Proyectos', 'croilab-content' ),
				'singular_name' => __( 'Proyecto', 'croilab-content' ),
				'add_new_item'  => __( 'Añadir proyecto', 'croilab-content' ),
			),
			'public'        => true,
			'has_archive'   => false,
			'menu_icon'     => 'dashicons-portfolio',
			'menu_position' => 4,
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
			'show_in_rest'  => true,
			'rest_base'     => 'proyectos',
			'rewrite'       => array( 'slug' => 'proyectos' ),
		)
	);
}
add_action( 'init', 'croilab_content_register_post_types' );
