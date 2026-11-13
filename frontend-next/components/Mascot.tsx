'use client';
import {useEffect,useRef,useState} from 'react';
export default function Mascot(){
 const ref=useRef<HTMLVideoElement>(null);
 const toggleRef=useRef<()=>void>(()=>{});
 const [playing,setPlaying]=useState(false),[failed,setFailed]=useState(false);
 useEffect(()=>{
  const video=ref.current;if(!video)return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused=false,overrideMotion=false,visible=true,hasError=false;
  video.muted=true;video.defaultMuted=true;
  const update=()=>setPlaying(!video.paused);
  const sync=()=>{if((!motion.matches||overrideMotion)&&!document.hidden&&visible&&!userPaused&&!hasError){if(!video.getAttribute('src'))video.src='/assets/techpedia-mascot.mp4';video.play().catch(update);}else video.pause();update();};
  const preference=()=>{overrideMotion=false;sync();};
  const error=()=>{hasError=true;video.removeAttribute('src');video.load();setFailed(true);};
  toggleRef.current=()=>{if(video.paused){userPaused=false;overrideMotion=true;}else{userPaused=true;overrideMotion=false;}sync();};
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05});observer.observe(video);
  video.addEventListener('play',update);video.addEventListener('pause',update);video.addEventListener('error',error,{once:true});
  motion.addEventListener('change',preference);document.addEventListener('visibilitychange',sync);sync();
  return ()=>{observer.disconnect();motion.removeEventListener('change',preference);document.removeEventListener('visibilitychange',sync);video.removeEventListener('play',update);video.removeEventListener('pause',update);video.removeEventListener('error',error);video.pause();};
 },[]);
 return <figure className="mascot-stage"><div className="mascot-orbit" aria-hidden="true"/><div className="mascot-portrait mascot-video-frame"><video ref={ref} className="mascot-video" width={2944} height={1248} autoPlay muted loop playsInline preload="metadata" poster="/assets/techpedia-mascot-poster.png" aria-label="Animasi maskot Techpedia dengan laptop">Browser Anda tidak mendukung video.</video></div><span className="mascot-chip mascot-code" aria-hidden="true">&lt;/&gt; <span>Ide menjadi aplikasi</span></span><span className="mascot-chip mascot-spark" aria-hidden="true">&#10022; <span>Solusi lewat teknologi</span></span><figcaption className="mascot-caption"><span aria-hidden="true"/> TEMAN DIGITAL ANDA</figcaption><button type="button" className="mascot-video-toggle" hidden={failed} onClick={()=>toggleRef.current()} aria-label={playing?'Jeda animasi maskot':'Putar animasi maskot'}>{playing?'Jeda animasi':'Putar animasi'}</button></figure>;
}
