'use client';
import { useState } from 'react';

const outletGroups = [
  {
    category: 'Fast Food & Quick Bites',
    items: [
      { name: 'Yumpys', time: '11:00 AM - 11:00 PM', desc: 'The legendary spot for fried Maggi and burgers.', menu: [] },
      { name: 'Hotspot', time: '10:00 AM - 10:30 PM', desc: 'Maggi, quick snacks, and your daily caffeine fix.', menu: [] },
      { name: 'SFC', time: '12:00 PM - 10:30 PM', desc: 'Student Food Court. Burgers, pizzas, and fries.', menu: [] },
      { name: 'Wich Please', time: '10:00 AM - 10:00 PM', desc: 'Toasted sandwiches and subs.', menu: [] },
      { name: 'Waffle Trend', time: '4:00 PM - 11:00 PM', desc: 'Fresh waffles and desserts.', menu: [] },
      { name: 'C3', time: '9:00 AM - 11:00 PM', desc: 'Ice creams, milkshakes, and hot beverages.', menu: [] },
    ],
  },
  {
    category: 'Indian & Full Meals',
    items: [
      { name: 'Vijay Vahini', time: '11:00 AM - 10:30 PM', desc: 'Solid North Indian curries and rice dishes.', menu: [] },
      { name: 'Bitsian Pleasant', time: '12:00 PM - 10:30 PM', desc: 'The proper sit-down dining experience.', menu: [] },
      { name: 'Chat Bhandar', time: '4:00 PM - 10:00 PM', desc: 'Agra-style parathas and spicy chaat items.', menu: [] },
    ],
  },
  {
    category: 'Refreshments & Healthy',
    items: [
      { name: 'Fruitfull', time: '9:00 AM - 10:00 PM', desc: 'Fresh fruit juices and healthy fruit bowls.', menu: [] },
      { name: 'Protein Isle', time: '5:00 PM - 11:00 PM', desc: 'The gym-rat go-to. High-protein bowls.', menu: [] },
      { name: 'Tea Time', time: '8:00 AM - 9:00 PM', desc: 'Quick chai breaks and biscuits.', menu: [] },
      { name: 'Bits and Bytes', time: '9:00 AM - 10:00 PM', desc: 'Dependable sandwiches and South Indian snacks.', menu: [] },
    ],
  },
];

export default function Outlets() {
  const [activeOutlet, setActiveOutlet] = useState(null);

  const toggleMenu = (name) => {
    setActiveOutlet(activeOutlet === name ? null : name);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .fade { opacity: 0; transform: translateY(12px); animation: fadeUp 0.4s ease forwards; }
        
        .section { border: 1px solid #222; border-radius: 20px; overflow: hidden; margin-bottom: 28px; background: #141414; }
        .section-header { padding: 18px 22px; background: #1a1a1a; border-bottom: 1px solid #222; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #555; }
        
        .outlet-card { padding: 22px; border-bottom: 1px solid #1e1e1e; cursor: pointer; transition: background 0.2s ease; }
        .outlet-card:hover { background: #181818; }
        .outlet-card.active { background: #1a1a1a; }
        
        .menu-drawer { 
          max-height: 0; overflow: hidden; transition: all 0.3s ease-in-out; background: #0d0d0d; 
        }
        .menu-drawer.open { max-height: 2000px; padding: 12px 22px 24px; border-bottom: 1px solid #222; }
        
        .menu-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 14px; color: #ccc; }
        .menu-item:last-child { border-bottom: none; }
        
        .time-badge { display: inline-flex; align-items: center; padding: 4px 10px; background: #1e1e1e; border: 1px solid #282828; border-radius: 100px; font-size: 11px; color: #888; margin-top: 10px; }
        .status-dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; margin-right: 6px; }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '60px 24px' }}>
        <div className="fade" style={{ marginBottom: '40px' }}>
          <a href="/" style={{ fontSize: '14px', color: '#555', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '32px', fontWeight: '600', letterSpacing: '-0.8px' }}>Campus Outlets</h1>
          <p style={{ fontSize: '15px', color: '#555', marginTop: '6px' }}>Tap an outlet to see the menu.</p>
        </div>

        {outletGroups.map((group, gIdx) => (
          <div key={group.category} className="section fade" style={{ animationDelay: `${gIdx * 0.1}s` }}>
            <div className="section-header">{group.category}</div>
            {group.items.map((item) => (
              <div key={item.name}>
                <div 
                  className={`outlet-card ${activeOutlet === item.name ? 'active' : ''}`}
                  onClick={() => toggleMenu(item.name)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '17px', fontWeight: '600' }}>{item.name}</div>
                    <span style={{ color: '#444' }}>{activeOutlet === item.name ? '▲' : '▼'}</span>
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#666', marginTop: '4px' }}>{item.desc}</div>
                  <div className="time-badge"><span className="status-dot"></span>{item.time}</div>
                </div>

                <div className={`menu-drawer ${activeOutlet === item.name ? 'open' : ''}`}>
                  {item.menu.length > 0 ? (
                    item.menu.map((dish, dIdx) => (
                      <div key={dIdx} className="menu-item">
                        <span>{dish.item}</span>
                        <span style={{ color: '#888' }}>{dish.price}</span>
                      </div>
                    ))
                  ) : (
                    <div style={{ color: '#444', fontSize: '13px', textAlign: 'center', padding: '20px' }}>
                      Menu photo needed. Send it to me!
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>
    </>
  );
}