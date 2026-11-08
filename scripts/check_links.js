const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const broken = [];
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match hrefs
  const matches = [...content.matchAll(/href=["']([^"'#]+)(#[^"']*)?["']/gi)];
  matches.forEach(m => {
    let raw = m[1].trim();
    if (raw.startsWith('http://') || raw.startsWith('https://') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:') || raw.startsWith('${')) {
      return;
    }
    // Remove query params
    let clean = raw.split('?')[0];
    if (clean.startsWith('/')) clean = clean.substring(1);
    clean = decodeURIComponent(clean);
    if (!fs.existsSync(clean)) {
      broken.push({ file, raw, clean });
    }
  });
});

console.log('Real broken local links:', broken);
