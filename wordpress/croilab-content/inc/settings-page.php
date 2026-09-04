<?php
/**
 * Página de administración de configuración global de Croilab.
 *
 * Renderiza los grupos registrados con `Croilab_Meta::add_settings()`
 * y guarda en la opción `croilab_options`.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registra la página en el menú.
 */
function croilab_content_add_options_page(): void {
	add_options_page(
		'Configuración Croilab',
		'Configuración Croilab',
		'manage_options',
		'croilab-settings',
		'croilab_content_render_options_page'
	);
}
add_action( 'admin_menu', 'croilab_content_add_options_page' );

/**
 * Render de la página de opciones.
 */
function croilab_content_render_options_page(): void {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$groups = Croilab_Meta::get_all_settings();
	$data   = get_option( 'croilab_options', array() );
	?>
	<div class="wrap">
		<h1>Configuración Croilab</h1>
		<p>Estos valores se exponen en <code>GET /wp-json/croilab/v1/settings</code> para el frontend Astro.</p>
		<form method="post" action="options.php">
			<?php settings_fields( 'croilab_options' ); ?>
			<?php foreach ( $groups as $group_key => $fields ) : ?>
				<?php $gv = isset( $data[ $group_key ] ) && is_array( $data[ $group_key ] ) ? $data[ $group_key ] : array(); ?>
				<h2 style="margin-top:24px;"><?php echo esc_html( ucfirst( str_replace( '_', ' ', $group_key ) ) ); ?></h2>
				<table class="form-table" role="presentation">
					<?php foreach ( $fields as $name => $spec ) : ?>
						<?php if ( 'items' === $name && 'repeater' === $spec['type'] ) : ?>
							<tr>
								<th scope="row"><?php echo esc_html( $spec['label'] ); ?></th>
								<td>
									<?php $items = isset( $gv['items'] ) && is_array( $gv['items'] ) ? $gv['items'] : array(); ?>
									<div class="croilab-settings-repeater" data-group="<?php echo esc_attr( $group_key ); ?>">
										<?php foreach ( $items as $i => $item ) : ?>
											<div class="croilab-settings-row" style="border:1px solid #ddd;border-radius:4px;padding:10px;margin-bottom:8px;background:#fafafa;">
												<?php foreach ( $spec['sub_fields'] as $sf ) : ?>
													<label style="font-size:12px;color:#666;display:block;margin-top:6px;"><?php echo esc_html( $sf['label'] ); ?></label>
													<?php
													$fname = "croilab_options[{$group_key}][items][{$i}][{$sf['name']}]";
													$fval  = isset( $item[ $sf['name'] ] ) ? $item[ $sf['name'] ] : '';
													if ( 'textarea' === $sf['type'] ) {
														echo '<textarea name="' . esc_attr( $fname ) . '" rows="2" style="width:100%;">' . esc_textarea( (string) $fval ) . '</textarea>';
													} elseif ( 'url' === $sf['type'] || 'email' === $sf['type'] ) {
														echo '<input type="' . esc_attr( $sf['type'] ) . '" name="' . esc_attr( $fname ) . '" value="' . esc_attr( (string) $fval ) . '" style="width:100%;" />';
													} else {
														echo '<input type="text" name="' . esc_attr( $fname ) . '" value="' . esc_attr( (string) $fval ) . '" style="width:100%;" />';
													}
													?>
												<?php endforeach; ?>
												<button type="button" class="button croilab-settings-remove" style="margin-top:8px;">Eliminar</button>
											</div>
										<?php endforeach; ?>
									</div>
									<button type="button" class="button croilab-settings-add" data-group="<?php echo esc_attr( $group_key ); ?>">Añadir</button>
									<input type="hidden" name="<?php echo esc_attr( "croilab_options[{$group_key}][__spec]" ); ?>" value="<?php echo esc_attr( wp_json_encode( $spec['sub_fields'] ) ); ?>" />
								</td>
							</tr>
						<?php else : ?>
							<tr>
								<th scope="row"><?php echo esc_html( $spec['label'] ); ?></th>
								<td>
									<?php
									$fname = "croilab_options[{$group_key}][{$name}]";
									$fval  = isset( $gv[ $name ] ) ? $gv[ $name ] : '';
									if ( 'textarea' === $spec['type'] ) {
										echo '<textarea name="' . esc_attr( $fname ) . '" rows="3" style="width:100%;">' . esc_textarea( (string) $fval ) . '</textarea>';
									} elseif ( 'url' === $spec['type'] || 'email' === $spec['type'] ) {
										echo '<input type="' . esc_attr( $spec['type'] ) . '" name="' . esc_attr( $fname ) . '" value="' . esc_attr( (string) $fval ) . '" style="width:100%;" />';
									} else {
										echo '<input type="text" name="' . esc_attr( $fname ) . '" value="' . esc_attr( (string) $fval ) . '" style="width:100%;" />';
									}
									?>
								</td>
							</tr>
						<?php endif; ?>
					<?php endforeach; ?>
				</table>
			<?php endforeach; ?>
			<?php submit_button(); ?>
		</form>
	</div>

	<script>
	jQuery(function ($) {
		function rowHtml(group, subfields) {
			var h = '';
			subfields.forEach(function (sf) {
				h += '<label style="font-size:12px;color:#666;display:block;margin-top:6px;">' + sf.label + '</label>';
				var fname = "croilab_options[" + group + "][items][{i}][" + sf.name + "]";
				if (sf.type === 'textarea') {
					h += '<textarea name="' + fname + '" rows="2" style="width:100%;"></textarea>';
				} else {
					var t = (sf.type === 'url' || sf.type === 'email') ? sf.type : 'text';
					h += '<input type="' + t + '" name="' + fname + '" style="width:100%;" />';
				}
			});
			return h;
		}

		$(document).on('click', '.croilab-settings-add', function () {
			var group = $(this).data('group');
			var spec = $('.croilab-settings-repeater[data-group="' + group + '"] + input').val();
			var subfields = JSON.parse(spec || '[]');
			var list = $('.croilab-settings-repeater[data-group="' + group + '"]');
			var idx = list.find('.croilab-settings-row').length;
			var html = rowHtml(group, subfields).split('{i}').join(idx);
			var row = $('<div class="croilab-settings-row"></div>')
				.css({ border: '1px solid #ddd', borderRadius: 4, padding: 10, marginBottom: 8, background: '#fafafa' })
				.html(html);
			row.append('<button type="button" class="button croilab-settings-remove" style="margin-top:8px;">Eliminar</button>');
			list.append(row);
		});

		$(document).on('click', '.croilab-settings-remove', function () {
			$(this).closest('.croilab-settings-row').remove();
		});
	});
	</script>
	<?php
}
