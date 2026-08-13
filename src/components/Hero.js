'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg-overlay">
        <img src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-flower-img.png" alt="Flower Background Overlay" className="hero-bg-flower" />
      </div>

      <div className="hero-container">
        {/* Left Side: Content */}
        <div className={`hero-content ${isLoaded ? 'fade-in-up' : ''}`}>
          <p className="hero-subtitle">WELCOME TO AYURVEDA MASSAGE & SPA</p>
          <h1 className="hero-title">
            Massage Spa in<br />
            {/* <span className="hero-title-italic">Relax Your Body.</span><br /> */}
             <span style={{ color: '#c39c6b' }}>Cagayan de Oro</span>
          </h1>
          <p className="hero-description">
            Premium massage experiences designed to help you slow<br />
            down, release tension and feel refreshed.
          </p>
          
          <div className="hero-buttons">
            <Link href="https://wa.link/xvmbyd" className="btn-primary">
              BOOK APPOINTMENT
            </Link>
            <Link href="#" className="btn-secondary">
              EXPLORE SERVICES
            </Link>
          </div>

          <div className="hero-footer-info">
            <div className="hero-icon-clock">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <span>OPEN DAILY • 11:00 AM - 3:00 AM</span>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className={`hero-image-wrapper ${isLoaded ? 'fade-in-right' : ''}`}>
          <img 
            src="https://slategrey-bee-869726.hostingersite.com/images/affordable-massage-cagayan-de-oro.png" 
            alt="Corner Decor" 
            className="hero-corner-img" 
          />
          <img 
            src="https://slategrey-bee-869726.hostingersite.com/images/cheap-massage-cdo.webp" 
            alt="cheap massage cdo" 
            className="hero-main-img" 
          />
          
          <img 
            src="https://slategrey-bee-869726.hostingersite.com/images/cheap-massage-near-me.png" 
            alt="Essential Oil Bottle" 
            className="hero-bottle-img float-animation" 
          />
        </div>
      </div>
    </section>
  );
}
