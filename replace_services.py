import re

with open('src/components/Services.astro', 'r', encoding='utf-8') as f:
    content = f.read()

cards = re.findall(r'(<!-- 0\d: .*? -->\s*<a .*?</a>)', content, re.DOTALL)

mockups = {}
slugs = ['seo', 'meta-ads', 'diseno-web', 'ecommerce', 'conversiones']
for i, card in enumerate(cards):
    mockup2 = re.search(r'(<!-- MOCKUP: .*?)(?=\s*<div class="relative z-10)', card, re.DOTALL)
    if mockup2:
        mockups[slugs[i]] = mockup2.group(1).strip()

new_grid = '''
    <!-- BENTO GRID DINÁMICO -->
    <div class="grid w-full grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
      {services.map((s, idx) => (
        <a href={/} class={eveal-up group relative overflow-hidden rounded-3xl border border-black/10 transition duration-500 hover:border-black/20 p-8 lg:p-12 flex flex-col justify-between } data-speed="0.03" data-spotlight>
          <div class="spotlight-glow"></div>
          <div class="absolute inset-0 bg-black/5 backdrop-blur-md"></div>
          <div class="absolute -inset-px opacity-0 transition duration-700 group-hover:opacity-100 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
          <span class="absolute -right-4 -bottom-8 text-[clamp(120px,15vw,250px)] font-bold leading-none tracking-tighter text-black/[0.02] transition duration-700 group-hover:text-black/[0.04] group-hover:scale-105 pointer-events-none select-none z-0">{s.num}</span>
          
          {s.slug === 'seo' && (
            <Fragment set:html={''' + mockups['seo'].replace('', '\\') + '''} />
          )}
          {s.slug === 'meta-ads' && (
            <Fragment set:html={''' + mockups['meta-ads'].replace('', '\\') + '''} />
          )}
          {s.slug === 'diseno-web' && (
            <Fragment set:html={''' + mockups['diseno-web'].replace('', '\\') + '''} />
          )}
          {s.slug === 'ecommerce' && (
            <Fragment set:html={''' + mockups['ecommerce'].replace('', '\\') + '''} />
          )}
          {s.slug === 'conversiones' && (
            <Fragment set:html={''' + mockups['conversiones'].replace('', '\\') + '''} />
          )}

          <div class="relative z-10 flex flex-col h-full justify-between gap-12">
            <div class="flex items-start justify-between">
              <div class="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-xl transition duration-500 group-hover:bg-black/10 group-hover:text-black" set:html={s.icon}>
              </div>
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 border border-black/10 text-sm text-black opacity-0 -translate-x-4 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-black/10 group-hover:text-black">→</span>
            </div>
            <div>
              <span class="text-[10px] font-medium tracking-[.2em] text-blue-300/50 mb-4 block uppercase">{s.num} — Disciplina</span>
              <h3 class="text-3xl lg:text-4xl font-semibold text-black mb-4 transition duration-500 group-hover:translate-x-2">{s.name}</h3>
              <p class="text-[15px] leading-relaxed text-black/50 max-w-md">{s.desc}</p>
              {s.features && s.features.length > 0 && (
                <div class="flex flex-wrap gap-2 mt-5">
                  {s.features.map((f) => (
                    <span class="px-2.5 py-1 text-[10px] font-semibold text-black/60 bg-black/5 border border-black/10 rounded-full transition-colors group-hover:bg-black/10 group-hover:text-black/90">{f.title}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
'''

pattern = r'<!-- BENTO GRID -->\s*<div class="grid w-full grid-cols-1 md:grid-cols-3 gap-6 auto-rows-\[minmax\(300px,auto\)\]">.*?</div>\s*<!-- CUSTOM ANIMATION STYLE FOR MOCKUPS -->'

def replacer(match):
    return new_grid + '\n\n    <!-- CUSTOM ANIMATION STYLE FOR MOCKUPS -->'

new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open('src/components/Services.astro', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced grid!")
