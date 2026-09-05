const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let count = 0;

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.json')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace any leftover &w=...&q=... from the image URLs
    const regex = /(https?:\/\/[^"']+\.(?:png|webp|jpg|jpeg))&w=\d+(?:&q=\d+)?/g;
    
    if (regex.test(content)) {
      const newContent = content.replace(regex, '$1');
      fs.writeFileSync(filePath, newContent, 'utf8');
      count++;
      console.log(`Fixed leftovers in: ${filePath}`);
    }
  }
});

console.log(`Total files fixed: ${count}`);
