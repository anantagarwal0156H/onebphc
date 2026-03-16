'use client';

export default function Freshers() {
  const pages = [
        { href: '/freshers/links', title: 'Must-Know Websites & Apps', desc: 'Everything you need installed and bookmarked' },
    { href: '/freshers/what-to-bring', title: 'What to Bring', desc: 'Packing list before you arrive' },
    { href: '/freshers/fun-on-campus', title: 'Fun Things on Campus', desc: 'Things to do and explore' },
    { href: '/outlets', title: 'Campus Outlets', desc: 'Food and shops on campus' },
    { href: '/outside', title: 'Places Outside Campus', desc: 'Hotels, clubs, go-karting and more' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'DM Sans', sans-serif; }
        .card {
          display: block;
          width: 100%;
          padding: 20px 24px;
          border-radius: 14px;
          border: 1px solid #222;
          background: #161616;
          text-decoration: none;
          opacity: 0;
          transform: translateY(12px);
          animation: fadeUp 0.3s ease forwards;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .card:hover {
          border-color: #333;
          background: #1c1c1c;
          transform: translateY(-1px);
        }
        .card:active { transform: translateY(0px); }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '48px 20px' }}>

        <div style={{ marginBottom: '40px', opacity: 0, animation: 'fadeUp 0.3s ease forwards' }}>
          <a href="/" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#f0f0f0', letterSpacing: '-0.5px' }}>For Freshers</h1>
          <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>Everything before you arrive.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {pages.map((page, i) => (
            <a key={page.href} href={page.href} className="card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#e0e0e0' }}>{page.title}</div>
              <div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>{page.desc}</div>
            </a>
          ))}
        </div>

      </main>
    </>
  );
}