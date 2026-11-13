(function(root){
 'use strict';
 function safeUrl(value){
  if(typeof value!=='string'||!value.trim())return null;
  try{const url=new URL(value);if(url.protocol!=='https:'||url.username||url.password)return null;return url.href;}catch{return null;}
 }
 function imageUrl(value){
  if(typeof value!=='string')return null;
  if(/^assets\/[a-zA-Z0-9_./-]+\.(png|jpe?g|webp|avif)$/i.test(value)&&!value.includes('..'))return value;
  return safeUrl(value);
 }
 function visible(records,approval=false){return (Array.isArray(records)?records:[]).filter(item=>item&&item.status!=='draft'&&item.status!=='scheduled'&&(item.status===undefined||item.status==='published')&&(!approval||item.approved===true&&item.status==='published')&&(!item.published_at||Number.isFinite(Date.parse(item.published_at))&&Date.parse(item.published_at)<=Date.now()));}
 function mode(project){return ({'full-live-demo':'Demo aplikasi','interactive-ui-demo':'Pratinjau antarmuka','case-study-only':'Studi kasus'})[project.demo_type]||'Studi kasus';}
 function actions(project){const links=[];const demo=safeUrl(project.demo_url||project.project_url);if(project.demo_type!=='case-study-only'&&demo)links.push({label:project.demo_type==='interactive-ui-demo'?'Lihat pratinjau':'Kunjungi aplikasi',url:demo});const code=safeUrl(project.github_url);if(code&&new URL(code).hostname==='github.com')links.push({label:'GitHub',url:code});const design=safeUrl(project.design_url);if(design&&['figma.com','www.figma.com'].includes(new URL(design).hostname))links.push({label:'Figma',url:design});return links;}
 function channels(contacts={}){const links=[];const wa=safeUrl(contacts.whatsapp);if(wa&&['wa.me','api.whatsapp.com'].includes(new URL(wa).hostname))links.push({label:'WhatsApp Business',url:wa});const email=contacts.email;if(typeof email==='string'&&/^[^\s<>?&#\r\n@]+@[^\s<>?&#\r\n@]+\.[^\s<>?&#\r\n@]+$/.test(email))links.push({label:'Email',url:'mailto:'+encodeURIComponent(email)});const fastwork=safeUrl(contacts.fastwork);if(fastwork&&['fastwork.id','www.fastwork.id'].includes(new URL(fastwork).hostname))links.push({label:'Fastwork',url:fastwork});const github=safeUrl(contacts.github);if(github&&new URL(github).hostname==='github.com')links.push({label:'GitHub',url:github});return links;}
 const api={safeUrl,imageUrl,visible,mode,actions,channels};root.TechpediaHub=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
