import site from '../../frontend/content/site.json';
const contacts=site.profile.contacts;
export default function ContactChannels(){
 const items=[{name:'WhatsApp Business',url:contacts.whatsapp,text:'Diskusikan kebutuhan dan ruang lingkup aplikasi Anda.'},{name:'Email',url:contacts.email?'mailto:'+encodeURIComponent(contacts.email):'',text:contacts.email},{name:'Fastwork',url:contacts.fastwork,text:'Lihat layanan Techpedia Project melalui Fastwork.'}].filter(item=>item.url&&item.url!=='mailto:');
 return <section className="section"><div className="grid three">{items.map(item=><article className="card" key={item.name}><h2>{item.name}</h2><p>{item.text}</p><a className="button" href={item.url} {...(item.url.startsWith('https:')?{target:'_blank',rel:'noopener noreferrer'}:{})}>Hubungi via {item.name}</a></article>)}</div><div className="feature-panel contact-brief"><h2>Informasi awal yang membantu</h2><ul><li>Aplikasi atau proses apa yang ingin dibuat atau diperbaiki?</li><li>Siapa penggunanya dan pekerjaan apa yang perlu dibantu?</li><li>Apakah ada referensi, prioritas fitur, atau target waktu?</li></ul></div></section>;
}
