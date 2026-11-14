(function(){
 'use strict';
 let cleanup=()=>{};
 function mount(){
  cleanup();
  const video=document.querySelector('.mascot-video');
  const idle=document.querySelector('.mascot-idle');
  const button=document.querySelector('.mascot-video-toggle');
  if(!video||!idle||!button)return;
  const frame=video.parentElement;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused=false,overrideMotion=false,visible=true,failed=false;
  let active=video,idleFailed=false;
  for(const clip of [video,idle]){clip.muted=true;clip.defaultMuted=true;}
  function label(){button.textContent=active.paused?'Putar animasi':'Jeda animasi';button.setAttribute('aria-label',active.paused?'Putar animasi maskot':'Jeda animasi maskot');}
  function sync(){
   const play=(!motion.matches||overrideMotion)&&!document.hidden&&visible&&!userPaused&&!failed;
   if(play){if(!video.getAttribute('src'))video.src=video.dataset.src;if(!idleFailed&&!idle.getAttribute('src')){idle.src=idle.dataset.src;idle.preload='auto';}active.play().catch(label);}else active.pause();
   label();
  }
  function toggle(){if(active.paused){userPaused=false;overrideMotion=true;}else{userPaused=true;overrideMotion=false;}sync();}
  function startIdle(){active=idle;sync();}
  function ended(){if(idleFailed||active===idle||frame.classList.contains('is-transitioning'))return;if(motion.matches){startIdle();return;}frame.classList.add('is-transitioning');}
  function transitionEnd(event){if(event.target!==frame)return;if(event.animationName==='mascot-slide-in'&&event.pseudoElement==='::after')startIdle();if(event.animationName==='mascot-slide-out'&&event.pseudoElement==='::before')frame.classList.remove('is-transitioning','is-revealing');}
  function reveal(){if(idle.classList.contains('is-active'))return;idle.classList.add('is-active');video.setAttribute('aria-hidden','true');idle.removeAttribute('aria-hidden');if(frame.classList.contains('is-transitioning'))frame.classList.add('is-revealing');}
  function idleError(){idleFailed=true;frame.classList.remove('is-transitioning','is-revealing');idle.classList.remove('is-active');video.removeAttribute('aria-hidden');idle.setAttribute('aria-hidden','true');if(active===idle){active=video;video.currentTime=video.duration;label();}button.hidden=video.ended;}
  function preference(){overrideMotion=false;if(motion.matches&&frame.classList.contains('is-transitioning')){frame.classList.remove('is-transitioning','is-revealing');active=idle;}sync();}
  function error(){failed=true;video.removeAttribute('src');video.load();button.hidden=true;}
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05});
  observer.observe(video);
  frame.addEventListener('animationend',transitionEnd);
  button.hidden=false;button.addEventListener('click',toggle);
  video.addEventListener('play',label);video.addEventListener('pause',label);video.addEventListener('error',error,{once:true});
  video.addEventListener('ended',ended);idle.addEventListener('playing',reveal);idle.addEventListener('play',label);idle.addEventListener('pause',label);idle.addEventListener('error',idleError,{once:true});
  motion.addEventListener('change',preference);document.addEventListener('visibilitychange',sync);
  cleanup=()=>{observer.disconnect();frame.removeEventListener('animationend',transitionEnd);frame.classList.remove('is-transitioning','is-revealing');motion.removeEventListener('change',preference);document.removeEventListener('visibilitychange',sync);button.removeEventListener('click',toggle);video.removeEventListener('play',label);video.removeEventListener('pause',label);video.removeEventListener('error',error);video.removeEventListener('ended',ended);idle.removeEventListener('playing',reveal);idle.removeEventListener('play',label);idle.removeEventListener('pause',label);idle.removeEventListener('error',idleError);video.pause();idle.pause();};
  sync();
 }
 window.TechpediaMascot={mount};
})();
