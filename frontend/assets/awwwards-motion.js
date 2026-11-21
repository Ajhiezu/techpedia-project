(function () {
  'use strict';
  let context, lenis, tick;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  function cleanup() {
    context?.revert(); context = null;
    if (tick && window.gsap) gsap.ticker.remove(tick);
    lenis?.destroy(); lenis = null; tick = null;
  }
  function mount() {
    cleanup();
    if (reduced.matches || !window.gsap) return;
    // Keep the headline and lead still so optional motion cannot postpone their LCP.
    context = gsap.context(() => {}, document.querySelector('main'));
    // Native touch scrolling and in-page anchor handling remain in the existing router.
    if (window.Lenis && matchMedia('(pointer: fine)').matches) {
      lenis = new Lenis({duration: .85, smoothWheel: true, anchors: false});
      tick = time => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
    }
  }
  function select(panel) {
    if (!panel || reduced.matches || !window.gsap) return;
    context?.add(() => gsap.fromTo(panel.querySelector('.aw-screen-link'),
      {clipPath: 'inset(0% 0% 5% 0%)', y: 8},
      {clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: .45, ease: 'power3.out', clearProps: 'clipPath,transform', overwrite: true}));
  }
  reduced.addEventListener('change', mount);
  addEventListener('pagehide', cleanup);
  addEventListener('pageshow', event => { if (event.persisted) mount(); });
  window.TechpediaMotion = {mount, select, cleanup};
})();
