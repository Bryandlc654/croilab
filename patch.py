import re
with open('wordpress/croilab-content/inc/settings-page.php', 'r', encoding='utf-8') as f:
    content = f.read()

php_replace = r'''if ( 'textarea' === ['type'] ) {
														echo '<textarea name="' . esc_attr(  ) . '" rows="2" style="width:100%;">' . esc_textarea( (string)  ) . '</textarea>';
													} elseif ( 'image' === ['type'] ) {
														echo '<div style="display:flex;gap:10px;align-items:flex-start;">';
														echo '<div style="flex:1;"><input type="url" name="' . esc_attr(  ) . '" value="' . esc_url( (string)  ) . '" class="regular-text croilab-image-input" style="width:100%;" /></div>';
														echo '<div><button type="button" class="button croilab-image-btn" data-input="input[name=\'' . esc_attr(  ) . '\']">Seleccionar imagen</button></div>';
														echo '</div>';
														if (  ) {
															echo '<div style="margin-top:8px;"><img src="' . esc_url( (string)  ) . '" style="max-height:80px;max-width:100%;border:1px solid #ddd;border-radius:4px;padding:4px;background:#fff;" /></div>';
														}
													} elseif ( 'url' === ['type'] || 'email' === ['type'] ) {'''

# Find the exact if/elseif block in PHP and replace
content = re.sub(r'if \(\s*\'textarea\' === \\[\'type\'\]\s*\) \{.*?\} elseif \(\s*\'url\' === \\[\'type\'\] \|\| \'email\' === \\[\'type\'\]\s*\) \{', php_replace, content, flags=re.DOTALL)

with open('wordpress/croilab-content/inc/settings-page.php', 'w', encoding='utf-8') as f:
    f.write(content)
