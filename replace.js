const fs = require('fs');
const path = require('path');

const map = {
  '\\[#2E7D32\\]': 'brand-primary',
  '\\[#81C784\\]': 'brand-light',
  '\\[#FAF9F6\\]': 'brand-bg',
  '\\[#F1F8E9\\]': 'brand-surface',
  '\\[#F59E0B\\]': 'brand-amber',
};

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

walkSync('src', function(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const [key, value] of Object.entries(map)) {
    const regex = new RegExp(key, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, value);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
});
