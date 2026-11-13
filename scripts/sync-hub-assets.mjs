import {cp,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
await mkdir(path.join(root,'frontend-next/public/assets'),{recursive:true});
await cp(path.join(root,'frontend/assets'),path.join(root,'frontend-next/public/assets'),{recursive:true});
