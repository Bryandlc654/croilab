import sys

with open('wordpress/croilab-content/inc/settings-page.php', 'r', encoding='utf-8') as f:
    content = f.read()

enqueue_script = """
function croilab_content_enqueue_media( $hook ) {
	if ( 'settings_page_croilab_content_render_options_page' !== $hook ) {
		return;
	}
	wp_enqueue_media();
}
add_action( 'admin_enqueue_scripts', 'croilab_content_enqueue_media' );
"""

if 'croilab_content_enqueue_media' not in content:
    # insert after the menu registration
    target = "add_action( 'admin_menu', 'croilab_content_add_options_page' );"
    if target in content:
        content = content.replace(target, target + "\n\n" + enqueue_script)
        with open('wordpress/croilab-content/inc/settings-page.php', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Success")
    else:
        print("Target not found")
else:
    print("Already there")
