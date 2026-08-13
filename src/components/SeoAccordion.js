'use client';

import { useState } from 'react';

export default function SeoAccordion() {
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
          <span>Massage Spa in Cagayan de Oro</span>
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
            <p style={{ marginBottom: '1rem' }}>Looking for a relaxing and welcoming massage spa in Cagayan de Oro? Ayurveda Massage &amp; Spa offers a range of massage treatments designed to help you relax, unwind and take a break from your daily routine. Conveniently located on Justo Gaerlan Street, Cagayan de Oro City, our spa provides a peaceful environment where you can enjoy a comfortable and rejuvenating massage experience.</p>
            <p style={{ marginBottom: '1.5rem' }}>Whether you are looking for a massage in Cagayan de Oro, a relaxing spa treatment after a busy day, or a convenient massage service near you, we offer a variety of treatments to suit different preferences.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Massage Treatments in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1rem' }}>Our massage spa offers several treatment options, including Ayurvedic massage, Swedish massage, Thai massage, deep tissue massage, lymphatic massage, hot stone massage and cupping or Ventosa massage.</p>
            <p style={{ marginBottom: '1rem' }}>Our Ayur Signature Massage combines Swedish and Thai massage techniques with full-body stretching for a relaxing and refreshing experience. Guests can also choose our Classic Swedish Massage for a gentle and relaxing treatment or Royal Thai Massage for a traditional Thai-inspired massage experience.</p>
            <p style={{ marginBottom: '1rem' }}>For guests who prefer deeper pressure, our Deep Tissue Massage provides a more focused massage experience. Our Hot Stone Massage combines massage techniques with heated stones to create a warm and relaxing atmosphere, while our Lymphatic Massage offers a gentle treatment experience.</p>
            <p style={{ marginBottom: '1.5rem' }}>We also offer Herbal Ayurvedic Massage, Hawaiian Veda Massage, Cupping / Ventosa Massage, and Foot, Hand &amp; Back Massage.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Affordable Massage in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1rem' }}>Our massage treatments start from ₱400, making it easy to choose a treatment that fits your preferences and budget.</p>
            <p style={{ marginBottom: '1rem' }}>Our current massage menu includes:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Classic Swedish Massage — ₱400</li>
                <li>Foot, Hand &amp; Back Massage — ₱400</li>
                <li>Royal Thai Massage — ₱450</li>
                <li>Deep Tissue Massage — ₱450</li>
                <li>Ayur Signature Massage — ₱500</li>
                <li>Lymphatic Massage — ₱500</li>
                <li>Hawaiian Veda Massage — ₱600</li>
                <li>Herbal Ayurvedic Massage — ₱600</li>
                <li>Cupping / Ventosa Massage — ₱600</li>
                <li>Hot Stone Massage — ₱700</li>
                <li>Home &amp; Hotel Services — ₱999</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>Most treatments are 60 minutes, while our Hot Stone Massage is 75 minutes.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Ayurvedic Massage in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1.5rem' }}>If you are searching for an Ayurvedic massage in Cagayan de Oro, Ayurveda Massage &amp; Spa offers herbal Ayurvedic treatments as part of our massage menu. Our spa provides a calm setting where you can take time to relax and enjoy a traditional wellness-inspired massage experience.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Thai, Swedish and Deep Tissue Massage in CDO</h3>
            <p style={{ marginBottom: '1rem' }}>Guests searching for Thai massage in Cagayan de Oro, Swedish massage in Cagayan de Oro, or deep tissue massage in Cagayan de Oro can choose from our range of massage treatments.</p>
            <p style={{ marginBottom: '1.5rem' }}>Our Royal Thai Massage is available for guests who prefer a Thai-inspired treatment, while our Classic Swedish Massage offers a relaxing and comfortable experience. Deep Tissue Massage is available for guests who prefer a deeper and more focused massage.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Home and Hotel Massage in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1rem' }}>For added convenience, Ayurveda Massage &amp; Spa also offers home and hotel massage services in Cagayan de Oro. This service is available at ₱999 for 60 minutes, allowing you to enjoy a massage experience without visiting the spa location.</p>
            <p style={{ marginBottom: '1.5rem' }}>Please contact us in advance to confirm availability and service details for your preferred location.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Visit Our Massage Spa in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1rem' }}>Ayurveda Massage &amp; Spa is located at #45 Justo Gaerlan Street, Cagayan de Oro City, Philippines.</p>
            <p style={{ marginBottom: '1rem' }}>Our spa is open daily from 11:00 AM to 3:00 AM, giving guests flexible options to schedule a massage during the day or late evening.</p>
            <p style={{ marginBottom: '1.5rem' }}>If you are searching online for a massage spa near you in Cagayan de Oro, you can visit our location on Justo Gaerlan Street or contact us to book your preferred treatment.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Book Your Massage Appointment</h3>
            <p style={{ marginBottom: '1rem' }}>Ready to relax and take some time for yourself? Choose your preferred massage treatment and book an appointment with Ayurveda Massage &amp; Spa in Cagayan de Oro.</p>
            <p style={{ marginBottom: '1rem' }}>From relaxing Swedish and Thai massages to Ayurvedic, deep tissue, hot stone and other treatments, we offer a variety of options to help you enjoy a peaceful spa experience.</p>
            <p>Book your appointment today and discover a relaxing massage experience in Cagayan de Oro.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
