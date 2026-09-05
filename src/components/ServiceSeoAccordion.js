'use client';

import { useState } from 'react';

export default function ServiceSeoAccordion({ title, text, benefits }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (!title) return null;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem 2rem' }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: isHovered ? '#c39c6b' : '#fff',
            border: '1px solid #c39c6b',
            color: isHovered ? '#fff' : '#c39c6b',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: '1.25rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            borderRadius: '50px',
          }}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
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
            {text && text.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: '1rem' }}>{paragraph}</p>
            ))}
            
            {benefits && benefits.length > 0 && (
              <>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '1.5rem', fontWeight: '600', color: '#c39c6b' }}>KEY BENEFITS</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  {benefits.map((benefit, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
