'use client';
import { useState } from 'react';

const outlets = [
  {
    category: 'Fast Food & Snacks',
    items: [
      { name: 'YUMPY', time: '10:00 AM - 11:00 PM', desc: 'Burgers, fries, and quick bites near the library.' },
      { name: 'Bits & Bytes', time: '9:00 AM - 10:00 PM', desc: 'Juices, sandwiches and snacks.' },
      { name: 'Hot Mess', time: '4:00 PM - 2:00 AM', desc: 'Late night cravings and snacks.' },
      { name: 'Subway', time: '10:00 AM - 10:00 PM', desc: 'Fresh subs and salads.' },
    ],
  },
  {
    category: 'Dining & Canteens',
    items: [
      { name: 'ANC (All Night Canteen)', time: '8:00 PM - 2:00 AM', desc: 'The legendary late-night spot for parathas and maggi.' },
      { name: 'Food Court', time: '11:00 AM - 10:30 PM', desc: 'Multiple stalls including South Indian, Chinese, and North Indian.' },
      { name: 'VMC / SMC', time: 'Per Mess Timings', desc: 'Student and Vendor mess outlets.' },
    ],
  },
  {
    category: 'Daily Essentials',
    items: [
      { name: 'C-Mart', time: '10:00 AM - 9:00 PM', desc: 'General store for groceries and toiletries.' },
      { name: 'Stationery Shop', time: '9:30 AM - 8:00 PM', desc: 'Books, printouts, and lab supplies.' },
      { name: 'Fruit Shop', time: '10:00 AM - 10:00 PM', desc: 'Fresh fruits and juices.' },
    ],
  },
];

export default function Outlets() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .fade { opacity: 0; transform: translateY(12px); animation: fadeUp 0.3s ease forwards; }
        
        .section {
          border: 1px solid #222;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 24px;
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
        .outlet-card {
          padding: 20px 22px;
          background: #131313;
          border-bottom: 1px solid #1a1a1a;
          transition: background 0.15s ease;
        }
        .outlet-card:last-child { border-bottom: none; }
        .outlet-card:hover { background: #181818; }
        
        .time-badge {
          display: inline-block;
          padding: 4px 8px;
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 6px;
          font-size: 11px;
          color: #888;
          margin-top: 8px;
        }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '48px 20px' }}>

        <div className="fade" style={{ marginBottom: '40px' }}>
          <a href="/" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#f0f0f0', letterSpacing: '-0.5px' }}>Campus Outlets</h1>
          <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>Food, shops and essential services.</p>
        </div>

        <div>
          {outlets.map((section, i) => (
            <div key={section.category} className="section fade" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="section-header">{section.category}</div>
              {section.items.map((item) => (
                <div key={item.name} className="outlet-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#e0e0e0' }}>{item.name}</div>
                  </div>
                  <div style={{ fontSize: '13px', color: '#555', marginTop: '4px', lineHeight: '1.5' }}>{item.desc}</div>
                  <div className="time-badge">🕒 {item.time}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </main>
    </>
  );
}