'use client';

export default function AcadDrive() {
  const years = [
    {
      year: 'First Year',
      desc: 'Notes, papers and study material for first years',
      links: [
        { name: 'First Year Resource Drive', desc: 'Tap to open — notes, papers and study material', url: 'https://drive.google.com/drive/u/1/folders/1YaAKJbJfEqx6ganFsnRNiylYtTzy15OA' },
      ],
    },
    {
      year: 'Second Year',
      desc: 'Academic resources for second year students',
      links: [],
    },
    {
      year: 'Third Year',
      desc: 'Academic resources for third year students',
      links: [],
    },
  ];

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
          margin-bottom: 12px;
        }
        .section-header {
          padding: 20px 22px;
          border-bottom: 1px solid #1e1e1e;
          background: #161616;
        }
        .section-body { padding: 12px; background: #131313; }
        .drive-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #222;
          background: #1a1a1a;
          text-decoration: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .drive-link:hover { border-color: #333; background: #1f1f1f; }
        .drive-link:active { transform: scale(0.99); }
        .arrow { color: #444; font-size: 16px; }
        .empty { padding: 12px 16px; font-size: 13px; color: #333; }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '48px 20px' }}>

        <div className="fade" style={{ marginBottom: '40px' }}>
          <a href="/" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#f0f0f0', letterSpacing: '-0.5px' }}>AcadDrive</h1>
          <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>Academic resources by year.</p>
        </div>

        <div>
          {years.map((section, i) => (
            <div key={section.year} className="section fade" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="section-header">
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#e0e0e0' }}>{section.year}</div>
                <div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>{section.desc}</div>
              </div>
              <div className="section-body">
                {section.links.length > 0 ? (
                  section.links.map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="drive-link">
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '500', color: '#e0e0e0' }}>{link.name}</div>
                        <div style={{ fontSize: '12px', color: '#555', marginTop: '2px' }}>{link.desc}</div>
                      </div>
                      <span className="arrow">↗</span>
                    </a>
                  ))
                ) : (
                  <p className="empty">No resources added yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}