'use client';
import { useState } from 'react';
import styles from './styles.module.css';

export default function ReviewsCarousel() {
  const reviews = [
    {
      text: "Very relaxing place and the staff are very accommodating. Best massage experience in CDO!",
      author: "Maria L.",
      rating: 5
    },
    {
      text: "The Royal Thai massage was incredible. My back pain is completely gone. Highly recommended!",
      author: "John D.",
      rating: 5
    },
    {
      text: "Affordable but premium service. The atmosphere is so peaceful from the moment you walk in.",
      author: "Sarah J.",
      rating: 5
    },
    {
      text: "Clean, professional, and excellent therapists. The hot stone massage is a must-try.",
      author: "Michael T.",
      rating: 5
    },
    {
      text: "My go-to spa in CDO. I always book the Home & Hotel service when I visit for business.",
      author: "Elena R.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className={styles.infoCol}>
      <h3 className={styles.infoColTitle}>Our Guests'<br/>Experience</h3>
      
      <div className={styles.reviewStars}>
        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        ))}
      </div>
      
      <div className={styles.reviewQuote}>
        <p>"{reviews[currentIndex].text}"</p>
        <p style={{ marginTop: '1rem' }}>- {reviews[currentIndex].author}</p>
      </div>
      
      <div className={styles.reviewDots}>
        <svg onClick={prevReview} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', cursor: 'pointer' }}>
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        
        {reviews.map((_, idx) => (
          <div 
            key={idx} 
            className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(idx)}
            style={{ cursor: 'pointer' }}
          ></div>
        ))}
        
        <svg onClick={nextReview} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', cursor: 'pointer' }}>
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  );
}
