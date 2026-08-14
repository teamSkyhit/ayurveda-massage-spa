'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Left Navigation (Desktop) */}
        <nav className="nav-group nav-left desktop-only">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="#" className="nav-link">Services</Link>
          <Link href="#" className="nav-link">About</Link>
        </nav>

        {/* Center/Left Logo */}
        <div className="logo-container">
          <Link href="/">
            <img src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-and--spa-logo.png" alt="massage under 500 cdo" className="logo" />
          </Link>
        </div>

        {/* Right Navigation & Button (Desktop) */}
        <nav className="nav-group nav-right desktop-only">
          <Link href="#" className="nav-link">Gallery</Link>
          <Link href="#" className="nav-link">Contact</Link>
          <Link href="https://wa.link/xvmbyd" className="btn-primary">BOOK APPOINTMENT</Link>
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
          <Link href="#" className="mobile-link" onClick={toggleMenu}>Services</Link>
          <Link href="#" className="mobile-link" onClick={toggleMenu}>About</Link>
          <Link href="#" className="mobile-link" onClick={toggleMenu}>Gallery</Link>
          <Link href="#" className="mobile-link" onClick={toggleMenu}>Contact</Link>
          <Link href="https://wa.link/xvmbyd" className="btn-primary" onClick={toggleMenu}>BOOK APPOINTMENT</Link>
        </nav>
      </div>
    </header>
  );
}
