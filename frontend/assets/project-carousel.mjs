/** Mount a scroll-snap gallery with touch, mouse, and keyboard controls. */
export function mountProjectCarousel(root){
 const track=root.querySelector('[data-carousel-track]');
 if(!track)return ()=>{};
 const slides=[...track.children],dots=[...root.querySelectorAll('[data-carousel-index]')];
 const previous=root.querySelector('[data-carousel-previous]'),next=root.querySelector('[data-carousel-next]'),count=root.querySelector('[data-carousel-count]');
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let active=0,pointer=null,startX=0,startLeft=0,dragged=false,suppressClick=false,frame=0;
 function update(index){
  active=Math.max(0,Math.min(slides.length-1,index));root.dataset.active=String(active);
  previous.disabled=active===0;next.disabled=active===slides.length-1;
  dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===active)));
  count.textContent=(active+1)+' / '+slides.length;
 }
 function go(index,instant=false){
  update(index);track.scrollTo({left:active*track.clientWidth,behavior:instant||motion.matches?'instant':'smooth'});
 }
 function scroll(){cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{if(track.clientWidth)update(Math.round(track.scrollLeft/track.clientWidth));});}
 function click(event){
  const button=event.target.closest('button');if(!button||!root.contains(button))return;
  if(button.hasAttribute('data-carousel-previous'))go(active-1);
  if(button.hasAttribute('data-carousel-next'))go(active+1);
  if(button.hasAttribute('data-carousel-index'))go(Number(button.dataset.carouselIndex));
 }
 function key(event){
  if(event.target!==track)return;
  const index={ArrowLeft:active-1,ArrowRight:active+1,Home:0,End:slides.length-1}[event.key];
  if(index!==undefined){event.preventDefault();go(index);}
 }
 function down(event){
  if(event.pointerType!=='mouse'||event.button!==0||event.target.closest('a,button'))return;
  pointer=event.pointerId;startX=event.clientX;startLeft=track.scrollLeft;dragged=false;
  track.setPointerCapture(pointer);track.classList.add('is-dragging');event.preventDefault();
 }
 function move(event){if(event.pointerId!==pointer)return;const delta=event.clientX-startX;if(Math.abs(delta)>5)dragged=true;track.scrollLeft=startLeft-delta;}
 function up(event){if(event.pointerId!==pointer)return;pointer=null;track.classList.remove('is-dragging');suppressClick=dragged;go(Math.round(track.scrollLeft/track.clientWidth));}
 function guardClick(event){if(suppressClick){event.preventDefault();event.stopPropagation();suppressClick=false;}}
 const resize=new ResizeObserver(()=>go(active,true));resize.observe(track);
 root.addEventListener('click',click);track.addEventListener('scroll',scroll,{passive:true});track.addEventListener('keydown',key);
 track.addEventListener('pointerdown',down);track.addEventListener('pointermove',move);track.addEventListener('pointerup',up);track.addEventListener('pointercancel',up);track.addEventListener('click',guardClick,true);
 root.dataset.carouselReady='true';update(0);
 return ()=>{resize.disconnect();cancelAnimationFrame(frame);root.removeEventListener('click',click);track.removeEventListener('scroll',scroll);track.removeEventListener('keydown',key);track.removeEventListener('pointerdown',down);track.removeEventListener('pointermove',move);track.removeEventListener('pointerup',up);track.removeEventListener('pointercancel',up);track.removeEventListener('click',guardClick,true);};
}
