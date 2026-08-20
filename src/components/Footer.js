import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-bg-overlay">
        <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-footer-side-bg-01.webp" alt="massage 400 cdo" className="footer-bg-flower" width="500" height="500" loading="lazy" />
      </div>
      
      <div className="footer-container">
        
        {/* Column 1: Logo & Info */}
        <div className="footer-col footer-col-info">
          <Link href="/">
            <img src="https://ayurvedaspa.ph/images/AYURVEDHA-MASSAGE-SPA-LOGO-001.png" alt="thai masssage" className="footer-logo" width="135" height="80" loading="lazy" />
          </Link>
          <p className="footer-text">
            Restore your body. Relax your mind. Reconnect with yourself. Experience soothing therapies inspired by Ayurveda and timeless wellness traditions.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-col">
          <h4 className="footer-subtitle">PAGES</h4>
          <nav className="footer-nav">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/services" className="footer-link">Services</Link>
            <Link href="/about-us" className="footer-link">About</Link>
            <Link href="/gallery" className="footer-link">Gallery</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </nav>
        </div>

        {/* Column 3: Treatments */}
        <div className="footer-col">
          <h4 className="footer-subtitle">TREATMENTS</h4>
          <nav className="footer-nav">
            <Link href="/ayur-signature-massage-cagayan-de-oro" className="footer-link">Ayur Signature Massage</Link>
            <Link href="/classic-swedish-massage-cagayan-de-oro" className="footer-link">Swedish Massage</Link>
            <Link href="/royal-thai-massage-cagayan-de-oro" className="footer-link">Thai Massage</Link>
            <Link href="/hot-stone-massage-cagayan-de-oro" className="footer-link">Hot Stone Massage</Link>
            <Link href="/services" className="footer-link">View All Treatments</Link>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col footer-col-contact">
          <h4 className="footer-subtitle">CONTACT</h4>
          <div className="footer-contact-info">
            <p className="footer-text" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#c39c6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '2px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <a href="https://maps.app.goo.gl/VpmAnNj36gf2QcMH8" target="_blank" rel="noopener noreferrer" className="footer-contact-link">FJGV+993, Gaerlan St, Cagayan De Oro City, Misamis Oriental, Philippines</a>
            </p>
            <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#c39c6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Open Daily • 11:00 AM – 3:00 AM</span>
            </p>
            <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#c39c6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+639638649151" className="footer-contact-link">+63 963 864 9151</a>
            </p>
            <p className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#c39c6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:ayurvedaspacdo@gmail.com" className="footer-contact-link">ayurvedaspacdo@gmail.com</a>
            </p>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/ayurvedaspacdo/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/ayurvedamassagecdo" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://wa.me/+639638649151" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '30px', height: '30px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 AYURVEDA Massage & Spa. All Rights Reserved.</p>
        <p>Designed & Maintained by <a href="https://www.skyhitmedia.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '500', letterSpacing: '1px' }}>SKYHIT MEDIA</a></p>
      </div>
    </footer>
  );
}
