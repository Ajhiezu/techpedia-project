'use client';
import {useEffect,useRef} from 'react';
import {attachCompanionCutout} from '../../frontend/assets/companion-cutout.mjs';
import site from '../../frontend/content/site.json';
export default function FloatingWhatsApp(){
 const imageRef=useRef<HTMLImageElement>(null);
 useEffect(()=>{if(imageRef.current)return attachCompanionCutout(imageRef.current);},[]);
 const url=new URL(site.profile.contacts.whatsapp);url.searchParams.set('text','Halo Techpedia Project, saya ingin berdiskusi tentang kebutuhan aplikasi untuk bisnis saya.');
 return <div className="whatsapp-dock"><img ref={imageRef} className="whatsapp-companion" src="/assets/techpedia-whatsapp-poster.png" data-video="/assets/techpedia-whatsapp-mascot.webm" width={124} height={124} alt="" aria-hidden="true"/><a className="whatsapp-float" href={url.href} target="_blank" rel="noopener noreferrer" aria-label="Diskusi via WhatsApp, dibuka di tab baru" title="Diskusi via WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.5 4.1 1.6 5.9L.1 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.4Zm-8.4 18.2a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.3c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.8-.7-1.4-1.5-1.6-1.8-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.4.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg><span>Diskusi via WhatsApp</span></a></div>;
}
