const fs = require('fs');
let content = fs.readFileSync('src/data/servicesData.js', 'utf8');

const updates = {
  'Ayur Signature Massage': {
    slug: 'ayur-signature-massage',
    metaTitle: 'Ayur Signature Massage in Cagayan de Oro',
    metaDesc: 'Experience Ayur Signature Massage in Cagayan de Oro, combining Swedish and Thai massage techniques with full-body stretching.'
  },
  'Hawaiian Veda Massage': {
    slug: 'hawaiian-veda-massage',
    metaTitle: 'Hawaiian Veda Massage in Cagayan de Oro',
    metaDesc: 'Enjoy a 60-minute Hawaiian Veda Massage in Cagayan de Oro at Ayurveda Massage & Spa. Book your treatment today.'
  },
  'Classic Swedish Massage': {
    slug: 'swedish-massage',
    metaTitle: 'Swedish Massage in Cagayan de Oro | ₱400',
    metaDesc: 'Enjoy a 60-minute Classic Swedish Massage in Cagayan de Oro for ₱400 at Ayurveda Massage & Spa. Book your treatment today.'
  },
  'Royal Thai Massage': {
    slug: 'thai-massage',
    metaTitle: 'Thai Massage in Cagayan de Oro | ₱450',
    metaDesc: 'Experience Royal Thai Massage in Cagayan de Oro for ₱450. Enjoy a 60-minute treatment at Ayurveda Massage & Spa.'
  },
  'Deep Tissue Massage': {
    slug: 'deep-tissue-massage',
    metaTitle: 'Deep Tissue Massage in Cagayan de Oro | ₱450',
    metaDesc: 'Book a 60-minute Deep Tissue Massage in Cagayan de Oro for ₱450 at Ayurveda Massage & Spa.'
  },
  'Lymphatic Massage': {
    slug: 'lymphatic-massage',
    metaTitle: 'Lymphatic Massage in Cagayan de Oro | ₱500',
    metaDesc: 'Explore a 60-minute Lymphatic Massage in Cagayan de Oro for ₱500 at Ayurveda Massage & Spa. Book your treatment today.'
  },
  'Herbal Ayurvedic Massage': {
    slug: 'herbal-ayurvedic-massage',
    metaTitle: 'Herbal Ayurvedic Massage in Cagayan de Oro',
    metaDesc: 'Experience Herbal Ayurvedic Massage in Cagayan de Oro for ₱600 at Ayurveda Massage & Spa. Book your 60-minute treatment.'
  },
  'Hot Stone Massage': {
    slug: 'hot-stone-massage',
    metaTitle: 'Hot Stone Massage in Cagayan de Oro | ₱700',
    metaDesc: 'Enjoy a 75-minute Hot Stone Massage in Cagayan de Oro for ₱700 at Ayurveda Massage & Spa. Book your appointment today.'
  },
  'Cupping / Ventosa Massage': {
    slug: 'cupping-ventosa-massage',
    metaTitle: 'Cupping Massage in Cagayan de Oro | ₱600',
    metaDesc: 'Book Cupping or Ventosa Massage in Cagayan de Oro for ₱600 at Ayurveda Massage & Spa. 60-minute treatment available.'
  },
  'Foot, Hand & Back Massage': {
    slug: 'foot-hand-back-massage',
    metaTitle: 'Foot, Hand & Back Massage CDO | ₱400',
    metaDesc: 'Enjoy a 60-minute Foot, Hand & Back Massage in Cagayan de Oro for ₱400 at Ayurveda Massage & Spa.'
  },
  'Home & Hotel Services': {
    slug: 'home-hotel-massage',
    metaTitle: 'Home & Hotel Massage in Cagayan de Oro | ₱999',
    metaDesc: 'Book a 60-minute home or hotel massage in Cagayan de Oro for ₱999. Service is subject to availability and location.'
  }
};

for (const [title, data] of Object.entries(updates)) {
  // Replace title to include metadata properties
  const titleRegex = new RegExp(`(title:\\s*["']${title}["'],)`);
  content = content.replace(titleRegex, `$1\n    metaTitle: "${data.metaTitle}",\n    metaDesc: "${data.metaDesc}",`);
  
  // Replace slug
  const blockRegex = new RegExp(`slug:\\s*["'][^"']+["'],\\s*title:\\s*["']${title}["']`);
  content = content.replace(blockRegex, `slug: "${data.slug}",\n    title: "${title}"`);
}

fs.writeFileSync('src/data/servicesData.js', content);
console.log('Updated servicesData.js');
