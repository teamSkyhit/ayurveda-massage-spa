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
    "https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-gallery-img-01.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-gallery-img-02.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-gallery-img-03.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-gallery-img-04.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-gallery-img-05.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-gallery-img-06.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/ayurveda-massage-spa-gallery-img-07.webp",
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <>
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
                <img src={src} alt={`Spa Gallery ${idx + 1}`} loading="lazy" style={{ transition: 'transform 0.3s ease' }} />
                <div className="gallery-hover-overlay" style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.2)', opacity: 0, transition: 'opacity 0.3s ease',
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ width: '40px', height: '40px' }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            padding: '2rem',
            animation: 'fadeInModal 0.3s ease-out forwards'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10000,
              padding: '10px'
            }}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Full size gallery view" 
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              animation: 'zoomInImage 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
            }}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .gallery-item-masonry:hover img {
          transform: scale(1.05);
        }
        .gallery-item-masonry:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomInImage {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />
    </>
  );
}
