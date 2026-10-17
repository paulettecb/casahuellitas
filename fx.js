// Casa Huellitas — shared interaction effects for site explorations
(() => {
const PAW = 'https://unpkg.com/lucide-static@0.460.0/icons/paw-print.svg';
const css = document.createElement('style');
css.textContent = `.fx-paw{position:fixed;width:26px;height:26px;pointer-events:none;z-index:9998;background:var(--tinta);-webkit-mask:url(${PAW}) center/contain no-repeat;mask:url(${PAW}) center/contain no-repeat;animation:fxPaw 1.1s ease-out forwards}
@keyframes fxPaw{0%{opacity:0;transform:var(--t) scale(.4)}15%{opacity:.85;transform:var(--t) scale(1)}100%{opacity:0;transform:var(--t) scale(.9)}}
[data-reveal]{opacity:0;transform:translateY(60px) rotate(var(--r,0deg));transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.34,1.56,.64,1)}
[data-reveal].in{opacity:1;transform:none}
.fx-wipe{--x:50%;--y:50%;position:fixed;inset:0;z-index:9999;pointer-events:none;background:var(--cielo-200);clip-path:circle(0 at var(--x) var(--y));transition:clip-path .55s cubic-bezier(.7,0,.3,1);display:grid;place-items:center}
.fx-wipe.on{clip-path:circle(150% at var(--x) var(--y))}
.fx-wipe img{width:140px;transform:scale(.6) rotate(-10deg);transition:transform .5s cubic-bezier(.34,1.56,.64,1) .15s}
.fx-wipe.on img{transform:none}
.fx-pop{position:absolute;font:400 44px/1 var(--font-chunky);pointer-events:none;animation:fxPop .9s ease-out forwards;white-space:nowrap}
@keyframes fxPop{0%{opacity:0;transform:translate(-50%,0) scale(.5)}30%{opacity:1;transform:translate(-50%,-30px) scale(1.15)}100%{opacity:0;transform:translate(-50%,-90px) scale(1)}}`;
document.head.appendChild(css);

function pawTrail(color) {
  let lx = 0, ly = 0, side = 1;
  const drop = (x, y) => {
    const dx = x - lx, dy = y - ly;
    if (dx * dx + dy * dy < 2600) return;
    const a = Math.atan2(dy, dx) * 180 / Math.PI + 90; side *= -1;
    const ox = Math.cos((a) * Math.PI / 180) * 10 * side, oy = Math.sin((a) * Math.PI / 180) * 10 * side;
    const p = document.createElement('i'); p.className = 'fx-paw';
    p.style.left = (x - 13 + ox) + 'px'; p.style.top = (y - 13 + oy) + 'px'; p.style.setProperty('--t', `rotate(${a}deg)`);
    if (color) p.style.background = color;
    document.body.appendChild(p); setTimeout(() => p.remove(), 1200); lx = x; ly = y;
  };
  addEventListener('pointermove', (e) => drop(e.clientX, e.clientY), { passive: true });
}

function reveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  document.querySelectorAll('[data-reveal]').forEach((el, i) => { el.style.transitionDelay = (el.dataset.delay || 0) + 'ms'; io.observe(el); });
}

function parallax() {
  const els = [...document.querySelectorAll('[data-speed]')];
  const tick = () => { const y = scrollY; els.forEach((el) => { const s = +el.dataset.speed; const rot = +(el.dataset.rot || 0); el.style.transform = `translate3d(0,${y * s}px,0) rotate(${rot + y * s * .05}deg)`; }); };
  addEventListener('scroll', () => requestAnimationFrame(tick), { passive: true }); tick();
}

function wipe(logoSrc) {
  const w = document.createElement('div'); w.className = 'fx-wipe'; w.innerHTML = `<img src="${logoSrc}" alt="">`; document.body.appendChild(w);
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-wipe]'); if (!a) return; e.preventDefault();
    w.style.setProperty('--x', e.clientX + 'px'); w.style.setProperty('--y', e.clientY + 'px'); w.classList.add('on');
    setTimeout(() => { const t = document.querySelector(a.getAttribute('href')); if (t) scrollTo({ top: t.offsetTop - 20, behavior: 'instant' }); w.classList.remove('on'); }, 750);
  });
}

// Fling-the-ball mini-game. stage: positioned element containing .fx-ball and .fx-dog
function ballGame(stage, onScore) {
  const ball = stage.querySelector('.fx-ball'), dog = stage.querySelector('.fx-dog');
  let x = 60, y = 60, vx = 0, vy = 0, drag = false, px = 0, py = 0, last = 0, score = 0, cool = 0;
  const R = () => ball.offsetWidth / 2;
  const place = () => { ball.style.transform = `translate(${x - R()}px,${y - R()}px) rotate(${x * 2}deg)`; };
  const pt = (e) => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  ball.addEventListener('pointerdown', (e) => { drag = true; ball.setPointerCapture(e.pointerId); [px, py] = pt(e); last = performance.now(); vx = vy = 0; });
  ball.addEventListener('pointermove', (e) => { if (!drag) return; const [nx, ny] = pt(e); const now = performance.now(), dt = Math.max(16, now - last); vx = (nx - px) / dt * 16; vy = (ny - py) / dt * 16; x = nx; y = ny; px = nx; py = ny; last = now; place(); });
  ball.addEventListener('pointerup', () => { drag = false; });
  const step = () => {
    const W = stage.clientWidth, H = stage.clientHeight, r = R();
    if (!drag) {
      vy += .55; vx *= .995; x += vx; y += vy;
      if (x < r) { x = r; vx = -vx * .8; } if (x > W - r) { x = W - r; vx = -vx * .8; }
      if (y > H - r) { y = H - r; vy = -vy * .7; vx *= .9; if (Math.abs(vy) < 1) vy = 0; } if (y < r) { y = r; vy = -vy * .8; }
      place();
    }
    if (dog && cool <= 0) {
      const d = dog.getBoundingClientRect(), s = stage.getBoundingClientRect();
      const cx = d.left - s.left + d.width / 2, cy = d.top - s.top + d.height / 2;
      if (Math.hypot(cx - x, cy - y) < d.width / 2 + r * .6 && Math.hypot(vx, vy) > 3) {
        score++; cool = 40; vx = -vx * .6; vy = -Math.abs(vy) - 8;
        dog.animate([{ transform: 'scale(1) rotate(0)' }, { transform: 'scale(1.18) rotate(-8deg)' }, { transform: 'scale(1) rotate(0)' }], { duration: 450, easing: 'cubic-bezier(.34,1.56,.64,1)' });
        const p = document.createElement('span'); p.className = 'fx-pop'; p.textContent = ['¡guau!', '¡otra!', '¡atrapada!', '¡bravo!'][score % 4]; p.style.left = cx + 'px'; p.style.top = (cy - d.height / 2) + 'px'; stage.appendChild(p); setTimeout(() => p.remove(), 900);
        onScore && onScore(score);
      }
    }
    cool--; requestAnimationFrame(step);
  };
  place(); step();
}

window.HuellitasFX = { pawTrail, reveal, parallax, wipe, ballGame };
})();
