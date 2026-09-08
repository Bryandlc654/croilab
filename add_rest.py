import sys

with open('wordpress/croilab-content/inc/rest-api.php', 'r', encoding='utf-8') as f:
    content = f.read()

lead_endpoint = """
/**
 * Endpoint para recibir leads desde el formulario del modal
 */
function croilab_content_register_lead_endpoint() {
	register_rest_route( 'croilab/v1', '/lead', array(
		'methods'             => 'POST',
		'callback'            => 'croilab_content_handle_lead_submission',
		'permission_callback' => '__return_true',
	) );
}
add_action( 'rest_api_init', 'croilab_content_register_lead_endpoint' );

function croilab_content_handle_lead_submission( WP_REST_Request $request ) {
	$params = $request->get_json_params();
	
	$nombre   = sanitize_text_field( $params['nombre'] ?? '' );
	$telefono = sanitize_text_field( $params['telefono'] ?? '' );
	$correo   = sanitize_email( $params['correo'] ?? '' );
	$servicio = sanitize_text_field( $params['servicio'] ?? '' );

	if ( empty( $nombre ) || empty( $correo ) ) {
		return new WP_Error( 'missing_fields', 'El nombre y correo son obligatorios.', array( 'status' => 400 ) );
	}

	$post_id = wp_insert_post( array(
		'post_type'    => 'lead',
		'post_title'   => $nombre . ' - ' . date('Y-m-d H:i'),
		'post_status'  => 'publish',
	) );

	if ( is_wp_error( $post_id ) ) {
		return new WP_Error( 'insert_failed', 'Error al guardar el lead.', array( 'status' => 500 ) );
	}

	update_post_meta( $post_id, 'lead_nombre', $nombre );
	update_post_meta( $post_id, 'lead_telefono', $telefono );
	update_post_meta( $post_id, 'lead_correo', $correo );
	update_post_meta( $post_id, 'lead_servicio', $servicio );

	return new WP_REST_Response( array( 'success' => true, 'message' => 'Lead guardado correctamente.' ), 200 );
}
"""

content += "\n" + lead_endpoint
with open('wordpress/croilab-content/inc/rest-api.php', 'w', encoding='utf-8') as f:
    f.write(content)
print("Added REST endpoint")
