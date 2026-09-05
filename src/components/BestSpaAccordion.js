'use client';

import { useState } from 'react';

export default function BestSpaAccordion() {
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
          <span>Best Spa in CDO – Ayurveda Massage & Spa</span>
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
            maxHeight: isOpen ? '4000px' : '0',
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
            <p style={{ marginBottom: '1.5rem' }}>Looking for the best spa in CDO? Ayurveda Massage & Spa offers a relaxing and comfortable spa experience in Cagayan de Oro, with a wide range of professional massage treatments designed to help you relax, refresh and take a break from your daily routine.</p>
            <p style={{ marginBottom: '1.5rem' }}>Located in Cagayan de Oro City, Ayurveda Massage & Spa provides different massage experiences including Ayurvedic massage, Swedish massage, Thai massage, deep tissue massage, hot stone massage and other relaxing treatments. Whether you are a local resident, a working professional or visiting CDO, our massage spa provides a convenient place to unwind.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Experience One of the Best Spas in CDO</h3>
            <p style={{ marginBottom: '1.5rem' }}>Choosing the best spa in CDO means finding a place that offers quality massage services, professional therapists, a comfortable environment and treatments that match your preferences.</p>
            <p style={{ marginBottom: '1.5rem' }}>At Ayurveda Massage & Spa, we focus on creating a relaxing experience from the moment you arrive. Our range of massage treatments allows you to choose an experience based on the type of relaxation and massage pressure you prefer.</p>
            <p style={{ marginBottom: '1.5rem' }}>If you have been searching for "best spa near me," "massage near me," "spa in CDO," or "best massage in Cagayan de Oro," Ayurveda Massage & Spa is a convenient choice for your next massage session.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Massage Spa in Cagayan de Oro</h3>
            <p style={{ marginBottom: '1.5rem' }}>Ayurveda Massage & Spa is a massage spa in Cagayan de Oro offering a variety of traditional and modern massage experiences.</p>
            <p style={{ marginBottom: '1.5rem' }}>Our treatments are suitable for guests looking for relaxation, personal wellness time or simply a peaceful break from a busy day.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Our Massage Services</h3>
            <p><strong>Ayurvedic Massage:</strong> Experience an Ayurvedic-inspired massage using traditional techniques and herbal oils for a calming and relaxing experience.</p>
            <p><strong>Swedish Massage:</strong> A gentle and relaxing massage experience using flowing techniques, ideal for guests looking to unwind.</p>
            <p><strong>Thai Massage:</strong> Enjoy a traditional Thai-inspired massage experience incorporating stretching and pressure techniques.</p>
            <p><strong>Deep Tissue Massage:</strong> A deeper massage experience for guests who prefer focused pressure and a more intensive treatment.</p>
            <p><strong>Hot Stone Massage:</strong> Relax with a combination of massage techniques and warm stones for a soothing spa experience.</p>
            <p><strong>Ayur Signature Massage:</strong> Our signature massage experience combines massage techniques, relaxation and stretching for a complete full-body treatment.</p>
            <p><strong>Lymphatic Massage:</strong> A gentle massage experience designed for guests who prefer lighter pressure and soothing movements.</p>
            <p><strong>Hawaiian Veda Massage:</strong> Enjoy long, flowing massage movements designed to create a peaceful and relaxing experience.</p>
            <p><strong>Cupping / Ventosa Massage:</strong> A traditional-inspired treatment combining massage with cupping techniques.</p>
            <p style={{ marginBottom: '1.5rem' }}><strong>Foot, Hand & Back Massage:</strong> A focused treatment for guests who want to spend less time but still enjoy a relaxing massage.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Best Massage in CDO for Your Relaxation</h3>
            <p style={{ marginBottom: '1.5rem' }}>If you are searching for the best massage in CDO, choosing the right treatment depends on your personal preference.</p>
            <p style={{ marginBottom: '1.5rem' }}>For a gentle and relaxing massage, Swedish Massage can be a good choice. If you prefer deeper pressure, Deep Tissue Massage offers a more focused experience. Thai Massage is ideal for guests interested in traditional stretching and massage techniques, while Hot Stone Massage provides a warm and soothing experience.</p>
            <p style={{ marginBottom: '1.5rem' }}>For guests interested in Ayurvedic-inspired wellness, our Ayurvedic Massage and Ayur Signature Massage provide a distinctive massage experience.</p>
            <p style={{ marginBottom: '1.5rem' }}>Whatever treatment you choose, Ayurveda Massage & Spa gives you a comfortable environment where you can slow down, relax and enjoy some time for yourself.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Affordable Massage Spa in CDO</h3>
            <p style={{ marginBottom: '1.5rem' }}>Looking for an affordable massage in CDO?</p>
            <p style={{ marginBottom: '1.5rem' }}>Ayurveda Massage & Spa offers a selection of massage treatments at different price points, allowing you to choose a treatment that suits your preferences and budget.</p>
            <p style={{ marginBottom: '1.5rem' }}>From shorter focused treatments to longer full-body massage experiences, there are options for different needs.</p>
            <p style={{ marginBottom: '1.5rem' }}>If you are searching for an affordable spa in Cagayan de Oro, cheap massage in CDO, or massage spa near me, explore the available treatments at Ayurveda Massage & Spa.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Ayurvedic Massage in CDO</h3>
            <p style={{ marginBottom: '1.5rem' }}>Ayurveda Massage & Spa brings Ayurvedic-inspired massage experiences to Cagayan de Oro.</p>
            <p style={{ marginBottom: '1.5rem' }}>Our Ayurvedic massage treatments incorporate traditional wellness influences and herbal oils to create a calming and relaxing experience.</p>
            <p style={{ marginBottom: '1.5rem' }}>If you are specifically searching for Ayurvedic massage CDO, Ayurvedic spa Cagayan de Oro, or Ayurvedic massage near me, Ayurveda Massage & Spa provides a dedicated treatment option for you.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Spa Near Me in CDO</h3>
            <p style={{ marginBottom: '1.5rem' }}>Searching for a spa near me in CDO?</p>
            <p style={{ marginBottom: '1.5rem' }}>Ayurveda Massage & Spa is located in Cagayan de Oro City, making it a convenient option for people looking for a massage near me, spa near me, or massage center in CDO.</p>
            <p style={{ marginBottom: '1.5rem' }}>Our extended operating hours also make it convenient to schedule a massage during the day or later in the evening.</p>
            <p style={{ marginBottom: '1.5rem' }}>Whether you want to relax after work, take a break during your day or enjoy a massage while visiting Cagayan de Oro, you can choose from our range of massage services.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Why Choose Ayurveda Massage & Spa?</h3>
            <p style={{ marginBottom: '1.5rem' }}>There are many options when searching for a spa in CDO, but choosing the right massage spa can make your experience more enjoyable. Ayurveda Massage & Spa offers:</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>A variety of massage treatments</li>
              <li>Ayurvedic-inspired massage experiences</li>
              <li>Professional massage therapists</li>
              <li>Relaxing and comfortable surroundings</li>
              <li>Different massage pressure options</li>
              <li>Affordable massage treatments</li>
              <li>Convenient location in Cagayan de Oro</li>
              <li>Extended operating hours</li>
              <li>Home and hotel massage services</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>Our goal is to provide a relaxing massage experience where you can take a break, unwind and enjoy quality time for yourself.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Visit Ayurveda Massage & Spa CDO</h3>
            <p style={{ marginBottom: '1.5rem' }}>If you are looking for the best spa in CDO, best massage in CDO, or a trusted massage spa in Cagayan de Oro, visit Ayurveda Massage & Spa.</p>
            <p style={{ marginBottom: '1.5rem' }}>Explore our massage treatments and choose the experience that best matches your relaxation preferences.</p>
            <p style={{ marginBottom: '1.5rem' }}><strong>Ayurveda Massage & Spa CDO</strong><br/>Cagayan de Oro City, Misamis Oriental, Philippines<br/>Take a break from your busy day and enjoy a relaxing massage experience at Ayurveda Massage & Spa.</p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600', color: '#c39c6b' }}>Frequently Asked Questions</h3>
            <p><strong>What is the best spa in CDO?</strong><br/>Ayurveda Massage & Spa is a massage spa in Cagayan de Oro offering a variety of treatments including Ayurvedic, Swedish, Thai, deep tissue and hot stone massage.</p>
            <p><strong>Where can I get the best massage in CDO?</strong><br/>You can visit Ayurveda Massage & Spa in Cagayan de Oro for a selection of massage treatments designed for different relaxation preferences.</p>
            <p><strong>Does Ayurveda Massage & Spa offer Ayurvedic massage in CDO?</strong><br/>Yes. Ayurveda Massage & Spa offers Ayurvedic-inspired massage treatments using traditional wellness techniques and herbal oils.</p>
            <p><strong>Does Ayurveda Massage & Spa offer Thai massage?</strong><br/>Yes. Thai Massage is one of the massage treatments available at Ayurveda Massage & Spa CDO.</p>
            <p><strong>Does the spa offer hot stone massage in CDO?</strong><br/>Yes. Ayurveda Massage & Spa offers Hot Stone Massage as part of its range of massage treatments.</p>
            <p><strong>Is Ayurveda Massage & Spa affordable?</strong><br/>Ayurveda Massage & Spa offers different massage treatments at various price points, giving customers options based on their preferred treatment and budget.</p>
            <p><strong>Does Ayurveda Massage & Spa offer home massage in CDO?</strong><br/>Yes. Home and hotel massage services are available. Customers can contact Ayurveda Massage & Spa for availability and booking details.</p>
            <p><strong>What massage services are available at Ayurveda Massage & Spa?</strong><br/>Massage options include Ayurvedic Massage, Ayur Signature Massage, Swedish Massage, Thai Massage, Deep Tissue Massage, Hot Stone Massage, Lymphatic Massage, Hawaiian Veda Massage, Cupping/Ventosa Massage and Foot, Hand & Back Massage.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
