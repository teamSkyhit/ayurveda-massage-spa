export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <p className="section-subtitle">OUR PROCESS</p>
          <h2 className="section-title">Your Journey with Us</h2>
        </div>
        
        <div className="process-timeline">
          <div className="timeline-line" style={{ top: '50px' }}></div>
          <div className="timeline-steps">
            
            <div className="timeline-step" style={{ position: 'relative', zIndex: 2 }}>
              <img src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-choose-your-treatment.png" alt="Choose Your Treatment" className="step-icon" style={{ width: '100px', height: '100px', marginBottom: '1.5rem', objectFit: 'contain', background: '#ffffff', borderRadius: '50%' }} />
              <h3 className="step-number">01.</h3>
              <h4 className="step-title">Choose Your Treatment</h4>
              <p className="step-desc" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.6 }}>Explore our range of Ayurvedic therapies and select the perfect massage to restore your body's natural balance.</p>
            </div>
            
            <div className="timeline-step" style={{ position: 'relative', zIndex: 2 }}>
              <img src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-book-your-slot.png" alt="Book Your Slot" className="step-icon" style={{ width: '100px', height: '100px', marginBottom: '1.5rem', objectFit: 'contain', background: '#ffffff', borderRadius: '50%' }} />
              <h3 className="step-number">02.</h3>
              <h4 className="step-title">Book Your Slot</h4>
              <p className="step-desc" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.6 }}>Schedule your appointment online or contact us to reserve a time that perfectly fits your day.</p>
            </div>
            
            <div className="timeline-step" style={{ position: 'relative', zIndex: 2 }}>
              <img src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-enjoy-your-session.png" alt="Enjoy Your Session" className="step-icon" style={{ width: '100px', height: '100px', marginBottom: '1.5rem', objectFit: 'contain', background: '#ffffff', borderRadius: '50%' }} />
              <h3 className="step-number">03.</h3>
              <h4 className="step-title">Enjoy Your Session</h4>
              <p className="step-desc" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.6 }}>Arrive at our peaceful sanctuary and let our expert therapists melt your stress away with restorative techniques.</p>
            </div>
            
            <div className="timeline-step" style={{ position: 'relative', zIndex: 2 }}>
              <img src="https://slategrey-bee-869726.hostingersite.com/images/ayurveda-spa-massage-leave-refreshed.png" alt="Leave Refreshed" className="step-icon" style={{ width: '100px', height: '100px', marginBottom: '1.5rem', objectFit: 'contain', background: '#ffffff', borderRadius: '50%' }} />
              <h3 className="step-number">04.</h3>
              <h4 className="step-title">Leave Refreshed</h4>
              <p className="step-desc" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.6 }}>Gently return to your day with a clear mind, feeling deeply nourished, revitalized, and completely renewed.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
