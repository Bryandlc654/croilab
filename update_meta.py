import re
import sys

with open('src/pages/meta-ads.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Frontmatter
frontmatter_addition = """
import { getWpServiceBySlug, getWpTestimonials } from '../lib/wp';

let serviceData: any = null;
let dynamicTestimonials: any[] = [];
let heroBg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";

try {
  const service = await getWpServiceBySlug('meta-ads');
  if (service) {
    serviceData = service.croilab_servicio;
    if (service._embedded?.['wp:featuredmedia']) {
      heroBg = service._embedded['wp:featuredmedia'][0].source_url;
    }
  }

  const testims = await getWpTestimonials({ per_page: '100' });
  dynamicTestimonials = testims.items
    .filter((t: any) => t.croilab_testimonio?.related_service === 'meta-ads')
    .map((t: any) => ({
      quote: t.croilab_testimonio?.quote || t.title?.rendered,
      name: t.croilab_testimonio?.author,
      role: t.croilab_testimonio?.role,
      rating: parseInt(t.croilab_testimonio?.stars || '5', 10),
      avatar: t.croilab_testimonio?.avatar
    }));
} catch (e) {
  console.error("Error fetching dynamic service data:", e);
}

const finalTestimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials : adsTestimonials;
"""
content = content.replace("import MarqueeTestimonials from '../components/MarqueeTestimonials.astro';", "import MarqueeTestimonials from '../components/MarqueeTestimonials.astro';\n" + frontmatter_addition)

# 2. Hero BG
content = content.replace('src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"', 'src={heroBg || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}')

# 3. Hero H1
hero_h1_old = """<h1 class="gsap-title max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-white mb-8" data-custom-speed="0.8">
              Tus campañas no necesitan más presupuesto. Necesitan <br/><span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white/80 to-white/30">estrategia.</span>
            </h1>"""
hero_h1_new = """<h1 class="gsap-title max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-white mb-8" data-custom-speed="0.8">
              {serviceData?.hero?.title || "Tus campañas no necesitan más presupuesto. Necesitan"} <br/><span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white/80 to-white/30">{serviceData?.hero?.highlight || "estrategia."}</span>
            </h1>"""
# Use re.sub to avoid encoding issues with special characters like 'ñ' and 'á'
# Actually, since we're using raw utf-8 strings, replace should work perfectly if we don't encode/decode.
# But let's use a robust replace
content = re.sub(r'<h1 class="gsap-title max-w-5xl.*?</h1>', hero_h1_new, content, flags=re.DOTALL, count=1)

# 4. Hero subtitle
subtitle_new = """<p class="max-w-xl text-[17px] md:text-[19px] leading-relaxed text-white/50 mb-12">
              {serviceData?.hero?.intro || "Dejemos de comprar clics vacíos. Construimos sistemas de adquisición rentables que convierten tráfico frío en facturación predecible. Menos excusas, más ROAS."}
            </p>"""
content = re.sub(r'<p class="max-w-xl text-\[17px\] md:text-\[19px\] leading-relaxed text-white/50 mb-12">.*?</p>', subtitle_new, content, flags=re.DOTALL, count=1)

# 5. Testimonials
content = content.replace("testimonials={adsTestimonials}", "testimonials={finalTestimonials}")

with open('src/pages/meta-ads.astro', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated meta-ads.astro")
