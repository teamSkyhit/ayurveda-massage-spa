'use client';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Booking() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setStatus('Booking...');

  //   // Provided EmailJS IDs
  //   const serviceID = 'service_i2h82eb';
  //   const templateID = 'template_bxgdgga';
  //   const publicKey = 'hjLXq5MC66R977QFn';

  //   emailjs.init(publicKey);

  //   emailjs
  //     .sendForm(serviceID, templateID, form.current, {
  //       publicKey: publicKey,
  //     })
  //     .then(
  //       () => {
  //         setStatus('Booking request sent successfully!');
  //         form.current.reset();
  //         window.location.href = '/thank-you';
  //       },
  //       (error) => {
  //         setStatus(`Failed to send request. Please try again. (${error.text})`);
  //       },
  //     );
  // };

  const sendEmail = async (e) => {
  e.preventDefault();
  setStatus('Booking...');

  const serviceID = 'service_i2h82eb';
  const templateID = 'template_bxgdgga';
  const publicKey = 'hjLXq5MC66R977QFn';

  // Your Google Apps Script Web App URL
  const googleSheetURL = 'https://script.google.com/macros/s/AKfycbxFCo2rk-3tVAohd134xTJAwSyNmme_W2CSmtNGeYXvNUKICoF0DRKcrMo9Tz42YSiy/exec';

  emailjs.init(publicKey);

  try {
    // 1. Send email using EmailJS
    await emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      {
        publicKey: publicKey,
      }
    );

    // 2. Get form values
    const formData = new FormData(form.current);

    const data = {
      from_name: formData.get('from_name'),
      mobile_number: formData.get('mobile_number'),
      user_email: formData.get('user_email'),
      treatment: formData.get('treatment'),
      message: formData.get('message'),
      page_url: formData.get('page_url'),
    };

    // 3. Send data to Google Sheet
    await fetch(googleSheetURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    // 4. Success
    setStatus('Booking request sent successfully!');

    form.current.reset();

    window.location.href = '/thank-you';

  } catch (error) {
    console.error(error);

    setStatus(
      `Failed to send request. Please try again. (${error.text || error.message})`
    );
  }
};

  return (
    <section className="booking-section" ref={sectionRef} id="book">
      <div className={`booking-container ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        
        {/* Left Image */}
        <div className="booking-image-wrapper">
          <img 
            src="https://ayurvedaspa.ph/images/affordable-massage-cdo.webp" 
            alt="thai massage spa near me" 
            className="booking-image" 
            loading="lazy"
            width="450"
            height="528"
          />
        </div>

        {/* Right Form */}
        <div className="booking-form-wrapper">
          <div className="booking-header">
            <img 
              src="https://ayurvedaspa.ph/images/ayurveda-massage-spa-lotus.gif" 
              alt="thai spa" 
              className="booking-lotus" 
              loading="lazy"
              width="100"
              height="100"
            />
            <h2 className="booking-title">Book an Appointment</h2>
            <p className="booking-subtitle">
              Your life is waiting. Fast, long-lasting relief is nearby.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="booking-form">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Your Name" 
              required 
              className="form-input" 
            />
            
            <div className="form-row">
              <input 
                type="tel" 
                name="mobile_number" 
                placeholder="Your Phone" 
                required 
                className="form-input" 
              />
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                required 
                className="form-input" 
              />
            </div>
            
            <select name="treatment" required className="form-input form-select" defaultValue="">
              <option value="" disabled>Choose Treatment</option>
              <option value="Ayur Signature Massage">Ayur Signature Massage</option>
              <option value="Hawaiian Veda Massage">Hawaiian Veda Massage</option>
              <option value="Classic Swedish Massage">Classic Swedish Massage</option>
              <option value="Royal Thai Massage">Royal Thai Massage</option>
              <option value="Deep Tissue Massage">Deep Tissue Massage</option>
              <option value="Lymphatic Massage">Lymphatic Massage</option>
              <option value="Herbal Ayurvedic Massage">Herbal Ayurvedic Massage</option>
              <option value="Hot Stone Massage">Hot Stone Massage</option>
              <option value="Cupping / Ventosa Massage">Cupping / Ventosa Massage</option>
              <option value="Foot Hand & Back Massage">Foot Hand & Back Massage</option>
              <option value="Home and Hotel Services">Home and Hotel Services</option>
            </select>

            {/* <select name="outlet" required className="form-input form-select">
              <option value="">Select Outlet</option>
              <option value="Downtown Spa">Downtown Spa</option>
              <option value="Westside Retreat">Westside Retreat</option>
              <option value="Home Service">Home & Hotel Service</option>
            </select>
            
            <div className="form-row-datetime">
              <input 
                type="date" 
                name="booking_date" 
                required 
                className="form-input" 
                style={{ flex: 2 }}
              />
              <select name="booking_hour" required className="form-input form-select" style={{ flex: 1 }}>
                <option value="">Hour</option>
                {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
              <select name="booking_minute" required className="form-input form-select" style={{ flex: 1 }}>
                <option value="">Min</option>
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
            </div> */}

            <textarea 
              name="message" 
              placeholder="Your Message / Special Requests" 
              className="form-input" 
              rows="4" 
              style={{ resize: 'none' }}
            ></textarea>

            <input type="hidden" name="page_url" value={typeof window !== 'undefined' ? window.location.href : ''} />

            <button type="submit" className="form-submit-btn" disabled={status === 'Booking...'}>
              {status === 'Booking...' ? 'Booking...' : 'Book Online'}
            </button>
            
            {status && (
              <p className={`form-status ${status.includes('success') ? 'status-success' : 'status-error'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
