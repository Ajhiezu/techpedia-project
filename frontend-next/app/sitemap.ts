import type {MetadataRoute} from 'next';
import {list} from '../lib/api';
import {indexable,publicOrigin} from '../lib/seo';
export const dynamic='force-static';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const origin=publicOrigin();if(!origin||!indexable())return [];
 const paths=['','services','portfolio','about','process','contact','faq'];
 const data=await Promise.all(['services','projects'].map(resource=>list(resource)));
 if(data.some(result=>result.unavailable))throw new Error('Published sitemap content is unavailable');
 data.forEach((result,i)=>result.items.forEach(item=>paths.push(['services','portfolio'][i]+'/'+encodeURIComponent(item.slug))));
 return paths.map(path=>({url:origin+'/'+path}));
}
