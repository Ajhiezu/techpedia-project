import site from '../../frontend/content/site.json';
export type Content = {
 id:number;slug:string;status?:string;approved?:boolean;featured?:boolean;is_featured?:boolean;thumbnail?:string;thumbnail_alt?:string;demo_type?:string;demo_url?:string;project_url?:string;github_url?:string;design_url?:string;technologies?:(string|{name:string})[];role?:string;architecture?:string;lessons?:string;title:string;short_description?:string;description?:string;
 excerpt?:string;content?:string;overview?:string;challenge?:string;solution?:string;results?:string;
 meta_title?:string;meta_description?:string;tags?:{name:string;slug:string}[];category_name?:string;question?:string;answer?:string;published_at?:string;
};
export const backend=()=>process.env.BACKEND_URL||'http://127.0.0.1:8000';
export async function list(resource:string):Promise<{items:Content[];unavailable:boolean}> {
 if(process.env.CONTENT_MODE!=='api'){const rows=(site as unknown as Record<string,Content[]>)[resource]||[];return {items:rows.filter(item=>(item.status===undefined||item.status==='published')&&(!['projects','posts'].includes(resource)||item.approved===true&&item.status==='published')&&(!item.published_at||Number.isFinite(Date.parse(item.published_at))&&Date.parse(item.published_at)<=Date.now())),unavailable:false};}
 try {
  const items:Content[]=[];
  for(let page=1;page<=100;page++){
   const response=await fetch(`${backend()}/api/v1/${resource}?page=${page}`,{cache:'no-store',signal:AbortSignal.timeout(10000)});
   if(!response.ok)throw new Error('Unavailable');
   const data=await response.json();if(!Array.isArray(data.data))throw new Error('Invalid response');items.push(...data.data);
   if(!data.next_page_url)return {items,unavailable:false};
  }
  throw new Error('Too many pages');
 } catch {return {items:[],unavailable:true};}
}
export async function detail(resource:string,slug:string):Promise<Content|null> {
 if(process.env.CONTENT_MODE!=='api')return (await list(resource)).items.find(item=>item.slug===slug)||null;
 const response=await fetch(`${backend()}/api/v1/${resource}/${encodeURIComponent(slug)}`,{cache:'no-store',signal:AbortSignal.timeout(10000)});
 if(response.status===404)return null;if(!response.ok)throw new Error('Content unavailable');
 return (await response.json()).data;
}
