(function(){
 'use strict';
 let cleanup=()=>{};
 function mount(){
  cleanup();
  const video=document.querySelector('.mascot-video');
  const button=document.querySelector('.mascot-video-toggle');
  if(!video||!button)return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused=false,overrideMotion=false,visible=true,failed=false;
  video.muted=true;video.defaultMuted=true;
  function label(){button.textContent=video.paused?'Putar animasi':'Jeda animasi';button.setAttribute('aria-label',video.paused?'Putar animasi maskot':'Jeda animasi maskot');}
  function sync(){
   const play=(!motion.matches||overrideMotion)&&!document.hidden&&visible&&!userPaused&&!failed;
   if(play){if(!video.getAttribute('src'))video.src=video.dataset.src;video.play().catch(label);}else video.pause();
   label();
  }
  function toggle(){if(video.paused){userPaused=false;overrideMotion=true;}else{userPaused=true;overrideMotion=false;}sync();}
  function preference(){overrideMotion=false;sync();}
  function error(){failed=true;video.removeAttribute('src');video.load();button.hidden=true;}
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05});
  observer.observe(video);
  button.hidden=false;button.addEventListener('click',toggle);
  video.addEventListener('play',label);video.addEventListener('pause',label);video.addEventListener('error',error,{once:true});
  motion.addEventListener('change',preference);document.addEventListener('visibilitychange',sync);
  cleanup=()=>{observer.disconnect();motion.removeEventListener('change',preference);document.removeEventListener('visibilitychange',sync);button.removeEventListener('click',toggle);video.removeEventListener('play',label);video.removeEventListener('pause',label);video.removeEventListener('error',error);video.pause();};
  sync();
 }
 window.TechpediaMascot={mount};
})();
