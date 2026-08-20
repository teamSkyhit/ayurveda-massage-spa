import Link from 'next/link';
import styles from './services.module.css';
import { servicesData } from '../../data/servicesData';

export const metadata = {
  title: "Our Services | Ayurveda Massage & Spa",
  description: "Explore our range of authentic Ayurvedic massage therapies designed to relax your body, calm your mind, and restore your natural balance.",
};

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      
      {/* Decorative Background Leaves */}
      <img 
        src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-bg.png" 
        alt="decorative left leaf" 
        className={styles.bgLeafLeft} 
        loading="lazy" 
      />
      <img 
        src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-process-bg-01.webp" 
        alt="decorative right leaf" 
        className={styles.bgLeafRight} 
        loading="lazy" 
      />

      {/* Hero Banner Section */}
      <section 
        className={styles.heroSection}
        style={{
          '--bg-desktop': "url('https://ayurvedaspa.ph/images/ayurveda-spa-massage-service-page-desk-banner.webp')",
          '--bg-mobile': "url('https://ayurvedaspa.ph/images/ayurveda-spa-massage-service-page-mob-banner.webp')"
        }}
      >
        <div className={styles.heroContainer}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <span className={styles.current}>Services</span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <h2 className={styles.heroSubtitle}>Healing Touch. Naturally Yours.</h2>
            <div className={styles.heroDivider}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="divider" />
            </div>
            <p className={styles.heroDesc}>
              Our signature therapies are designed to relax your body, calm your mind, and restore your natural balance.
            </p>
            <div className={styles.heroButtons}>
              <Link href="https://wa.me/+639638649151" className={styles.btnPrimary}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Book Appointment
              </Link>
              <Link href="tel:+639638649151" className={styles.btnOutline}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar (overlapping) */}
      <section className={styles.featuresBar}>
        <div className={styles.featuresGrid}>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-ayurvedic-wisdom.png" alt="Ayurvedic Wisdom" />
            </div>
            <h3 className={styles.featureTitle}>Natural & Authentic</h3>
            <p className={styles.featureDesc}>Pure herbal oils and time-honored Ayurvedic techniques.</p>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-natural-safe.png" alt="Natural and Safe" />
            </div>
            <h3 className={styles.featureTitle}>Skilled Therapists</h3>
            <p className={styles.featureDesc}>Trained professionals dedicated to your well-being.</p>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-professional-care.png" alt="Professional Care" />
            </div>
            <h3 className={styles.featureTitle}>Personalized Care</h3>
            <p className={styles.featureDesc}>Every session is tailored to your body's unique needs.</p>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-peaceful-space.png" alt="Peaceful Space" />
            </div>
            <h3 className={styles.featureTitle}>Relax. Heal. Reconnect.</h3>
            <p className={styles.featureDesc}>A peaceful space to restore your inner balance.</p>
          </div>

        </div>
      </section>

      {/* Therapies Section */}
      <section className={styles.therapiesHeader}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C12 2 12 12 22 12C12 12 12 22 12 22C12 22 12 12 2 12C12 12 12 2 12 2Z"></path>
        </svg>
        <h2 className={styles.therapiesTitle}>Our Massage Therapies</h2>
        <p className={styles.therapiesSubtitle}>Choose the perfect therapy for your body and mind.</p>
      </section>

      <section className={styles.therapiesSection}>
        <div className={styles.therapiesGrid}>
          {servicesData.map((therapy, idx) => (
            <div className={styles.therapyCard} key={idx}>
              <div className={styles.therapyImage}>
                <img src={therapy.heroImage} alt={therapy.title} loading="lazy" />
                {/* <div className={styles.therapyIconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"></path>
                  </svg>
                </div> */}
              </div>
              <div className={styles.therapyContent}>
                <h3 className={styles.therapyTitle}>{therapy.title}</h3>
                <div className={styles.therapyMeta}>
                  <span>{therapy.duration.split(' ')[0]} mins</span>
                  <span>|</span>
                  <span className={styles.therapyPrice}>{therapy.priceRange.split(' ')[0]}</span>
                </div>
                <p className={styles.therapyDesc}>{therapy.aboutText.substring(0, 80)}...</p>
                <Link href={`/services/${therapy.slug}`} className={styles.therapyBtn}>
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
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
