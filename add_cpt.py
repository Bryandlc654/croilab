import sys

with open('wordpress/croilab-content/inc/custom-post-types.php', 'r', encoding='utf-8') as f:
    content = f.read()

leads_cpt = """
	register_post_type(
		'lead',
		array(
			'labels'              => array(
				'name'               => 'Leads (Contactos)',
				'singular_name'      => 'Lead',
				'add_new'            => 'Añadir nuevo',
				'add_new_item'       => 'Añadir nuevo Lead',
				'edit_item'          => 'Editar Lead',
				'new_item'           => 'Nuevo Lead',
				'view_item'          => 'Ver Lead',
				'menu_name'          => 'Leads',
			),
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_rest'        => true,
			'menu_position'       => 23,
			'menu_icon'           => 'dashicons-email-alt',
			'supports'            => array( 'title', 'custom-fields' ),
			'has_archive'         => false,
		)
	);
"""

content = content.replace("}\nadd_action( 'init', 'croilab_content_register_post_types' );", leads_cpt + "\n}\nadd_action( 'init', 'croilab_content_register_post_types' );")
with open('wordpress/croilab-content/inc/custom-post-types.php', 'w', encoding='utf-8') as f:
    f.write(content)
print("Success")
