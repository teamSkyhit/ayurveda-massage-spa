'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const serviceLinks = [
    { title: "Ayur Signature Massage", href: "/ayur-signature-massage-cagayan-de-oro" },
    { title: "Hawaiian Veda Massage", href: "/hawaiian-veda-massage-cagayan-de-oro" },
    { title: "Classic Swedish Massage", href: "/classic-swedish-massage-cagayan-de-oro" },
    { title: "Royal Thai Massage", href: "/royal-thai-massage-cagayan-de-oro" },
    { title: "Deep Tissue Massage", href: "/deep-tissue-massage-cagayan-de-oro" },
    { title: "Lymphatic Massage", href: "/lymphatic-massage-cagayan-de-oro" },
    { title: "Herbal Ayurvedic Massage", href: "/herbal-ayurvedic-massage-cagayan-de-oro" },
    { title: "Hot Stone Massage", href: "/hot-stone-massage-cagayan-de-oro" },
    { title: "Cupping / Ventosa Massage", href: "/cupping-ventosa-massage-cagayan-de-oro" },
    { title: "Foot, Hand & Back Massage", href: "/foot-hand-back-massage-cagayan-de-oro" },
    { title: "Home & Hotel Services", href: "/home-hotel-massage-cagayan-de-oro" }
  ];

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Left Navigation (Desktop) */}
        <nav className="nav-group nav-left desktop-only">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about-us" className="nav-link">About</Link>
          <div className="nav-item-dropdown">
            <Link href="/services" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            <div className="dropdown-menu">
              {serviceLinks.map((service, idx) => (
                <Link key={idx} href={service.href} className="dropdown-item">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Center/Left Logo */}
        <div className="logo-container">
          <Link href="/">
            <img src="https://ayurvedaspa.ph/images/AYURVEDHA-MASSAGE-SPA-LOGO-001.png" alt="massage under 500 cdo" className="logo" width="135" height="80" />
          </Link>
        </div>

        {/* Right Navigation & Button (Desktop) */}
        <nav className="nav-group nav-right desktop-only">
          <Link href="/gallery" className="nav-link">Gallery</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="https://wa.me/+639638649151" className="btn-primary">BOOK APPOINTMENT</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav-links">
          <Link href="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          <Link href="/about-us" className="mobile-link" onClick={toggleMenu}>About</Link>
          
          <div className="mobile-dropdown-container">
            <div className={`mobile-link mobile-dropdown-toggle ${isServicesOpen ? 'open' : ''}`} onClick={toggleServices}>
              Services
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className={`mobile-dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
              <Link href="/services" className="mobile-dropdown-item" style={{ fontWeight: 'bold' }} onClick={toggleMenu}>All Services Overview</Link>
              {serviceLinks.map((service, idx) => (
                <Link key={idx} href={service.href} className="mobile-dropdown-item" onClick={toggleMenu}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/gallery" className="mobile-link" onClick={toggleMenu}>Gallery</Link>
          <Link href="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>
          <Link href="https://wa.me/+639638649151" className="btn-primary" onClick={toggleMenu}>BOOK APPOINTMENT</Link>
        </nav>
      </div>
    </header>
  );
}
