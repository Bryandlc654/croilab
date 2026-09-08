import sys

with open('astro.config.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("import vercel from '@astrojs/vercel/serverless';", "import vercel from '@astrojs/vercel';")

with open('astro.config.mjs', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated astro.config.mjs import")
