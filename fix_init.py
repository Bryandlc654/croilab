import re

files = [
    'seo.astro',
    'meta-ads.astro',
    'diseno-web.astro',
    'ecommerce.astro',
    'conversiones.astro'
]

for filename in files:
    filepath = f"src/pages/{filename}"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove the line: const finalTestimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials : ...;
    # 2. Append it just before the closing ---
    
    match = re.search(r'(const finalTestimonials = dynamicTestimonials.length > 0 \? dynamicTestimonials : \w+;)', content)
    if match:
        line_to_move = match.group(1)
        content = content.replace(line_to_move + '\n', '')
        content = content.replace(line_to_move, '')
        
        # Append to the end of frontmatter
        content = content.replace('\n---', f'\n{line_to_move}\n---', 1) # Only first occurrence (the end of frontmatter)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
print("Fixed initialization order!")
