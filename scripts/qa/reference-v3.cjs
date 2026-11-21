const fs=require('node:fs');const {open}=require('./cdp.cjs');
const wait=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{fs.mkdirSync('docs/redesign-v3/reference',{recursive:true});const b=await open({label:'reference-v3'});const report=[];try{
 for(const [slug,url] of [['home','https://zeeframes.com/'],['services','https://zeeframes.com/services'],['work','https://zeeframes.com/work'],['insights','https://zeeframes.com/insights'],['ai-solutions','https://zeeframes.com/ai-solutions'],['fintech','https://zeeframes.com/industries/fintech-design-agency']]){
  await b.command('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});await b.command('Page.navigate',{url});await wait(4500);
  const info=await b.evaluate(`({url:location.href,title:document.title,body:document.body.innerText.slice(0,500),sections:[...document.querySelectorAll('section')].map(s=>{const r=s.getBoundingClientRect(),c=getComputedStyle(s),h=s.querySelector('h1,h2');return {class:s.className,top:Math.round(r.top+scrollY),height:Math.round(r.height),background:c.backgroundColor,padding:c.padding,heading:h?.innerText,font:h?getComputedStyle(h).font:null};}),css:[...document.styleSheets].map(s=>s.href)})`);report.push({slug,...info});
  await b.evaluate(`document.querySelectorAll('video').forEach(v=>v.pause())`);
  const shot=await b.command('Page.captureScreenshot',{captureBeyondViewport:false});fs.writeFileSync(`docs/redesign-v3/reference/${slug}-desktop.png`,Buffer.from(shot.data,'base64'));
  if(slug==='home'){
   for(const [i,s] of info.sections.entries()){await b.evaluate(`scrollTo(0,${s.top})`);await wait(250);fs.writeFileSync(`docs/redesign-v3/reference/home-section-${i}.png`,Buffer.from((await b.command('Page.captureScreenshot',{captureBeyondViewport:false})).data,'base64'));}
   for(const [name,width,height] of [['tablet',768,1024],['mobile',390,844]]){await b.command('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await b.evaluate('scrollTo(0,0)');await wait(500);fs.writeFileSync(`docs/redesign-v3/reference/home-${name}.png`,Buffer.from((await b.command('Page.captureScreenshot',{captureBeyondViewport:false})).data,'base64'));}
  }
 }
}finally{fs.writeFileSync('docs/redesign-v3/reference/measurements.json',JSON.stringify(report,null,2));await b.close();console.log(report.map(r=>({slug:r.slug,title:r.title,sections:r.sections?.length})));}})().catch(e=>{console.error(e);process.exitCode=1;});
