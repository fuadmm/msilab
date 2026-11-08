const fs = require('fs');
const path = require('path');

function checkFileImages(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const imgRegex = /['"](\/?(public\/|All%20logos\/|All%20protocols\/|Publication%20images\/|facilities\/|projects\/|events\/|Seminar\/)[^'"\n\r\t]+?\.(png|jpg|jpeg|webp|svg))['"]/gi;
  let m;
  const missing = [];
  while ((m = imgRegex.exec(content)) !== null) {
    let raw = m[1];
    let decoded = decodeURIComponent(raw);
    let resolved = decoded;
    if (resolved.startsWith('/')) resolved = resolved.substring(1);
    if (!resolved.startsWith('public/')) resolved = 'public/' + resolved;
    if (!fs.existsSync(resolved)) {
      missing.push({ file: filePath, raw, resolved });
    }
  }
  return missing;
}

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const dataFiles = fs.readdirSync('src/data').map(f => path.join('src/data', f));

let allMissing = [];
[...htmlFiles, ...dataFiles].forEach(f => {
  allMissing = allMissing.concat(checkFileImages(f));
});

console.log('Total missing image references across HTML and src/data:', allMissing.length);
if (allMissing.length > 0) {
  console.log(allMissing);
} else {
  console.log('ALL images referenced in HTML and src/data exist on disk!');
}
