const fs = require('fs');
const path = require('path');
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(html|gohtml|md)$/.test(entry.name)) {
      let text = fs.readFileSync(full, 'utf8');
      if (text.includes('.Site.IsMultiLingual')) {
        const newText = text.split('.Site.IsMultiLingual').join('hugo.IsMultilingual');
        fs.writeFileSync(full, newText, 'utf8');
        console.log('Updated', full);
      }
    }
  }
}
walk(process.cwd());
