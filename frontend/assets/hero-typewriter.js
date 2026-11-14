(function () {
  'use strict';
  let cleanup = () => {};
  const phrases = ['untuk bisnis Anda.', 'sesuai alur kerja Anda.', 'untuk ide besar Anda.'];

  function mount() {
    cleanup();
    cleanup = () => {};
    const text = document.querySelector('[data-hero-typewriter]');
    if (!text) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let phrase = 0, length = phrases[0].length, deleting = true, visible = true;
    let timer;

    function queue(delay) {
      clearTimeout(timer);
      if (visible && !document.hidden && !motion.matches) timer = setTimeout(step, delay);
    }
    function step() {
      if (motion.matches || document.hidden || !visible) return;
      if (deleting) {
        if (length > 0) {
          text.textContent = phrases[phrase].slice(0, --length);
          queue(38);
        } else {
          phrase = (phrase + 1) % phrases.length;
          deleting = false;
          queue(280);
        }
      } else {
        text.textContent = phrases[phrase].slice(0, ++length);
        if (length === phrases[phrase].length) {
          deleting = true;
          queue(2300);
        } else queue(85);
      }
    }
    function sync() {
      clearTimeout(timer);
      if (motion.matches) {
        phrase = 0;
        length = phrases[0].length;
        deleting = true;
        text.textContent = phrases[0];
      } else queue(1800);
    }
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    });
    observer.observe(text.closest('h1'));
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    cleanup = () => {
      clearTimeout(timer);
      observer.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
    sync();
  }
  window.TechpediaTypewriter = {mount};
  mount();
})();
