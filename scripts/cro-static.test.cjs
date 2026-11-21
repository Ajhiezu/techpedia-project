const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');
const site=JSON.parse(fs.readFileSync('frontend/content/site.json','utf8'));
const routes=['/','/services','/portfolio','/work','/about','/process','/contact','/faq','/privacy-policy','/terms',...site.services.map(s=>'/services/'+s.slug),...site.projects.map(p=>'/portfolio/'+p.slug)];
const fileFor=r=>path.join('frontend',r==='/'?'index.html':r.slice(1)+'/index.html');
test('every public route has prerendered content, unique SEO and valid local links/assets',()=>{
 const titles=new Set(),descriptions=new Set();
 for(const route of routes){const html=fs.readFileSync(fileFor(route),'utf8');assert.equal([...html.matchAll(/<h1[ >]/g)].length,1,route);assert.ok(!html.includes('review-card'),route+' sample testimonials');
  const title=html.match(/<title>(.*?)<\/title>/)[1],description=html.match(/<meta name="description" content="([^"]+)"/)[1];assert.ok(!titles.has(title),route+' duplicate title');assert.ok(!descriptions.has(description),route+' duplicate description');titles.add(title);descriptions.add(description);
  assert.ok(html.includes('rel="canonical"'),route);assert.ok(html.includes('name="twitter:card"'),route);assert.ok(html.includes('property="og:image"'),route);
  for(const [,attribute,raw] of html.matchAll(/\b(href|src|data-src)="([^"]+)"/g)){if(!raw.startsWith('/'))continue;const target=new URL(raw.replaceAll('&amp;','&'),'https://test.local').pathname;let local=path.join('frontend',target.slice(1));if(attribute==='href'&&!path.extname(local))local=path.join(local,'index.html');assert.ok(fs.existsSync(local),route+' -> '+raw);}
 }
});
test('sitemap exposes only public routes; legal drafts stay noindex',()=>{const sitemap=fs.readFileSync('frontend/sitemap.xml','utf8');for(const r of routes){const legal=['/privacy-policy','/terms'].includes(r);assert.equal(sitemap.includes('<loc>https://techpedia-project.vercel.app'+(r==='/'?'/':r+'/')+'</loc>'),!legal);if(legal)assert.match(fs.readFileSync(fileFor(r),'utf8'),/noindex,follow/);}assert.match(fs.readFileSync('frontend/robots.txt','utf8'),/Allow: \//);});
test('organization schema uses only existing identity and public links',()=>{const html=fs.readFileSync(fileFor('/'),'utf8');const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1]);assert.equal(schema.name,site.profile.brand);assert.equal(schema.email,site.profile.contacts.email);assert.equal(schema.aggregateRating,undefined);assert.equal(schema.review,undefined);});
