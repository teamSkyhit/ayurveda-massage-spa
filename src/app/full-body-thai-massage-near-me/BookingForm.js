'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    treatment: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Provided EmailJS Keys
    const SERVICE_ID = 'service_i2h82eb';
    const TEMPLATE_ID = 'template_bxgdgga';
    const PUBLIC_KEY = 'hjLXq5MC66R977QFn';

    setStatus({ submitting: true, success: false, error: null });

    emailjs.init("hjLXq5MC66R977QFn");

    const templateParams = {
      from_name: formData.name,
      mobile_number: formData.mobile,
      treatment: formData.treatment,
      message: formData.message,
      page_url: window.location.href,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', mobile: '', treatment: '', message: '' }); // Reset form
        window.location.href = '/thank-you';
      }, (error) => {
        console.log('FAILED...', error);
        setStatus({ submitting: false, success: false, error: error.text });
      });
  };

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <input 
          type="text" 
          name="name"
          placeholder="Full Name" 
          className={styles.formInput} 
          required 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="tel" 
          name="mobile"
          placeholder="Mobile Number" 
          className={styles.formInput} 
          required 
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      
      <select 
        name="treatment"
        className={styles.formInput} 
        required 
        value={formData.treatment}
        onChange={handleChange}
      >
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

      <textarea 
        name="message"
        placeholder="Message / Special Request" 
        className={styles.formInput}
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      
      <button 
        type="submit" 
        className={styles.btnSubmit} 
        style={{ display: 'block', width: '100%' }}
        disabled={status.submitting}
      >
        {status.submitting ? 'SENDING...' : 'REQUEST MY APPOINTMENT'}
      </button>
      
      {status.success && (
        <p className={styles.formNotice} style={{ color: '#2ecc71', fontWeight: 'bold' }}>
          Your request has been sent successfully! We will contact you soon.
        </p>
      )}
      
      {status.error && (
        <p className={styles.formNotice} style={{ color: '#e74c3c', fontWeight: 'bold' }}>
          Something went wrong. Please try again or contact us via WhatsApp.
        </p>
      )}
      
      {!status.success && !status.error && (
        <p className={styles.formNotice}>We'll contact you to confirm your appointment.</p>
      )}
    </form>
  );
}
