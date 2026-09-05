const fs = require('fs');
const glob = require('glob');

const keywords = [
  'cdo massage', 'massage in cdo', 'massage spa cdo', 'massage spa in cdo', 'best massage in cdo',
  'affordable massage cdo', 'affordable massage cagayan de oro', 'cheap massage near me',
  'affordable spa cdo', 'massage under 500 cdo', '400 peso massage cdo', 'massage 400 cdo',
  'thai masssage', 'thai massage near me', 'thailand massage', 'thailand massage near me',
  'thai spa near me', 'thai massage spa near me', 'thai spa', 'full body thai massage near me',
  'home service massage cdo', 'massage home service cdo', 'massage at home cdo',
  'home massage cagayan de oro', 'hotel massage cdo', 'hotel massage cagayan de oro',
  'massage hotel cdo', 'home massage near me', 'hotel massage near me', 'spa near me',
  'body massage near me', 'thai massage near me', 'swedish massage near me',
  'deep tissue massage near me', 'ayurvedic massage near me', 'hot stone massage near me',
  'massage spa near me', 'deep tissue massage', 'a deep tissue massage',
  'deep deep tissue massage', 'deep tissue massage near me', 'deep massage',
  'deep tissue massage therapist near me'
];

let kIdx = 0;

function updateAltsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Replace alt="something" where something is not already in our list (to avoid double replacing if we run twice)
  content = content.replace(/alt="([^"]+)"/g, (match, p1) => {
    // Skip if it's already one of our keywords or if it's empty
    if (keywords.includes(p1) || p1 === '') return match;
    
    // We only replace if we still have keywords
    if (kIdx < keywords.length) {
      const newAlt = keywords[kIdx];
      kIdx++;
      changed = true;
      console.log(`Replaced "${p1}" with "${newAlt}" in ${filePath}`);
      return `alt="${newAlt}"`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

// glob all js files in src/app and src/components
const files = glob.sync('src/**/*.js', { absolute: true });
files.forEach(updateAltsInFile);

console.log(`Total replaced: ${kIdx}`);
