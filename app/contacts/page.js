'use client';
import { useState } from 'react';

const contacts = [
  {
    category: 'Medical',
    color: 'bg-rose-100',
    titleColor: 'text-rose-900',
    descColor: 'text-rose-700',
    cardBg: 'bg-rose-50 border-rose-200',
    numberColor: 'text-rose-900',
    items: [
      { name: 'Medical Centre', number: '9010202850' },
      { name: 'Ambulance', number: '9640921921' },
    ],
  },
  {
    category: 'Security & Safety',
    color: 'bg-amber-100',
    titleColor: 'text-amber-900',
    descColor: 'text-amber-700',
    cardBg: 'bg-amber-50 border-amber-200',
    numberColor: 'text-amber-900',
    items: [
      { name: 'Fire & Security', number: '9010202883' },
      { name: 'Fire & Security (Alt)', number: '04066303988' },
      { name: 'Electrical Emergency', number: '9912316753' },
    ],
  },
  {
    category: 'Pest Control',
    color: 'bg-green-100',
    titleColor: 'text-green-900',
    descColor: 'text-green-700',
    cardBg: 'bg-green-50 border-green-200',
    numberColor: 'text-green-900',
    items: [
      { name: 'Snake & Pest Control', number: '8106866196' },
    ],
  },
];

export default function Contacts() {
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState(null);

  const bg = dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900';
  const descColor = dark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = dark ? 'border-gray-700' : 'border-gray-200';

  const copyNumber = (name, number) => {
    navigator.clipboard.writeText(number);
    setToast(`${name} — ${number} copied!`);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${bg}`}>
      <div className="max-w-xl mx-auto px-5 py-10">

        {/* Toast */}
        {toast && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-5 py-3 rounded-full shadow-lg z-50 transition">
            ✓ {toast}
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          <div>
            <a href="/" className={`text-sm mb-2 block ${descColor}`}>← Back</a>
            <h1 className="text-3xl font-bold tracking-tight">Important Contacts</h1>
            <p className={`text-sm mt-1 ${descColor}`}>Tap any contact to copy the number.</p>
          </div>
          <button onClick={() => setDark(!dark)} className={`text-sm px-4 py-2 rounded-full border transition ${borderColor} ${descColor}`}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
        </div>

        <div className="flex flex-col gap-4">
          {contacts.map((section) => (
            <div key={section.category} className={`rounded-3xl p-5 ${section.color}`}>
              <div className={`text-xl font-bold mb-3 ${section.titleColor}`}>{section.category}</div>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <button key={item.number} onClick={() => copyNumber(item.name, item.number)} className={`w-full text-left rounded-2xl p-4 border transition active:scale-95 ${section.cardBg}`}>
                    <div className={`font-semibold text-sm ${section.numberColor}`}>{item.name}</div>
                    <div className={`text-lg font-bold mt-0.5 ${section.numberColor}`}>{item.number}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-xs mt-10 ${descColor}`}>OneBPHC — made with love for BPHC</p>
      </div>
    </main>
  );
}