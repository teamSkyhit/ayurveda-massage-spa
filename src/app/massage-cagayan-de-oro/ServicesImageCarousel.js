'use client';

import { useRef } from 'react';
import styles from './styles.module.css';

const services = [
  { name: "Ayur Signature Massage", price: "₱500", duration: "60 mins", image: "https://ayurvedaspa.ph/images/thai-massage-spa-near-me.webp" },
  { name: "Hawaiian Veda Massage", price: "₱600", duration: "60 mins", image: "https://ayurvedaspa.ph/images/thai-spa.webp" },
  { name: "Classic Swedish Massage", price: "₱400", duration: "60 mins", image: "https://ayurvedaspa.ph/images/full-body-thai-massage-near-me.webp" },
  { name: "Royal Thai Massage", price: "₱450", duration: "60 mins", image: "https://ayurvedaspa.ph/images/deep-tissue-massage.webp" },
  { name: "Deep Tissue Massage", price: "₱450", duration: "60 mins", image: "https://ayurvedaspa.ph/images/a-deep-tissue-massage.webp" },
  { name: "Lymphatic Massage", price: "₱500", duration: "60 mins", image: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-lymphatic-massage.webp" },
  { name: "Herbal Ayurvedic Massage", price: "₱600", duration: "60 mins", image: "https://ayurvedaspa.ph/images/deep-deep-tissue-massage.webp" },
  { name: "Hot Stone Massage", price: "₱700", duration: "75 mins", image: "https://ayurvedaspa.ph/images/deep-massage.webp" },
  { name: "Cupping / Ventosa Massage", price: "₱600", duration: "60 mins", image: "https://ayurvedaspa.ph/images/deep-tissue-massage-therapist-near-me.webp" },
  { name: "Foot Hand & Back Massage", price: "₱400", duration: "60 mins", image: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-foot-hand-back-massage.webp" },
  { name: "Home and Hotel Services", price: "₱999", duration: "60 mins", image: "https://ayurvedaspa.ph/images/ayurveda-spa-massage-home-hotel-services.webp" }
];

export default function ServicesImageCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button 
        className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`} 
        onClick={() => scroll('left')}
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <div className={styles.imageGridCarousel} ref={scrollRef}>
        {services.map((service, index) => (
          <div key={index} className={styles.imgCard}>
            <img src={service.image} alt={service.name} className={styles.imgCardImg} />
            <div className={styles.imgCardTitle}>{service.name}</div>
            <div className={styles.imgCardPrice}>{service.price} | {service.duration}</div>
            <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" className={styles.btnBookNow}>BOOK NOW</a>
          </div>
        ))}
      </div>

      <button 
        className={`${styles.carouselBtn} ${styles.carouselBtnRight}`} 
        onClick={() => scroll('right')}
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  );
}
