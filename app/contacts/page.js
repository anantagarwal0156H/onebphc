'use client';
import { useState } from 'react';

const contacts = [
  {
    category: 'Medical',
    items: [
      { name: 'Medical Centre', number: '9010202850' },
      { name: 'Ambulance', number: '9640921921' },
    ],
  },
  {
    category: 'Security & Safety',
    items: [
      { name: 'Fire & Security', number: '9010202883' },
      { name: 'Fire & Security (Alt)', number: '04066303988' },
      { name: 'Electrical Emergency', number: '9912316753' },
    ],
  },
  {
    category: 'Pest Control',
    items: [
      { name: 'Snake & Pest Control', number: '8106866196' },
    ],
  },
];

export default function Contacts() {
  const [toast, setToast] = useState(null);
  const [pressed, setPressed] = useState(null);

  const copyNumber = (name, number) => {
    navigator.clipboard.writeText(number);
    setPressed(number);
    setToast(`${name} copied!`);
    setTimeout(() => {
      setToast(null);
      setPressed(null);
    }, 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateX(-50%) translateY(-8px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        .fade { opacity: 0; transform: translateY(12px); animation: fadeUp 0.3s ease forwards; }
        .section {
          border: 1px solid #222;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 12px;
        }
        .section-header {
          padding: 16px 22px;
          background: #161616;
          border-bottom: 1px solid #1e1e1e;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444;
        }
        .contact-card {
          width: 100%;
          text-align: left;
          padding: 16px 22px;
          background: #131313;
          border: none;
          border-bottom: 1px solid #1a1a1a;
          cursor: pointer;
          transition: background 0.15s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .contact-card:last-child { border-bottom: none; }
        .contact-card:hover { background: #181818; }
        .contact-card.copied { background: #1a1f1a; }
        .toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1e1e1e;
          border: 1px solid #2a2a2a;
          color: #c8c8c8;
          font-size: 13px;
          padding: 10px 20px;
          border-radius: 99px;
          animation: slideDown 0.2s ease forwards;
          z-index: 50;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      {toast && <div className="toast">✓ {toast}</div>}

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '48px 20px' }}>

        <div className="fade" style={{ marginBottom: '40px' }}>
          <a href="/" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#f0f0f0', letterSpacing: '-0.5px' }}>Important Contacts</h1>
          <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>Tap any contact to copy the number.</p>
        </div>

        <div>
          {contacts.map((section, i) => (
            <div key={section.category} className="section fade" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="section-header">{section.category}</div>
              {section.items.map((item) => (
                <button key={item.number} onClick={() => copyNumber(item.name, item.number)} className={`contact-card ${pressed === item.number ? 'copied' : ''}`}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#c8c8c8' }}>{item.name}</div>
                  <div style={{ fontSize: '18px', fontWeight: '600', color: pressed === item.number ? '#7a9e7a' : '#e8e8e8', marginTop: '2px', letterSpacing: '0.02em' }}>{item.number}</div>
                </button>
              ))}
            </div>
          ))}
        </div>

      </main>
    </>
  );
}