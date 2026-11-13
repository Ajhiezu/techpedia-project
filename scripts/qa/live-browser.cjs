const assert=require('node:assert/strict');const {open}=require('./cdp.cjs');
const fs=require('node:fs/promises');const path=require('node:path');
const delay=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const browser=await open();try{
 await browser.command('Page.addScriptToEvaluateOnNewDocument',{source:"window.TECHPEDIA_CONTENT_MODE='api';"});
 await browser.command('Page.addScriptToEvaluateOnNewDocument',{source:"window.qaCsp=[];document.addEventListener('securitypolicyviolation',e=>window.qaCsp.push(e.violatedDirective));"});
 await browser.command('Page.navigate',{url:process.env.QA_BASE_URL+'/#/contact?service=website-development'});
 for(let i=0;i<60;i++){await delay(100);if(await browser.evaluate('typeof services!=="undefined"&&services.length===6&&typeof posts!=="undefined"&&posts.length===21'))break;}
 assert.equal(await browser.evaluate('Boolean(window.techpediaContentError)'),false);
 await browser.command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
 const mobile=await browser.command('Page.captureScreenshot',{format:'png'});await fs.writeFile(path.resolve(__dirname,'../../docs/quality-assurance/evidence/live-contact-mobile.png'),Buffer.from(mobile.data,'base64'));

 await browser.evaluate(`(()=>{const f=document.querySelector('form');f.elements.namedItem('name').value='Browser QA Person';f.elements.namedItem('email').value='browser-qa@example.test';f.elements.namedItem('description').value='Actual browser to Laravel HTTP inquiry.';f.elements.namedItem('consent').checked=true;f.requestSubmit();})()`);
 for(let i=0;i<50;i++){await delay(100);if(await browser.evaluate('document.querySelector(".form-note").classList.contains("success")'))break;}
 assert.match(await browser.evaluate('document.querySelector(".form-note").textContent'),/saved/);assert.deepEqual(await browser.evaluate('window.qaCsp'),[]);assert.deepEqual(browser.errors,[]);
 // Verify the browser's submission through the isolated database directly in the parent harness.
 await browser.evaluate("location.hash='/insights/article-0'");
 for(let i=0;i<50;i++){await delay(100);if(await browser.evaluate("document.querySelector('main').textContent.includes('QA Tag')"))break;}
 assert.match(await browser.evaluate("document.querySelector('main').textContent"),/QA Tag/);
 assert.ok(await browser.evaluate("document.querySelector('.content-text').textContent.length>10000"));
 assert.ok(await browser.evaluate("document.querySelector('time[datetime]')!==null"));
 await browser.evaluate("location.hash='/services/website-development'");
 for(let i=0;i<50;i++){await delay(100);if(await browser.evaluate("document.querySelector('main').textContent.includes('Information architecture')"))break;}
 assert.match(await browser.evaluate("document.querySelector('main').textContent"),/Information architecture/);
 console.log('Real API list/detail lazy loading, publication date, tags and service detail verified.');
 console.log('Chrome displayed confirmed real Laravel success; no CSP violations or JS exceptions.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
