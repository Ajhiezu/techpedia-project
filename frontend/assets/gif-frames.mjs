// Small browser-side GIF reader for the supplied companion animation.
// Used when WebCodecs ImageDecoder is unavailable; no image assets are rewritten.
function lzw(bytes,minimum,count){
 const clear=1<<minimum,end=clear+1,prefix=new Int16Array(4096),suffix=new Uint8Array(4096),stack=new Uint8Array(4097),output=new Uint8Array(count);
 for(let i=0;i<clear;i++)suffix[i]=i;
 let bit=0,size=minimum+1,next=end+1,old=-1,first=0,written=0;
 while(bit+size<=bytes.length*8&&written<count){
  let code=0;for(let n=0;n<size;n++,bit++)code|=((bytes[bit>>3]>>(bit&7))&1)<<n;
  if(code===clear){size=minimum+1;next=end+1;old=-1;continue;}
  if(code===end)break;
  const incoming=code;let top=0;
  if(old<0){if(code>=clear)throw Error('Invalid GIF code');output[written++]=suffix[code];first=suffix[code];old=code;continue;}
  if(code===next){stack[top++]=first;code=old;}else if(code>next)throw Error('Invalid GIF code');
  while(code>=clear){if(code>=next||top>=4096)throw Error('Invalid GIF dictionary');stack[top++]=suffix[code];code=prefix[code];}
  first=suffix[code];stack[top++]=first;
  while(top&&written<count)output[written++]=stack[--top];
  if(next<4096){prefix[next]=old;suffix[next++]=first;if(next===(1<<size)&&size<12)size++;}
  old=incoming;
 }
 if(written!==count)throw Error('Incomplete GIF frame');
 return output;
}

export function readGifFrames(buffer){
 const bytes=new Uint8Array(buffer);let position=0;
 const byte=()=>{if(position>=bytes.length)throw Error('Incomplete GIF');return bytes[position++];};
 const word=()=>byte()|(byte()<<8);
 const take=count=>{if(position+count>bytes.length)throw Error('Incomplete GIF');const value=bytes.slice(position,position+count);position+=count;return value;};
 const blocks=()=>{const parts=[];let total=0;for(let size=byte();size;size=byte()){const part=take(size);parts.push(part);total+=size;}const result=new Uint8Array(total);let offset=0;for(const part of parts){result.set(part,offset);offset+=part.length;}return result;};
 const signature=String.fromCharCode(...take(6));if(!['GIF87a','GIF89a'].includes(signature))throw Error('Not a GIF');
 const width=word(),height=word(),packed=byte();byte();byte();
 if(!width||!height||width*height>4e6)throw Error('Unsupported GIF size');
 const globalPalette=packed&128?take(3*(1<<((packed&7)+1))):null;
 let screen=new Uint8ClampedArray(width*height*4),control={delay:100,disposal:0,transparent:-1},previous=null;
 const frames=[];
 while(position<bytes.length){
  const marker=byte();if(marker===59)break;
  if(marker===33){
   const label=byte();
   if(label===249){if(byte()!==4)throw Error('Invalid GIF control');const flags=byte(),delay=word()*10,transparent=byte();byte();control={delay:Math.max(20,delay||100),disposal:(flags>>2)&7,transparent:flags&1?transparent:-1};}
   else blocks();
   continue;
  }
  if(marker!==44)throw Error('Invalid GIF block');
  const left=word(),top=word(),frameWidth=word(),frameHeight=word(),flags=byte();
  if(left+frameWidth>width||top+frameHeight>height||!frameWidth||!frameHeight)throw Error('Invalid GIF frame bounds');
  const palette=flags&128?take(3*(1<<((flags&7)+1))):globalPalette;if(!palette)throw Error('Missing GIF palette');
  const minimum=byte();if(minimum<2||minimum>8)throw Error('Invalid GIF compression');
  const indices=lzw(blocks(),minimum,frameWidth*frameHeight);
  if(previous?.disposal===2){for(let y=previous.top;y<previous.top+previous.height;y++)screen.fill(0,(y*width+previous.left)*4,(y*width+previous.left+previous.width)*4);}
  else if(previous?.disposal===3&&previous.restore)screen.set(previous.restore);
  const restore=control.disposal===3?screen.slice():null;
  const rows=[];
  if(flags&64){for(const [start,step] of [[0,8],[4,8],[2,4],[1,2]])for(let row=start;row<frameHeight;row+=step)rows.push(row);}
  else for(let row=0;row<frameHeight;row++)rows.push(row);
  let input=0;
  for(const row of rows)for(let x=0;x<frameWidth;x++){
   const color=indices[input++];if(color===control.transparent)continue;
   const at=((top+row)*width+left+x)*4,paletteAt=color*3;
   if(paletteAt+2>=palette.length)throw Error('Invalid GIF palette index');
   screen[at]=palette[paletteAt];screen[at+1]=palette[paletteAt+1];screen[at+2]=palette[paletteAt+2];screen[at+3]=255;
  }
  frames.push({pixels:screen.slice(),width,height,duration:control.delay});
  if(frames.length>300)throw Error('Too many GIF frames');
  previous={left,top,width:frameWidth,height:frameHeight,disposal:control.disposal,restore};
  control={delay:100,disposal:0,transparent:-1};
 }
 if(!frames.length)throw Error('Missing GIF frames');
 return frames;
}
