import sys

with open('src/components/Header.astro', 'r', encoding='utf-8') as f:
    lines = f.readlines()

if "</div>" in lines[173]:
    lines.pop(173)

with open('src/components/Header.astro', 'w', encoding='utf-8') as f:
    f.writelines(lines)
