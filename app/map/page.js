'use client';
import { useState, useEffect, useRef } from 'react';

export const dynamic = 'force-dynamic';

const locations = [
  { name: 'Medical Centre', lat: 17.5420, lng: 78.5764, desc: 'Campus medical centre' },
  { name: 'SAC', lat: 17.5409, lng: 78.5753, desc: 'Student Activity Centre' },
  { name: 'Mess 1', lat: 17.5424, lng: 78.5738, desc: 'Main mess' },
  { name: 'Mess 2', lat: 17.5449, lng: 78.5752, desc: 'Second mess' },
  { name: 'Library', lat: 17.5458, lng: 78.5715, desc: 'Central library' },
  { name: 'Connaught Place', lat: 17.5420, lng: 78.5758, desc: 'Central hub, popular for gatherings' },
  { name: 'Auditorium', lat: 17.5455, lng: 78.5709, desc: 'Main auditorium' },
  { name: 'Fountain', lat: 17.5469, lng: 78.5721, desc: 'Campus fountain area' },
  { name: "Lover's Lane", lat: 17.5468, lng: 78.5730, desc: 'Popular walking path' },
  { name: 'Road Not Taken', lat: 17.5408, lng: 78.5740, desc: 'Scenic campus road' },
  { name: 'Swimming Pool', lat: 17.5402, lng: 78.5768, desc: 'Campus swimming pool' },
  { name: 'Rock Garden', lat: 17.5445, lng: 78.5730, desc: 'Rock garden area' },
  { name: "Director's Quarter", lat: 17.5429, lng: 78.5765, desc: "Director's residence" },
  { name: 'Old Football Ground', lat: 17.5436, lng: 78.5750, desc: 'Old football ground' },
  { name: 'New Football Ground', lat: 17.5410, lng: 78.5762, desc: 'New football ground' },
  { name: 'Cricket Ground', lat: 17.5398, lng: 78.5773, desc: 'Cricket ground' },
  { name: 'Volleyball Court', lat: 17.5430, lng: 78.5753, desc: 'Volleyball court' },
  { name: 'Chess Courtyard', lat: 17.5459, lng: 78.5696, desc: 'New academic block / Chess Courtyard' },
  { name: 'Library Lawns', lat: 17.5452, lng: 78.5712, desc: 'Old academic block / Library Lawns' },
  { name: 'Valmiki Bhavan', lat: 17.5458, lng: 78.5747, desc: 'Hostel' },
  { name: 'Gautam Bhavan', lat: 17.5416, lng: 78.5752, desc: 'Hostel' },
  { name: 'Krishna / Ram Bhavan', lat: 17.5427, lng: 78.5740, desc: 'Hostel' },
  { name: 'Gandhi Bhavan', lat: 17.5425, lng: 78.5743, desc: 'Hostel' },
  { name: 'Vishwakarma Bhavan', lat: 17.5450, lng: 78.5764, desc: 'Hostel' },
  { name: 'Shankar Bhavan', lat: 17.5447, lng: 78.5749, desc: 'Hostel' },
  { name: 'Vyas Bhavan', lat: 17.5445, lng: 78.5753, desc: 'Hostel' },
  { name: 'Malviya Bhavan', lat: 17.5410, lng: 78.5748, desc: 'Hostel' },
  { name: 'Meera Bhavan', lat: 17.5416, lng: 78.5740, desc: "Girls' hostel" },
  { name: 'Ganga Bhavan', lat: 17.5419, lng: 78.5734, desc: "Girls' hostel" },
];

export default function CampusMap() {

  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [MapComponents, setMapComponents] = useState(null);
  const mapRef = useRef(null);

  const handleLocationClick = (loc) => {
    setSelected(loc);

    setTimeout(() => {
      mapRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  useEffect(() => {

    import('leaflet').then((L) => {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    });

    import('react-leaflet').then((rl) => {
      setMapComponents({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        Marker: rl.Marker,
        Popup: rl.Popup,
      });
    });

  }, []);

  const filtered = locations.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

      <main style={{
        minHeight: '100vh',
        color: '#e8e8e8',
        maxWidth: '520px',
        margin: '0 auto',
        padding: '48px 20px'
      }}>

        <h1 style={{ marginBottom: 20 }}>Campus Map</h1>

        <input
          type="text"
          placeholder="Search a location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px"
          }}
        />

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px"
        }}>
          {filtered.map((loc) => (
            <button
              key={loc.name}
              onClick={() => handleLocationClick(loc)}
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                border: "1px solid #333",
                background: selected?.name === loc.name ? "#fff" : "#222",
                color: selected?.name === loc.name ? "#000" : "#fff",
                cursor: "pointer"
              }}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {selected && (
          <div style={{
            padding: "15px",
            border: "1px solid #333",
            borderRadius: "12px",
            marginBottom: "20px"
          }}>
            <strong>{selected.name}</strong>
            <p>{selected.desc}</p>

            <a
              href={`https://www.google.com/maps?q=${selected.lat},${selected.lng}`}
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "8px",
                padding: "6px 12px",
                background: "#fff",
                color: "#000",
                borderRadius: "20px",
                textDecoration: "none"
              }}
            >
              Open in Google Maps
            </a>
          </div>
        )}

        {MapComponents ? (
          <div
            ref={mapRef}
            style={{
              borderRadius: "16px",
              overflow: "hidden"
            }}
          >
            <MapComponents.MapContainer
              center={selected ? [selected.lat, selected.lng] : [17.5435, 78.5735]}
              zoom={selected ? 18 : 16}
              style={{ height: "400px", width: "100%" }}
              key={selected?.name}
            >

              <MapComponents.TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {selected && (
                <MapComponents.Marker position={[selected.lat, selected.lng]}>
                  <MapComponents.Popup>
                    {selected.name}<br />
                    {selected.desc}
                  </MapComponents.Popup>
                </MapComponents.Marker>
              )}

            </MapComponents.MapContainer>
          </div>
        ) : (
          <p>Loading map...</p>
        )}

      </main>
    </>
  );
}