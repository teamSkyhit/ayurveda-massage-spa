const fs = require('fs');

const pricing = {
  "Ayur Signature Massage": { price: "₱ 500", duration: "60 mins" },
  "Hawaiian Veda Massage": { price: "₱ 600", duration: "60 mins" },
  "Classic Swedish Massage": { price: "₱ 400", duration: "60 mins" },
  "Royal Thai Massage": { price: "₱ 450", duration: "60 mins" },
  "Deep Tissue Massage": { price: "₱ 450", duration: "60 mins" },
  "Lymphatic Massage": { price: "₱ 500", duration: "60 mins" },
  "Herbal Ayurvedic Massage": { price: "₱ 600", duration: "60 mins" },
  "Hot Stone Massage": { price: "₱ 700", duration: "75 mins" },
  "Cupping / Ventosa Massage": { price: "₱ 600", duration: "60 mins" },
  "Foot, Hand & Back Massage": { price: "₱ 400", duration: "60 mins" },
  "Home & Hotel Services": { price: "₱ 999", duration: "60 mins" }
};

let file = fs.readFileSync('src/data/servicesData.js', 'utf8');

// The easiest way is to match the entire options array and replace it based on the title.
// We can use a regex to find each service block, extract the title, and replace the options array.
file = file.replace(/title:\s*"([^"]+)",[\s\S]*?options:\s*\[[\s\S]*?\]/g, (match, title) => {
  const p = pricing[title];
  if (!p) return match; // Fallback

  const imgMatch = match.match(/heroImage:\s*"([^"]+)"/);
  const img = imgMatch ? imgMatch[1] : '';

  const replacement = `options: [
      {
        duration: "${p.duration} Session",
        price: "${p.price}",
        features: ["Full body massage", "Premium oils", "Hot towel wipe"],
        image: "${img}"
      }
    ]`;
  
  return match.replace(/options:\s*\[[\s\S]*?\]/, replacement);
});

fs.writeFileSync('src/data/servicesData.js', file);
console.log('Successfully updated to 1 option card!');
