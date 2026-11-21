"""Compose untouched browser captures for visual QA, never production assets."""
from pathlib import Path
from PIL import Image,ImageDraw
root=Path('docs/redesign-v3');out=root/'comparison';out.mkdir(exist_ok=True)
pairs=[('desktop','reference/home-desktop.png','final/home-desktop.png'),('tablet','reference/home-tablet.png','final/home-tablet.png'),('mobile','reference/home-mobile.png','final/home-mobile.png'),('services','reference/home-section-2.png','final/services-desktop.png'),('process','reference/home-section-3.png','final/process-desktop.png'),('work','reference/home-section-4.png','final/work-desktop.png'),('cta','reference/home-section-5.png','final/talk-desktop.png'),('services-page','reference/services-desktop.png','final/page-services.png'),('work-page','reference/work-desktop.png','final/page-work.png'),('faq','reference/home-section-6.png','final/faq-desktop.png'),('footer','reference/home-section-9.png','final/footer-desktop.png')]
for name,ref,local in pairs:
 a=Image.open(root/ref).convert('RGB');b=Image.open(root/local).convert('RGB');w=a.width;h=max(a.height,b.height)
 canvas=Image.new('RGB',(w*2+24,h+42),'#252b31');canvas.paste(a,(0,42));canvas.paste(b,(w+24,42));d=ImageDraw.Draw(canvas);d.text((15,13),'REFERENCE / ZEEFRAMES',fill='white');d.text((w+39,13),'TECHPEDIA / V3',fill='white');canvas.save(out/(name+'.png'))
html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Techpedia V3 visual comparison</title><style>body{background:#0a0c0f;color:#fff;font:16px Arial;margin:25px}img{width:100%;height:auto}section{margin-bottom:50px}a{color:#00d9ff}</style><h1>Reference / Techpedia V3</h1><p>Actual browser screenshots. Reference assets appear only in these QA artifacts. Homepage views use the requested exact dimensions.</p>'
for name,_,_ in pairs:html+=f'<section><h2>{name}</h2><a href="{name}.png"><img src="{name}.png" alt="Side-by-side {name} comparison"></a></section>'
(out/'index.html').write_text(html,encoding='utf-8')
print(f'Created {len(pairs)} side-by-side comparisons.')
