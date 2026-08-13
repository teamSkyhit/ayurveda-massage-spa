'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const CountUp = ({ end, duration = 2000, suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out expo for smooth deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  // Format with commas if >= 1000
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return <>{formattedCount}{suffix}</>;
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const flowerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (flowerRef.current) {
        // Rotate forward when scrolling down, reverse when scrolling up
        flowerRef.current.style.transform = `rotate(${window.scrollY / 3}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      {/* Top Features Bar */}
      <div className="features-bar">
        <div className="feature-item">
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>PROFESSIONAL THERAPISTS</span>
        </div>
        <div className="feature-divider"></div>
        <div className="feature-item">
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
          <span>NATURAL HERBAL OILS</span>
        </div>
        <div className="feature-divider"></div>
        <div className="feature-item">
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
          <span>PRIVATE & PEACEFUL SPACE</span>
        </div>
        <div className="feature-divider"></div>
        <div className="feature-item">
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>OPEN DAILY</span>
        </div>
      </div>

      <div className="about-container">
        {/* Right Corner Background Flower */}
        <div className="about-bg-overlay">
          <img 
            ref={flowerRef}
            src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-bg.png" 
            alt="Decorative Flower" 
            className="about-bg-flower" 
            style={{ transition: 'transform 0.1s ease-out' }}
          />
        </div>

        {/* Left Side: Image */}
        <div className={`about-image-wrapper ${isVisible ? 'slide-up-fade' : 'opacity-0'}`}>
          <img 
            src="/ayurveda-massage-spa-02.webp" 
            alt="Warm beautifully lit massage room" 
            className="about-main-img" 
          />
          <img 
            src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-about-icon.png" 
            alt="About Ayurvedic Icon" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '-150px',
              transform: 'translateY(-50%)',
              width: '150px',
              height: 'auto',
              zIndex: 3
            }}
          />
          <img 
            src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-bg-stone-flower.png" 
            alt="Stone and Flower Decor" 
            style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-150px',
              width: '250px',
              height: 'auto',
              zIndex: 3
            }}
          />
        </div>

        {/* Right Side: Content */}
        <div className={`about-content ${isVisible ? 'slide-up-fade-delay' : 'opacity-0'}`}>
          <p className="section-subtitle" style={{ color: '#c39c6b' }}>ABOUT AYURVEDA</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-saudagar)', fontSize: '3.5rem' }}>
            Massage Treatments in Cagayan de Oro
          </h2>
          <p className="section-description">
            Ayurveda began with a simple idea — that everyone deserves an hour of genuine quiet. Our rooms are warm and softly lit, our oils are chosen with care, and every session is shaped around how you'd like to feel that day. <br /> From the moment you arrive, our therapists take the time to listen. Pressure, pace and focus are adjusted to your comfort, so you can settle in, breathe slowly and leave feeling looked after.
          </p>
          
          <Link href="https://wa.link/pjquhk" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
            More About Us
          </Link>
        </div>
      </div>

      {/* Counters Section */}
      <div className={`about-counters ${isVisible ? 'slide-up-fade-delay-1' : 'opacity-0'}`}>
        <div className="counter-item">
          <h3><CountUp end={100} suffix="+" isVisible={isVisible} /></h3>
          <p>Treatments per month</p>
        </div>
        <div className="counter-divider"></div>
        <div className="counter-item">
          <h3><CountUp end={12} isVisible={isVisible} /></h3>
          <p>Number of practitioners</p>
        </div>
        <div className="counter-divider"></div>
        <div className="counter-item">
          <h3><CountUp end={10} suffix="+" isVisible={isVisible} /></h3>
          <p>Total years of experience</p>
        </div>
        <div className="counter-divider"></div>
        <div className="counter-item">
          <h3><CountUp end={5} isVisible={isVisible} /></h3>
          <p>Treatment rooms</p>
        </div>
      </div>
    </section>
  );
}
