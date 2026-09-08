import re

with open('src/components/Services.astro', 'r', encoding='utf-8') as f:
    content = f.read()

cards = re.findall(r'(<!-- 0\d: .*? -->\s*<a .*?</a>)', content, re.DOTALL)

for i, card in enumerate(cards):
    mockup = re.search(r'(<!-- MOCKUP: .*?</div>\s*</div>)', card, re.DOTALL)
    if mockup:
        print(f"Card {i+1} has mockup of length {len(mockup.group(1))}")
    else:
        # Some mockups might be just a single div
        mockup2 = re.search(r'(<!-- MOCKUP: .*?)(?=\s*<div class="relative z-10)', card, re.DOTALL)
        if mockup2:
             print(f"Card {i+1} has mockup of length {len(mockup2.group(1))}")
        else:
             print(f"Card {i+1} no mockup found")

