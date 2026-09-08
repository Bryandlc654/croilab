import sys

with open('src/components/Header.astro', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(25, 45):
    if i < len(lines):
        line = lines[i]
        if "<div" in line or "</div" in line or "<header" in line:
            print(f"{i+1}: {line.strip()}")
