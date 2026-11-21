(function(){
 'use strict';
 const esc=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const stages=[
 ['Konsultasi Kebutuhan','Ceritakan proses kerja, kendala, pengguna, dan prioritas Anda. Informasi awal menjadi bahan diskusi, belum merupakan komitmen pengerjaan.'],
 ['Analisis & Penentuan Cakupan','Bahas fitur, batas pekerjaan, akses yang dibutuhkan, dan hasil yang akan diserahkan.'],
 ['Penawaran & Kesepakatan','Sepakati biaya, jadwal, tahapan pembayaran, hasil pekerjaan, serta batas revisi sebelum pengembangan dimulai.'],
 ['Pengembangan & Tinjauan Kemajuan','Pengembangan mengikuti ruang lingkup. Ritme pembaruan dan tinjauan hasil ditentukan bersama.'],
 ['Pengujian & Revisi Sesuai Cakupan','Periksa fungsi dan skenario penggunaan sesuai cakupan. Permintaan di luar cakupan dibahas beserta dampak biaya dan jadwalnya.'],
 ['Peluncuran, Serah Terima & Dukungan Opsional','Peluncuran, penyerahan akses, kode, dan dokumentasi mengikuti kesepakatan. Dukungan lanjutan bersifat opsional.']
 ];
 const practicesData=[
 ['Pengembangan Berdasarkan Kebutuhan','Kebutuhan dan alur kerja yang dibahas menjadi dasar penyusunan fitur.'],
 ['Ruang Lingkup Proyek yang Jelas','Ruang lingkup, estimasi, dan hasil pekerjaan dibahas sebelum pengembangan.'],
 ['Pengujian Sebelum Serah Terima','Skenario pengujian dan pemeriksaan sebelum serah terima ditentukan sesuai cakupan.'],
 ['Pengembangan yang Mudah Dipelihara','Struktur kode dan dokumentasi teknis disesuaikan dengan kebutuhan pemeliharaan proyek.'],
 ['Pilihan Dukungan & Pemeliharaan','Bentuk dukungan, batas revisi, dan maintenance ditentukan dalam kesepakatan kerja.']
 ];
 function workflow(){return `<section class="section workflow-section" id="cara-kerja"><div class="delivery-heading"><p class="eyebrow">DARI DISKUSI KE SERAH TERIMA</p><h2>Bagaimana Kami Bekerja</h2><p>Alur kerja yang menjadi acuan pembahasan proyek. Biaya dan cakupan disepakati pada tahap penawaran.</p></div><ol class="workflow-grid">${stages.map(([title,text],i)=>`<li><span class="delivery-number">0${i+1}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`).join('')}</ol><a href="#/contact" class="text-link">Mulai dari konsultasi kebutuhan &#8594;</a></section>`;}
 function practices(){return `<section class="section soft practices-section"><div class="delivery-heading"><p class="eyebrow">KEJELASAN SEBELUM KOMITMEN</p><h2>Kenapa Memilih Techpedia?</h2><p>Praktik kerja berikut menjadi acuan yang perlu disepakati dan diterapkan pada setiap proyek, sesuai kebutuhannya.</p></div><div class="delivery-grid">${practicesData.map(([title,text],i)=>`<article class="delivery-card"><span class="delivery-number">0${i+1}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join('')}</div><p class="delivery-note">Detail penerapan, dokumen, jadwal pengujian, dan dukungan dicatat dalam penawaran proyek Anda.</p></section>`;}
 function serviceScope(s){return `<section class="section service-scope"><div class="delivery-heading"><p class="eyebrow">CAKUPAN LAYANAN</p><h2>${esc(s.title)}</h2><p>${esc(s.problem||s.summary)}</p></div><div><p class="content-text">${esc(s.detail||s.description||s.summary)}</p><p class="delivery-note">Akses sistem, kelayakan teknis, prioritas, estimasi, dan hasil pekerjaan ditinjau sebelum penawaran. Harga mengikuti cakupan yang disepakati.</p><a class="button" href="#/contact?service=${esc(s.slug)}">Konsultasikan Kebutuhan Ini</a></div></section>`;}
 function projectFacts(p){return `<dl class="project-facts"><div><dt>Jenis</dt><dd>${esc(p.project_type||'Belum dikonfirmasi')}</dd></div><div><dt>Status</dt><dd>${esc(p.development_status||'Belum dikonfirmasi')}</dd></div><div><dt>Teknologi</dt><dd>${p.technologies?.length?esc(p.technologies.map(t=>typeof t==='string'?t:t.name).join(', ')):'Belum dicantumkan pada data proyek'}</dd></div></dl>`;}
 function caseStudy(p){return `<section class="section case-study-details"><div class="delivery-heading"><p class="eyebrow">CATATAN IMPLEMENTASI</p><h2>Solusi &amp; Pendekatan Teknis</h2></div><div class="agreement-grid"><article class="agreement-card"><h3>Solusi yang Dikembangkan</h3><p class="content-text">${esc(p.solution||'Rincian solusi belum tersedia.')}</p></article><article class="agreement-card"><h3>Teknologi</h3><p>${p.technologies?.length?esc(p.technologies.map(t=>typeof t==='string'?t:t.name).join(', ')):'Teknologi belum tercantum pada data sumber. Informasi ini perlu dilengkapi pemilik proyek.'}</p><h3>Tantangan &amp; Pendekatan Teknis</h3><p>${esc(p.architecture||p.challenge||'Catatan teknis perlu dilengkapi.')}</p><p>Rincian arsitektur dan validasi teknis tambahan belum dicantumkan.</p></article></div></section>`;}
 function whatsapp(base){const url=window.TechpediaHub.safeUrl(base);if(!url)return '';const target=new URL(url);const service=new URLSearchParams((location.hash.split('?')[1]||location.search)).get('service');const name=typeof services!=='undefined'?services.find(s=>s.slug===service)?.title:undefined;target.searchParams.set('text',`Halo Techpedia Project, saya ingin konsultasi mengenai ${name||'[jenis kebutuhan]'}. Saya memiliki proyek/bisnis [deskripsi singkat]. Apakah bisa didiskusikan?`);return target.href;}
 function mount(){
  // Clean links are also usable when JavaScript is disabled. Old #/ bookmarks remain supported.
  document.querySelectorAll('a[href^="#/"]').forEach(a=>{a.setAttribute('href',a.getAttribute('href').slice(1));});
  const floating=document.querySelector('.whatsapp-float');if(floating&&hubProfile.contacts.whatsapp)floating.href=whatsapp(hubProfile.contacts.whatsapp);
  document.querySelectorAll('a[href]').forEach(a=>{const url=new URL(a.href,location.href);if(url.origin===location.origin&&url.pathname.replace(/\/$/,'')===location.pathname.replace(/\/$/,'')&&!url.hash)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 }
 function aurora(){return `<div class="hero-aurora" aria-hidden="true">${Array.from({length:11},()=>'<span class="hero-aurora-bar"></span>').join('')}</div>`;}
 window.TechpediaConversion={workflow,practices,serviceScope,projectFacts,caseStudy,whatsapp,mount,aurora};
})();
