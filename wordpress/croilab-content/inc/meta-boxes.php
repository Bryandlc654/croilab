<?php
/**
 * Definición declarativa de campos (metaboxes) para cada CPT.
 * Sin dependencias externas: se gestionan con metaboxes nativas de WordPress.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Croilab_Meta' ) ) {
	return;
}

// =====================================================================
//  CASOS DE ÉXITO (CPT: caso)
// =====================================================================
Croilab_Meta::add(
	'croilab_caso',
	array(
		'title'      => 'Datos del caso de éxito',
		'post_types' => array( 'caso' ),
		'prefix'     => 'croilab_caso_',
		'fields'     => array(
			array( 'name' => 'service',   'label' => 'Servicio',     'type' => 'select', 'choices' => array( 'seo' => 'SEO', 'ads' => 'Meta Ads', 'conversion' => 'Conversión' ) ),
			array( 'name' => 'client',    'label' => 'Cliente',      'type' => 'text' ),
			array( 'name' => 'industry',  'label' => 'Sector / Industria', 'type' => 'text' ),
			array( 'name' => 'result',    'label' => 'Resultado destacado (ej. +312%)', 'type' => 'text' ),
			array( 'name' => 'metric',    'label' => 'Métrica del resultado', 'type' => 'text' ),
			array( 'name' => 'description', 'label' => 'Descripción', 'type' => 'textarea', 'rows' => 4 ),
			array( 'name' => 'image',     'label' => 'Imagen',       'type' => 'image' ),
			array( 'name' => 'challenge', 'label' => 'El reto',      'type' => 'textarea', 'rows' => 5 ),
			array( 'name' => 'solution',  'label' => 'La solución',  'type' => 'textarea', 'rows' => 5 ),
			array( 'name' => 'problems',  'label' => 'Problemas',    'type' => 'repeater', 'button_label' => 'Añadir problema', 'sub_fields' => array( array( 'name' => 'problem', 'label' => 'Problema', 'type' => 'textarea' ) ) ),
			array( 'name' => 'actions',   'label' => 'Acciones (la ingeniería Croilab)', 'type' => 'repeater', 'button_label' => 'Añadir acción', 'sub_fields' => array( array( 'name' => 'action', 'label' => 'Acción', 'type' => 'textarea' ) ) ),
			array( 'name' => 'metrics',   'label' => 'Métricas de impacto (3)', 'type' => 'repeater', 'button_label' => 'Añadir métrica', 'sub_fields' => array(
				array( 'name' => 'value', 'label' => 'Valor', 'type' => 'text' ),
				array( 'name' => 'label', 'label' => 'Etiqueta', 'type' => 'text' ),
			) ),
			array( 'name' => 'process',   'label' => 'Proceso (4 pasos)', 'type' => 'repeater', 'button_label' => 'Añadir paso', 'sub_fields' => array(
				array( 'name' => 'title', 'label' => 'Título', 'type' => 'text' ),
				array( 'name' => 'desc',  'label' => 'Descripción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'testimonial', 'label' => 'Testimonio del cliente', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'quote',  'label' => 'Cita',     'type' => 'textarea' ),
				array( 'name' => 'author', 'label' => 'Autor',    'type' => 'text' ),
				array( 'name' => 'role',   'label' => 'Cargo',    'type' => 'text' ),
			) ),
		),
	)
);

// =====================================================================
//  CLIENTES / LOGOS (CPT: cliente)
// =====================================================================
Croilab_Meta::add(
	'croilab_cliente',
	array(
		'title'      => 'Datos del cliente',
		'post_types' => array( 'cliente' ),
		'prefix'     => 'croilab_cliente_',
		'fields'     => array(
			array( 'name' => 'logo',      'label' => 'Logo',       'type' => 'image' ),
			array( 'name' => 'logo_dark', 'label' => 'Logo (variante oscura, opcional)', 'type' => 'image' ),
			array( 'name' => 'url',       'label' => 'URL del sitio (opcional)', 'type' => 'url' ),
		),
	)
);

// =====================================================================
//  TESTIMONIOS (CPT: testimonio)
// =====================================================================
Croilab_Meta::add(
	'croilab_testimonio',
	array(
		'title'      => 'Datos del testimonio',
		'post_types' => array( 'testimonio' ),
		'prefix'     => 'croilab_testimonio_',
		'fields'     => array(
			array( 'name' => 'quote',  'label' => 'Cita',     'type' => 'textarea', 'rows' => 5 ),
			array( 'name' => 'author', 'label' => 'Autor',    'type' => 'text' ),
			array( 'name' => 'role',   'label' => 'Cargo / empresa', 'type' => 'text' ),
			array( 'name' => 'avatar', 'label' => 'Avatar (opcional)', 'type' => 'image' ),
		),
	)
);

// =====================================================================
//  SERVICIOS (CPT: servicio) — cards + páginas completas
// =====================================================================
Croilab_Meta::add(
	'croilab_servicio',
	array(
		'title'      => 'Contenido del servicio',
		'post_types' => array( 'servicio' ),
		'prefix'     => 'croilab_servicio_',
		'fields'     => array(
			array( 'name' => 'num',  'label' => 'Número (ej. 01)', 'type' => 'text' ),
			array( 'name' => 'slug', 'label' => 'Slug de acceso (seo, meta-ads, diseno-web, ecommerce, conversiones)', 'type' => 'text' ),
			array( 'name' => 'desc', 'label' => 'Descripción corta (card)', 'type' => 'textarea', 'rows' => 3 ),
			array( 'name' => 'icon', 'label' => 'SVG del icono (path)', 'type' => 'textarea', 'rows' => 3, 'instructions' => 'Contenido del <path> del SVG usado en la card de servicios.' ),

			array( 'name' => 'hero', 'label' => 'Hero', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'kicker',    'label' => 'Kicker',      'type' => 'text' ),
				array( 'name' => 'title',     'label' => 'Título',      'type' => 'text' ),
				array( 'name' => 'highlight', 'label' => 'Palabra destacada', 'type' => 'text' ),
				array( 'name' => 'intro',     'label' => 'Introducción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'hero_stats', 'label' => 'Hero · Stats', 'type' => 'repeater', 'button_label' => 'Añadir stat', 'sub_fields' => array(
				array( 'name' => 'value', 'label' => 'Valor',   'type' => 'text' ),
				array( 'name' => 'label', 'label' => 'Etiqueta', 'type' => 'text' ),
			) ),

			array( 'name' => 'problem', 'label' => 'Problema', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'title', 'label' => 'Título',       'type' => 'text' ),
				array( 'name' => 'intro', 'label' => 'Introducción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'problem_points', 'label' => 'Problema · Puntos', 'type' => 'repeater', 'button_label' => 'Añadir punto', 'sub_fields' => array(
				array( 'name' => 'point', 'label' => 'Punto', 'type' => 'textarea' ),
			) ),

			array( 'name' => 'solution', 'label' => 'Solución', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'title', 'label' => 'Título',       'type' => 'text' ),
				array( 'name' => 'intro', 'label' => 'Introducción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'solution_points', 'label' => 'Solución · Puntos', 'type' => 'repeater', 'button_label' => 'Añadir punto', 'sub_fields' => array(
				array( 'name' => 'title',       'label' => 'Título',       'type' => 'text' ),
				array( 'name' => 'description', 'label' => 'Descripción', 'type' => 'textarea' ),
			) ),

			array( 'name' => 'benefits', 'label' => 'Beneficios', 'type' => 'repeater', 'button_label' => 'Añadir beneficio', 'sub_fields' => array(
				array( 'name' => 'title',       'label' => 'Título',   'type' => 'text' ),
				array( 'name' => 'description', 'label' => 'Descripción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'process', 'label' => 'Proceso', 'type' => 'repeater', 'button_label' => 'Añadir paso', 'sub_fields' => array(
				array( 'name' => 'num',         'label' => 'Número', 'type' => 'text' ),
				array( 'name' => 'title',       'label' => 'Título', 'type' => 'text' ),
				array( 'name' => 'description', 'label' => 'Descripción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'features', 'label' => 'Características', 'type' => 'repeater', 'button_label' => 'Añadir característica', 'sub_fields' => array(
				array( 'name' => 'title',       'label' => 'Título',   'type' => 'text' ),
				array( 'name' => 'description', 'label' => 'Descripción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'faq', 'label' => 'FAQ', 'type' => 'repeater', 'button_label' => 'Añadir pregunta', 'sub_fields' => array(
				array( 'name' => 'question', 'label' => 'Pregunta', 'type' => 'text' ),
				array( 'name' => 'answer',   'label' => 'Respuesta', 'type' => 'textarea' ),
			) ),

			array( 'name' => 'cta', 'label' => 'CTA final', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'title',     'label' => 'Título',     'type' => 'text' ),
				array( 'name' => 'highlight', 'label' => 'Palabra destacada', 'type' => 'text' ),
				array( 'name' => 'subtitle',  'label' => 'Subtítulo',  'type' => 'textarea' ),
			) ),
			array( 'name' => 'related', 'label' => 'Proyectos relacionados (por título)', 'type' => 'repeater', 'button_label' => 'Añadir proyecto', 'sub_fields' => array(
				array( 'name' => 'project', 'label' => 'Título del proyecto', 'type' => 'text' ),
			) ),
			array( 'name' => 'seo', 'label' => 'SEO (fallback)', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'title',       'label' => 'Título SEO',      'type' => 'text' ),
				array( 'name' => 'description', 'label' => 'Descripción SEO', 'type' => 'textarea' ),
			) ),
		),
	)
);

// =====================================================================
//  PROYECTOS (CPT: proyecto) — portafolio
// =====================================================================
Croilab_Meta::add(
	'croilab_proyecto',
	array(
		'title'      => 'Detalle del proyecto',
		'post_types' => array( 'proyecto' ),
		'prefix'     => 'croilab_proyecto_',
		'fields'     => array(
			array( 'name' => 'enlace_proyecto', 'label' => 'Enlace del proyecto', 'type' => 'url', 'instructions' => 'Campo legacy ya usado por el frontend.' ),
			array( 'name' => 'imagen_url',      'label' => 'Imagen URL', 'type' => 'image', 'instructions' => 'Campo legacy ya usado por el frontend.' ),
			array( 'name' => 'category', 'label' => 'Categoría', 'type' => 'select', 'choices' => array(
				'ecommerce'   => 'Ecommerce',
				'landing-ads' => 'Landing + Ads',
				'seo'         => 'SEO',
				'saas'        => 'SaaS',
				'otro'        => 'Otro',
			) ),
			array( 'name' => 'metrics', 'label' => 'Métricas', 'type' => 'repeater', 'button_label' => 'Añadir métrica', 'sub_fields' => array(
				array( 'name' => 'value', 'label' => 'Valor',   'type' => 'text' ),
				array( 'name' => 'label', 'label' => 'Etiqueta', 'type' => 'text' ),
			) ),
			array( 'name' => 'problem', 'label' => 'Problema', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'title',  'label' => 'Título',    'type' => 'text' ),
				array( 'name' => 'points', 'label' => 'Puntos',    'type' => 'repeater', 'button_label' => 'Añadir punto', 'sub_fields' => array( array( 'name' => 'point', 'label' => 'Punto', 'type' => 'textarea' ) ) ),
			) ),
			array( 'name' => 'solution', 'label' => 'Solución', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'title',  'label' => 'Título',    'type' => 'text' ),
				array( 'name' => 'points', 'label' => 'Puntos',    'type' => 'repeater', 'button_label' => 'Añadir punto', 'sub_fields' => array( array( 'name' => 'point', 'label' => 'Punto', 'type' => 'textarea' ) ) ),
			) ),
			array( 'name' => 'process', 'label' => 'Proceso', 'type' => 'repeater', 'button_label' => 'Añadir paso', 'sub_fields' => array(
				array( 'name' => 'title', 'label' => 'Título',       'type' => 'text' ),
				array( 'name' => 'desc',  'label' => 'Descripción', 'type' => 'textarea' ),
			) ),
			array( 'name' => 'stack', 'label' => 'Stack de tecnologías', 'type' => 'repeater', 'button_label' => 'Añadir tecnología', 'sub_fields' => array(
				array( 'name' => 'name', 'label' => 'Nombre', 'type' => 'text' ),
				array( 'name' => 'logo', 'label' => 'Logo',    'type' => 'image' ),
			) ),
			array( 'name' => 'testimonial', 'label' => 'Testimonio', 'type' => 'group', 'sub_fields' => array(
				array( 'name' => 'quote',  'label' => 'Cita',  'type' => 'textarea' ),
				array( 'name' => 'author', 'label' => 'Autor', 'type' => 'text' ),
				array( 'name' => 'role',   'label' => 'Cargo', 'type' => 'text' ),
			) ),
			array( 'name' => 'gallery', 'label' => 'Galería', 'type' => 'textarea', 'rows' => 4, 'instructions' => 'Una URL de imagen por línea.' ),
		),
	)
);

// =====================================================================
//  CONFIGURACIÓN GLOBAL (Options)
// =====================================================================
Croilab_Meta::add_settings(
	'site',
	array(
		'name'              => array( 'type' => 'text', 'label' => 'Nombre' ),
		'slogan'            => array( 'type' => 'text', 'label' => 'Slogan' ),
		'description'       => array( 'type' => 'textarea', 'label' => 'Descripción' ),
		'url'               => array( 'type' => 'url', 'label' => 'URL' ),
		'email'             => array( 'type' => 'email', 'label' => 'Email' ),
		'whatsapp_number'   => array( 'type' => 'text', 'label' => 'Número WhatsApp' ),
		'whatsapp_message'  => array( 'type' => 'textarea', 'label' => 'Mensaje WhatsApp' ),
	)
);

Croilab_Meta::add_settings(
	'social',
	array(
		'items' => array(
			'label'    => 'Redes sociales',
			'type'     => 'repeater',
			'sub_fields' => array(
				array( 'name' => 'name', 'label' => 'Nombre', 'type' => 'text' ),
				array( 'name' => 'icon', 'label' => 'Icono (SVG path)', 'type' => 'textarea' ),
				array( 'name' => 'url',  'label' => 'URL', 'type' => 'url' ),
			),
		),
	)
);

Croilab_Meta::add_settings(
	'differentiators',
	array(
		'items' => array(
			'label'    => 'Diferenciales',
			'type'     => 'repeater',
			'sub_fields' => array(
				array( 'name' => 'num',         'label' => 'Número', 'type' => 'text' ),
				array( 'name' => 'title',       'label' => 'Título', 'type' => 'text' ),
				array( 'name' => 'description', 'label' => 'Descripción', 'type' => 'textarea' ),
			),
		),
	)
);

Croilab_Meta::add_settings(
	'stack',
	array(
		'items' => array(
			'label'    => 'Stack de tecnologías',
			'type'     => 'repeater',
			'sub_fields' => array(
				array( 'name' => 'name',  'label' => 'Nombre', 'type' => 'text' ),
				array( 'name' => 'short', 'label' => 'Subtítulo', 'type' => 'text' ),
				array( 'name' => 'icon',  'label' => 'Icono (SVG path)', 'type' => 'textarea' ),
			),
		),
	)
);
