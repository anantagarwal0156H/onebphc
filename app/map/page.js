'use client';
import { useState, useEffect } from 'react';

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
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <div className="max-w-xl mx-auto px-5 py-10">
        <a href="/" className="text-sm text-gray-400 mb-2 block">← Back</a>
        <h1 className="text-3xl font-bold mb-1">Campus Map</h1>
        <p className="text-sm text-gray-500 mb-6">BITS Pilani Hyderabad Campus</p>

        <input type="text" placeholder="Search a location..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm mb-4 outline-none focus:border-violet-300"/>

        <div className="flex flex-wrap gap-2 mb-6">
          {filtered.map((loc) => (
            <button key={loc.name} onClick={() => setSelected(loc)} className={`px-3 py-1.5 rounded-full text-sm transition ${selected?.name === loc.name ? 'bg-violet-500 text-white' : 'bg-violet-100 text-violet-900'}`}>
              {loc.name}
            </button>
          ))}
        </div>

        {selected && (
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4 mb-6">
            <div className="font-bold text-violet-900">{selected.name}</div>
            <div className="text-sm text-violet-700 mt-0.5 mb-3">{selected.desc}</div>
            <a href={`https://www.google.com/maps?q=${selected.lat},${selected.lng}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-500 text-white text-sm px-4 py-2 rounded-full transition hover:bg-violet-600 active:scale-95">
              Open in Google Maps ↗
            </a>
          </div>
        )}

        {MapComponents ? (
          <div className="rounded-3xl overflow-hidden" style={{ height: '400px' }}>
            <MapComponents.MapContainer center={selected ? [selected.lat, selected.lng] : [17.5435, 78.5735]} zoom={selected ? 18 : 16} style={{ height: '100%', width: '100%' }} key={selected?.name}>
              <MapComponents.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {selected && (
                <MapComponents.Marker position={[selected.lat, selected.lng]}>
                  <MapComponents.Popup>{selected.name}<br />{selected.desc}</MapComponents.Popup>
                </MapComponents.Marker>
              )}
            </MapComponents.MapContainer>
          </div>
        ) : (
          <div className="rounded-3xl bg-gray-100 flex items-center justify-center" style={{ height: '400px' }}>
            <p className="text-gray-400 text-sm">Loading map...</p>
          </div>
        )}
      </div>
    </main>
  );
}