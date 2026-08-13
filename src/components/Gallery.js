'use client';
import { useEffect, useState, useRef } from 'react';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
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
    "https://slategrey-bee-869726.hostingersite.com/images/deep-tissue-massage-near-me.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/ayurvedic-massage-near-me.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/hot-stone-massage-near-me.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/massage-spa-near-me.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/cdo-massage.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/massage-in-cdo.webp",
    "https://slategrey-bee-869726.hostingersite.com/images/massage-spa-cdo.webp",

  ];

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
            <div className="gallery-item-masonry" key={idx}>
              <img src={src} alt={`Spa Gallery ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
