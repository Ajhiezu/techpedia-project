(function () {
  'use strict';
  const root = document.documentElement;
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const pending = new Set();

  function busy() {
    const token = {};
    pending.add(token);
    root.toggleAttribute('data-cursor-loading', fine.matches);
    return () => {
      pending.delete(token);
      root.toggleAttribute('data-cursor-loading', fine.matches && pending.size > 0);
    };
  }

  fine.addEventListener('change', () => {
    root.toggleAttribute('data-cursor-loading', fine.matches && pending.size > 0);
  });
  window.TechpediaCursor = {busy};
  if (document.readyState === 'loading') {
    const done = busy();
    document.addEventListener('DOMContentLoaded', done, {once: true});
  }

  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const layer = document.createElement('div');
  layer.className = 'cursor-glow-layer';
  layer.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-liquid';
  layer.append(canvas);
  document.body.append(layer);
  const context = canvas.getContext('2d');
  if (!context) { layer.remove(); return; }
  let frame = 0, lastTime = 0, shown = false;
  let targetX = 0, targetY = 0, movedAt = 0;
  let hasPointer = false;
  let scrollPendingX = 0, scrollPendingY = 0, opacity = 0;
  let sparkAt = 0;
  const sparks = [];
  const points = Array.from({length: 36}, () => ({x: 0, y: 0}));
  const scrollPositions = new WeakMap();
  scrollPositions.set(document, {x: scrollX, y: scrollY});

  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(innerWidth * ratio);
    canvas.height = Math.round(innerHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    hide();
  }
  function sparkle(x, y, size, alpha, angle, violet = false) {
    context.save();
    context.translate(x, y);
    context.rotate(angle);
    context.beginPath();
    context.moveTo(0, -size);
    context.quadraticCurveTo(size * .13, -size * .13, size * .72, 0);
    context.quadraticCurveTo(size * .13, size * .13, 0, size);
    context.quadraticCurveTo(-size * .13, size * .13, -size * .72, 0);
    context.quadraticCurveTo(-size * .13, -size * .13, 0, -size);
    context.fillStyle = violet ? `rgba(154,125,224,${alpha})` : `rgba(27,193,225,${alpha})`;
    context.shadowColor = `rgba(50,217,245,${alpha * .35})`;
    context.shadowBlur = 4;
    context.fill();
    context.restore();
  }
  function paint(alpha, time) {
    context.clearRect(0, 0, innerWidth, innerHeight);
    const left = [], right = [];
    for (let i = 0; i < points.length; i++) {
      const before = points[Math.max(0, i - 1)];
      const after = points[Math.min(points.length - 1, i + 1)];
      const dx = after.x - before.x, dy = after.y - before.y;
      const distance = Math.hypot(dx, dy) || 1;
      const radius = .1 + 3.6 * Math.pow(1 - i / (points.length - 1), 1.6);
      const nx = -dy / distance * radius, ny = dx / distance * radius;
      left.push({x: points[i].x + nx, y: points[i].y + ny});
      right.push({x: points[i].x - nx, y: points[i].y - ny});
    }
    // One smooth filled silhouette avoids seams or beads between trail segments.
    const outline = left.concat(right.reverse());
    const first = outline[0], last = outline[outline.length - 1];
    context.beginPath();
    context.moveTo((first.x + last.x) / 2, (first.y + last.y) / 2);
    outline.forEach((point, i) => {
      const next = outline[(i + 1) % outline.length];
      context.quadraticCurveTo(point.x, point.y, (point.x + next.x) / 2, (point.y + next.y) / 2);
    });
    context.closePath();
    const head = points[0], tail = points[points.length - 1];
    const gradient = context.createLinearGradient(head.x, head.y, tail.x + .01, tail.y + .01);
    gradient.addColorStop(0, `rgba(18,179,211,${alpha * .5})`);
    gradient.addColorStop(.55, `rgba(40,190,219,${alpha * .3})`);
    gradient.addColorStop(1, `rgba(131,143,218,${alpha * .04})`);
    context.fillStyle = gradient;
    context.shadowColor = `rgba(50,217,245,${alpha * .16})`;
    context.shadowBlur = 6;
    context.fill();
    context.shadowBlur = 0;

    // A four-point glint and a few drifting sparks give the tip a subtle wand effect.
    for (const spark of sparks) {
      const age = (time - spark.born) / spark.life;
      const strength = Math.sin(Math.PI * age) * alpha * .6;
      sparkle(spark.x + spark.vx * age, spark.y + spark.vy * age,
        spark.size * (1 - age * .45), strength, spark.angle + age * .4, spark.violet);
    }
    const light = context.createRadialGradient(targetX, targetY, 0, targetX, targetY, 13);
    light.addColorStop(0, `rgba(163,245,255,${alpha * .65})`);
    light.addColorStop(.15, `rgba(50,217,245,${alpha * .28})`);
    light.addColorStop(.55, `rgba(50,217,245,${alpha * .06})`);
    light.addColorStop(1, 'rgba(50,217,245,0)');
    context.fillStyle = light;
    context.beginPath();
    context.arc(targetX, targetY, 13, 0, Math.PI * 2);
    context.fill();
    sparkle(targetX, targetY, 7.5 + Math.sin(time / 420) * .6, alpha * .78, .15);
    context.fillStyle = `rgba(207,252,255,${alpha * .8})`;
    context.beginPath();
    context.arc(targetX, targetY, 1.25, 0, Math.PI * 2);
    context.fill();
  }
  function follow(time) {
    frame = 0;
    if (!fine.matches || motion.matches || document.hidden) { hide(); return; }
    const delta = lastTime ? Math.min(time - lastTime, 64) : 1000 / 60;
    lastTime = time;
    // Small simulation steps make motion consistent across frame rates.
    const steps = Math.ceil(delta / (1000 / 120));
    const stepTime = delta / steps;
    const headEase = 1 - Math.exp(-stepTime / 75);
    const tailEase = 1 - Math.exp(-stepTime / 24);
    const scrollEase = 1 - Math.exp(-stepTime / 100);
    for (let step = 0; step < steps; step++) {
      const shiftX = scrollPendingX * scrollEase, shiftY = scrollPendingY * scrollEase;
      scrollPendingX -= shiftX;
      scrollPendingY -= shiftY;
      for (let i = 0; i < points.length; i++) {
        const weight = i / (points.length - 1);
        points[i].x -= shiftX * weight * .8;
        points[i].y -= shiftY * weight * .8;
        const destinationX = i ? points[i - 1].x : targetX;
        const destinationY = i ? points[i - 1].y : targetY;
        const ease = i ? tailEase : headEase;
        points[i].x += (destinationX - points[i].x) * ease;
        points[i].y += (destinationY - points[i].y) * ease;
      }
    }
    const fade = Math.max(0, Math.min(1, (time - movedAt - 160) / 850));
    const desiredOpacity = 1 - fade * fade * (3 - 2 * fade);
    opacity += (desiredOpacity - opacity) * (1 - Math.exp(-delta / (desiredOpacity > opacity ? 85 : 140)));
    for (let i = sparks.length - 1; i >= 0; i--) {
      if (time - sparks[i].born >= sparks[i].life) sparks.splice(i, 1);
    }
    if (time - movedAt < 120 && time - sparkAt > 65 && sparks.length < 10) {
      sparkAt = time;
      sparks.push({
        x: targetX + (Math.random() - .5) * 12,
        y: targetY + (Math.random() - .5) * 12,
        vx: (Math.random() - .5) * 28,
        vy: 8 + Math.random() * 18,
        size: 1.6 + Math.random() * 1.7,
        angle: Math.random() * .8,
        violet: Math.random() < .25,
        born: time, life: 450 + Math.random() * 200
      });
    }
    paint(opacity, time);
    if (desiredOpacity > 0 || opacity > .005) frame = requestAnimationFrame(follow);
    else {
      context.clearRect(0, 0, innerWidth, innerHeight);
      shown = false; lastTime = 0; opacity = 0;
      scrollPendingX = scrollPendingY = 0;
      sparks.length = 0;
    }
  }
  function hide() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    shown = false;
    hasPointer = false;
    scrollPendingX = scrollPendingY = opacity = 0;
    sparks.length = 0;
    sparkAt = 0;
    context.clearRect(0, 0, innerWidth, innerHeight);
  }
  document.addEventListener('pointermove', event => {
    if (!fine.matches || motion.matches || event.pointerType === 'touch') return;
    targetX = event.clientX;
    targetY = event.clientY;
    hasPointer = true;
    movedAt = performance.now();
    if (!shown) {
      points.forEach(point => { point.x = targetX; point.y = targetY; });
      shown = true;
    }
    if (!frame) frame = requestAnimationFrame(follow);
  }, {passive: true});
  document.addEventListener('wheel', event => {
    if (!fine.matches || motion.matches || event.ctrlKey) return;
    targetX = event.clientX;
    targetY = event.clientY;
    hasPointer = true;
  }, {passive: true});
  document.addEventListener('scroll', event => {
    const target = event.target;
    const current = target === document ? {x: scrollX, y: scrollY} : {x: target.scrollLeft, y: target.scrollTop};
    const previous = scrollPositions.get(target) || {x: 0, y: 0};
    scrollPositions.set(target, current);
    if (!hasPointer || !fine.matches || motion.matches || document.hidden) return;
    const dx = Math.max(-120, Math.min(120, current.x - previous.x));
    const dy = Math.max(-120, Math.min(120, current.y - previous.y));
    if ((!dx && !dy) || !Number.isFinite(dx + dy)) return;
    if (!shown) {
      points.forEach(point => { point.x = targetX; point.y = targetY; });
      shown = true;
    }
    // Queue scroll movement; the animation eases it into the tail instead of jumping.
    scrollPendingX = Math.max(-240, Math.min(240, scrollPendingX + dx));
    scrollPendingY = Math.max(-240, Math.min(240, scrollPendingY + dy));
    movedAt = performance.now();
    if (!frame) frame = requestAnimationFrame(follow);
  }, {capture: true, passive: true});
  root.addEventListener('pointerleave', hide);
  window.addEventListener('blur', hide);
  document.addEventListener('visibilitychange', () => { if (document.hidden) hide(); });
  motion.addEventListener('change', hide);
  fine.addEventListener('change', hide);
  window.addEventListener('resize', resize, {passive: true});
  resize();
})();
