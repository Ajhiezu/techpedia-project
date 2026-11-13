"""Run PHPUnit in an isolated SQLite in-memory process, never the project's DB."""
from pathlib import Path
import os,sys,subprocess,json,datetime,secrets,base64
root=Path(__file__).resolve().parents[2]
evidence=root/'docs/quality-assurance/evidence';evidence.mkdir(parents=True,exist_ok=True)
label=sys.argv[1] if len(sys.argv)>1 else 'backend-after'
if not label.replace('-','').isalnum():raise SystemExit('Invalid report label')
if (root/'backend/bootstrap/cache/config.php').exists():raise SystemExit('Refusing tests with cached application config; use an isolated checkout.')
env=os.environ.copy();env.update({'APP_ENV':'testing','APP_DEBUG':'false','APP_KEY':'base64:'+base64.b64encode(secrets.token_bytes(32)).decode(),'DB_CONNECTION':'sqlite','DB_DATABASE':':memory:','DB_URL':'','CACHE_STORE':'array','SESSION_DRIVER':'array','QUEUE_CONNECTION':'sync','MAIL_MAILER':'array','INQUIRY_NOTIFICATIONS_ENABLED':'false'})
args=['php','-d','extension=pdo_sqlite','vendor/phpunit/phpunit/phpunit','--log-junit',str(evidence/(label+'.xml'))]
p=subprocess.run(args,cwd=root/'backend',env=env,capture_output=True,text=True,encoding='utf-8',errors='replace',timeout=100)
report={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'command':args,'environment':'APP_ENV=testing; SQLite :memory:; mail array; no production credentials','exitCode':p.returncode,'stdout':p.stdout,'stderr':p.stderr}
(evidence/(label+'.json')).write_text(json.dumps(report,indent=2),encoding='utf-8')
print(p.stdout);print(p.stderr);sys.exit(p.returncode)
