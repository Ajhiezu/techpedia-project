from pathlib import Path
import os,subprocess,json,datetime,re
r=Path(__file__).resolve().parents[2];out=r/'docs/quality-assurance/evidence';out.mkdir(parents=True,exist_ok=True)
commands=[('composer-audit',['cmd','/c','composer','audit','--locked','--format=json'],r/'backend'),('composer-validate',['cmd','/c','composer','validate','--no-check-publish'],r/'backend'),('npm-audit',['cmd','/c','npm.cmd','audit','--json','--fetch-retries=0','--fetch-timeout=8000'],r/'frontend-next'),('npm-outdated',['cmd','/c','npm.cmd','outdated','--json','--fetch-retries=0','--fetch-timeout=8000'],r/'frontend-next'),('next-build',['cmd','/c','npm.cmd','run','build'],r/'frontend-next'),('next-typecheck',['cmd','/c','npm.cmd','run','typecheck'],r/'frontend-next'),('unit-adapter',['node','--test','--test-reporter=tap','scripts/api.test.cjs'],r)]
for name,args,cwd in commands:
 try:
  result=subprocess.run(args,cwd=cwd,capture_output=True,text=True,encoding='utf-8',errors='replace',timeout=20);data={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'command':args,'exitCode':result.returncode,'stdout':result.stdout,'stderr':result.stderr}
 except subprocess.TimeoutExpired:data={'command':args,'exitCode':None,'stderr':'20 second command budget exceeded; result is BLOCKED, not clean'}
 except OSError as e:data={'command':args,'exitCode':None,'stderr':str(e)}
 (out/(name+'.json')).write_text(json.dumps(data,indent=2),encoding='utf-8');print(name,data['exitCode'],flush=True)
environment={}
for folder in ['backend','frontend-next']:
 for filename in ['.env','.env.example','.env.local']:
  file=r/folder/filename
  if file.exists():
   values={m[0]:m[1].strip().strip('"') for m in re.findall(r'^([A-Z_]+)=(.*)$',file.read_text(encoding='utf-8'),re.M)}
   environment[folder+'/'+filename]={'exists':True,'debugEnabled':values.get('APP_DEBUG')=='true','isProduction':values.get('APP_ENV')=='production','hasApplicationKey':bool(values.get('APP_KEY')),'contactEnabled':values.get('CONTACT_FORM_ENABLED')=='true','hasPublicSiteUrl':bool(values.get('SITE_URL'))}
(out/'environment-redacted.json').write_text(json.dumps(environment,indent=2),encoding='utf-8')
findings=[]
for base in ['frontend','frontend-next','backend/app','backend/config','backend/routes']:
 for p in (r/base).rglob('*'):
  if not p.is_file() or any(part in ['node_modules','.next'] for part in p.parts) or p.suffix not in ['.js','.cjs','.mjs','.ts','.tsx','.php','.json']:continue
  text=p.read_text(encoding='utf-8',errors='replace')
  for pattern in [r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',r'sk_live_[A-Za-z0-9]{20,}']:
   if re.search(pattern,text):findings.append({'path':p.relative_to(r).as_posix(),'finding':'possible embedded secret; review privately'})
(out/'secret-scan.json').write_text(json.dumps({'scope':'first-party source only, pattern scan; not proof of no secrets; git metadata unavailable','findings':findings},indent=2),encoding='utf-8')
