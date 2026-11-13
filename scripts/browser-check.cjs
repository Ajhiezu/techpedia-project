// Real Chrome + HTTP fixtures. This checks frontend behavior, not Laravel execution.
const {createServer}=require('node:http');
const {readFile,mkdir,writeFile}=require('node:fs/promises');
const {spawn}=require('node:child_process');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const chrome=process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';
const fixtures={services:[{id:1,slug:'website-development',title:'Website Development',short_description:'Professional websites.',description:'Clear digital experiences.'}],projects:[{id:1,slug:'approved-project',title:'Approved project',short_description:'Project context',category_name:'Website',overview:'A verified project overview.'}],posts:[{id:1,slug:'published-article',title:'<img src=x onerror="window.injected=true">',excerpt:'An article preview.',content:'Plain text <script>window.injected=true</script>',category_name:'Web Development'}],faqs:[{id:1,question:'How do we begin?',answer:'Start with your project goals.'}]};
let contactStatus=201;let received=[];let proc;let socket;let server;
const report=[];const hardTimeout=setTimeout(()=>{console.error('Browser test timed out');proc?.kill();server?.closeAllConnections();server?.close();process.exit(1);},45000);const delay=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 await mkdir(path.join(root,'.qa'),{recursive:true});
 server=createServer(async(req,res)=>{try{
  const url=new URL(req.url,'http://localhost');
  if(url.pathname.startsWith('/api/v1/')){
   res.setHeader('Content-Type','application/json');
   if(req.method==='POST'){let body='';for await(const chunk of req)body+=chunk;received.push(JSON.parse(body));res.statusCode=contactStatus;res.end(JSON.stringify({message:contactStatus===201?'Saved':'Unavailable'}));return;}
   const data=fixtures[url.pathname.split('/').pop()];res.end(JSON.stringify({data:data||[],next_page_url:null}));return;
  }
  const target=url.pathname==='/'?'index.html':url.pathname.slice(1);
  if(!/^(index\.html|assets\/[a-zA-Z0-9._-]+)$/.test(target)){res.writeHead(404).end();return;}
  const data=await readFile(path.join(root,'frontend',target));const extension=path.extname(target);
  res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png'})[extension]||'application/octet-stream');res.end(data);
 }catch{res.writeHead(500).end();}});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const port=server.address().port;
 proc=spawn(chrome,['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port=0',`--user-data-dir=${path.join(root,'.qa/chrome-final')}`],{stdio:['ignore','ignore','pipe'],windowsHide:true});
 const endpoint=await new Promise((resolve,reject)=>{let output='';const timeout=setTimeout(()=>reject(new Error('Chrome debugger timed out')),20000);proc.on('error',reject);proc.stderr.on('data',chunk=>{output+=chunk;const match=output.match(/DevTools listening on (ws:\/\/[^\s]+)/);if(match){clearTimeout(timeout);resolve(match[1]);}});});
 socket=new WebSocket(endpoint);await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
 let next=0;const pending=new Map();
 socket.addEventListener('message',event=>{const message=JSON.parse(event.data);if(message.id){const task=pending.get(message.id);if(task){pending.delete(message.id);message.error?task.reject(new Error(JSON.stringify(message.error))):task.resolve(message.result);}}});
 const send=(method,params={},sessionId)=>new Promise((resolve,reject)=>{setTimeout(()=>reject(new Error('Timed out: '+method)),10000).unref();const id=++next;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})}));});
 const {targetId}=await send('Target.createTarget',{url:'about:blank'});const {sessionId}=await send('Target.attachToTarget',{targetId,flatten:true});
 const command=(method,params)=>send(method,params,sessionId);
 const evaluate=async expression=>{const result=await command('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(result.exceptionDetails)throw new Error(JSON.stringify(result.exceptionDetails));return result.result.value;};
 await command('Page.addScriptToEvaluateOnNewDocument',{source:"window.TECHPEDIA_CONTENT_MODE='api';"});await command('Page.enable',{});await command('Page.navigate',{url:`http://127.0.0.1:${port}/`});
 for(let i=0;i<50;i++){await delay(100);if(await evaluate(`document.querySelector('main h1')&&document.querySelector('main').textContent.includes('Website Development')`))break;}
 assert.match(await evaluate('document.querySelector("main h1").textContent'),/Building Digital Solutions/);report.push('Homepage renders API service data');
 for(const width of [320,375,390,768,1024,1280,1440,1920]){
  await command('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
  await delay(80);assert.ok(await evaluate('document.documentElement.scrollWidth<=innerWidth+1'),`Horizontal overflow at ${width}px`);
 }
 report.push('Homepage has no horizontal overflow at eight target widths');
 await evaluate(`location.hash='/portfolio';`);await delay(150);assert.match(await evaluate('document.querySelector("main").textContent'),/Approved project/);await evaluate(`location.hash='/portfolio/approved-project'`);await delay(100);assert.match(await evaluate('document.querySelector("main").textContent'),/verified project overview/);report.push('Portfolio lists and case-study routes render published records');
 await evaluate(`location.hash='/insights/published-article'`);await delay(100);assert.equal(await evaluate('window.injected===true'),false);assert.equal(await evaluate('document.querySelector("main img, main script")!==null'),false);report.push('Article title and content cannot inject HTML');
 await evaluate(`location.hash='/contact?service=website-development'`);await delay(100);assert.equal(await evaluate('document.querySelector("select[name=service]").value'),'website-development');
 assert.equal(await evaluate('document.querySelector("form").checkValidity()'),false);
 await evaluate(`document.querySelector('[name=name]').value='Test Person';document.querySelector('[name=email]').value='person@example.test';document.querySelector('form [name=description]').value='A meaningful project inquiry.';document.querySelector('[name=consent]').checked=true;document.querySelector('form').requestSubmit();`);
 await delay(200);assert.match(await evaluate('document.querySelector(".form-note").textContent'),/saved/);assert.equal(received[0].consent,true);assert.equal(received[0].service_needed,'website-development');report.push('Contact validates, preserves service selection and submits actual JSON');
 contactStatus=503;
 await evaluate(`document.querySelector('[name=name]').value='Test Person';document.querySelector('[name=email]').value='person@example.test';document.querySelector('[name=service]').value='website-development';document.querySelector('form [name=description]').value='A meaningful project inquiry.';document.querySelector('[name=consent]').checked=true;document.querySelector('form').requestSubmit();`);await delay(200);assert.match(await evaluate('document.querySelector(".form-note").textContent'),/unavailable/);assert.equal(await evaluate('document.querySelector("[type=submit]").disabled'),false);report.push('Failed inquiry gives an error and re-enables submission');
 await evaluate(`location.hash='/faq'`);await delay(100);await evaluate(`document.querySelector('.faq button').click()`);assert.equal(await evaluate(`document.querySelector('.faq button').getAttribute('aria-expanded')`),'true');report.push('FAQ toggles accessible expanded state');
 await command('Emulation.setDeviceMetricsOverride',{width:375,height:900,deviceScaleFactor:1,mobile:false});
 await evaluate(`document.querySelector('.menu-toggle').click()`);assert.equal(await evaluate('document.activeElement.className'),'mobile-close');
 await command('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});assert.equal(await evaluate('document.querySelector(".mobile-nav").hidden'),true);assert.equal(await evaluate('document.activeElement.className'),'menu-toggle');report.push('Mobile navigation supports focus and Escape');
 for(const route of ['/services','/services/website-development','/portfolio','/about','/process','/insights','/contact','/faq','/privacy-policy','/terms']){
  await evaluate(`location.hash=${JSON.stringify(route)}`);await delay(80);
  for(const width of [320,375,390,768,1024,1280,1440,1920]){
   await command('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
   assert.ok(await evaluate('document.documentElement.scrollWidth<=innerWidth+1'),`Horizontal overflow: ${route} at ${width}px`);
  }
 }
 report.push('Ten additional routes have no horizontal overflow at eight target widths');
 await evaluate(`location.hash='/does-not-exist'`);await delay(100);assert.match(await evaluate('document.querySelector("main").textContent'),/404/);report.push('Unknown route displays 404');
 await writeFile(path.join(root,'.qa/browser-report.json'),JSON.stringify({checkedAt:new Date().toISOString(),kind:'Chrome headless with HTTP fixtures',checks:report},null,2));
 console.log(report.map(x=>'PASS '+x).join('\n'));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{clearTimeout(hardTimeout);if(socket?.readyState===1)socket.close();server?.closeAllConnections();proc?.kill();if(server)await new Promise(resolve=>server.close(resolve));});
