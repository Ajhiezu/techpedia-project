 'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <section className="empty" role="alert"><h1>Informasi ini sedang tidak tersedia.</h1><p>Silakan coba lagi.</p><button className="button" onClick={reset}>Coba lagi</button></section>;}
