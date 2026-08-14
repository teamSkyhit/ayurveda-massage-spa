export default function Features() {
  const features = [
    {
      title: "Personalised Care",
      desc: "Treatments centred around your comfort and preferences.",
      icon: (
        <img src="https://slategrey-bee-869726.hostingersite.com/images/spa-near-me.gif" alt="thai massage near me" style={{ width: '90px', height: '90px', marginBottom: '1.5rem', objectFit: 'contain' }} />
      )
    },
    {
      title: "Experienced Therapists",
      desc: "Professional service delivered with care and attention.",
      icon: (
        <img src="https://slategrey-bee-869726.hostingersite.com/images/body-massage-near-me.gif" alt="thailand massage" style={{ width: '90px', height: '90px', marginBottom: '1.5rem', objectFit: 'contain' }} />
      )
    },
    {
      title: "Natural Wellness Products",
      desc: "Thoughtfully selected oils and spa essentials.",
      icon: (
        <img src="https://slategrey-bee-869726.hostingersite.com/images/thai-massage-near-me.gif" alt="thailand massage near me" style={{ width: '90px', height: '90px', marginBottom: '1.5rem', objectFit: 'contain' }} />
      )
    },
    {
      title: "Calm & Hygienic Spaces",
      desc: "A peaceful environment designed for comfort and privacy.",
      icon: (
        <img src="https://slategrey-bee-869726.hostingersite.com/images/swedish-massage-near-me.gif" alt="thai spa near me" style={{ width: '90px', height: '90px', marginBottom: '1.5rem', objectFit: 'contain' }} />
      )
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <p className="section-subtitle">WHY AYURVEDA</p>
          <h2 className="section-title">Care in Every Detail</h2>
        </div>
        <div className="features-grid" style={{ gap: '3rem' }}>
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              {feature.icon}
              <h3 className="feature-title" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '400', marginBottom: '1rem' }}>{feature.title}</h3>
              <p className="feature-desc" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
