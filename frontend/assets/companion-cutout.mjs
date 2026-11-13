import {readGifFrames} from './gif-frames.mjs';
import {attachVideoCompanion} from './companion-video.mjs';
// Render the supplied GIF without its connected light backdrop; retain its animation.
function clearBackdrop(context,width,height){
 const pixels=context.getImageData(0,0,width,height),rgba=pixels.data;
 const queue=new Int32Array(width*height),visited=new Uint8Array(width*height);
 let head=0,tail=0;
 function visit(index){
  if(visited[index])return;visited[index]=1;
  const at=index*4;
  if(rgba[at+3]===0||(rgba[at]>=238&&rgba[at+1]>=238&&rgba[at+2]>=238)){
   rgba[at+3]=0;queue[tail++]=index;
  }
 }
 for(let x=0;x<width;x++){visit(x);visit((height-1)*width+x);}
 for(let y=0;y<height;y++){visit(y*width);visit(y*width+width-1);}
 while(head<tail){const at=queue[head++],x=at%width;
  if(x)visit(at-1);if(x<width-1)visit(at+1);
  if(at>=width)visit(at-width);if(at<(height-1)*width)visit(at+width);
 }
 context.putImageData(pixels,0,0);
}

/** @param {HTMLImageElement} image */
export function attachCompanionCutout(image){
 if(image.dataset.video)return attachVideoCompanion(image);
 const dock=image.closest('.whatsapp-dock');
 if(!dock)return ()=>{};
 const motion=matchMedia('(prefers-reduced-motion: reduce)'),abort=new AbortController();
 const canvas=document.createElement('canvas');
 canvas.className='whatsapp-companion whatsapp-companion-cutout';canvas.setAttribute('aria-hidden','true');
 let disposed=false,loading=false,visible=true,ready=false,request=0,last=0,index=0;
 const frames=[];
 const stop=()=>{cancelAnimationFrame(request);request=0;last=0;};
 const draw=()=>{const context=canvas.getContext('2d');context.clearRect(0,0,canvas.width,canvas.height);context.drawImage(frames[index].canvas,0,0);canvas.dataset.frame=String(index);};
 function tick(time){
  if(disposed||motion.matches||document.hidden||!visible){stop();return;}
  if(!last)last=time;
  if(time-last>=frames[index].duration){index=(index+1)%frames.length;draw();last=time;}
  request=requestAnimationFrame(tick);
 }
 async function load(){
  if(loading||frames.length||disposed)return;loading=true;
  let decoder;
  try{
   const response=await fetch(image.currentSrc||image.src,{signal:abort.signal});
   if(!response.ok)throw Error('Unavailable');
   const bytes=await response.arrayBuffer();
   let portable;
   if(typeof window.ImageDecoder==='function'){decoder=new window.ImageDecoder({data:bytes,type:'image/gif'});await decoder.tracks.ready;}
   else portable=readGifFrames(bytes);
   const count=decoder?decoder.tracks.selectedTrack.frameCount:portable.length;
   for(let frameIndex=0;frameIndex<count;frameIndex++){
    const frame=decoder?(await decoder.decode({frameIndex})).image:null;
    try{
     if(disposed)return;
     const surface=document.createElement('canvas');surface.width=frame?frame.displayWidth:portable[frameIndex].width;surface.height=frame?frame.displayHeight:portable[frameIndex].height;
     const context=surface.getContext('2d',{willReadFrequently:true});
     if(frame)context.drawImage(frame,0,0);else context.putImageData(new ImageData(portable[frameIndex].pixels,surface.width,surface.height),0,0);
     clearBackdrop(context,surface.width,surface.height);
     frames.push({canvas:surface,duration:frame?Math.max(20,(frame.duration||120000)/1000):portable[frameIndex].duration});
    }finally{frame?.close();}
   }
   if(disposed||!frames.length)return;
   canvas.width=frames[0].canvas.width;canvas.height=frames[0].canvas.height;
   draw();image.hidden=true;image.after(canvas);ready=true;dock.dataset.cutout='ready';sync();
  }catch(error){if(!disposed){stop();frames.length=0;dock.classList.add('cutout-fallback');}}
  finally{decoder?.close();loading=false;}
 }
 function sync(){
  if(disposed)return;
  if(motion.matches||document.hidden||!visible){stop();return;}
  if(!ready){void load();return;}
  if(!request)request=requestAnimationFrame(tick);
 }
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});observer.observe(dock);
 motion.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);sync();
 return ()=>{disposed=true;abort.abort();stop();observer.disconnect();motion.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync);canvas.remove();image.hidden=false;frames.length=0;delete dock.dataset.cutout;};
}
