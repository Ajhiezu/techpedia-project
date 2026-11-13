// Display the supplied animation with its green backdrop keyed out at render time.
export function attachVideoCompanion(image){
 const dock=image.closest('.whatsapp-dock'),motion=matchMedia('(prefers-reduced-motion: reduce)');
 const canvas=document.createElement('canvas'),context=canvas.getContext('2d',{willReadFrequently:true});
 canvas.width=320;canvas.height=320;canvas.className='whatsapp-companion whatsapp-companion-cutout';canvas.setAttribute('aria-hidden','true');
 const video=document.createElement('video');video.muted=true;video.defaultMuted=true;video.loop=true;video.playsInline=true;video.preload='metadata';
 let disposed=false,visible=true,request=0,last=0,frame=0,ready=false;
 function draw(source){
  if(disposed)return;
  context.clearRect(0,0,320,320);context.drawImage(source,0,0,320,320);
  const pixels=context.getImageData(0,0,320,320),rgba=pixels.data;
  for(let i=0;i<rgba.length;i+=4){
   const other=Math.max(rgba[i],rgba[i+2]),excess=rgba[i+1]-other;
   if(rgba[i+1]>90&&excess>30){rgba[i+3]=Math.round(rgba[i+3]*Math.max(0,(60-excess)/30));if(rgba[i+3])rgba[i+1]=Math.min(rgba[i+1],other+8);}
  }
  context.putImageData(pixels,0,0);canvas.dataset.frame=String(frame++);
  if(!ready){ready=true;image.hidden=true;image.after(canvas);dock.dataset.cutout='ready';}
 }
 function stop(){cancelAnimationFrame(request);request=0;last=0;}
 function tick(time){
  if(disposed||motion.matches||document.hidden||!visible||video.paused){stop();return;}
  if(video.readyState>=2&&time-last>=30){draw(video);last=time;}
  request=requestAnimationFrame(tick);
 }
 function start(){if(!request)request=requestAnimationFrame(tick);}
 function sync(){
  if(disposed)return;
  if(motion.matches||document.hidden||!visible){video.pause();stop();return;}
  if(!video.getAttribute('src'))video.src=image.dataset.video;
  video.play().then(start).catch(()=>{});
 }
 image.decode().then(()=>{if(!disposed&&video.readyState<2)draw(image);}).catch(()=>{});
 video.addEventListener('play',start);video.addEventListener('pause',stop);
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});observer.observe(dock);
 motion.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);sync();
 return ()=>{disposed=true;stop();observer.disconnect();motion.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);video.removeEventListener('play',start);video.removeEventListener('pause',stop);video.pause();video.removeAttribute('src');video.load();canvas.remove();image.hidden=false;delete dock.dataset.cutout;};
}
