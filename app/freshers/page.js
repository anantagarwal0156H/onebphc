'use client';
import { useState } from 'react';

export default function Freshers() {
  const [dark, setDark] = useState(false);

  const pages = [
   { href: '/freshers/links', title: 'Must-Know Apps & Websites', desc: 'Everything you need installed and bookmarked', color: 'bg-amber-100 text-amber-900' },
    
    
  ];

  const bg = dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900';
  const descColor = dark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = dark ? 'border-gray-700' : 'border-gray-200';

  return (
    <main className={`min-h-screen transition-colors duration-300 ${bg}`}>
      <div className="max-w-xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <a href="/" className={`text-sm mb-2 block ${descColor}`}>← Back</a>
            <h1 className="text-3xl font-bold tracking-tight">For Freshers</h1>
            <p className={`text-sm mt-1 ${descColor}`}>Everything before you arrive.</p>
          </div>
          <button onClick={() => setDark(!dark)} className={`text-sm px-4 py-2 rounded-full border transition ${borderColor} ${descColor}`}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
        </div>
        <div className="flex flex-col gap-4">
          {pages.map((page) => (
            <a key={page.href} href={page.href} className={`block w-full rounded-3xl p-6 transition active:scale-95 ${dark ? 'bg-gray-800 text-white' : page.color}`}>
              <div className="text-xl font-bold">{page.title}</div>
              <div className={`text-sm mt-1 ${dark ? 'text-gray-400' : 'opacity-70'}`}>{page.desc}</div>
            </a>
          ))}
        </div>
        <p className={`text-center text-xs mt-10 ${descColor}`}>OneBPHC — made with love for BPHC</p>
      </div>
    </main>
  );
}