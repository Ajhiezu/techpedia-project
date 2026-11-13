const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');const hub=require('../frontend/assets/hub.js');
function validate(site){
 assert.ok(site&&site.profile&&Array.isArray(site.services)&&Array.isArray(site.projects),'Profile, services and projects are required');
 const c=site.profile.contacts||{};
 for(const key of ['whatsapp','fastwork','github'])if(c[key])assert.ok(hub.channels({[key]:c[key]}).length===1,'Invalid '+key+' contact URL');
 if(c.email)assert.ok(hub.channels({email:c.email}).length===1,'Invalid contact email');
 for(const key of ['services','projects','posts']){const slugs=new Set();for(const item of site[key]||[]){assert.match(item.slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/,'Use a lowercase dash-separated slug');assert.ok(!slugs.has(item.slug),'Duplicate '+key+' slug: '+item.slug);slugs.add(item.slug);assert.ok(typeof item.title==='string'&&item.title.trim(),'A title is required');
  for(const field of ['demo_url','project_url','github_url','design_url'])if(item[field])assert.ok(hub.safeUrl(item[field]),'Only HTTPS links without credentials are allowed');
  if(item.github_url)assert.equal(new URL(item.github_url).hostname,'github.com','GitHub links must point to github.com');
  if(item.design_url)assert.ok(['figma.com','www.figma.com'].includes(new URL(item.design_url).hostname),'Figma links must point to figma.com');
  if(item.thumbnail)assert.ok(hub.imageUrl(item.thumbnail),'Invalid thumbnail path');
  if(item.published_at)assert.ok(Number.isFinite(Date.parse(item.published_at)),'Invalid publication date');
  if(key==='projects'){assert.ok(['draft','published'].includes(item.status),'Project status must be draft or published');assert.ok(['full-live-demo','interactive-ui-demo','case-study-only'].includes(item.demo_type),'Set a supported demo_type');if(item.status==='published'){assert.equal(item.approved,true,'Approve factual content before publishing');assert.ok(typeof item.overview==='string'&&item.overview.trim(),'Published projects require a case-study overview');if(item.demo_type!=='case-study-only')assert.ok(hub.safeUrl(item.demo_url||item.project_url),'Live projects require a demo URL');}}
 }}return site;
}
module.exports={validate};
if(require.main===module){const site=validate(JSON.parse(fs.readFileSync(path.resolve(__dirname,'../content/site.json'),'utf8')));console.log(`Hub content valid: ${site.services.length} services, ${site.projects.length} project records.`);}
