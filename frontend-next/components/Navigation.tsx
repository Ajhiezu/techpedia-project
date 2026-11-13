 'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
const links=[['/','Beranda'],['/services','Layanan'],['/portfolio','Proyek'],['/about','Tentang Kami'],['/contact','Kontak']];
export default function Navigation(){
 const [open,setOpen]=useState(false);const path=usePathname();const toggle=useRef<HTMLButtonElement>(null);const menu=useRef<HTMLElement>(null);
 useEffect(()=>{setOpen(false);},[path]);
 useEffect(()=>{if(open)menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();},[open]);
 return <><header className="header"><Link className="brand" href="/"><Image className="brand-logo" src="/logo.png" alt="" width={30} height={30}/><b className="brand-name">Techpedia <i>Project</i></b></Link><nav className="desktop-nav" aria-label="Navigasi utama">{links.map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined}>{label}</Link>)}</nav><Link className="button small header-cta" href="/contact">Konsultasikan proyek</Link><button ref={toggle} className="menu-toggle" aria-label="Buka atau tutup navigasi" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>Menu</button></header><aside ref={menu} id="mobile-navigation" className="mobile-nav" hidden={!open} aria-label="Navigasi seluler" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}if(e.key==='Tab'){const items=menu.current?.querySelectorAll<HTMLElement>('a,button');if(!items?.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}}><button className="mobile-close" onClick={()=>{setOpen(false);toggle.current?.focus();}}>Tutup</button>{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</aside></>;
}
