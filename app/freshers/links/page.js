'use client';
import { useState } from 'react';

export default function Links() {
  const [dark, setDark] = useState(false);

  const websites = [
    { name: 'LMS (Moodle)', desc: 'Course material, assignments, grades', url: 'https://lms.erp.bits-pilani.ac.in/moodle/' },
    { name: 'ERP', desc: 'Academic portal — timetable, registration', url: 'https://erp.bits-pilani.ac.in/' },
    { name: 'H4U', desc: 'Comprehensive Resource Hub', url: 'https://h4u.app' },
    { name: 'Quiet Space', desc: 'Empty Classrooms', url: 'https://quietspace-mu.vercel.app/' },
  ];

  const facebook = [
    { name: 'BPHC Shoutbox', desc: 'Main campus Facebook group for announcements', url: 'https://www.facebook.com/groups/bphcshoutbox' },
  ];

  const apps = [
    { name: 'SWD App', desc: 'Student Welfare Division — payments, mess info', url: 'https://play.google.com/store/apps/details?id=in.ac.bits_hyderabad.swd.swd' },
    { name: 'CGPA Calculator', desc: 'Calculate and track your CGPA', url: 'https://play.google.com/store/apps/details?id=com.srijen.cgpa_calculator' },
  ];

  const bg = dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900';
  const descColor = dark ? 'text-gray-400' : 'text-gray-500';
  const borderColor = dark ? 'border-gray-700' : 'border-gray-200';
  const cardBg = dark ? 'bg-gray-800' : 'bg-white';
  const sectionColor = dark ? 'text-gray-400' : 'text-gray-400';

  const LinkCard = ({ item }) => (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={`block w-full rounded-2xl p-4 mb-3 border transition active:scale-95 ${cardBg} ${borderColor}`}>
      <div className="font-semibold">{item.name}</div>
      <div className={`text-sm mt-0.5 ${descColor}`}>{item.desc}</div>
    </a>
  );

  return (
    <main className={`min-h-screen transition-colors duration-300 ${bg}`}>
      <div className="max-w-xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <a href="/freshers" className={`text-sm mb-2 block ${descColor}`}>← Back</a>
            <h1 className="text-3xl font-bold tracking-tight">Must-Know Apps & Websites Links</h1>
            <p className={`text-sm mt-1 ${descColor}`}>Websites and apps you'll use every day.</p>
          </div>
          <button onClick={() => setDark(!dark)} className={`text-sm px-4 py-2 rounded-full border transition ${borderColor} ${descColor}`}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
        </div>

        <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${sectionColor}`}>Websites</p>
        {websites.map((item) => <LinkCard key={item.name} item={item} />)}

        <p className={`text-xs font-semibold uppercase tracking-widest mb-3 mt-6 ${sectionColor}`}>Facebook Groups</p>
        {facebook.map((item) => <LinkCard key={item.name} item={item} />)}

        <p className={`text-xs font-semibold uppercase tracking-widest mb-3 mt-6 ${sectionColor}`}>Apps</p>
        {apps.map((item) => <LinkCard key={item.name} item={item} />)}

        <p className={`text-center text-xs mt-10 ${descColor}`}>OneBPHC — made with love for BPHC</p>
      </div>
    </main>
  );
}