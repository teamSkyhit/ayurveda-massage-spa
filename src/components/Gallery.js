'use client';
import { useEffect, useState, useRef } from 'react';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

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

  const galleryImages = [
    "https://ayurvedaspa.ph/images/deep-tissue-massage-near-me.webp",
    "https://ayurvedaspa.ph/images/ayurvedic-massage-near-me.webp",
    "https://ayurvedaspa.ph/images/hot-stone-massage-near-me.webp",
    "https://ayurvedaspa.ph/images/massage-spa-near-me.webp",
    "https://ayurvedaspa.ph/images/cdo-massage.webp",
    "https://ayurvedaspa.ph/images/massage-in-cdo.webp",
    "https://ayurvedaspa.ph/images/massage-spa-cdo.webp",

  ];

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery-container">
        
        <div className={`gallery-header ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="section-subtitle">INSIDE AYURVEDA</p>
          <h2 className="section-title">
            A Space Designed to Help You Unwind
          </h2>
        </div>

        <div className={`gallery-masonry ${isVisible ? 'slide-up-fade-delay-2' : 'opacity-0'}`}>
          {galleryImages.map((src, idx) => (
            <div 
              className="gallery-item-masonry" 
              key={idx}
              onClick={() => setSelectedImage(src)}
              style={{ cursor: 'pointer' }}
            >
              <img src={src} alt={`Spa Gallery ${idx + 1}`} loading="lazy" style={{ transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '3rem',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="400 peso massage cdo" 
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
