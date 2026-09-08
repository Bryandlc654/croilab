import sys

with open('astro.config.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
import_statement = "import vercel from '@astrojs/vercel/serverless';\n"
content = content.replace("import tailwindcss from '@tailwindcss/vite';", "import tailwindcss from '@tailwindcss/vite';\n" + import_statement)

# Replace output: 'static'
content = content.replace("output: 'static',", "output: 'server',\n  adapter: vercel(),")

with open('astro.config.mjs', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated astro.config.mjs")
