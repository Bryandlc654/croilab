const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');
const indexHtmlPath = path.join(__dirname, 'index.html');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Manual targeted replaces to invert light theme to dark theme
  let newContent = content
    .replace(/bg-white(?!\/|\])/g, 'bg-[#111111]') // replace exact bg-white
    .replace(/border-black\/([0-9]+)/g, 'border-white/$1')
    .replace(/text-ink/g, 'text-white')
    .replace(/bg-\[\#f8fafc\]/g, 'bg-[#090909]')
    .replace(/bg-\[\#f3f3f1\]/g, 'bg-[#090909]')
    .replace(/text-black\/([0-9]+)/g, 'text-white/$1')
    .replace(/bg-black\/([0-9]+)/g, 'bg-white/$1')
    .replace(/group-hover:bg-white(?!\/)/g, 'group-hover:bg-[#090909]')
    .replace(/hover:bg-white(?!\/)/g, 'hover:bg-[#090909]');

  // Swap badges that are dark circles to white circles
  newContent = newContent.replace(/bg-black text-white/g, 'bg-white text-[#090909]');
  newContent = newContent.replace(/bg-black text-\[11px\] font-semibold text-white/g, 'bg-white text-[11px] font-semibold text-[#090909]');

  if (original !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
      processFile(fullPath);
    }
  }
}

walkDir(directoryPath);
processFile(indexHtmlPath);
console.log('Done');
