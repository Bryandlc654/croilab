import sys

with open('wordpress/croilab-content/inc/settings-page.php', 'r', encoding='utf-8') as f:
    content = f.read()

js_code = """
		$(document).on('click', '.croilab-image-btn', function(e) {
			e.preventDefault();
			var button = $(this);
			var inputSelector = button.data('input');
			var input = button.closest('.croilab-settings-row, tr').find(inputSelector);
			if (input.length === 0) {
				input = button.closest('div').prev('div').find('input');
			}
			
			var customUploader = wp.media({
				title: 'Seleccionar Imagen',
				button: { text: 'Usar esta imagen' },
				multiple: false
			}).on('select', function() {
				var attachment = customUploader.state().get('selection').first().toJSON();
				input.val(attachment.url);
				var imgPreview = button.closest('.croilab-settings-row').find('img');
				if (imgPreview.length) {
					imgPreview.attr('src', attachment.url);
				} else {
					button.closest('div').after('<div style="margin-top:8px;"><img src="' + attachment.url + '" style="max-height:80px;max-width:100%;border:1px solid #ddd;border-radius:4px;padding:4px;background:#fff;" /></div>');
				}
			}).open();
		});
"""

target = "$(document).on('click', '.croilab-settings-remove', function () {"
if target in content:
    content = content.replace(target, js_code + "\n\t\t" + target)
    with open('wordpress/croilab-content/inc/settings-page.php', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Success")
else:
    print("Target not found")
