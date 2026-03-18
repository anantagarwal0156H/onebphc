'use client';

export default function Home() {
  const pages = [
    { href: '/freshers', title: 'For Freshers', desc: 'Everything before you arrive' },
    { href: '/acaddrive', title: 'AcadDrive', desc: 'Academic resources by year' },
    { href: '/map', title: 'Campus Map', desc: 'Find any location on campus' },
    { href: '/outlets', title: 'Outlet Menus', desc: 'Food, timings and menus on campus' },
    { href: '/contacts', title: 'Important Contacts', desc: 'Admin, departments, helplines' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { 
          background: #000; 
          font-family: 'VT323', monospace; 
          color: #FFFFF0; 
          image-rendering: pixelated;
        }

        .container {
          max-width: 520px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .header {
          margin-bottom: 48px;
        }

        .title {
          font-size: 42px;
          text-transform: uppercase;
          color: #FFFFF0;
          letter-spacing: -1px;
        }

        .subtitle {
          font-size: 20px;
          color: #555;
          margin-top: 4px;
        }

        .card-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card {
          display: block;
          width: 100%;
          padding: 20px 24px;
          border: 2px solid #222;
          background: #080808;
          text-decoration: none;
          transition: all 0.1s steps(2); /* Stepped transition for that retro feel */
        }

        .card:hover {
          border-color: #FFFFF0;
          background: #111;
          transform: translateY(-2px);
        }

        .card-title {
          font-size: 24px;
          font-weight: 500;
          color: #FFFFF0;
        }

        .card-desc {
          font-size: 18px;
          color: #555;
          margin-top: 4px;
        }

        .footer {
          margin-top: 80px;
          text-align: center;
          border-top: 2px solid #222;
          padding-top: 24px;
        }

        .footer-text {
          font-size: 16px;
          color: #333;
          text-transform: uppercase;
        }
      `}</style>

      <main className="container">
        <div className="header">
          <h1 className="title">OneBPHC</h1>
          <p className="subtitle">Everything. One place.</p>
        </div>

        <div className="card-stack">
          {pages.map((page) => (
            <a key={page.href} href={page.href} className="card">
              <div className="card-title">{page.title}</div>
              <div className="card-desc">{page.desc}</div>
            </a>
          ))}
        </div>

        <div className="footer">
          <p className="footer-text">Made with love for BPHC</p>
          <p className="footer-text" style={{ marginTop: '8px' }}>
            Built by Anant Agarwal (2025A7PS0156H)
          </p>
        </div>
      </main>
    </>
  );
}