import type {Metadata} from 'next';
export function publicOrigin():string|null {
 const value=process.env.SITE_URL;if(!value)return null;
 const url=new URL(value);
 if(!['http:','https:'].includes(url.protocol)||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw new Error('SITE_URL must be an origin without credentials, path, query or fragment');
 return url.origin;
}
export function indexable():boolean {return process.env.SITE_INDEXABLE==='true'&&Boolean(publicOrigin());}
export function pageMetadata(title:string,description:string,path:string):Metadata {
 const origin=publicOrigin();const url=origin?new URL(path,origin).href:undefined;
 return {title,description,alternates:url?{canonical:url}:undefined,openGraph:{title,description,type:'website',locale:'id_ID',...(url?{url}:{})},robots:{index:indexable(),follow:indexable()}};
}
