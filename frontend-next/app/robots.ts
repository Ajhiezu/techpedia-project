import type {MetadataRoute} from 'next';
import {indexable,publicOrigin} from '../lib/seo';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{
 const origin=publicOrigin();return {rules:indexable()?{userAgent:'*',allow:'/',disallow:['/admin','/api','/privacy-policy','/terms']}:{userAgent:'*',disallow:'/'},...(origin&&indexable()?{sitemap:origin+'/sitemap.xml'}:{})};
}
