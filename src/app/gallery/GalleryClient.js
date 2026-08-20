"use client";
import { useState } from 'react';
import styles from './gallery.module.css';

export default function GalleryClient({ galleryItems }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={styles.masonryGrid}>
        {galleryItems.map((item, index) => {
          if (item.type === 'quote') {
            return (
              <div key={index} className={`${styles.masonryItem} ${styles.quoteBlock}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"></path>
                  <path d="M12 22V12"></path>
                </svg>
                <p className={styles.quoteText}>Every image reflects our promise of</p>
                <p className={styles.quoteSignature}>wellness and care.</p>
                <div className={styles.quoteDivider}></div>
              </div>
            );
          }
          
          return (
            <div 
              key={index} 
              className={styles.masonryItem} 
              onClick={() => setSelectedImage(item.src)}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className={styles.imageOverlay}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  <line x1="10" y1="7" x2="10" y2="13"></line>
                  <line x1="7" y1="10" x2="13" y2="10"></line>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img src={selectedImage} alt="Fullscreen View" className={styles.lightboxImage} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
