'use client';

import { useState } from 'react';

export default function LandingSeoAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem 2rem' }}>
      <div 
        style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid #e0e0e0',
          transition: 'all 0.3s ease'
        }}
      >
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: '#c39c6b',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: '1.25rem',
            fontWeight: '600'
          }}
          aria-expanded={isOpen}
        >
          <span>Massage in Cagayan de Oro From ₱400</span>
          <span style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease',
            fontSize: '0.9rem'
          }}>
            ▼
          </span>
        </button>

        <div 
          style={{ 
            maxHeight: isOpen ? '2000px' : '0',
            opacity: isOpen ? 1 : 0,
            overflow: 'hidden',
            transition: 'all 0.5s ease-in-out',
            backgroundColor: '#ffffff'
          }}
        >
          <div style={{ 
            padding: '2rem', 
            fontFamily: 'var(--font-outfit), sans-serif',
            lineHeight: '1.8',
            fontSize: '1rem',
            color: '#444444'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>Looking for a relaxing massage in Cagayan de Oro? Ayurveda Massage & Spa offers a variety of massage treatments designed to help you relax, unwind and enjoy a peaceful spa experience. Choose from Swedish massage, Thai massage, deep tissue massage, Ayurvedic massage, lymphatic massage, hot stone massage, cupping or Ventosa massage and more.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Affordable Massage Treatments in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1.5rem' }}>Our massage treatments start from just ₱400, with 60-minute and extended treatment options available. Whether you are looking for a relaxing Swedish massage, Thai massage, deep tissue massage, Ayurvedic massage or hot stone massage, you can choose a treatment that suits your preferences.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Massage Spa in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1.5rem' }}>Ayurveda Massage & Spa is located at #45 Justo Gaerlan Street, Cagayan de Oro City, Philippines. We are open daily from 11:00 AM to 3:00 AM, making it convenient to book a massage during the day or late evening.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Massage Services Available</h3>
            <p style={{ marginBottom: '1.5rem' }}>Classic Swedish Massage from ₱400, Foot Hand & Back Massage from ₱400, Royal Thai Massage from ₱450, Deep Tissue Massage from ₱450, Ayur Signature Massage from ₱500, Lymphatic Massage from ₱500, Hawaiian Veda Massage from ₱600, Herbal Ayurvedic Massage from ₱600, Cupping / Ventosa Massage from ₱600, Hot Stone Massage from ₱700 and Home & Hotel Massage from ₱999.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Book Your Massage in Cagayan de Oro</h3>
            <p>Ready to relax? Choose your preferred massage treatment and book your appointment at Ayurveda Massage & Spa. Enjoy a convenient and comfortable massage experience in Cagayan de Oro with treatments starting from ₱400.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
