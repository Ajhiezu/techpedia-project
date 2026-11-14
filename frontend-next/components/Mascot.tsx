'use client';
import {useEffect,useRef,useState} from 'react';
export default function Mascot(){
 const ref=useRef<HTMLVideoElement>(null);
 const idleRef=useRef<HTMLVideoElement>(null);
 const toggleRef=useRef<()=>void>(()=>{});
 const [playing,setPlaying]=useState(false),[failed,setFailed]=useState(false);
 useEffect(()=>{
  const video=ref.current,idle=idleRef.current;if(!video||!idle)return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused=false,overrideMotion=false,visible=true,hasError=false;
  let active=video,idleFailed=false;
  for(const clip of [video,idle]){clip.muted=true;clip.defaultMuted=true;}
  const update=()=>setPlaying(!active.paused);
  const sync=()=>{if((!motion.matches||overrideMotion)&&!document.hidden&&visible&&!userPaused&&!hasError){if(!video.getAttribute('src'))video.src='/assets/techpedia-mascot.mp4';if(!idleFailed&&!idle.getAttribute('src')){idle.src='/assets/techpedia-mascot-idle.mp4';idle.preload='auto';}active.play().catch(update);}else active.pause();update();};
  const preference=()=>{overrideMotion=false;sync();};
  const error=()=>{hasError=true;video.removeAttribute('src');video.load();setFailed(true);};
  toggleRef.current=()=>{if(active.paused){userPaused=false;overrideMotion=true;}else{userPaused=true;overrideMotion=false;}sync();};
  const ended=()=>{if(idleFailed)return;active=idle;sync();};
  const reveal=()=>{idle.classList.add('is-active');video.setAttribute('aria-hidden','true');idle.removeAttribute('aria-hidden');};
  const idleError=()=>{idleFailed=true;idle.classList.remove('is-active');video.removeAttribute('aria-hidden');idle.setAttribute('aria-hidden','true');if(active===idle){active=video;video.currentTime=video.duration;update();}setFailed(video.ended);};
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05});observer.observe(video);
  video.addEventListener('play',update);video.addEventListener('pause',update);video.addEventListener('error',error,{once:true});
  video.addEventListener('ended',ended);idle.addEventListener('playing',reveal);idle.addEventListener('play',update);idle.addEventListener('pause',update);idle.addEventListener('error',idleError,{once:true});
  motion.addEventListener('change',preference);document.addEventListener('visibilitychange',sync);sync();
  return ()=>{observer.disconnect();motion.removeEventListener('change',preference);document.removeEventListener('visibilitychange',sync);video.removeEventListener('play',update);video.removeEventListener('pause',update);video.removeEventListener('error',error);video.removeEventListener('ended',ended);idle.removeEventListener('playing',reveal);idle.removeEventListener('play',update);idle.removeEventListener('pause',update);idle.removeEventListener('error',idleError);video.pause();idle.pause();};
 },[]);
 return <figure className="mascot-stage"><div className="mascot-orbit" aria-hidden="true"/><div className="mascot-portrait mascot-video-frame"><video ref={ref} className="mascot-video" width={2944} height={1248} muted playsInline preload="none" poster="/assets/techpedia-mascot-poster.png" aria-label="Animasi maskot Techpedia dengan laptop">Browser Anda tidak mendukung video.</video><video ref={idleRef} className="mascot-video mascot-idle" width={960} height={960} muted loop playsInline preload="none" aria-hidden="true" aria-label="Animasi idle maskot Techpedia dengan laptop"/></div><span className="mascot-chip mascot-code" aria-hidden="true">&lt;/&gt; <span>Ide menjadi aplikasi</span></span><span className="mascot-chip mascot-spark" aria-hidden="true">&#10022; <span>Solusi lewat teknologi</span></span><figcaption className="mascot-caption"><span aria-hidden="true"/> TEMAN DIGITAL ANDA</figcaption><button type="button" className="mascot-video-toggle" hidden={failed} onClick={()=>toggleRef.current()} aria-label={playing?'Jeda animasi maskot':'Putar animasi maskot'}>{playing?'Jeda animasi':'Putar animasi'}</button></figure>;
}
