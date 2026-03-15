'use client';
import { useState } from 'react';
import { useTheme } from './context/Themecontext';

export default function Home() {
const { dark, toggleDark } = useTheme();
  const pages = [
    { href: '/freshers', title: 'For Freshers', desc: 'Everything before you arrive', color: 'bg-rose-100 text-rose-900' },
{ href: '/map', title: 'Campus Map', desc: 'Find any location on campus', color: 'bg-blue-100 text-blue-900' },
    { href: '/acaddrive', title: 'AcadDrive', desc: 'Access your academic drive', color: 'bg-orange-100 text-orange-900' },
    { href: '/contacts', title: 'Important Contacts', desc: 'Admin, departments, helplines', color: 'bg-amber-100 text-amber-900' },
    { href: '/announcements', title: 'Announcements', desc: 'Campus updates in one place', color: 'bg-green-100 text-green-900' },
    { href: '/outlets', title: 'Outlet Menus', desc: 'Food, timings and menus on campus', color: 'bg-orange-100 text-orange-900' },
  ];

  const bg = dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900';
  const descColor = dark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = dark ? 'border-gray-700' : 'border-gray-200';

  return (
    <main className={`min-h-screen transition-colors duration-300 ${bg}`}>
      <div className="max-w-xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">OneBPHC</h1>
            <p className={`text-sm mt-1 ${descColor}`}>Everything. One place.</p>
          </div>
          <button onClick={toggleDark} className={`text-sm px-4 py-2 rounded-full border transition ${borderColor} ${descColor}`}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
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
<p className={`text-center text-xs mt-2 ${descColor}`}>Built by Anant Agarwal</p>
<p className={`text-center text-xs mt-1 ${descColor}`}>Inspired by <a href="https://campus101-sable.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">Campus101</a> and <a href="https://litelelo.in" target="_blank" rel="noopener noreferrer" className="underline">Litelelo</a></p>      </div>
    </main>
  );
}