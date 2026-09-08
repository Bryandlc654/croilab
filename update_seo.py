import re

with open('src/pages/seo.astro', 'r', encoding='utf-8') as f:
    content = f.read()

frontmatter_addition = """
import { getWpServiceBySlug, getWpTestimonials } from '../lib/wp';

let serviceData: any = null;
let dynamicTestimonials: any[] = [];
let heroBg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";

try {
  const service = await getWpServiceBySlug('seo');
  if (service) {
    serviceData = service.croilab_servicio;
    if (service._embedded?.['wp:featuredmedia']) {
      heroBg = service._embedded['wp:featuredmedia'][0].source_url;
    }
  }

  const testims = await getWpTestimonials({ per_page: '100' });
  dynamicTestimonials = testims.items
    .filter((t: any) => t.croilab_testimonio?.related_service === 'seo')
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

const finalTestimonials = dynamicTestimonials.length > 0 ? dynamicTestimonials : seoTestimonials;
"""

# Replace frontmatter
content = content.replace("import ServiceHub from '../components/ServiceHub.astro';", "import ServiceHub from '../components/ServiceHub.astro';\n" + frontmatter_addition)

# Replace testimonials prop
content = content.replace("testimonials={seoTestimonials}", "testimonials={finalTestimonials}")

# Replace hero background
content = content.replace('src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"', 'src={heroBg}')

# Replace Hero Hook
# <h1 class="gsap-title text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-tight text-white mb-8" data-custom-speed="0.8">
#   Tu competencia te está <br/>
#   <span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">robando ventas.</span>
# </h1>
hero_h1_old = """<h1 class="gsap-title text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-tight text-white mb-8" data-custom-speed="0.8">
            Tu competencia te est <br/>
            <span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">robando ventas.</span>
          </h1>"""
hero_h1_new = """<h1 class="gsap-title text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.85] tracking-tight text-white mb-8" data-custom-speed="0.8">
            {serviceData?.hero?.title || "Tu competencia te está"} <br/>
            <span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{serviceData?.hero?.highlight || "robando ventas."}</span>
          </h1>"""
content = content.replace(hero_h1_old.encode('latin1').decode('utf-8', 'ignore'), hero_h1_new)

# Subtitle
subtitle_old = """<p class="text-lg md:text-xl leading-relaxed text-white/60 mb-12 max-w-2xl">
            Tener una pgina web bonita que nadie visita es como tener una tienda en el desierto. 
            Construimos sistemas de adquisicin orgnica para que domines tu nicho de mercado.
          </p>"""
subtitle_new = """<p class="text-lg md:text-xl leading-relaxed text-white/60 mb-12 max-w-2xl">
            {serviceData?.hero?.intro || "Tener una página web bonita que nadie visita es como tener una tienda en el desierto. Construimos sistemas de adquisición orgánica para que domines tu nicho de mercado."}
          </p>"""
content = content.replace(subtitle_old.encode('latin1').decode('utf-8', 'ignore'), subtitle_new)

with open('src/pages/seo.astro', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated seo.astro")
