(function(){
 'use strict';
 const id=window.TECHPEDIA_GA_ID;
 if(!/^G-[A-Z0-9]+$/.test(id||''))return;
 const key='techpedia-analytics-consent';let consent='unset',active=false;
 try{consent=localStorage.getItem(key)||'unset';}catch{}
 const settings=document.querySelector('.analytics-settings');if(settings)settings.hidden=false;
 function start(){if(active)return;active=true;window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config',id,{send_page_view:false,page_location:location.origin+location.pathname,page_referrer:document.referrer?new URL(document.referrer).origin:'',allow_google_signals:false,allow_ad_personalization_signals:false});const script=document.createElement('script');script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);script.async=true;document.head.append(script);}
 function track(name,params={}){if(consent!=='accepted'||navigator.doNotTrack==='1')return;start();window.gtag('event',name,params);}
 function choose(value){consent=navigator.doNotTrack==='1'?'declined':value;value=consent;try{localStorage.setItem(key,value);}catch{}document.querySelector('.analytics-consent')?.remove();if(value==='accepted')start();else if(active)location.reload();}
 function show(){if(document.querySelector('.analytics-consent'))return;const panel=document.createElement('section');panel.className='analytics-consent';panel.setAttribute('aria-label','Pilihan analitik');panel.innerHTML='<p>Izinkan Google Analytics mengukur penggunaan halaman dan klik layanan? Pesan dan rincian proyek tidak dikirim ke analitik. Anda dapat mengubah pilihan melalui footer.</p><div><button type="button" data-consent="accepted">Izinkan</button><button type="button" data-consent="declined">Tolak</button><a href="/privacy-policy/">Detail privasi</a></div>';panel.addEventListener('click',e=>{if(e.target.dataset.consent)choose(e.target.dataset.consent);});document.body.append(panel);}
 if(navigator.doNotTrack==='1')consent='declined';
 if(consent==='accepted')start();else if(consent==='unset')show();
 settings?.addEventListener('click',show);
 document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a)return;const url=new URL(a.href,location.href);const path=url.pathname;
  // One event per click; consultation links carry the source instead of emitting duplicates.
  let name;if(url.hostname==='wa.me'||url.hostname==='api.whatsapp.com')name='click_whatsapp';else if(url.protocol==='mailto:')name='click_email';else if(url.hostname==='fastwork.id')name='click_fastwork';else if(url.origin===location.origin&&/^\/contact\/?$/.test(path))name='click_consultation_cta';else if(url.origin===location.origin&&path.startsWith('/portfolio'))name='click_portfolio';else if(url.origin===location.origin&&path.startsWith('/services'))name='click_service';
  if(name)track(name,{source:a.closest('.hero')?'hero':a.closest('.service-card')?'service':a.closest('.project-card,.rpk-detail')?'project':a.closest('footer')?'footer':'page'});
 });
 window.TechpediaAnalytics={track};
})();
