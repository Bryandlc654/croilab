import re

files = [
    ('diseno-web', 'src/pages/diseno-web.astro', 'webTestimonials'),
    ('ecommerce', 'src/pages/ecommerce.astro', 'ecomTestimonials'),
    ('conversiones', 'src/pages/conversiones.astro', 'croTestimonials')
]

for slug, path, testim_var in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    frontmatter_addition = f"""
import {{ getWpServiceBySlug, getWpTestimonials }} from '../lib/wp';

let serviceData: any = null;
let dynamicTestimonials: any[] = [];
let heroBg = "";

try {{
  const service = await getWpServiceBySlug('{slug}');
  if (service) {{
    serviceData = service.croilab_servicio;
    if (service._embedded?.['wp:featuredmedia']) {{
      heroBg = service._embedded['wp:featuredmedia'][0].source_url;
    }}
  }}

  const testims = await getWpTestimonials({{ per_page: '100' }});
  dynamicTestimonials = testims.items
    .filter((t: any) => t.croilab_testimonio?.related_service === '{slug}')
    .map((t: any) => ({{
      quote: t.croilab_testimonio?.quote || t.title?.rendered,
      name: t.croilab_testimonio?.author,
      role: t.croilab_testimonio?.role,
      rating: parseInt(t.croilab_testimonio?.stars || '5', 10),
      avatar: t.croilab_testimonio?.avatar
    }}));
}} catch (e) {{
  console.error("Error fetching dynamic service data:", e);
}}

const finalTestimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials : {testim_var};
"""
    content = content.replace("import MarqueeTestimonials from '../components/MarqueeTestimonials.astro';", "import MarqueeTestimonials from '../components/MarqueeTestimonials.astro';\n" + frontmatter_addition)
    
    # Hero BG replacement
    # They have unsplash images, let's find the first img in the hero
    content = re.sub(r'<img\s+src="https://images.unsplash.com/[^"]+"', r'<img src={heroBg || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"}', content, count=1)

    # Hero H1 and P
    # We will just wrap the inner text of the H1 and P with the dynamic variable, but since we don't know the exact text, we can use regex to extract it and use it as a fallback!
    
    match_h1 = re.search(r'(<h1[^>]*>)(.*?)(</h1>)', content, re.DOTALL)
    if match_h1:
        inner_h1 = match_h1.group(2)
        # We need to split inner_h1 into title and highlight (highlight is usually in a span)
        match_span = re.search(r'(.*)(<span[^>]*>.*?</span>)(.*)', inner_h1, re.DOTALL)
        if match_span:
            title_fallback = match_span.group(1).strip()
            span_full = match_span.group(2)
            span_inner = re.search(r'<span[^>]*>(.*?)</span>', span_full, re.DOTALL).group(1).strip()
            span_tag = re.search(r'<span[^>]*>', span_full).group(0)
            
            new_h1 = f"{match_h1.group(1)}\n  {{serviceData?.hero?.title || `{title_fallback}`}}\n  {span_tag}{{serviceData?.hero?.highlight || `{span_inner}`}}</span>\n{match_h1.group(3)}"
            content = content[:match_h1.start()] + new_h1 + content[match_h1.end():]

    match_p = re.search(r'(<p class="max-w-xl[^>]*>|<p class="text-lg md:text-xl[^>]*>|<p class="max-w-2xl[^>]*>)(.*?)(</p>)', content, re.DOTALL)
    if match_p:
        inner_p = match_p.group(2).strip()
        new_p = f"{match_p.group(1)}\n  {{serviceData?.hero?.intro || `{inner_p}`}}\n{match_p.group(3)}"
        content = content[:match_p.start()] + new_p + content[match_p.end():]
        
    content = content.replace(f"testimonials={{{testim_var}}}", "testimonials={finalTestimonials}")

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated all other service pages")
