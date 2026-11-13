import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {list,detail} from '../../lib/api';
import {pageMetadata} from '../../lib/seo';
import {Head,CTA,Empty} from '../../components/Content';
import Catalog from '../../components/Catalog';
import Reviews from '../../components/Reviews';
import Mascot from '../../components/Mascot';
import {Deliverables,Agreements,Team,TeamIntro,ServiceScope} from '../../components/DeliverySections';
import RpkProject from '../../components/RpkProject';
import ContactForm from '../../components/ContactForm';
import ContactChannels from '../../components/ContactChannels';
import ProjectLinks,{demoLabel,thumbnailUrl} from '../../components/ProjectLinks';
export const dynamicParams=false;
export async function generateStaticParams(){
 const paths:string[][]=[[],...['services','portfolio','about','process','contact','faq','privacy-policy','terms'].map(path=>[path])];
 for(const [resource,path] of [['services','services'],['projects','portfolio']])for(const item of (await list(resource)).items)paths.push([path,item.slug]);
 return paths.map(slug=>({slug}));
}
type Props={params:Promise<{slug?:string[]}>;searchParams:Promise<{service?:string}>};
const stages=[["Konsultasi kebutuhan", "Ceritakan proses bisnis, pengguna, kendala, dan tujuan aplikasi yang ingin dibangun."], ["Analisis dan perencanaan", "Bahas ruang lingkup, prioritas fitur, pembagian akses, serta tahapan pengerjaan."], ["Desain antarmuka", "Susun alur pengguna dan tampilan aplikasi sebelum masuk ke pengembangan."], ["Pengembangan aplikasi", "Wujudkan fitur dan alur yang disepakati menjadi aplikasi yang dapat digunakan."], ["Pengujian dan peninjauan", "Periksa fungsi serta alur penggunaan, lalu bahas perbaikan yang diperlukan."], ["Peluncuran dan pemeliharaan", "Siapkan penggunaan aplikasi dan bahas dukungan lanjutan sesuai kesepakatan."]];
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug=[]}=await params;const path='/'+slug.map(encodeURIComponent).join('/');
 const titles:Record<string,string>={'home':'Jasa Pengembangan Aplikasi Custom','services':'Layanan','portfolio':'Proyek & Studi Kasus','about':'Tentang Techpedia Project','process':'Alur Kerja','insights':'Artikel','contact':'Kontak','faq':'Pertanyaan Umum','privacy-policy':'Kebijakan Privasi - Draf','terms':'Syarat dan Ketentuan - Draf'};
 const page=slug[0]||'home';if(page==='insights')notFound();let title=titles[page]||'Halaman tidak ditemukan';let description=title+' - layanan pengembangan aplikasi sesuai kebutuhan bisnis dari Techpedia Project.';
 if(slug.length===2&&['services','portfolio','insights'].includes(page)){
  const resource=page==='portfolio'?'projects':page==='insights'?'posts':'services';const item=await detail(resource,slug[1]);
  if(!item)notFound();title=item.meta_title||item.title;description=item.meta_description||item.short_description||item.excerpt||title;
 }
 const metadata=pageMetadata(title,description,path);
 if(['privacy-policy','terms'].includes(page)||!titles[page])metadata.robots={index:false,follow:false};
 return metadata;
}
export default async function Page({params,searchParams}:Props){
 const {slug=[]}=await params;const page=slug[0]||'home';const search:{service?:string}=process.env.CONTENT_MODE==='api'?await searchParams:{};
 if(slug.length>2||page==='insights')notFound();
 if(['services','portfolio','insights'].includes(page)){
  const resource=page==='portfolio'?'projects':page==='insights'?'posts':'services';
  if(slug.length===2){const item=await detail(resource,slug[1]);if(!item)notFound();if(page==='services')return <><Head label="Layanan" title={item.title} text={item.short_description}/><ServiceScope slug={item.slug}/><Deliverables/><Agreements/><CTA/></>;if(page==='portfolio'&&item.slug==='rpk-pustaka')return <RpkProject item={item} detail/>;return <><Head className={page==='portfolio'?'portfolio-heading':''} label={page==='portfolio'?'Studi Kasus':page==='services'?'Layanan':'Artikel'} title={item.title} text={item.short_description||item.excerpt}/><article className="article">{page==='portfolio'&&<><p className="demo-badge">{demoLabel(item)}</p><div className="project-links"><ProjectLinks item={item}/></div>{thumbnailUrl(item.thumbnail)&&<img className="case-image" src={thumbnailUrl(item.thumbnail)!} alt={item.thumbnail_alt||item.title} width={720} height={450}/>}</>}{item.published_at&&<time dateTime={item.published_at}>{new Date(item.published_at).toLocaleDateString("id-ID",{timeZone:"UTC",dateStyle:"long"})}</time>}{item.tags?.length?<ul aria-label="Tag artikel">{item.tags.map(tag=><li key={tag.slug}>{tag.name}</li>)}</ul>:null}{[item.description,item.content].filter(Boolean).map((text,i)=><p key={i} className="content-text">{text}</p>)}{(['overview','role','challenge','solution','architecture','results','lessons'] as const).filter(key=>item[key]).map(key=><section key={key}><h2>{({overview:'Gambaran proyek',role:'Kontribusi',challenge:'Tantangan',solution:'Solusi',architecture:'Struktur sistem',results:'Hasil pengembangan',lessons:'Pembelajaran'})[key]}</h2><p className="content-text">{item[key]}</p></section>)}{page==='services'&&<Link className="button" href={`/contact?service=${item.slug}`}>Diskusikan layanan ini</Link>}</article><CTA/></>;}
  const result=await list(resource);return <><Head className={page==='portfolio'?'portfolio-heading':''} label={page==='portfolio'?'Proyek Klien':page==='services'?'Layanan':'Artikel'} title={page==='services'?'Jasa pengembangan aplikasi untuk kebutuhan bisnis Anda.':page==='portfolio'?'Proyek nyata. Solusi yang bekerja.':'Wawasan untuk pengembangan aplikasi dan bisnis.'}/><Catalog {...result} base={'/'+page}/>{page==='services'&&<><Deliverables/><Agreements/></>}<CTA/></>;
 }
 if(slug.length>1)notFound();
 if(page==='home'){
  const [services,projects]=await Promise.all([list('services'),list('projects')]);const featured=projects.items.filter(p=>p.featured||p.is_featured);const selected=(featured.length?featured:projects.items).slice(0,3);
  return <><section className="hero"><div><p className="eyebrow">PENGEMBANGAN APLIKASI SESUAI KEBUTUHAN</p><h1>Aplikasi yang dirancang <em>untuk bisnis Anda.</em></h1><p className="lead">Jasa pembuatan aplikasi custom, website, dan sistem operasional. Mulai dari kebutuhan bisnis Anda, kami susun alur dan fitur yang membantu pekerjaan sehari-hari.</p><div className="actions"><Link className="button" href="/contact">Diskusikan kebutuhan</Link><Link className="button outline" href="/services">Lihat layanan</Link></div></div><Mascot/></section><section className="trust"><p>Dari kebutuhan bisnis ke aplikasi yang siap digunakan.</p><div><span>Analisis kebutuhan</span><span>Desain &amp; pengembangan</span><span>Dukungan lanjutan</span></div></section><section className="section"><p className="eyebrow">LAYANAN KAMI</p><h2>Aplikasi yang mengikuti cara bisnis Anda bekerja.</h2><p>Pilih layanan sesuai kebutuhan, mulai dari website bisnis hingga aplikasi dengan alur dan hak akses khusus.</p></section><Catalog {...services} base="/services"/><Deliverables/><section className="section muted-bg"><p className="eyebrow">PROYEK KLIEN</p><h2>Kebutuhan nyata, diwujudkan menjadi solusi.</h2><p>Kenali penerapan layanan kami melalui proyek dan ruang lingkup pengembangannya.</p></section><Catalog items={selected} unavailable={projects.unavailable} base="/portfolio"/><TeamIntro/><Reviews/><CTA/></>;
 }
 if(page==='contact'){if(process.env.CONTENT_MODE!=='api')return <><Head label="Kontak" title="Ceritakan kebutuhan aplikasi Anda." text="Diskusikan alur kerja, fitur, dan tujuan bisnis Anda melalui kanal yang tersedia."/><ContactChannels/></>;const result=await list('services');return <><Head label="Kontak" title="Ceritakan kebutuhan aplikasi Anda." text="Ceritakan alur kerja, kendala, dan tujuan aplikasi yang dibutuhkan."/><section className="section contact-wrap">{result.unavailable?<Empty unavailable/>:<ContactForm services={result.items} selected={search.service||''} enabled={process.env.CONTACT_FORM_ENABLED==='true'}/>}</section></>;}
 if(page==='about')return <><Head label="Tentang Techpedia Project" title="Tim yang terkoordinasi untuk kebutuhan aplikasi Anda." text="Kami membagi tanggung jawab dari perencanaan sampai peluncuran. Setiap area pekerjaan memiliki peran yang saling terhubung melalui koordinasi manajemen proyek."/><Team/><Agreements/><CTA/></>;
 if(page==='process')return <><Head label="Alur Kerja" title="Dari kebutuhan bisnis hingga aplikasi siap digunakan." text="Ruang lingkup, tahapan, dan jadwal dibahas sesuai kebutuhan setiap proyek."/><section className="section"><ol className="process detailed">{stages.map(([stage,text],i)=><li key={stage}><span>0{i+1}</span><div><h2>{stage}</h2><p>{text}</p></div></li>)}</ol></section><CTA/></>;
 if(page==='faq'){const result=await list('faqs');return <><Head label="FAQ" title="Pertanyaan yang sering diajukan."/><section className="section narrow">{result.items.length?result.items.map(f=><details key={f.id} className="faq"><summary>{f.question}</summary><p className="content-text">{f.answer}</p></details>):<Empty unavailable={result.unavailable}/>}</section><CTA/></>;}
 if(['privacy-policy','terms'].includes(page))return <><Head label="Draf dokumen hukum" title={page==='privacy-policy'?'Kebijakan Privasi':'Syarat dan Ketentuan'}/><article className="article legal"><p className="draft">Draf untuk ditinjau. Dokumen ini belum menjadi kebijakan final.</p><h2>Informasi yang perlu dikonfirmasi</h2><p>Identitas pengelola, kanal kontak, tujuan pengolahan data, masa penyimpanan, akses penerima, dan ketentuan layanan perlu dikonfirmasi sebelum pengumpulan pesan diaktifkan.</p></article></>;
 notFound();
}
