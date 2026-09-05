import Link from 'next/link';
import styles from './gallery.module.css';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: "Ayurveda Massage & Spa Gallery | Cagayan de Oro",
  description: "Explore photos of Ayurveda Massage & Spa in Cagayan de Oro, including our spa environment, treatments and facilities.",
};

export default function GalleryPage() {
  
  // 10 placeholder images representing the gallery grid items
  // I am inserting a specific string "QUOTE_BLOCK" in the array so we can render the dark green quote box in the middle of the masonry layout.
  const galleryItems = [
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-001.webp", alt: "budget-friendly-massage-CDO" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-002.webp", alt: "walk-in-massage-promo-CDO" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-003.webp", alt: "massage-package-deals-Cagayan-de-Oro" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-004.webp", alt: "student-discount-massage-CDO" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-005.webp", alt: "value-spa-treatment-near-me" },
    { type: 'quote' }, // The dark green quote block
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-006.webp", alt: "low-cost-body-massage-CDO" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-007.webp", alt: "Swedish-relaxation-massage-CDO" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-008.webp", alt: "signature-deep-tissue-treatment" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-009.webp", alt: "ayurvedic-body-treatment-near-me" },
    { type: 'image', src: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-010.webp", alt: "hot-stone-therapy-CDO" },
  ];

  return (
    <div className={styles.galleryPage}>
      
      {/* Decorative Background Leaf */}
      <img 
        src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-bg.png" 
        alt="deep-tissue-muscle-relief-CDO" 
        className={styles.bgLeafLeft} 
        loading="lazy" 
      />

      {/* Hero Banner Section */}
      <section 
        className={styles.heroSection}
        style={{
          '--bg-desktop': "url('https://ayurvedaspa.ph/images/hot-stone-therapy-CDO.webp')",
          '--bg-mobile': "url('https://ayurvedaspa.ph/images/ayurvedic-body-treatment-near-me.webp')"
        }}
      >
        <div className={styles.heroContainer}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <span className={styles.current}>Gallery</span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Gallery</h1>
            <div className={styles.heroDivider}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="sports-recovery-deep-tissue-massage" />
            </div>
            <p className={styles.heroSubtitle}>Moments of calm, care, and wellness.</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className={styles.gridSection}>
        <h2 className={styles.gridTitle}>Moments of Calm & Wellness</h2>
        
        <GalleryClient galleryItems={galleryItems} />
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaTitle}>Experience the True Essence<br />of Ayurveda</h2>
            <p className={styles.ctaDesc}>
              Let us take care of your body and mind.<br />
              Your journey to wellness begins here.
            </p>
          </div>
          <div className={styles.ctaRight}>
            <Link href="https://wa.me/+639638649151" className={styles.ctaBtnPrimary}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Book Appointment
            </Link>
            <Link href="https://wa.me/+639638649151" className={styles.ctaBtnOutline}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
