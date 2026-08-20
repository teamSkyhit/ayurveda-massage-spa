import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
  title: 'About Ayurveda Massage & Spa in Cagayan de Oro',
  description: 'Learn about Ayurveda Massage & Spa in Cagayan de Oro and our range of relaxing massage and wellness experiences.',
};

export default function AboutUs() {
  return (
    <div className={styles.aboutPage}>
      
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
          '--bg-desktop': "url('https://ayurvedaspa.ph/images/ayurveda-spa-massage-aboutus-desk-banner.webp')",
          '--bg-mobile': "url('https://ayurvedaspa.ph/images/ayurveda-spa-massage-aboutus-mob-banner.webp')"
        }}
      >
        <div className={styles.heroContainer}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <span className={styles.current}>About Us</span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              About Ayurveda<br />
              <span>Massage & Spa</span>
            </h1>
            <div className={styles.heroDivider}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="divider" />
            </div>
            <p className={styles.heroDesc}>
              At Ayurveda Massage & Spa, we bring the timeless wisdom of Ayurveda into a modern, tranquil space. Our mission is simple – to help you relax, heal, and reconnect with your best self.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyLeft}>
          <img src="https://ayurvedaspa.ph/images/cdo-massage.webp" alt="Spa Reception" />
        </div>
        <div className={styles.storyRight}>
          <p className={styles.subtitle}>OUR STORY</p>
          <h2 className={styles.title}>A Journey of Healing and Harmony</h2>
          <p className={styles.desc}>
            Our journey began with a simple belief - true wellness comes from balance. Inspired by ancient Ayurvedic traditions and guided by professional care, we created a sanctuary where every detail is designed for your comfort.
          </p>
          <p className={styles.desc}>
            From carefully selected herbal oils to a peaceful environment, we offer more than just a massage - we offer a healing experience.
          </p>
          <div className={styles.signature}>Your wellness, our passion.</div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-ayurvedic-wisdom.png" alt="Ayurvedic Wisdom" />
            </div>
            <h3 className={styles.featureTitle}>Ayurvedic Wisdom</h3>
            <p className={styles.featureDesc}>Rooted in ancient healing practices for natural wellness.</p>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-natural-safe.png" alt="Natural & Safe" />
            </div>
            <h3 className={styles.featureTitle}>Natural & Safe</h3>
            <p className={styles.featureDesc}>We use natural herbal oils that nourish and revitalize your body.</p>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-professional-care.png" alt="Professional Care" />
            </div>
            <h3 className={styles.featureTitle}>Professional Care</h3>
            <p className={styles.featureDesc}>Skilled and trained therapists dedicated to your comfort.</p>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-peaceful-space.png" alt="Peaceful Space" />
            </div>
            <h3 className={styles.featureTitle}>Peaceful Space</h3>
            <p className={styles.featureDesc}>A calm and private environment to relax, renew, and recharge.</p>
          </div>

        </div>
      </section>

      {/* Environment Section */}
      <section className={styles.environmentSection}>
        <div className={styles.envLeft}>
          <img src="https://ayurvedaspa.ph/images/massage-spa-cdo.webp" alt="Massage Room" />
        </div>
        <div className={styles.envRight}>
          <p className={styles.subtitle}>OUR ENVIRONMENT</p>
          <h2 className={styles.title}>Designed for Your Well-being</h2>
          <p className={styles.desc}>
            Every corner of our spa is thoughtfully designed to help you slow down, breathe deeply, and enjoy a sense of total relaxation.
          </p>
          <ul className={styles.envList}>
            <li>
              <div className={styles.envListIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              </div>
              Clean, hygienic and comfortable rooms
            </li>
            <li>
              <div className={styles.envListIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              </div>
              Soothing ambiance with soft music and aroma
            </li>
            <li>
              <div className={styles.envListIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
              </div>
              Private space for your complete relaxation
            </li>
          </ul>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>100+</h3>
            <p className={styles.statLabel}>Treatments per month</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>12</h3>
            <p className={styles.statLabel}>Number of practitioners</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>10+</h3>
            <p className={styles.statLabel}>Total years of experience</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>5</h3>
            <p className={styles.statLabel}>Treatment rooms</p>
          </div>
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
