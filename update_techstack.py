import sys

with open('src/components/TechStack.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# I will just use regex to replace the map block
import re

old_block = r'\{tool\.image \? \(\s*<img src=\{tool\.image\} alt=\{tool\.name\} class="h-8 w-8 object-contain transition-transform duration-500\s*group-hover:scale-110" loading="lazy" />\s*\) : \(\s*<svg[\s\S]*?</svg>\s*\)\}\s*<div class="text-left">\s*<div class="whitespace-nowrap text-\[15px\] font-bold text-white">\{tool\.name\}</div>\s*<div class="whitespace-nowrap text-\[10px\] uppercase tracking-\[\.18em\] text-white/40">\s*\{tool\.short\}\s*</div>\s*</div>'

new_block = """{tool.image ? (
              <img src={tool.image} alt={tool.name} class="h-10 w-auto max-w-[150px] object-contain transition-transform duration-500 group-hover:scale-110 brightness-0 invert opacity-80" loading="lazy" />
            ) : (
              <div class="flex items-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-8 w-8 shrink-0 text-white transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d={tool.icon} />
                </svg>
                <div class="text-left">
                  <div class="whitespace-nowrap text-[15px] font-bold text-white">{tool.name}</div>
                  <div class="whitespace-nowrap text-[10px] uppercase tracking-[.18em] text-white/40">
                    {tool.short}
                  </div>
                </div>
              </div>
            )}"""

content = re.sub(old_block, new_block, content)

# I should also replace the parent div class:
# `<div class="group mx-10 flex items-center gap-4 opacity-60 transition hover:opacity-100 sm:mx-14">`
# to not have `gap-4` because gap-4 is now inside the fallback div
content = content.replace('class="group mx-10 flex items-center gap-4 opacity-60 transition hover:opacity-100 sm:mx-14"', 'class="group mx-10 flex items-center justify-center opacity-60 transition hover:opacity-100 sm:mx-14"')

with open('src/components/TechStack.astro', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated TechStack.astro")
