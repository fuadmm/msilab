const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('=== DEEP NAVIGATION & CONTENT CONSISTENCY AUDIT ===\n');

// 1. Check favicon files in public/
const publicFiles = fs.readdirSync('public');
console.log('Public folder items:', publicFiles);
if (fs.existsSync('public/All logos')) {
  console.log('Logos folder items:', fs.readdirSync('public/All logos'));
}

// 2. Check Nav links in each HTML header
console.log('\n--- NAV LINKS IN EACH HTML FILE ---');
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const headerMatch = c.match(/<header[\s\S]*?<\/header>/i);
  if (!headerMatch) {
    console.log(f, 'NO HEADER FOUND!');
    return;
  }
  const header = headerMatch[0];
  const links = [...header.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(f.padEnd(22), '->', links.filter(l => !l.startsWith('http') && !l.startsWith('#')));
});

// 3. Compare projects.html and research.html
console.log('\n--- COMPARING projects.html VS research.html ---');
const projHtml = fs.readFileSync('projects.html', 'utf8');
const resHtml = fs.readFileSync('research.html', 'utf8');
console.log('projects.html length:', projHtml.length, '| research.html length:', resHtml.length);
console.log('Are they identical?', projHtml === resHtml);

// 4. Check active links in navigation
console.log('\n--- ACTIVE CLASS IN NAV LINKS ---');
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const activeMatches = [...c.matchAll(/class=["'][^"']*active[^"']*["']/g)].map(m => m[0]);
  console.log(f.padEnd(22), 'Active class occurrences:', activeMatches.length);
});

// 5. Check Footer Consistency
console.log('\n--- FOOTER CONSISTENCY ---');
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const footerMatch = c.match(/<footer[\s\S]*?<\/footer>/i);
  if (!footerMatch) {
    console.log(f, 'NO FOOTER!');
  } else {
    const hasCopyright = footerMatch[0].includes('MSI Lab') || footerMatch[0].includes('University of Chittagong');
    const hasAddress = footerMatch[0].includes('Chittagong');
    console.log(f.padEnd(22), 'Footer length:', footerMatch[0].length, '| hasCopyright:', hasCopyright, '| hasAddress:', hasAddress);
  }
});

// 6. Check Search Modal Data
console.log('\n--- SEARCH MODAL DATA AUDIT ---');
const searchJs = fs.readFileSync('public/js/search-modal.js', 'utf8');
console.log('search-modal.js size:', searchJs.length);
// Extract search database entries
const searchEntriesMatch = searchJs.match(/const searchDatabase\s*=\s*(\[[\s\S]*?\]);/);
if (searchEntriesMatch) {
  try {
    const fn = new Function('return ' + searchEntriesMatch[1]);
    const db = fn();
    console.log('Search database items count:', db.length);
    const types = {};
    db.forEach(item => {
      types[item.type] = (types[item.type] || 0) + 1;
    });
    console.log('Search database entry types:', types);
  } catch(e) {
    console.error('Error parsing searchDatabase:', e.message);
  }
}
