'use client';
import { useState } from 'react';

export default function AcadDrive() {
  const [dark, setDark] = useState(false);

  const bg = dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900';
  const descColor = dark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = dark ? 'border-gray-700' : 'border-gray-200';

  const years = [
    {
      year: 'First Year',
      desc: 'Academic resources, notes and drives for first year students',
      color: 'bg-blue-100',
      titleColor: 'text-blue-900',
      descColor: 'text-blue-700',
      linkBg: 'bg-blue-50 border-blue-200 text-blue-900',
      linkDesc: 'text-blue-600',
      links: [
        { name: 'First Year Resource Drive', desc: 'Notes, papers and study material', url: 'https://drive.google.com/drive/u/1/folders/1YaAKJbJfEqx6ganFsnRNiylYtTzy15OA' },
      ],
    },
    {
      year: 'Second Year',
      desc: 'Academic resources, notes and drives for second year students',
      color: 'bg-violet-100',
      titleColor: 'text-violet-900',
      descColor: 'text-violet-700',
      linkBg: 'bg-violet-50 border-violet-200 text-violet-900',
      linkDesc: 'text-violet-600',
      links: [],
    },
    {
      year: 'Third Year',
      desc: 'Academic resources, notes and drives for third year students',
      color: 'bg-amber-100',
      titleColor: 'text-amber-900',
      descColor: 'text-amber-700',
      linkBg: 'bg-amber-50 border-amber-200 text-amber-900',
      linkDesc: 'text-amber-600',
      links: [],
    },
  ];

  return (
    <main className={`min-h-screen transition-colors duration-300 ${bg}`}>
      <div className="max-w-xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <a href="/" className={`text-sm mb-2 block ${descColor}`}>← Back</a>
            <h1 className="text-3xl font-bold tracking-tight">AcadDrive</h1>
            <p className={`text-sm mt-1 ${descColor}`}>Academic resources by year.</p>
          </div>
          <button onClick={() => setDark(!dark)} className={`text-sm px-4 py-2 rounded-full border transition ${borderColor} ${descColor}`}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
        </div>

        <div className="flex flex-col gap-4">
          {years.map((section) => (
            <div key={section.year} className={`rounded-3xl p-5 ${section.color}`}>
              <div className={`text-xl font-bold mb-0.5 ${section.titleColor}`}>{section.year}</div>
              <div className={`text-sm mb-4 ${section.descColor}`}>{section.desc}</div>
              {section.links.length > 0 ? (
                section.links.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`block w-full rounded-2xl p-4 border transition active:scale-95 ${section.linkBg}`}>
                    <div className="font-semibold text-sm">{link.name}</div>
                    <div className={`text-xs mt-0.5 ${section.linkDesc}`}>{link.desc}</div>
                  </a>
                ))
              ) : (
                <p className={`text-sm ${section.descColor} opacity-60`}>No resources added yet.</p>
              )}
            </div>
          ))}
        </div>

        <p className={`text-center text-xs mt-10 ${descColor}`}>OneBPHC — made with love for BPHC</p>
      </div>
    </main>
  );
}