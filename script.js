const fs = require('fs');
const file = fs.readFileSync('src/data/servicesData.js', 'utf8');

const updated = file.replace(/options:\s*\[\]/g, (match, offset, str) => {
  const textBefore = str.substring(0, offset);
  const priceMatch = textBefore.match(/priceRange:\s*"([^"]+)"/);
  const durationMatch = textBefore.match(/duration:\s*"([^"]+)"/);
  const imgMatch = textBefore.match(/heroImage:\s*"([^"]+)"/);
  const aboutImgMatch = textBefore.match(/aboutImage:\s*"([^"]+)"/);
  
  const price = priceMatch ? priceMatch[1] : '₱500';
  const duration = durationMatch ? durationMatch[1] : '60 mins';
  const img1 = imgMatch ? imgMatch[1] : 'https://ayurvedaspa.ph/images/signature-ayur-massage-service.webp';
  const img2 = aboutImgMatch ? aboutImgMatch[1] : 'https://ayurvedaspa.ph/images/massage-spa-cdo.webp';
  
  let priceVal = parseInt(price.replace('₱', ''));
  if (isNaN(priceVal)) priceVal = 500;
  
  let extendedDuration = '90 mins';
  if (duration === '75 mins') extendedDuration = '90 mins';
  
  let extPrice = Math.round((priceVal * 1.5) / 50) * 50;
  
  return `options: [
      {
        duration: "${duration} Session",
        price: "₱${priceVal}",
        features: ["Full body massage", "Premium oils", "Hot towel wipe"],
        image: "${img1}"
      },
      {
        duration: "${extendedDuration} Session",
        price: "₱${extPrice}",
        features: ["Extended full body massage", "Targeted focus areas", "Premium oils"],
        image: "${img2}"
      }
    ]`;
});

fs.writeFileSync('src/data/servicesData.js', updated);
console.log('Successfully updated options!');
