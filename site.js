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
// page transition: balls rain in, settle, then the floor opens and the curtain lifts
const po = document.createElement('div'); po.className = 'fx-pageout';
po.innerHTML = '<canvas></canvas><div class="ld"><img src="assets/logo/mark-ink.png" alt=""></div>';
document.body.appendChild(po);
const cv = po.querySelector('canvas'), cx = cv.getContext('2d');
const COLS = ['#FF8A4C', '#FFC93C', '#6DBE6B', '#F28DA6', '#FFFFFF', '#5DB2E3'];
let balls = [], running = false, floor = true, t0 = 0; const dpr = Math.min(2, devicePixelRatio || 1);
const size = () => { cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; };
const spawn = (n) => { const W = innerWidth, m = Math.min(W, innerHeight); balls = Array.from({ length: n }, (_, i) => { const r = m * (.035 + Math.random() * .035); return { x: r + Math.random() * (W - 2 * r), y: -r - 10, r, vx: (Math.random() - .5) * 3, vy: 2 + Math.random() * 3, c: COLS[i % COLS.length], a: Math.random() * 6, t: i * 28 }; }); };
const draw = (now) => {
  if (!running) return; const W = innerWidth, H = innerHeight, el = now - t0; cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, W, H);
  const live = balls.filter((b) => el > b.t);
  for (const b of live) { b.vy += .6; b.x += b.vx; b.y += b.vy; b.a += b.vx / b.r;
    if (floor && b.y > H - b.r) { b.y = H - b.r; b.vy = Math.abs(b.vy) < 2 ? 0 : -b.vy * .62; b.vx *= .96; }
    if (b.x < b.r) { b.x = b.r; b.vx = Math.abs(b.vx) * .7; } if (b.x > W - b.r) { b.x = W - b.r; b.vx = -Math.abs(b.vx) * .7; } }
  for (let i = 0; i < live.length; i++) for (let j = i + 1; j < live.length; j++) { const p = live[i], q = live[j], dx = q.x - p.x, dy = q.y - p.y, d = Math.hypot(dx, dy), m = p.r + q.r;
    if (d > 0 && d < m) { const nx = dx / d, ny = dy / d, o = (m - d) / 2; p.x -= nx * o; p.y -= ny * o; q.x += nx * o; q.y += ny * o; const rv = (q.vx - p.vx) * nx + (q.vy - p.vy) * ny; if (rv < 0) { const k = -rv * .8; p.vx -= nx * k; p.vy -= ny * k; q.vx += nx * k; q.vy += ny * k; } } }
  for (const b of live) { cx.save(); cx.translate(b.x, b.y); cx.rotate(b.a); cx.beginPath(); cx.arc(0, 0, b.r, 0, 6.2832); cx.fillStyle = b.c; cx.fill(); cx.lineWidth = 3; cx.strokeStyle = '#141414'; cx.stroke();
    cx.lineWidth = Math.max(2, b.r * .08); cx.beginPath(); cx.arc(-b.r * 1.15, 0, b.r * .85, -.75, .75); cx.stroke(); cx.beginPath(); cx.arc(b.r * 1.15, 0, b.r * .85, Math.PI - .75, Math.PI + .75); cx.stroke(); cx.restore(); }
  requestAnimationFrame(draw);
};
const start = (n) => { size(); spawn(n); floor = true; t0 = performance.now(); if (!running) { running = true; requestAnimationFrame(draw); } };
addEventListener('resize', size);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const first = !sessionStorage.getItem('ch-visited'); sessionStorage.setItem('ch-visited', '1');
const lift = (wait) => setTimeout(() => { floor = false; balls.forEach((b) => { b.vy = Math.max(b.vy, 4); }); setTimeout(() => po.classList.add('off'), 350); setTimeout(() => { running = false; }, 1200); }, wait);
if (reduce) { po.classList.add('off'); } else { start(first ? 40 : 24); lift(first ? 2000 : 1300); }
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-go]'); if (!a || e.metaKey || e.ctrlKey) return; e.preventDefault();
  if (reduce) { location.href = a.getAttribute('href'); return; }
  po.style.transition = 'none'; po.classList.remove('off'); po.classList.add('from'); po.style.setProperty('--x', e.clientX + 'px'); po.style.setProperty('--y', e.clientY + 'px'); po.offsetWidth;
  po.style.transition = ''; po.classList.remove('from'); running = false; cx.clearRect(0, 0, cv.width, cv.height);
  setTimeout(() => { location.href = a.getAttribute('href'); }, 600);
});
addEventListener('pageshow', (e) => { if (e.persisted) { po.classList.add('off'); running = false; } });
if (window.HuellitasFX) { HuellitasFX.pawTrail(); HuellitasFX.reveal(); HuellitasFX.parallax(); }
})();
