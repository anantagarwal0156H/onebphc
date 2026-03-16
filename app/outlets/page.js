'use client';

const outletGroups = [
  {
    category: 'Fast Food & Quick Bites',
    items: [
      { name: 'Yumpys', time: '11:00 AM - 11:00 PM', desc: 'The legendary spot for fried Maggi and burgers. A campus staple.' },
      { name: 'Hotspot', time: '10:00 AM - 10:30 PM', desc: 'Maggi, quick snacks, and your daily caffeine fix.' },
      { name: 'SFC', time: '12:00 PM - 10:30 PM', desc: 'Student Food Court. Think burgers, pizzas, and crispy fries.' },
      { name: 'Wich Please', time: '10:00 AM - 10:00 PM', desc: 'Toasted sandwiches and subs for a lighter meal.' },
      { name: 'Waffle Trend', time: '4:00 PM - 11:00 PM', desc: 'Fresh waffles and desserts for the late-night sweet tooth.' },
    ],
  },
  {
    category: 'Indian & Full Meals',
    items: [
      { name: 'Vijay Vahini', time: '11:00 AM - 10:30 PM', desc: 'Solid North Indian curries and rice dishes. Perfectly oily, perfectly BITSian.' },
      { name: 'Bitsian Pleasant', time: '12:00 PM - 10:30 PM', desc: 'The proper sit-down dining experience for a break from the mess.' },
      { name: 'Chat Bhandar', time: '4:00 PM - 10:00 PM', desc: 'Agra-style parathas and spicy chaat items.' },
    ],
  },
  {
    category: 'Refreshments & Healthy',
    items: [
      { name: 'Fruitfull', time: '9:00 AM - 10:00 PM', desc: 'Fresh fruit juices and healthy fruit bowls.' },
      { name: 'Protein Isle', time: '5:00 PM - 11:00 PM', desc: 'The gym-rat go-to. Boiled eggs, chicken, and high-protein bowls.' },
      { name: 'C3 (Amul)', time: '9:00 AM - 11:00 PM', desc: 'Ice creams, milkshakes, and hot beverages by the acad block.' },
      { name: 'Tea Time', time: '8:00 AM - 9:00 PM', desc: 'Quick chai breaks and biscuits between lectures.' },
      { name: 'Bits and Bytes', time: '9:00 AM - 10:00 PM', desc: 'Dependable sandwiches, juices, and South Indian snacks.' },
    ],
  },
];

export default function Outlets() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        @keyframes fadeUp { 
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade { opacity: 0; animation: fadeUp 0.4s ease forwards; }
        
        .section {
          border: 1px solid #222;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 28px;
          background: #141414;
        }
        .section-header {
          padding: 18px 22px;
          background: #1a1a1a;
          border-bottom: 1px solid #222;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #666;
        }
        .outlet-card {
          padding: 22px;
          border-bottom: 1px solid #1e1e1e;
          transition: all 0.2s ease;
        }
        .outlet-card:last-child { border-bottom: none; }
        .outlet-card:hover { background: #181818; }
        
        .time-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          background: #1e1e1e;
          border: 1px solid #282828;
          border-radius: 100px;
          font-size: 11px;
          color: #999;
          margin-top: 10px;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          background: #4ade80;
          border-radius: 50%;
          margin-right: 6px;
        }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '60px 24px' }}>

        <div className="fade" style={{ marginBottom: '48px' }}>
          <a href="/" style={{ fontSize: '14px', color: '#666', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
            <span>←</span> Back
          </a>
          <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#fff', letterSpacing: '-0.8px' }}>Campus Outlets</h1>
          <p style={{ fontSize: '15px', color: '#777', marginTop: '6px', fontWeight: '400' }}>Where to eat when the mess food fails you.</p>
        </div>

        <div>
          {outletGroups.map((group, groupIdx) => (
            <div key={group.category} className="section fade" style={{ animationDelay: `${groupIdx * 0.15}s` }}>
              <div className="section-header">{group.category}</div>
              {group.items.map((item) => (
                <div key={item.name} className="outlet-card">
                  <div style={{ fontSize: '17px', fontWeight: '600', color: '#efefef' }}>{item.name}</div>
                  <div style={{ fontSize: '13.5px', color: '#666', marginTop: '6px', lineHeight: '1.6' }}>{item.desc}</div>
                  <div className="time-badge">
                    <span className="status-dot"></span>
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </main>
    </>
  );
}