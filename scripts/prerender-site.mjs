import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

export function prerender(){
 const site=JSON.parse(fs.readFileSync('frontend/content/site.json','utf8'));
 const origin=new URL(process.env.TECHPEDIA_SITE_URL||'https://techpedia-project.vercel.app');
 if(origin.protocol!=='https:'||origin.pathname!=='/'||origin.search||origin.hash||origin.username||origin.password)throw Error('TECHPEDIA_SITE_URL must be an HTTPS origin');
 const indexable=process.env.TECHPEDIA_INDEXABLE!=='false';
 const ga=process.env.TECHPEDIA_GA_ID||'';if(ga&&!/^G-[A-Z0-9]+$/.test(ga))throw Error('Invalid GA4 measurement ID');
 fs.writeFileSync('frontend/assets/analytics-config.js','window.TECHPEDIA_GA_ID='+JSON.stringify(ga)+';\nwindow.TECHPEDIA_INDEXABLE='+JSON.stringify(indexable)+';\n');
 fs.writeFileSync('frontend/assets/public-content.js','window.TECHPEDIA_BOOTSTRAP='+JSON.stringify(site).replaceAll('<','\\u003c')+';\n');
 const context=vm.createContext({window:{},document:{querySelector:()=>({})},URL,URLSearchParams,location:{hash:'',search:''},console});
 for(const name of ['hub','pricing','studio-v3','rpk-presentation','techcommers-presentation','stayease-presentation','tech-resto-presentation','delivery-content','professional','conversion','portfolio']){
  vm.runInContext(fs.readFileSync(`frontend/assets/${name}.js`,'utf8'),context);
  Object.assign(context,context.window);
 }
 const source=fs.readFileSync('frontend/assets/app.js','utf8');
 const marker="$('.services-menu').onclick=";
 if(!source.includes(marker))throw Error('Prerender bootstrap marker missing');
 vm.runInContext(source.slice(0,source.indexOf(marker)),context);
 context.site=site;
 vm.runInContext("hubProfile=site.profile;services=site.services.map(s=>({...s,summary:s.short_description,detail:s.description}));projects=site.projects.map(p=>({...p,category:p.category_name}));faqs=site.faqs.map(f=>[f.question,f.answer]);",context);
 const routes=[['/','home()','Jasa Pembuatan Aplikasi Khusus & Situs Web Bisnis'],['/services','servicesPage()','Solusi Pengembangan Aplikasi'],['/portfolio','portfolio()','Hasil Pekerjaan & Studi Kasus'],['/work','portfolio()','Karya Pilihan & Proyek Aplikasi'],['/about','about()','Tentang Techpedia Project'],['/process','process()','Bagaimana Kami Bekerja'],['/contact','contact()','Konsultasi Proyek Aplikasi'],['/faq','faqPage()','Pertanyaan Seputar Pengembangan Aplikasi'],['/privacy-policy',"legal('privacy')",'Privasi & Pilihan Analitik'],['/terms',"legal('terms')",'Syarat dan Ketentuan — Draf'],...site.services.map(s=>['/services/'+s.slug,`serviceDetail(services.find(s=>s.slug===${JSON.stringify(s.slug)}))`,s.title]),...site.projects.map(p=>['/portfolio/'+p.slug,`projectDetail(${JSON.stringify(p.slug)})`,p.title])];
 // Remove only previously generated index files when content is unpublished.
 // Never remove directories or arbitrary paths supplied by content.
 const manifest='frontend/generated-routes.json';const keep=new Set(routes.map(([r])=>r));
 if(fs.existsSync(manifest))for(const route of JSON.parse(fs.readFileSync(manifest,'utf8'))){
  if(keep.has(route)||!/^\/(?:services|portfolio)\/[a-z0-9-]+$/.test(route))continue;
  const target=path.resolve('frontend',route.slice(1),'index.html');
  if(!target.startsWith(path.resolve('frontend')+path.sep))throw Error('Generated path escapes frontend');
  fs.rmSync(target,{force:true});
 }
 // One stylesheet avoids a request waterfall on mobile. Source files remain editable.
 const styles=['styles','dropdown','breadcrumb','logo','mascot','reviews','portfolio','professional','project-carousel','cursor','studio-v3','brand-menu','legal','internal-pages','awwwards','theme-tokens','color-system','component-colors','brand-theme','header','work-page','color-composition','pricing-cards','footer','brand-identity'];
 fs.writeFileSync('frontend/assets/site.css',styles.map(name=>fs.readFileSync(`frontend/assets/${name}.css`,'utf8')).join('\n'));
 let shell=fs.readFileSync('frontend/index.html','utf8');
 shell=shell.replace(/<link rel="stylesheet"[^>]*>/g,'').replace('</head>','<link rel="stylesheet" href="/assets/site.css?v=original-nav-1">\n</head>');
 shell=shell.replace(/<link rel="icon"[^>]*>/g,'<link rel="icon" href="/assets/techpedia-logo.jpg" type="image/jpeg">');
 shell=shell.replace(/studio-v3\.js\?v=[^"\s]+/g,'studio-v3.js?v=services-video-1');
 shell=shell.replace(/<main id="main" tabindex="-1">[\s\S]*?<\/main>/,'<main id="main" tabindex="-1"></main>');
 shell=shell.replace(/\s*<!-- seo:start -->[\s\S]*?<!-- seo:end -->/g,'');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const urlFor=route=>new URL(route==='/'?'/':route+'/',origin).href;
 const footer=site.profile.contacts;
 shell=shell.replace(/<footer class="footer">[\s\S]*?<\/footer>/,`<footer class="footer">
  <div class="footer-grid">
   <div class="footer-brand-column">
    <a class="brand inverse" href="/" aria-label="Beranda Techpedia Project"><img class="brand-logo" width="54" height="54" src="/assets/techpedia-logo.jpg" alt="" aria-hidden="true"><b class="brand-name">Techpedia <i>Project</i></b></a>
    <p class="footer-intro">Aplikasi khusus, situs web, dan sistem yang mengikuti kebutuhan bisnis Anda.</p>
    <a class="footer-contact-cta" href="/contact/">Diskusikan Proyek</a>
   </div>
   <nav aria-label="Jelajahi Techpedia"><h2>Jelajahi</h2><a href="/about/">Tentang Kami</a><a href="/work/">Karya</a><a href="/process/">Alur Kerja</a><a href="/#pricing">Pilihan Paket</a><a href="/faq/">Tanya Jawab</a></nav>
   <nav aria-label="Layanan di footer"><h2>Layanan</h2><a href="/services/custom-software-development/">Aplikasi Khusus</a><a href="/services/website-development/">Situs Web Bisnis</a><a href="/services/maintenance-it-support/">Perbaikan &amp; Pemeliharaan</a><a href="/services/feature-api-integration/">Fitur &amp; Integrasi API</a><a href="/services/">Semua Layanan</a></nav>
   <div class="footer-contact-column"><h2>Mari Terhubung</h2><p>Ceritakan kebutuhan Anda melalui kanal berikut.</p><div class="footer-contacts"><a href="${esc(footer.whatsapp)}">WhatsApp Business</a><a href="mailto:${esc(footer.email)}">Email</a><a href="${esc(footer.fastwork)}" target="_blank" rel="noopener noreferrer">Fastwork</a></div></div>
  </div>
  <div class="footer-bottom"><p>&copy; <span data-year>${new Date().getFullYear()}</span> Techpedia Project.</p><nav class="footer-legal" aria-label="Ketentuan dan privasi"><a href="/privacy-policy/">Kebijakan Privasi</a><a href="/terms/">Syarat &amp; Ketentuan</a><button type="button" class="analytics-settings" hidden>Preferensi Analitik</button></nav></div>
 </footer>`);
 shell=shell.replace(/<img class="brand-logo"[^>]*>/g,'<img class="brand-logo" width="50" height="50" src="/assets/techpedia-logo.jpg" alt="" aria-hidden="true">');
 shell=shell.replace(/<div class="footer-contacts">[\s\S]*?<\/div>/,`<div class="footer-contacts"><a href="${esc(footer.whatsapp)}">WhatsApp Business</a><a href="mailto:${esc(footer.email)}">Email</a><a href="${esc(footer.fastwork)}" target="_blank" rel="noopener noreferrer">Fastwork</a></div>`);
 shell=shell.replace(/data-year>[^<]*</,'data-year>'+new Date().getFullYear()+'<');
 for(const [route,expression,label] of routes){
  let body=vm.runInContext(expression,context).replaceAll('="assets/','="/assets/');
  const item=route.startsWith('/portfolio/')?site.projects.find(p=>route.endsWith('/'+p.slug)):route.startsWith('/services/')?site.services.find(s=>route.endsWith('/'+s.slug)):null;
  const title=(item?.meta_title||label)+' | Techpedia Project';
  const description=item?.meta_description||item?.short_description||(route==='/'?'Jasa pembuatan aplikasi khusus, situs web bisnis, maintenance, bug fixing, dan pengembangan fitur sesuai kebutuhan operasional Anda. Konsultasikan proyek dengan Techpedia.':`${label}. Bahas kebutuhan, ruang lingkup, biaya, dan tahapan pengembangan bersama Techpedia Project.`);
  const canonical=urlFor(route);const image=new URL('/assets/techpedia-og.png',origin).href;
  const noindex=!indexable||['/privacy-policy','/terms'].includes(route);
  const tags=`<!-- seo:start -->\n<link rel="canonical" href="${canonical}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="website"><meta property="og:locale" content="id_ID"><meta property="og:site_name" content="Techpedia Project"><meta property="og:image" content="${image}"><meta property="og:image:alt" content="Techpedia Project: kebutuhan nyata, sistem yang tepat"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${image}">\n${route==='/'?`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:site.profile.brand,url:origin.origin,email:site.profile.contacts.email,logo:new URL('/assets/techpedia-logo.jpg',origin).href,sameAs:[site.profile.contacts.fastwork]})}</script>`:''}<!-- seo:end -->`;
  let html=shell.replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(title)}</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(description)}">`).replace(/<meta name="robots" content="[^"]*">/,`<meta name="robots" content="${noindex?'noindex,follow':'index,follow'}">`).replace('</head>',tags+'\n</head>').replace('<main id="main" tabindex="-1"></main>',`<main id="main" tabindex="-1">${body}</main>`);
  html=html.replace(/href="#(\/[^"#]*)"/g,(_,p)=>`href="${p}"`);
  const target=route==='/'?'frontend/index.html':path.join('frontend',route.slice(1),'index.html');fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,html);
 }
 fs.writeFileSync('frontend/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+(indexable?routes.filter(([r])=>!['/privacy-policy','/terms'].includes(r)).map(([r])=>`<url><loc>${urlFor(r)}</loc></url>`).join(''):'')+'</urlset>\n');
 fs.writeFileSync('frontend/robots.txt',`User-agent: *\n${indexable?'Allow: /':'Disallow: /'}\nSitemap: ${new URL('/sitemap.xml',origin).href}\n`);
 const notFoundBody=vm.runInContext('notFound()',context);
 const notFoundPage=fs.readFileSync('frontend/index.html','utf8').replace(/<main id="main" tabindex="-1">[\s\S]*?<\/main>/,`<main id="main" tabindex="-1">${notFoundBody}</main>`).replace(/<title>[\s\S]*?<\/title>/,'<title>Halaman tidak ditemukan | Techpedia Project</title>').replace(/<meta name="robots" content="[^"]*">/,'<meta name="robots" content="noindex,follow">').replace(/<link rel="canonical"[^>]*>/,'');
 fs.writeFileSync('frontend/404.html',notFoundPage);
 fs.writeFileSync(manifest,JSON.stringify([...keep],null,2)+'\n');
 console.log(`Prerendered ${routes.length} static pages; indexable=${indexable}; analytics=${ga?'consent required':'disabled'}.`);
}
