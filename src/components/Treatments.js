'use client';
import Link from 'next/link';

export default function Treatments() {
  const allTreatments = [
    {
      title: 'Ayur Signature Massage',
      desc: 'A balanced full-body experience combining relaxation, stretching and flowing massage techniques.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/affordable-spa-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-01.png',
      gridCol: 'span 3', height: '500px',
      price: '500', duration: '60 mins'
    },
    {
      title: 'Hawaiian Veda Massage',
      desc: 'Long, flowing movements designed to create a deeply calming and restorative experience.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/massage-under-500-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-02.png',
      gridCol: 'span 3', height: '500px',
      price: '600', duration: '60 mins'
    },
    {
      title: 'Classic Swedish Massage',
      desc: 'Gentle rhythmic techniques created to help the body unwind and release everyday tension.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/400-peso-massage-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-03.png',
      gridCol: 'span 2', height: '460px',
      price: '400', duration: '60 mins'
    },
    {
      title: 'Royal Thai Massage',
      desc: 'Traditional stretching and pressure techniques for flexibility, mobility and relaxation.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/massage-400-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-04.png',
      gridCol: 'span 2', height: '460px',
      price: '450', duration: '60 mins'
    },
    {
      title: 'Deep Tissue Massage',
      desc: 'Focused techniques for areas carrying deeper muscular tension.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/home-massage-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-05.png',
      gridCol: 'span 2', height: '460px',
      price: '450', duration: '60 mins'
    },
    {
      title: 'Lymphatic Massage',
      desc: 'A gentle, slow-paced massage experience designed around comfort and relaxation.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/home-service-massage-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-6.png',
      gridCol: 'span 3', height: '420px',
      price: '500', duration: '60 mins'
    },
    {
      title: 'Herbal Ayurvedic Massage',
      desc: 'An Ayurvedic-inspired massage experience complemented by herbal oils.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/massage-home-service-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-7.png',
      gridCol: 'span 3', height: '420px',
      price: '600', duration: '60 mins'
    },
    {
      title: 'Hot Stone Massage',
      desc: 'Warm stones and slow massage techniques for a deeply comforting spa ritual.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/massage-at-home-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-8.png',
      gridCol: 'span 4', height: '600px',
      price: '700', duration: '75 mins'
    },
    {
      title: 'Cupping / Ventosa Massage',
      desc: 'A wellness session combining massage with traditional cupping techniques.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/home-massage-cagayan-de-oro.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-9.png',
      gridCol: 'span 2', height: '600px',
      price: '600', duration: '60 mins'
    },
    {
      title: 'Foot, Hand & Back Massage',
      desc: 'Focused care for areas that often carry everyday stress and fatigue.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/hotel-massage-cdo.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-10.png',
      gridCol: 'span 3', height: '420px',
      price: '400', duration: '60 mins'
    },
    {
      title: 'Home & Hotel Services',
      desc: 'Enjoy selected massage experiences from the comfort of your home or hotel.',
      img: 'https://slategrey-bee-869726.hostingersite.com/images/hotel-massage-cagayan-de-oro.webp',
      icon: 'https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-icon-11.png',
      gridCol: 'span 3', height: '420px',
      price: '999', duration: '60 mins'
    }
  ];

  return (
    <section className="treatments-section" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '6rem 4rem', backgroundColor: '#fbf9f4' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .treatment-card-new:hover .t-card-bg {
          transform: scale(1.05) !important;
        }
        .treatment-card-new:hover .t-card-overlay {
          background: linear-gradient(to bottom, rgba(146, 92, 30, 0.9) 0%, rgba(91, 54, 26, 0.9) 100%) !important;
        }
        .treatment-card-new .t-card-top,
        .treatment-card-new .t-card-bottom {
          position: relative !important;
          bottom: auto !important;
          left: auto !important;
          right: auto !important;
          transform: none !important;
        }
        .treatment-card-new:hover .t-card-top {
          transform: none !important;
        }
        .treatment-card-new:hover .t-card-bottom {
          opacity: 1 !important;
          max-height: 320px !important;
          margin-top: 1.5rem !important;
          pointer-events: auto !important;
          transform: none !important;
        }
        .treatment-card-new .t-card-top {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .treatment-card-new .t-card-desc {
          text-align: left;
        }
        .t-card-price-row, .t-card-btn-row {
          justify-content: flex-start !important;
        }
        @media (max-width: 1024px) {
          .treatment-card-new {
            grid-column: span 3 !important;
            height: 520px !important;
          }
        }
        @media (max-width: 768px) {
          .treatment-card-new {
            grid-column: span 6 !important;
            height: 550px !important;
          }
          .t-card-content {
            padding: 1.5rem !important;
          }
          .treatment-card-new:hover .t-card-bottom {
            max-height: 400px !important;
          }
          .treatment-card-new .t-card-top {
            align-items: center;
            text-align: center;
          }
          .treatment-card-new .t-card-desc {
            text-align: center;
          }
          .t-card-price-row, .t-card-btn-row {
            justify-content: center !important;
          }
        }
      `}} />
      <div className="treatments-bg-overlay" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', opacity: 0.05, pointerEvents: 'none' }}>
        <img src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-hero-bg-flower.png" alt="cdo massage" className="treatments-bg-flower" style={{ width: '800px', height: 'auto' }} />
      </div>

      <div className="treatments-header" style={{ position: 'relative', zIndex: 10 }}>
        <p className="section-subtitle" style={{ color: '#c39c6b', fontWeight: 'bold' }}>OUR TREATMENTS</p>
        <h2 className="section-title" style={{ fontFamily: 'var(--font-saudagar), serif', fontSize: '4rem', color: '#333' }}>
          Massage Experiences for Every<br />Kind of Pause
        </h2>
        <p className="section-description" style={{ marginBottom: '3rem' }}>
          Choose a treatment based on how you want to feel — relaxed, refreshed, restored or simply<br />
          cared for.
        </p>
      </div>

      <div className="treatments-container" style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto' }}>
        <div 
          className="treatments-grid-new" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(6, 1fr)', 
            gap: '2.5rem',
            width: '100%'
          }}
        >
          {allTreatments.map((card, idx) => (
            <div 
              className="treatment-card-new" 
              key={idx} 
              style={{ 
                position: 'relative', 
                width: '100%', 
                gridColumn: card.gridCol,
                height: card.height, 
                borderRadius: '40px', 
                overflow: 'hidden', 
                cursor: 'pointer', 
                background: '#000',
                display: 'block'
              }}
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="t-card-bg" 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  zIndex: 1,
                  transition: 'transform 0.5s ease'
                }} 
              />
              <div 
                className="t-card-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.85) 100%)',
                  zIndex: 2,
                  transition: 'background 0.5s ease'
                }}
              ></div>
              
              <div 
                className="t-card-content"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#fff',
                  zIndex: 3
                }}
              >
                <div className="t-card-top" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', flexShrink: 0 }}>
                  <img src={card.icon} alt={`${card.title} icon`} className="t-card-icon" style={{ width: '50px', height: '50px', marginBottom: '1rem', objectFit: 'contain' }} />
                  <h3 className="t-card-title" style={{ fontFamily: 'var(--font-saudagar), serif', fontSize: '2rem', marginBottom: '0.5rem', lineHeight: 1.1 }}>{card.title}</h3>
                  <p className="t-card-subtitle" style={{ fontSize: '1rem', opacity: 0.9 }}>Restore the skills to rebuild the life</p>
                </div>
                
                  <div className="t-card-bottom" style={{ maxHeight: 0, margin: 0, opacity: 0, overflow: 'hidden', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: 'none', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                    <p className="t-card-desc" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>{card.desc}</p>
                  </div>
                  <div className="t-card-price-row" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.2rem', paddingBottom: '1.2rem', pointerEvents: 'auto', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>₱</span>
                      <span>{card.price}</span>
                    </div>
                    <div style={{ color: '#fff', opacity: 0.6, fontSize: '1.2rem', margin: '0 0.5rem' }}>|</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', letterSpacing: '0.5px', lineHeight: 1 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }}>
                        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{card.duration}</span>
                    </div>
                  </div>
                  <div className="t-card-btn-row" style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: '1.5rem', flexShrink: 0, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <a href="https://wa.link/xvmbyd" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', backgroundColor: '#113f23', color: '#fff', height: '48px', padding: '0 1.5rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 'bold', textDecoration: 'none', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WHATSAPP
                    </a>
                    <a href="tel:+639638649151" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', backgroundColor: '#d69a55', border: '1px solid #d69a55', color: '#fff', height: '48px', padding: '0 1.5rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#d69a55'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      CALL
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
