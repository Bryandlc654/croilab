import re

with open('src/pages/proyectos.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# I want to replace the manual fetch with getWpProjects
print(content[:500])
