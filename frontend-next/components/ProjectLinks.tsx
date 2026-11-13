import type {Content} from '../lib/api';
export function safeUrl(value?:string){try{const url=new URL(value||'');return url.protocol==='https:'&&!url.username&&!url.password?url.href:null;}catch{return null;}}
export function thumbnailUrl(value?:string){if(value&&/^assets\/[a-zA-Z0-9_./-]+\.(png|jpe?g|webp|avif)$/i.test(value)&&!value.includes('..'))return '/'+value;return safeUrl(value);}
export function demoLabel(item:Content){return ({'full-live-demo':'Demo aplikasi','interactive-ui-demo':'Pratinjau antarmuka','case-study-only':'Studi kasus'} as Record<string,string>)[item.demo_type||'']||'Studi kasus';}
export default function ProjectLinks({item}:{item:Content}){
 const demo=safeUrl(item.demo_url||item.project_url),code=safeUrl(item.github_url),design=safeUrl(item.design_url);
 const links=[...(demo&&item.demo_type!=='case-study-only'?[{label:item.demo_type==='interactive-ui-demo'?'Lihat pratinjau':'Kunjungi aplikasi',url:demo}]:[]),...(code&&new URL(code).hostname==='github.com'?[{label:'GitHub',url:code}]:[]),...(design&&['figma.com','www.figma.com'].includes(new URL(design).hostname)?[{label:'Figma',url:design}]:[])];
 return <>{links.map(link=><a key={link.label} className="text-link" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<span className="sr-only"> (dibuka di tab baru)</span></a>)}</>;
}
