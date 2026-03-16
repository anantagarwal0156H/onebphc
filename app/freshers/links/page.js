'use client';

export default function Links() {
  const websites = [
    { name: 'LMS (Moodle)', desc: 'Course material, assignments, grades', url: 'https://lms.erp.bits-pilani.ac.in/moodle/' },
    { name: 'ERP', desc: 'Academic portal — timetable, registration', url: 'https://erp.bits-pilani.ac.in/' },
    { name: 'H4U', desc: 'Campus health and wellness portal', url: 'https://h4u.app' },
    { name: 'Quiet Space', desc: 'Focus and productivity tool', url: 'https://quietspace-mu.vercel.app/' },
  ];

  const apps = [
    { name: 'SWD App', desc: 'Student Welfare Division — payments, mess info', url: 'https://play.google.com/store/apps/details?id=in.ac.bits_hyderabad.swd.swd' },
    { name: 'CGPA Calculator', desc: 'Calculate and track your CGPA', url: 'https://play.google.com/store/apps/details?id=com.srijen.cgpa_calculator' },
  ];

  const facebook = [
    { name: 'BPHC Shoutbox', desc: 'Main campus group for announcements', url: 'https://www.facebook.com/groups/bphcshoutbox' },
    { name: 'BPHC Sh*t Posting', desc: 'Campus memes and fun', url: 'https://www.facebook.com/share/g/1beutaNggj/' },
    { name: 'Lost and Found', desc: 'Lost something? Check here', url: 'https://www.facebook.com/share/g/1AdDyyFhmU/' },
    { name: 'Buy and Sell', desc: 'Campus marketplace', url: 'https://www.facebook.com/share/g/1DSpvDov1r/' },
    { name: 'VMC — Vendor Mess Council', desc: 'Vendor mess updates and info', url: 'https://www.facebook.com/share/g/1FkVBkkbYT/' },
    { name: 'SMC — Student Mess Council', desc: 'Student mess updates and info', url: 'https://www.facebook.com/share/g/18VwycrmxF/' },
    { name: 'BPHC Free Expression', desc: 'Open expression group', url: 'https://www.facebook.com/share/g/18A5ZBbh8K/' },
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
          padding: 18px 22px;
          border-radius: 14px;
          border: 1px solid #222;
          background: #161616;
          text-decoration: none;
          opacity: 0;
          transform: translateY(12px);
          animation: fadeUp 0.3s ease forwards;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .card:hover { border-color: #333; background: #1c1c1c; transform: translateY(-1px); }
        .card:active { transform: translateY(0px); }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 10px;
          margin-top: 28px;
        }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '48px 20px' }}>

        <div style={{ marginBottom: '40px', opacity: 0, animation: 'fadeUp 0.3s ease forwards' }}>
          <a href="/freshers" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#f0f0f0', letterSpacing: '-0.5px' }}>Websites & Apps</h1>
          <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>Everything you need bookmarked and installed.</p>
        </div>

        <p className="section-label">Websites</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {websites.map((item, i) => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#e0e0e0' }}>{item.name}</div>
              <div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>{item.desc}</div>
            </a>
          ))}
        </div>

        <p className="section-label">Apps</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {apps.map((item, i) => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#e0e0e0' }}>{item.name}</div>
              <div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>{item.desc}</div>
            </a>
          ))}
        </div>

        <p className="section-label">Facebook Groups</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {facebook.map((item, i) => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#e0e0e0' }}>{item.name}</div>
              <div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>{item.desc}</div>
            </a>
          ))}
        </div>

      </main>
    </>
  );
}