from pathlib import Path
from html.parser import HTMLParser
import json
class Audit(HTMLParser):
 def __init__(self):super().__init__();self.sections=[];self.css=[];self.fonts=[];self.headings=[];self.h=None
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='section':self.sections.append({k:d[k] for k in ['id','class','style'] if k in d})
  if t=='link' and d.get('rel')=='stylesheet':self.css.append(d.get('href'))
  if t in ['h1','h2']:self.h={'tag':t,'class':d.get('class'),'text':''};self.headings.append(self.h)
 def handle_endtag(self,t):
  if t in ['h1','h2']:self.h=None
 def handle_data(self,d):
  if self.h:self.h['text']+=d.strip()+' '
out={}
for name in ['download.htm','services.htm','work.htm','ai-solutions.htm','fintech-design-agency.htm','ZeeFrames Insights _ UI UX & Branding Articles.html']:
 p=Path('C:/Users/ajhie/Downloads')/name;a=Audit();a.feed(p.read_text(encoding='utf-8'));out[name]={'sections':a.sections,'css':a.css,'headings':a.headings}
Path('docs/redesign-v3').mkdir(exist_ok=True,parents=True)
Path('docs/redesign-v3/saved-html-audit.json').write_text(json.dumps(out,indent=2),encoding='utf-8')
print(json.dumps(out,indent=2)[:23000])
