import Link from 'next/link';
import styles from './contact.module.css';
import ContactForm from './ContactForm';

export const metadata = {
  title: "Contact Us | Ayurveda Massage & Spa",
  description: "Get in touch with Ayurveda Massage & Spa. We're here to help you relax, renew & rejuvenate. Book an appointment today.",
};

export default function ContactUsPage() {
  return (
    <div className={styles.contactPage}>
      
      {/* Decorative Background Leaf */}
      <img 
        src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-bg.png" 
        alt="decorative left leaf" 
        className={styles.bgLeafLeft} 
        loading="lazy" 
      />

      {/* Hero Banner Section */}
      <section 
        className={styles.heroSection}
        style={{
          '--bg-desktop': "url('https://ayurvedaspa.ph/images/ayurveda-spa-massage-contact-desk-banner.webp')",
          '--bg-mobile': "url('https://ayurvedaspa.ph/images/ayurveda-spa-massage-contact-mob-banner.webp')"
        }}
      >
        <div className={styles.heroContainer}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <span className={styles.current}>Contact Us</span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <div className={styles.heroDivider}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="divider" />
            </div>
            <p className={styles.heroSubtitle}>We're here to help you relax, renew & rejuvenate.</p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className={styles.mainContent}>
        
        {/* Left Column: Info Cards */}
        <div className={styles.infoColumn}>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoTitle}>Address</span>
              <a href="https://maps.app.goo.gl/VpmAnNj36gf2QcMH8" target="_blank" rel="noopener noreferrer" className={styles.infoDesc}>
                FJGV+993, Gaerlan St,<br/>Cagayan De Oro City,<br/>Misamis Oriental, Philippines
              </a>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoTitle}>Phone</span>
              <a href="tel:+639638649151" className={styles.infoDesc}>+63 963 864 9151</a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoTitle}>WhatsApp</span>
              <a href="https://wa.me/639638649151" target="_blank" rel="noopener noreferrer" className={styles.infoDesc}>+63 963 864 9151</a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoTitle}>Email</span>
              <a href="mailto:ayurvedaspacdo@gmail.com" className={styles.infoDesc}>ayurvedaspacdo@gmail.com</a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className={styles.infoText}>
              <span className={styles.infoTitle}>Opening Hours</span>
              <span className={styles.infoDesc}>11:00 AM &ndash; 3:00 AM</span>
            </div>
          </div>

        </div>

        {/* Right Column: Form */}
        <ContactForm />
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          {/* Interactive Google Map embed pointing to Cagayan de Oro */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.240932710234!2d124.6434375!3d8.475937499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff3c299251741%3A0xb814190f40bab755!2sAyurveda%20Massage%20and%20Spa%20CDO!5e0!3m2!1sen!2sin!4v1787204796164!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ayurveda Spa Location Map"
          ></iframe>
        </div>
        
        {/* Floating Overlay Card */}
        <div className={styles.mapOverlayCard}>
          <div className={styles.mapLogo}>
            <img src="https://ayurvedaspa.ph/images/AYURVEDHA-MASSAGE-SPA-LOGO-001.png" alt="Ayurveda Massage & Spa Logo" />
          </div>
          
          <div className={styles.mapAddressRow}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div className={styles.mapAddressText}>
              FJGV+993, Gaerlan St, Cagayan De Oro City, Misamis Oriental, Philippines
            </div>
          </div>
          
          <Link href="https://maps.app.goo.gl/VpmAnNj36gf2QcMH8" target="_blank" rel="noopener noreferrer" className={styles.btnDirections}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            GET DIRECTIONS
          </Link>
        </div>
      </section>

    </div>
  );
}
