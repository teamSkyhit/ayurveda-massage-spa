'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    treatment: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === 'mobile') {
      value = value.replace(/[^0-9+\- ()]/g, '');
    }
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_i2h82eb';
    const TEMPLATE_ID = 'template_bxgdgga';
    const PUBLIC_KEY = 'hjLXq5MC66R977QFn';
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxFCo2rk-3tVAohd134xTJAwSyNmme_W2CSmtNGeYXvNUKICoF0DRKcrMo9Tz42YSiy/exec';

    setStatus({
      submitting: true,
      success: false,
      error: null
    });

    emailjs.init(PUBLIC_KEY);

    const templateParams = {
      from_name: formData.name,
      mobile_number: formData.mobile,
      user_email: formData.email,
      treatment: formData.treatment,
      message: formData.message,
      page_url: window.location.href,
    };

    try {
      // Run both network requests concurrently to speed up submission
      await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY),
        fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(templateParams),
        })
      ]);

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', mobile: '', email: '', treatment: '', message: '' });
      window.location.href = '/thank-you';

    } catch (error) {
      console.error('FAILED...', error);
      setStatus({ submitting: false, success: false, error: error.text || error.message || 'Failed to send message.' });
    }
  };

  return (
    <div className={styles.formColumn}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Send Us a Message</h2>
        <div className={styles.formDivider}>
          <img src="https://ayurvedaspa.ph/images/ayurveda-spa-massage-underline.png" alt="divider" />
        </div>
      </div>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={styles.inputField} required />
          </div>
          <div className={styles.inputGroup}>
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Your Phone" className={styles.inputField} required />
          </div>
        </div>
        
        <div className={styles.inputGroup}>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className={styles.inputField} required />
        </div>

        <div className={styles.inputGroup}>
          <select name="treatment" value={formData.treatment} onChange={handleChange} className={styles.inputField} required>
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
        </div>

        <div className={styles.inputGroup}>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className={styles.inputField} required></textarea>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={status.submitting}>
          {status.submitting ? (
            'Sending...'
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Send Message
            </>
          )}
        </button>
        {status.error && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{status.error}</p>}
      </form>
    </div>
  );
}
