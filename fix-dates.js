const fs = require('fs');
const path = require('path');
const root = process.cwd();
function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      walk(full);
    } else if (name.isFile() && full.endsWith('.md')) {
      let text = fs.readFileSync(full, 'utf8');
      const oldStr = 'date :  "`r Sys.Date()`"';
      const newStr = 'date: 2026-05-10';
      if (text.includes(oldStr)) {
        text = text.split(oldStr).join(newStr);
        fs.writeFileSync(full, text, 'utf8');
        console.log('Updated', full);
      }
    }
  }
}
walk(root);
