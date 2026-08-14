import Link from 'next/link';
import styles from './styles.module.css';
import ReviewsCarousel from './ReviewsCarousel';
import BookingForm from './BookingForm';
import ServicesImageCarousel from './ServicesImageCarousel';
import LandingSeoAccordion from '../../components/LandingSeoAccordion';

export const metadata = {
  title: "Massage in Cagayan de Oro From ₱400 | Ayurveda Massage & Spa",
  description: "Book a massage in Cagayan de Oro from ₱400. Choose Swedish, Thai, Ayurvedic, deep tissue, hot stone and more at Ayurveda Massage & Spa.",
  keywords: "massage in cagayan de oro, massage cdo, massage spa cdo, massage spa in cagayan de oro, massage near me, swedish massage cagayan de oro, thai massage cagayan de oro, deep tissue massage cagayan de oro, ayurvedic massage cagayan de oro, hot stone massage cagayan de oro, home massage cagayan de oro, hotel massage cagayan de oro",
};

export default function FullBodyThaiMassageNearMe() {
  return (
    <main className="min-h-screen flex flex-col relative" style={{ backgroundColor: '#fbf9f4' }}>
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Massage in Cagayan de Oro</h1>
          <h2 className={styles.subtitle}>From ₱400</h2>
          
          <p className={styles.desc}>
            Relax, unwind and choose from a range of professional massage treatments in the heart of CDO.
          </p>
          
          <div className={styles.heroFeatures}>
            <div className={styles.heroFeatureItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              60-Minute Options
            </div>
            <div className={styles.heroFeatureItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"></path><path d="M12 22c-4.97 0-9-4.03-9-9 4.97 0 9 4.03 9 9z"></path><path d="M12 22V4"></path><path d="M12 4C7.03 4 3 8.03 3 13c4.97 0 9-4.03 9-9z"></path><path d="M12 4c4.97 0 9 4.03 9 9-4.97 0-9-4.03-9-9z"></path></svg>
              Multiple Treatments
            </div>
            <div className={styles.heroFeatureItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              Open Until 3 AM
            </div>
          </div>
          
          <div className={styles.heroButtons}>
            <a href="https://wa.link/xvmbyd" className={styles.btnSolid}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              BOOK YOUR MASSAGE
            </a>
            <a href="tel:+639638649151" className={styles.btnOutline}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              CALL NOW
            </a>
          </div>
          
          <p className={styles.heroAddress}>#45 Justo Gaerlan Street, Cagayan de Oro City</p>
        </div>
        
      </section>

      {/* 2. Features Banner */}
      <section className={styles.featuresBanner}>
        <div className={styles.featuresGrid}>
          
          <div className={styles.featureBox}>
            <div className={styles.featureBoxIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"></path><path d="M12 22c-4.97 0-9-4.03-9-9 4.97 0 9 4.03 9 9z"></path><path d="M12 22V4"></path><path d="M12 4C7.03 4 3 8.03 3 13c4.97 0 9-4.03 9-9z"></path><path d="M12 4c4.97 0 9 4.03 9 9-4.97 0-9-4.03-9-9z"></path></svg>
            </div>
            <div className={styles.featureBoxContent}>
              <h4>Multiple Massage Options</h4>
              <p>Swedish, Thai, Ayurvedic,<br/>Deep Tissue & more</p>
            </div>
          </div>
          
          <div className={styles.featureBox}>
            <div className={styles.featureBoxIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
            </div>
            <div className={styles.featureBoxContent}>
              <h4>Affordable Prices</h4>
              <p>Massage treatments<br/>start from ₱400</p>
            </div>
          </div>
          
          <div className={styles.featureBox}>
            <div className={styles.featureBoxIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className={styles.featureBoxContent}>
              <h4>Convenient Location</h4>
              <p>#45 Justo Gaerlan Street,<br/>Cagayan de Oro City</p>
            </div>
          </div>
          
          <div className={styles.featureBox}>
            <div className={styles.featureBoxIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div className={styles.featureBoxContent}>
              <h4>Open Until 3 AM</h4>
              <p>Flexible hours for your<br/>convenience</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className={styles.servicesSection}>
        <h3 className={styles.sectionTitle}>Choose Your Massage</h3>
        
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
              <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"></path>
              <path d="M12 22c-4.97 0-9-4.03-9-9 4.97 0 9 4.03 9 9z"></path>
              <path d="M12 4C7.03 4 3 8.03 3 13c4.97 0 9-4.03 9-9z"></path>
              <path d="M12 4c4.97 0 9 4.03 9 9-4.97 0-9-4.03-9-9z"></path>
            </svg>
          </div>
          <div className={styles.dividerLine}></div>
        </div>

        <div className={styles.servicesGrid}>
          
          {/* Card 1: Ayur Signature */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/massage-spa-near-me.png" alt="hotel massage cdo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Ayur Signature<br/>Massage</div>
            <div className={styles.servicePrice}>₱500</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 2: Hawaiian Veda */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/spa-and-massage-near-me.png" alt="hotel massage cagayan de oro" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Hawaiian Veda<br/>Massage</div>
            <div className={styles.servicePrice}>₱600</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 3: Classic Swedish */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/near-me-massage-spa.png" alt="massage hotel cdo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Classic<br/>Swedish Massage</div>
            <div className={styles.servicePrice}>₱400</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 4: Royal Thai */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/spas-nearme.png" alt="home massage near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Royal<br/>Thai Massage</div>
            <div className={styles.servicePrice}>₱450</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 5: Deep Tissue */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/foot-massage-near-me.png" alt="hotel massage near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Deep Tissue<br/>Massage</div>
            <div className={styles.servicePrice}>₱450</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 6: Lymphatic */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/best-massage-near-me.png" alt="spa near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Lymphatic<br/>Massage</div>
            <div className={styles.servicePrice}>₱500</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 7: Herbal Ayurvedic */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/foot-spa-near-me.png" alt="body massage near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Herbal<br/>Ayurvedic Massage</div>
            <div className={styles.servicePrice}>₱600</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 8: Hot Stone */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/thai-masssage.png" alt="thai massage near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Hot Stone<br/>Massage</div>
            <div className={styles.servicePrice}>₱700</div>
            <div className={styles.serviceDuration}>75 mins</div>
          </a>

          {/* Card 9: Cupping / Ventosa */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/thai-massage-near-me.png" alt="swedish massage near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Cupping /<br/>Ventosa Massage</div>
            <div className={styles.servicePrice}>₱600</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 10: Foot, Hand & Back */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.serviceCard} style={{ textDecoration: 'none' }}>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/thailand-massage.png" alt="deep tissue massage near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Foot, Hand &<br/>Back Massage</div>
            <div className={styles.servicePrice}>₱400</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

          {/* Card 11 - HIGHLIGHT */}
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={`${styles.serviceCard} ${styles.serviceCardHighlight}`} style={{ textDecoration: 'none' }}>
            <div className={styles.popularBadge}>POPULAR</div>
            <div className={styles.serviceIcon}>
              <img src="https://ayurvedaspa.ph/images/thailand-massage-near-me.png" alt="ayurvedic massage near me" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <div className={styles.serviceName}>Home & Hotel<br/>Service</div>
            <div className={styles.servicePrice}>₱999</div>
            <div className={styles.serviceDuration}>60 mins</div>
          </a>

        </div>

        <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.btnGold}>
          BOOK YOUR TREATMENT
        </a>
      </section>

      {/* 4. Booking Section */}
      <section className={styles.bookingSection}>
        <div className={styles.bookingGrid}>
          
          {/* Column 1: Why Choose Us */}
          <div className={styles.bookingCol}>
            <h3 className={styles.bookingColTitle}>Why Choose<br/>Ayurveda Massage & Spa?</h3>
            <div className={styles.whyChooseGrid}>
              
              <div className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"></path><path d="M12 22c-4.97 0-9-4.03-9-9 4.97 0 9 4.03 9 9z"></path><path d="M12 22V4"></path><path d="M12 4C7.03 4 3 8.03 3 13c4.97 0 9-4.03 9-9z"></path><path d="M12 4c4.97 0 9 4.03 9 9-4.97 0-9-4.03-9-9z"></path></svg>
                </div>
                <div className={styles.whyChooseContent}>
                  <h4>Multiple Massage Options</h4>
                  <p>Choose from Swedish, Thai, Ayurvedic, deep tissue, hot stone, lymphatic and other treatments.</p>
                </div>
              </div>

              <div className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className={styles.whyChooseContent}>
                  <h4>Convenient CDO Location</h4>
                  <p>Located at #45 Justo Gaerlan Street, Cagayan de Oro City.</p>
                </div>
              </div>

              <div className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                </div>
                <div className={styles.whyChooseContent}>
                  <h4>Affordable Prices</h4>
                  <p>Massage treatments start from just ₱400.</p>
                </div>
              </div>

              <div className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className={styles.whyChooseContent}>
                  <h4>Open Until 3 AM</h4>
                  <p>Flexible hours make it convenient to book during the day or late evening.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Booking Form */}
          <div className={styles.bookingCol} style={{ backgroundColor: '#fffdf9' }}>
            <h3 className={styles.bookingColTitle} style={{ textAlign: 'center' }}>Book Your Massage</h3>
            
            {/* The user requested all booking buttons to go to WhatsApp. 
                A form action isn't strictly necessary, but we can wrap it or just use an <a> tag 
                that looks like a submit button. */}
            <BookingForm />
          </div>

          {/* Column 3: Contact Image Block */}
          <div className={`${styles.bookingCol} ${styles.bookingColImage}`}>
            <h3 className={styles.bookingColTitle}>Prefer to Talk to Us?</h3>
            <p>Call or message us to check availability and book your preferred massage.</p>
            
            <div className={styles.contactBtns}>
              <a href="tel:+639638649151" className={styles.btnContactDark}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                CALL NOW
              </a>
              <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.btnContactGold}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                MESSAGE US
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. Image Grid Section */}
      <section className={styles.imageGridSection}>
        <h3 className={styles.sectionTitle}>Find the Massage That's Right for You</h3>
        
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
              <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"></path>
              <path d="M12 22c-4.97 0-9-4.03-9-9 4.97 0 9 4.03 9 9z"></path>
              <path d="M12 4C7.03 4 3 8.03 3 13c4.97 0 9-4.03 9-9z"></path>
              <path d="M12 4c4.97 0 9 4.03 9 9-4.97 0-9-4.03-9-9z"></path>
            </svg>
          </div>
          <div className={styles.dividerLine}></div>
        </div>

        <ServicesImageCarousel />
      </section>

      <LandingSeoAccordion />

      {/* 6. Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          
          {/* Column 1: Spa Gallery */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoColTitle}>Inside Ayurveda<br/>Massage & Spa</h3>
            <div className={styles.spaGallery}>
              <img src="https://ayurvedaspa.ph/images/thai-spa.webp" alt="hot stone massage near me" className={styles.spaGalleryImg} />
              <img src="https://ayurvedaspa.ph/images/ayurvedic-massage-near-me.webp" alt="massage spa near me" className={styles.spaGalleryImg} />
              <img src="https://ayurvedaspa.ph/images/hot-stone-massage-near-me.webp" alt="deep tissue massage" className={styles.spaGalleryImg} />
              <img src="https://ayurvedaspa.ph/images/massage-spa-near-me.webp" alt="a deep tissue massage" className={styles.spaGalleryImg} />
              <img src="https://ayurvedaspa.ph/images/cdo-massage.webp" alt="deep deep tissue massage" className={styles.spaGalleryImg} />
              <img src="https://ayurvedaspa.ph/images/massage-in-cdo.webp" alt="deep tissue massage near me" className={styles.spaGalleryImg} />
            </div>
          </div>

          {/* Column 2: Location */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoColTitle}>Massage Spa in<br/>Cagayan de Oro</h3>
            <div className={styles.locationText}>
              <p style={{ marginBottom: '1rem' }}>#45 Justo Gaerlan Street,<br/>Cagayan de Oro City,<br/>Philippines</p>
              <p style={{ fontWeight: '500' }}>Open Daily<br/>11:00 AM – 3:00 AM</p>
            </div>
            <a href="https://maps.app.goo.gl/VpmAnNj36gf2QcMH8" target="_blank" rel="noopener noreferrer" className={styles.btnSolidGold}>GET DIRECTIONS</a>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.240932710234!2d124.6434375!3d8.475937499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff3c299251741%3A0xb814190f40bab755!2sAyurveda%20Massage%20and%20Spa%20CDO!5e0!3m2!1sen!2sin!4v1786612891471!5m2!1sen!2sin" 
              className={styles.locationMap} 
              style={{ border: 0, marginTop: '1rem' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Column 3: Reviews */}
          <ReviewsCarousel />

          {/* Column 4: FAQ */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoColTitle}>Frequently Asked<br/>Questions</h3>
            <div className={styles.faqList}>
              
              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>How much does a massage cost in CDO?</summary>
                <div className={styles.faqContent}>
                  Our massage treatments start from just ₱400 for a 60-minute session. We offer various packages to suit your needs and budget.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>What types of massage do you offer?</summary>
                <div className={styles.faqContent}>
                  We offer Classic Swedish, Royal Thai, Deep Tissue, Ayur Signature, Hot Stone, Lymphatic, and more specialty massages.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>Do you offer home massage?</summary>
                <div className={styles.faqContent}>
                  Yes, we offer premium Home & Hotel services starting at ₱999 so you can enjoy our treatments without leaving your room.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>What time are you open?</summary>
                <div className={styles.faqContent}>
                  We are open daily from 11:00 AM all the way until 3:00 AM, making it easy to book a massage after a long day of work.
                </div>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqSummary}>Do I need to book in advance?</summary>
                <div className={styles.faqContent}>
                  While walk-ins are welcome, we highly recommend booking in advance to ensure your preferred time slot and therapist are available.
                </div>
              </details>

            </div>
          </div>

        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaText}>
          <h2>Ready to Relax?</h2>
          <p>Choose your preferred massage and book your appointment today. Treatments start from ₱400.</p>
        </div>
        
        <div className={styles.ctaBtns}>
          <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.btnCtaGold}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            BOOK YOUR MASSAGE
          </a>
          <a href="tel:+639638649151" className={styles.btnCtaOutline}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            CALL NOW
          </a>
        </div>
      </section>
    </main>
  );
}
