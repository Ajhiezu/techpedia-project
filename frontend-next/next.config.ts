import type {NextConfig} from 'next';
import path from 'node:path';
const apiMode=process.env.CONTENT_MODE==='api';
const backend=process.env.BACKEND_URL||'http://127.0.0.1:8000';
const config:NextConfig={
 turbopack:{root:path.resolve(process.cwd(),'..')},
 ...(apiMode?{}:{output:'export',trailingSlash:true,images:{unoptimized:true}}),
 ...(apiMode?{async rewrites(){return [{source:'/api/:path*',destination:`${backend}/api/:path*`},{source:'/storage/:path*',destination:`${backend}/storage/:path*`}];}}:{}),
};
export default config;
