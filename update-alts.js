const fs = require('fs');

const keywords = [
  // Group 1
  "massage-clinic-Cagayan-de-Oro",
  "CDO-wellness-spa",
  "relaxation-massage-Cagayan-de-Oro",
  "massage-parlor-near-CDO",
  "top-rated-spa-Cagayan-de-Oro",
  "massage-therapist-CDO",
  "wellness-center-near-me",
  "signature-massage-CDO",
  // Group 2
  "in-room-massage-service-CDO",
  "mobile-massage-therapist-Cagayan-de-Oro",
  "massage-delivery-service-near-me",
  "on-call-massage-CDO",
  "house-call-massage-therapist",
  "staycation-massage-service-CDO",
  "massage-for-hotel-guests-Cagayan-de-Oro",
  // Group 3
  "therapeutic-deep-tissue-massage",
  "deep-tissue-muscle-relief-CDO",
  "sports-recovery-deep-tissue-massage",
  "deep-tissue-massage-for-back-pain",
  "licensed-deep-tissue-therapist-Cagayan-de-Oro",
  // Group 4
  "authentic-Thai-massage-CDO",
  "traditional-Thai-spa-treatment",
  "Thai-therapist-Cagayan-de-Oro",
  "oriental-massage-near-me",
  "traditional-Filipino-hilot-massage",
  "hilot-massage-CDO",
  "combination-Thai-Swedish-massage",
  // Group 5
  "budget-friendly-massage-CDO",
  "walk-in-massage-promo-CDO",
  "massage-package-deals-Cagayan-de-Oro",
  "student-discount-massage-CDO",
  "value-spa-treatment-near-me",
  "low-cost-body-massage-CDO",
  // Group 6
  "Swedish-relaxation-massage-CDO",
  "signature-deep-tissue-treatment",
  "ayurvedic-body-treatment-near-me",
  "hot-stone-therapy-CDO",
  "couples-massage-Cagayan-de-Oro",
  "prenatal-massage-CDO",
  "reflexology-foot-treatment-near-me",
  "AYURVEDHA-MASSAGE-SPA-LOGO-001"
];

let kIndex = 0;

const files = [
  'src/app/about-us/page.js',
  'src/app/services/page.js',
  'src/app/gallery/page.js',
  'src/app/contact/page.js',
  'src/app/[slug]/page.js'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all literal alt="something" strings
    content = content.replace(/alt="([^"]+)"/g, (match, p1) => {
      // Don't replace if there are no more keywords
      if (kIndex >= keywords.length) {
        return match;
      }
      
      const nextKeyword = keywords[kIndex];
      kIndex++;
      
      return `alt="${nextKeyword}"`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

console.log(`Total alt tags replaced: ${kIndex}`);
