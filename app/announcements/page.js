async function getAnnouncements() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'Active',
          checkbox: { equals: true },
        },
        sorts: [{ property: 'Date', direction: 'descending' }],
      }),
      cache: 'no-store',
    }
  );

  const data = await response.json();

  return data.results.map((page) => ({
    id: page.id,
    title: page.properties.Name?.title[0]?.plain_text || '',
    description: page.properties.Description?.rich_text[0]?.plain_text || '',
    date: page.properties.Date?.date?.start || '',
    image: page.properties.Image?.url || null,
  }));
}

export default async function Announcements() {
  const announcements = await getAnnouncements();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'DM Sans', sans-serif; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        .fade { opacity: 0; transform: translateY(12px); animation: fadeUp 0.3s ease forwards; }
        .card {
          border: 1px solid #222;
          border-radius: 16px;
          overflow: hidden;
          background: #161616;
          margin-bottom: 12px;
        }
        .card-body { padding: 18px 20px; }
        .card-image { width: 100%; display: block; max-height: 300px; object-fit: cover; }
        .date-badge {
          display: inline-block;
          font-size: 11px;
          color: #444;
          margin-bottom: 8px;
          letter-spacing: 0.05em;
        }
        .empty {
          text-align: center;
          padding: 60px 20px;
          color: #333;
          font-size: 14px;
        }
      `}</style>

      <main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '48px 20px' }}>

        <div className="fade" style={{ marginBottom: '40px' }}>
          <a href="/" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>← Back</a>
          <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#f0f0f0', letterSpacing: '-0.5px' }}>Announcements</h1>
          <p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>Campus updates in one place.</p>
        </div>

        {announcements.length === 0 ? (
          <div className="empty fade">No announcements yet.</div>
        ) : (
          <div>
            {announcements.map((item, i) => (
              <div key={item.id} className="card fade" style={{ animationDelay: `${i * 0.07}s` }}>
                {item.image && (
                  <img src={item.image} alt={item.title} className="card-image" />
                )}
                <div className="card-body">
                  {item.date && (
                    <span className="date-badge">
                      {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  )}
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#e0e0e0', marginBottom: '6px' }}>{item.title}</div>
                  {item.description && (
                    <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>{item.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </>
  );
}