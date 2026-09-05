'use client';
import { useEffect, useState, useRef } from 'react';

const testimonialsData = [
  {
    quote: "The calmest hour of my week. The room, the scent, the pressure — everything was just right.",
    author: "MARIANNE D."
  },
  {
    quote: "They actually listened to what I needed. I left feeling lighter and completely unhurried.",
    author: "JOSH R."
  },
  {
    quote: "Beautifully quiet space and genuinely skilled therapists. My go-to place after long weeks.",
    author: "AILEEN P."
  },
  {
    quote: "An absolute oasis in the middle of the city. The hot stone massage melted away months of stress.",
    author: "SARAH L."
  },
  {
    quote: "From the moment I walked in, I felt at peace. The attention to detail here is unmatched.",
    author: "DAVID K."
  },
  {
    quote: "The herbal ayurvedic massage was transformative. I've never felt so deeply relaxed and rejuvenated.",
    author: "EMMA T."
  },
  {
    quote: "Incredibly professional and hygienic. The therapists are intuitive and know exactly where you carry tension.",
    author: "MICHAEL B."
  },
  {
    quote: "A deeply restorative experience. I booked the signature massage and it was worth every penny.",
    author: "SOPHIA C."
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollTrackRef = useRef(null);

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

  const scrollLeft = () => {
    if (scrollTrackRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollTrackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollTrackRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        
        <div className="testimonials-header-wrapper fade-in-up">
          <div className="testimonials-header-text">
            <p className="section-subtitle">GUEST EXPERIENCES</p>
            <h2 className="section-title">Words From Our Guests</h2>
          </div>
          <div className="testimonials-arrows">
            <button className="carousel-arrow" onClick={scrollLeft} aria-label="Previous Testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="carousel-arrow" onClick={scrollRight} aria-label="Next Testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials-track-container slide-up-fade-delay-2">
          <div className="testimonials-track" ref={scrollTrackRef}>
            {testimonialsData.map((testimonial, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="testimonial-author">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
