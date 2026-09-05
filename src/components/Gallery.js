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
    { src: "https://ayurvedaspa.ph/images/deep-tissue-massage-near-me.webp", alt: "authentic-Thai-massage-CDO" },
    { src: "https://ayurvedaspa.ph/images/ayurvedic-massage-near-me.webp", alt: "traditional-Thai-spa-treatment" },
    { src: "https://ayurvedaspa.ph/images/hot-stone-massage-near-me.webp", alt: "Thai-therapist-Cagayan-de-Oro" },
    { src: "https://ayurvedaspa.ph/images/massage-spa-near-me.webp", alt: "oriental-massage-near-me" },
    { src: "https://ayurvedaspa.ph/images/cdo-massage.webp", alt: "traditional-Filipino-hilot-massage" },
    { src: "https://ayurvedaspa.ph/images/massage-in-cdo.webp", alt: "hilot-massage-CDO" },
    { src: "https://ayurvedaspa.ph/images/massage-spa-cdo.webp", alt: "combination-Thai-Swedish-massage" },
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
    <section id="gallery-section" className="gallery-section" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-bg-leaf {
          position: absolute;
          bottom: 0px;
          right: -115px;
          width: 500px;
          height: auto;
          z-index: 0;
        }
        @media (max-width: 768px) {
          .gallery-bg-leaf {
            width: 250px;
            right: -60px;
          }
        }
      `}} />
      {/* Left Bottom Corner Graphic */}
      <img 
        src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-gallery-bg.png" 
        alt="decorative gallery background" 
        className="gallery-bg-leaf"
        loading="lazy" 
      />

      <div className="gallery-container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="gallery-header fade-in-up">
          <p className="section-subtitle">INSIDE AYURVEDA</p>
          <h2 className="section-title">
            A Space Designed to Help You Unwind
          </h2>
        </div>

        <div className="gallery-masonry slide-up-fade-delay-2">
          {galleryImages.map((image, idx) => (
            <div 
              className="gallery-item-masonry" 
              key={idx}
              onClick={() => setSelectedImage(image.src)}
              style={{ cursor: 'pointer' }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" width="600" height="450" style={{ transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
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
