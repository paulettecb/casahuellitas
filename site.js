// Shared chrome: nav, drawer, footer, page transitions
(() => {
const PAGES = [['index.html','Inicio'],['hotel.html','Hotel / Pensión'],['guarderia.html','Guardería / Daypass'],['precios.html','Precios'],['horarios.html','Horarios'],['requisitos.html','Requisitos'],['instalaciones.html','Instalaciones'],['preguntas.html','Preguntas'],['resenas.html','Reseñas'],['nosotros.html','Nosotros y ubicación'],['reservas.html','Reservar']];
const MAIN = ['hotel.html','guarderia.html','precios.html','horarios.html','requisitos.html'];
const here = location.pathname.split('/').pop() || 'index.html';
const I = (n) => `https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg`;
const nav = document.createElement('nav'); nav.className = 'nav';
nav.innerHTML = `<a href="index.html" data-go><img src="assets/logo/mark-ink.png" alt="Casa Huellitas"></a><div class="l">${PAGES.filter(p => MAIN.includes(p[0])).map(([h, t]) => `<a href="${h}" data-go class="${h === here ? 'on' : ''}">${t.split(' / ')[0]}</a>`).join('')}</div><a class="btn" href="reservas.html" data-go style="padding:9px 18px;font-size:14px;box-shadow:3px 3px 0 var(--tinta)">Reservar</a><button class="more" id="more"><i class="ic" style="--i:url(${I('menu')})"></i>Menú</button>`;
document.body.prepend(nav);
const dr = document.createElement('div'); dr.className = 'drawer';
dr.innerHTML = PAGES.map(([h, t], i) => `<a href="${h}" data-go style="transition-delay:${80 + i * 40}ms">${t.toLowerCase()}</a>`).join('') + `<div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap;justify-content:center"><a class="btn dk" href="https://www.instagram.com/casa_huellitas" style="font:800 16px var(--font-body);opacity:1;transform:none">@casa_huellitas</a></div>`;
document.body.appendChild(dr);
const mb = nav.querySelector('#more');
mb.onclick = () => { const on = dr.classList.toggle('on'); mb.innerHTML = on ? `<i class="ic" style="--i:url(${I('x')})"></i>Cerrar` : `<i class="ic" style="--i:url(${I('menu')})"></i>Menú`; };
const ft = document.createElement('footer'); ft.className = 'foot';
ft.innerHTML = `<div class="wrap"><div class="g"><div><img src="assets/logo/logo-white.png" alt="Casa Huellitas" style="height:150px"></div>
<div><h4>SERVICIOS</h4><a href="hotel.html" data-go>Hotel / Pensión</a><a href="guarderia.html" data-go>Guardería / Daypass</a><a href="precios.html" data-go>Precios</a><a href="horarios.html" data-go>Horarios</a></div>
<div><h4>ANTES DE VENIR</h4><a href="requisitos.html" data-go>Requisitos</a><a href="preguntas.html" data-go>Preguntas frecuentes</a><a href="instalaciones.html" data-go>Instalaciones</a><a href="resenas.html" data-go>Reseñas</a></div>
<div><h4>VISÍTANOS</h4><a href="nosotros.html" data-go>Agua Blanca, frente a Bugambilias</a><a href="https://g.co/kgs/T5Ybaf">Cómo llegar</a><a href="https://www.instagram.com/casa_huellitas">@casa_huellitas</a><span style="display:block;padding:4px 0;font:600 16px var(--font-body)">L–D · 9:00 am – 6:00 pm</span></div></div>
<div style="margin-top:50px;padding-top:20px;border-top:1px solid #333;font:500 13px var(--font-body);color:var(--tinta-40)">© Casa Huellitas · Hotel canino</div></div>`;
document.body.appendChild(ft);
// page transition: balls rain in, bounce with real physics and fly out the sides;
// once the screen is empty the curtain lifts. On a link click the balls start falling
// on this page and keep going on the next one (their state travels in sessionStorage).
const po = document.createElement('div'); po.className = 'fx-pageout';
po.innerHTML = '<canvas></canvas><div class="ld"><img src="assets/logo/mark-ink.png" alt=""></div>';
document.body.appendChild(po);
const cv = po.querySelector('canvas'), cx = cv.getContext('2d');
const COLS = ['#FF8A4C', '#FFC93C', '#6DBE6B', '#F28DA6', '#FFFFFF', '#5DB2E3'];
const KEY = 'ch-balls';
let balls = [], running = false, last = 0, born = 0, opened = false;
const dpr = Math.min(2, devicePixelRatio || 1);
let W = innerWidth, H = innerHeight;
const size = () => { W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; };

// Physics in pixels and seconds, so it runs the same on 60 Hz and 120 Hz screens.
// Tuned like tennis balls: lively bounces that keep most of their height, little loss on the floor.
const G = () => H * 3;                // gravity: a fall across the screen takes about 0.8 s
const BOUNCE = 0.78;                  // speed kept on each floor bounce
const FRICTION = 0.98;                // sideways speed kept each time a ball touches the floor
const STEP = 1 / 240, MAX_TIME = 4.5, GAP = .02; // GAP: seconds between drops
const SPEED = 1.6;                    // plays the whole effect faster without changing how the balls bounce

const spawn = (n) => {
  const m = Math.min(W, H);
  balls = Array.from({ length: n }, (_, i) => {
    const r = m * (.035 + Math.random() * .035), x = r + Math.random() * (W - 2 * r);
    // Spread across the whole width. Half head for their nearer side and half cross the screen; each one
    // leaves at its own pace, starts at its own height and speed, and bounces its own way, so nothing
    // reads as a pattern (no curtain, no rows).
    const near = x < W / 2 ? -1 : 1, out = Math.random() < .5 ? -near : near, dist = out < 0 ? x + r : W - x + r;
    return { x, y: -r - Math.random() * H * .45, r, vx: out * dist / (1.1 + Math.random() * 2), vy: H * (Math.random() - .45) * .9,
      e: BOUNCE - .1 + Math.random() * .18, wait: i * GAP * (.1 + Math.random() * 1.8),
      c: COLS[i % COLS.length], a: Math.random() * 6 };
  }).sort((p, q) => p.r - q.r);
};
// Balls pass in front of or behind each other instead of colliding: hits between balls ate the
// bounces and made them land like bowling balls. Drawing big ones last makes them read as closer.
const gone = (b) => b.x + b.r < 0 || b.x - b.r > W || b.y - b.r > H;

const step = (dt) => {
  const g = G();
  for (const b of balls) { if (b.wait > 0) { b.wait -= dt; continue; } if (b.out) continue; b.vy += g * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.a += (b.vx / b.r) * dt; }
  for (const b of balls) {
    if (b.out) continue;
    if (b.y > H - b.r) {
      b.y = H - b.r;
      if (b.vy > 0) b.vy = b.vy * b.e < g * .06 ? 0 : -b.vy * b.e; // each ball has its own bounce, some livelier than others
      b.vx *= FRICTION;
      // a ball that has stopped bouncing rolls out instead of sitting there
      if (b.vy === 0 && Math.abs(b.vx) < W * .2) b.vx = (b.x < W / 2 ? -1 : 1) * W * .2;
    }
    if (b.wait <= 0 && gone(b)) b.out = true;
  }
};

const draw = () => {
  cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, W, H);
  for (const b of balls) { if (b.out || b.wait > 0) continue;
    cx.save(); cx.translate(b.x, b.y); cx.rotate(b.a); cx.beginPath(); cx.arc(0, 0, b.r, 0, 6.2832); cx.fillStyle = b.c; cx.fill(); cx.lineWidth = 3; cx.strokeStyle = '#141414'; cx.stroke();
    cx.lineWidth = Math.max(2, b.r * .08); cx.beginPath(); cx.arc(-b.r * 1.15, 0, b.r * .85, -.75, .75); cx.stroke(); cx.beginPath(); cx.arc(b.r * 1.15, 0, b.r * .85, Math.PI - .75, Math.PI + .75); cx.stroke(); cx.restore(); }
};

const open = () => { if (opened) return; opened = true; po.classList.add('off'); setTimeout(() => { running = false; }, 800); };
let acc = 0;
const frame = (now) => {
  if (!running) return;
  acc += Math.min(.05, (now - last) / 1000) * SPEED; last = now;
  while (acc >= STEP) { step(STEP); acc -= STEP; }
  draw();
  if (!opened && (balls.every((b) => b.out) || (now - born) / 1000 > MAX_TIME)) open();
  requestAnimationFrame(frame);
};
const run = () => { opened = false; acc = 0; born = last = performance.now(); if (!running) { running = true; requestAnimationFrame(frame); } };
addEventListener('resize', size);
size();

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const first = !sessionStorage.getItem('ch-visited'); sessionStorage.setItem('ch-visited', '1');
let carried = null;
try { const s = JSON.parse(sessionStorage.getItem(KEY) || 'null'); sessionStorage.removeItem(KEY); if (s && Date.now() - s.t < 2000) carried = s; } catch (e) {}
if (reduce) { po.classList.add('off'); }
else if (carried) {
  // pick up the balls where the previous page left them, scaled to this window
  const sx = W / carried.w, sy = H / carried.h;
  balls = carried.b.map((b) => ({ ...b, x: b.x * sx, y: b.y * sy, vx: b.vx * sx, vy: b.vy * sy }));
  run();
} else { spawn(first ? 34 : 22); run(); }

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-go]'); if (!a || e.metaKey || e.ctrlKey) return; e.preventDefault();
  if (reduce) { location.href = a.getAttribute('href'); return; }
  po.style.transition = 'none'; po.classList.remove('off'); po.classList.add('from'); po.style.setProperty('--x', e.clientX + 'px'); po.style.setProperty('--y', e.clientY + 'px'); po.offsetWidth;
  po.style.transition = ''; po.classList.remove('from');
  spawn(22); run();
  setTimeout(() => {
    try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), w: W, h: H, b: balls.filter((b) => !b.out) })); } catch (err) {}
    location.href = a.getAttribute('href');
  }, 600);
});
addEventListener('pageshow', (e) => { if (e.persisted) { po.classList.add('off'); running = false; } });
if (window.HuellitasFX) { HuellitasFX.pawTrail(); HuellitasFX.reveal(); HuellitasFX.parallax(); }
})();
