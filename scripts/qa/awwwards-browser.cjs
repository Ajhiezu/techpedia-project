const fs = require('node:fs');
const assert = require('node:assert/strict');
const {chromium} = require('playwright');
const axe = require.resolve('axe-core/axe.min.js');

(async () => {
  const dir = process.env.AW_QA_OUT || 'docs/redesign-awwwards/checks';
  fs.mkdirSync(dir, {recursive: true});
  const browser = await chromium.launch({channel: 'chrome'});
  const page = await browser.newPage();
  const errors = [], results = [], violations = [];
  page.on('pageerror', e => errors.push(e.message));
  const go = async route => {
    await page.goto('http://127.0.0.1:8081' + route, {waitUntil:'domcontentloaded'});
    await page.waitForFunction(() => document.querySelector('.services-menu')?.onclick);
  };
  try {
    await page.emulateMedia({reducedMotion: 'reduce'});
    for (const [name, width, height] of [['desktop',1440,900],['tablet',768,1024],['mobile',390,844],['small',320,844]]) {
      await page.setViewportSize({width,height}); await go('/');
      assert.equal(await page.locator('main h1').count(), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, name);
      await page.locator('img').evaluateAll(images => images.forEach(image => image.loading='eager'));
      await page.evaluate(()=>Promise.all([...document.images].map(image=>image.decode().catch(()=>{}))));
      await page.screenshot({path: `${dir}/home-${name}.png`, fullPage: true});
      for (let i = 0; i < 4; i++) {
        await page.locator(`[data-showcase="${i}"]`).click();
        assert.equal(await page.locator('[data-showcase-panel]:visible').getAttribute('data-showcase-panel'), String(i));
        assert.equal(await page.locator(`[data-showcase="${i}"]`).getAttribute('aria-pressed'), 'true');
      }
      results.push(`${name}: layout and four context selectors pass`);
    }
    await page.setViewportSize({width:1440,height:900}); await go('/');
    await page.locator('.services-menu').click(); assert.equal(await page.locator('.service-popover').isVisible(), true);
    await page.keyboard.press('Escape'); assert.equal(await page.locator('.service-popover').isVisible(), false);
    await page.locator('.v3-questions summary').first().focus(); await page.keyboard.press('Enter');
    assert.equal(await page.locator('.v3-questions details').first().getAttribute('open'), '');
    const prices = await page.locator('.pricing-card').allTextContents();
    assert.equal(prices.length, 4); prices.forEach(p => {assert.match(p,/Minta Penawaran/); assert.doesNotMatch(p,/Rp[\s\d.,]+/);});
    for (const href of await page.locator('.pricing-card a').evaluateAll(links => links.map(a=>a.href))) {
      assert.equal(new URL(href).pathname, '/6287732774899'); assert.ok(new URL(href).searchParams.get('text'));
    }
    await page.setViewportSize({width:390,height:844});
    await page.locator('.menu-toggle').click(); assert.equal(await page.locator('.mobile-nav').isVisible(),true);
    await page.keyboard.press('Escape'); assert.equal(await page.locator('.mobile-nav').isVisible(),false);
    results.push('Dropdown, FAQ keyboard, mobile menu, four quote links pass');
    const site = JSON.parse(fs.readFileSync('frontend/content/site.json','utf8'));
    const routes = ['/','/services/','/work/','/about/','/process/','/contact/','/faq/', ...site.services.map(s=>'/services/'+s.slug+'/'), ...site.projects.map(p=>'/portfolio/'+p.slug+'/')];
    for (const route of routes) {
      await go(route);
      assert.equal(await page.locator('main h1').count(),1,route);
      for (const width of [390,768,1440]) {
        await page.setViewportSize({width,height:900});
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),false,route+' '+width);
      }
      if (['/','/services/','/work/','/contact/','/portfolio/rpk-pustaka/'].includes(route)) {
        await page.addScriptTag({path:axe});
        const issues = await page.evaluate(async()=> (await axe.run()).violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})));
        violations.push({route, issues});
        await page.screenshot({path:`${dir}/${route==='/'?'home':route.replaceAll('/','-')}-desktop.png`,fullPage:true});
      }
    }
    results.push(`${routes.length} routes: one h1 and no overflow at 390/768/1440`);
    await go('/work/');
    await page.locator('[data-category="Toko Daring"]').click(); assert.equal(await page.locator('#project-results .v3-project').count(),1);
    await go('/portfolio/rpk-pustaka/'); await page.locator('[data-carousel-next]').first().click();
    assert.equal(await page.locator('[data-project-carousel]').first().getAttribute('data-active'),'1');
    await go('/contact/?service=website-development');
    assert.ok((await page.locator('main a[href^="https://wa.me/"]').first().getAttribute('href')).includes('6287732774899'));
    await page.emulateMedia({reducedMotion:'no-preference'}); await go('/');
    assert.equal(await page.evaluate(()=>Boolean(window.gsap && window.Lenis && window.TechpediaMotion)),true);
    await page.locator('[data-showcase="2"]').click();
    await page.screenshot({path:`${dir}/motion-desktop.png`});
    assert.deepEqual(errors,[]);
    const serious = violations.flatMap(v=>v.issues.filter(i=>['serious','critical'].includes(i.impact)).map(i=>({route:v.route,...i})));
    assert.deepEqual(serious,[], 'Serious/critical accessibility violations');
    results.push('Portfolio filter, case gallery, contact channel, motion engine and runtime pass');
  } finally {
    fs.writeFileSync(`${dir}/results.json`,JSON.stringify({results,violations,errors},null,2));
    console.log(JSON.stringify({results,violations,errors},null,2)); await browser.close();
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
