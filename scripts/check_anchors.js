const fs = require('fs');

console.log('=== CHECKING ALL ANCHOR HASHES ===');

const pages = {};
fs.readdirSync('.').filter(f => f.endsWith('.html')).forEach(f => {
  pages[f] = fs.readFileSync(f, 'utf8');
});

const brokenAnchors = [];

function checkAnchor(source, targetPage, hash) {
  if (!hash || hash === '#') return;
  const id = hash.replace(/^#/, '');
  const html = pages[targetPage];
  if (!html) {
    brokenAnchors.push({ source, targetPage, hash, error: 'Target page does not exist' });
    return;
  }
  // Check if id or name exists
  const hasId = html.includes(`id="${id}"`) || html.includes(`id='${id}'`) || html.includes(`name="${id}"`) || html.includes(`name='${id}'`);
  if (!hasId) {
    brokenAnchors.push({ source, targetPage, hash, error: `id="${id}" not found in ${targetPage}` });
  }
}

// 1. Check all HTML files
Object.entries(pages).forEach(([file, content]) => {
  const matches = [...content.matchAll(/href=["']([^"'#]*)#([^"']+)["']/g)];
  matches.forEach(m => {
    let targetPage = m[1].trim() || file;
    if (targetPage.startsWith('/')) targetPage = targetPage.slice(1);
    if (!targetPage.endsWith('.html')) targetPage = file;
    const hash = '#' + m[2].trim();
    checkAnchor(file, targetPage, hash);
  });
});

// 2. Check search-modal.js
const searchJs = fs.readFileSync('public/js/search-modal.js', 'utf8');
const searchMatches = [...searchJs.matchAll(/href["']?\s*:\s*["']([^"'#]+)#([^"']+)["']/g)];
searchMatches.forEach(m => {
  let targetPage = m[1].trim();
  if (targetPage.startsWith('/')) targetPage = targetPage.slice(1);
  const hash = '#' + m[2].trim();
  checkAnchor('search-modal.js', targetPage, hash);
});

console.log('Total broken anchors:', brokenAnchors.length);
if (brokenAnchors.length > 0) {
  console.log(brokenAnchors);
} else {
  console.log('All anchor hashes are valid and exist in target files!');
}
