import sys

with open('wordpress/croilab-content/inc/meta-framework.php', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to move the add_action('rest_api_init', ...) OUT of register_settings()
# and put it into init()

rest_api_block = """
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
"""

# 1. Remove it from register_settings()
content = content.replace(rest_api_block, "")

# 2. Add it to init()
target_init = "add_action( 'admin_init', array( __CLASS__, 'register_settings' ) );"
if target_init in content:
    content = content.replace(target_init, target_init + "\n" + rest_api_block)
    with open('wordpress/croilab-content/inc/meta-framework.php', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Target not found")
