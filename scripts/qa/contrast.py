from pathlib import Path
import json,re
root=Path(__file__).resolve().parents[2]
def luminance(hex):
 rgb=[int(hex[i:i+2],16)/255 for i in (1,3,5)]
 return sum(weight*(c/12.92 if c<=.04045 else ((c+.055)/1.055)**2.4) for weight,c in zip([.2126,.7152,.0722],rgb))
def ratio(a,b):
 x,y=sorted([luminance(a),luminance(b)]);return (y+.05)/(x+.05)
css=(root/'frontend/assets/styles.css').read_text();muted=re.search(r'--muted:(#[a-f0-9]{6})',css)[1]
cases=[]
for name,text,bg in [('muted on white',muted,'#ffffff'),('muted on light',muted,'#f4f7fc'),('primary on white','#2457d6','#ffffff'),('white on primary','#ffffff','#2457d6')]:
 value=ratio(text,bg);cases.append({'id':'CONTRAST-'+name,'category':'accessibility','name':name,'expected':'WCAG normal-text ratio >=4.5:1','actual':round(value,4),'status':'PASS' if value>=4.5 else 'FAIL','text':text,'background':bg})
(root/'docs/quality-assurance/evidence/contrast.json').write_text(json.dumps({'tool':'WCAG relative-luminance calculation from current CSS token values; not a full rendered-text audit','baselineMutedOnLight':ratio('#64748b','#f4f7fc'),'cases':cases},indent=2),encoding='utf-8');print(cases)
