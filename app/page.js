'use client';



export default function Home() {

const pages = [

{ href: '/freshers', title: 'For Freshers', desc: 'Everything before you arrive' },

{ href: '/acaddrive', title: 'AcadDrive', desc: 'Academic resources by year' },



{ href: '/map', title: 'Campus Map', desc: 'Find any location on campus' },

{ href: '/outlets', title: 'Outlet Menus', desc: 'Food, timings and menus on campus' },

{ href: '/contacts', title: 'Important Contacts', desc: 'Admin, departments, helplines' },

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

padding: 20px 24px;

border-radius: 14px;

border: 1px solid #222;

background: #161616;

text-decoration: none;

transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

}

.card:hover {

border-color: #333;

background: #1c1c1c;

transform: translateY(-1px);

}

.card:active { transform: translateY(0px); }

`}</style>



<main style={{ minHeight: '100vh', color: '#e8e8e8', maxWidth: '520px', margin: '0 auto', padding: '48px 20px' }}>



<div style={{ marginBottom: '40px' }}>

<h1 style={{ fontSize: '26px', fontWeight: '600', color: '#f0f0f0', letterSpacing: '-0.5px' }}>OneBPHC</h1>

<p style={{ fontSize: '14px', color: '#555', marginTop: '4px' }}>Everything. One place.</p>

</div>



<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

{pages.map((page) => (

<a key={page.href} href={page.href} className="card">

<div style={{ fontSize: '15px', fontWeight: '500', color: '#e0e0e0' }}>{page.title}</div>

<div style={{ fontSize: '13px', color: '#555', marginTop: '3px' }}>{page.desc}</div>

</a>

))}

</div>



<div style={{ marginTop: '60px', textAlign: 'center' }}>

<p style={{ fontSize: '12px', color: '#333' }}>OneBPHC — made with love for BPHC</p>

<p style={{ fontSize: '12px', color: '#333', marginTop: '4px' }}>Built by Anant Agarwal(2025A7PS0156H)</p>


</div>



</main>

</>

);

}