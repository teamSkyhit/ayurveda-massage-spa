import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './service-details.module.css';
import Booking from '../../components/Booking';
import ServiceSeoAccordion from '../../components/ServiceSeoAccordion';
import { servicesData } from '../../data/servicesData';

// Generate static routes for all 11 services
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: service.metaTitle || `${service.title} | Ayurveda Massage & Spa`,
    description: service.metaDesc || service.aboutText.substring(0, 160),
    keywords: service.metaKeywords || '',
  };
}

export default async function SingleServicePage({ params }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    notFound();
  }

  // Get up to 4 "Other Services" excluding the current one
  const otherServices = servicesData.filter(s => s.slug !== service.slug).slice(0, 4);

  return (
    <div className={styles.pageWrapper}>
      
      {/* Decorative Background Leaf */}
      <img 
        src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-bg.png" 
        alt="traditional-Thai-spa-treatment" 
        className={styles.bgLeafLeft} 
        loading="lazy" 
      />

      {/* Hero Banner Section */}
      <section 
        className={styles.heroSection}
        style={{
          '--bg-desktop': `url(${service.heroBannerDesk || service.heroImage})`,
          '--bg-mobile': `url(${service.heroBannerMob || service.heroImage})`
        }}
      >
        <div className={styles.heroContainer}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <Link href="/services">Services</Link>
            <span>&gt;</span>
            <span className={styles.current}>{service.title}</span>
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{service.heroTitle || service.title}</h1>
            <div className={styles.heroDivider}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="Thai-therapist-Cagayan-de-Oro" />
            </div>
            <p className={styles.heroSubtitle}>{service.subtitle}</p>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div className={styles.featureText}>
              <span className={styles.featureTitle}>Duration</span>
              <span className={styles.featureDesc}>{service.duration}</span>
            </div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
            </div>
            <div className={styles.featureText}>
              <span className={styles.featureTitle}>Price</span>
              <span className={styles.featureDesc}>{service.priceRange}</span>
            </div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div className={styles.featureText}>
              <span className={styles.featureTitle}>Best For</span>
              <span className={styles.featureDesc}>{service.bestFor}</span>
            </div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 1 8.3C19.2 15.6 15.5 20 11 20z"></path><path d="M11 20v-8"></path></svg>
            </div>
            <div className={styles.featureText}>
              <span className={styles.featureTitle}>Ambience</span>
              <span className={styles.featureDesc}>{service.ambience}</span>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutLeft}>
            <h2 className={styles.aboutTitle}>About the Treatment</h2>
            <div className={styles.aboutDivider}>
              <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="oriental-massage-near-me" style={{ width: '200px' }} />
            </div>
            <p className={styles.aboutDesc}>{service.aboutText}</p>
            <div className={styles.aboutSignature}>{service.signature}</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Benefits of {service.title}</h2>
        <div className={styles.sectionDivider}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C12 2 12 12 22 12C12 12 12 22 12 22C12 22 12 12 2 12C12 12 12 2 12 2Z"></path>
          </svg>
        </div>
        <div className={styles.benefitsGrid}>
          {service.benefits.map((benefit, idx) => {
            const icons = [
              "https://ayurvedaspa.ph/images/relaxation-massage-Cagayan-de-Oro.png",
              "https://ayurvedaspa.ph/images/massage-parlor-near-CDO.png",
              "https://ayurvedaspa.ph/images/top-rated-spa-Cagayan-de-Oro.png",
              "https://ayurvedaspa.ph/images/massage-therapist-CDO.png"
            ];
            return (
            <div className={styles.benefitItem} key={idx}>
              <div className={styles.benefitIcon}>
                <img src={icons[idx % 4]} alt={benefit.title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.desc}</p>
            </div>
            );
          })}
        </div>
      </section>

      {/* Massage Options */}
      <section className={styles.optionsSection}>
        <h2 className={styles.sectionTitle}>Massage Options</h2>
        <div className={styles.sectionDivider} style={{ textAlign: 'center' }}>
          <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="traditional-Filipino-hilot-massage" style={{ width: '200px', margin: '0 auto' }} />
        </div>
        
        <div className={styles.optionsGrid}>
          {service.options.map((option, idx) => (
            <div 
              className={styles.optionCard} 
              key={idx}
              style={{
                '--bg-desk': `url(https://ayurvedaspa.ph/images/staycation-massage-service-CDO.webp)`,
                '--bg-mob': `url(https://ayurvedaspa.ph/images/massage-for-hotel-guests-Cagayan-de-Oro.webp)`
              }}
            >
              <div className={styles.optionLeft}>
                <div className={styles.optionDuration}>{option.duration}</div>
                <div className={styles.optionPrice}>{option.price}</div>
                <ul className={styles.optionList}>
                  {option.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="https://wa.me/+639638649151" className={styles.btnPrimary} style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
                  Book Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services Grid */}
      <section className={styles.otherServicesSection}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Explore Other Therapies</h2>
        <div className={styles.sectionDivider} style={{ textAlign: 'center' }}>
          <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="hilot-massage-CDO" style={{ width: '200px', margin: '0 auto' }} />
        </div>
        
        <div className={styles.therapiesGrid}>
          {otherServices.map((other, idx) => (
            <div className={styles.therapyCard} key={idx}>
              <div className={styles.therapyImage}>
                <img src={other.heroImage} alt={other.title} loading="lazy" />
                {/* <div className={styles.therapyIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"></path>
                  </svg>
                </div> */}
              </div>
              <div className={styles.therapyContent}>
                <h3 className={styles.therapyTitle}>{other.title}</h3>
                <div className={styles.therapyMeta}>
                  <span>{other.duration.split(' ')[0]} mins</span>
                  <span>|</span>
                  <span style={{ color: 'var(--text-dark)', fontWeight: '700' }}>{other.priceRange.split(' ')[0]}</span>
                </div>
                <Link href={`/${other.slug}`} className={styles.therapyBtn}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standard Booking Component (Replaces generic CTA) */}
      <Booking />

      {service.accordion && (
        <ServiceSeoAccordion 
          title={service.accordion.title} 
          text={service.accordion.text} 
          benefits={service.accordion.benefits} 
        />
      )}

    </div>
  );
}
