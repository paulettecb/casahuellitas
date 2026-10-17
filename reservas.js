// Reservation flow (visual only — no backend yet)
(() => {
const $ = (id) => document.getElementById(id);
const I = (n) => `https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg`;
const ic = (n, s = 22) => `<i class="ic" style="--i:url(${I(n)});width:${s}px;height:${s}px"></i>`;
const STEPS = ['Servicio', 'Fechas', 'Perrito', 'Requisitos', 'Tus datos'];
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const today = new Date(); today.setHours(0, 0, 0, 0);
const S = { step: 0, max: 0, svc: 'hotel', start: null, end: null, days: [], tin: null, tout: null, dogs: [{ name: '', breed: '', age: '', file: '' }], req: [false, false, false, false], pay: null, view: new Date(today.getFullYear(), today.getMonth(), 1) };
const money = (n) => '$' + n.toLocaleString('es-MX');
const fmtD = (d) => d.getDate() + ' ' + MONTHS[d.getMonth()].slice(0, 3);
const same = (a, b) => a && b && a.getTime() === b.getTime();
const hm = (m) => { let h = Math.floor(m / 60), mm = m % 60; const ap = h >= 12 ? 'pm' : 'am'; h = h > 12 ? h - 12 : h; return h + ':' + String(mm).padStart(2, '0') + ' ' + ap; };
const range = (a, b) => { const r = []; for (let m = a; m <= b; m += 30) r.push(m); return r; };

// steps header
const stepsEl = $('steps');
const drawSteps = () => { stepsEl.innerHTML = STEPS.map((t, i) => `<button type="button" data-i="${i}" class="${i === S.step ? 'on' : ''} ${i < S.max || (i < S.step) ? 'done' : ''}" ${i > S.max ? 'disabled' : ''}><i>${i < S.step ? '✓' : i + 1}</i>${t}</button>`).join(''); };
stepsEl.onclick = (e) => { const b = e.target.closest('button'); if (b && !b.disabled) go(+b.dataset.i); };

// service
document.querySelectorAll('input[name=svc]').forEach((r) => r.onchange = () => { S.svc = r.value; S.start = S.end = null; S.days = []; S.tin = S.tout = null; drawCal(); drawTimes(); upd(); });

// calendar
const drawCal = () => {
  const v = S.view, y = v.getFullYear(), m = v.getMonth(), first = (new Date(y, m, 1).getDay() + 6) % 7, n = new Date(y, m + 1, 0).getDate();
  const canPrev = v > new Date(today.getFullYear(), today.getMonth(), 1);
  let h = `<div class="hd"><button type="button" id="cp" aria-label="Mes anterior" ${canPrev ? '' : 'disabled style="opacity:.3"'}>${ic('chevron-left')}</button><b>${MONTHS[m]} ${y}</b><button type="button" id="cn" aria-label="Mes siguiente">${ic('chevron-right')}</button></div><div class="g">`;
  h += ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d) => `<div class="dw">${d}</div>`).join('');
  for (let i = 0; i < first; i++) h += '<span></span>';
  for (let d = 1; d <= n; d++) {
    const dt = new Date(y, m, d), cls = [];
    if (same(dt, today)) cls.push('today');
    if (S.svc === 'hotel') { if (same(dt, S.start)) cls.push('s'); if (same(dt, S.end)) cls.push('e'); if (S.start && S.end && dt > S.start && dt < S.end) cls.push('in'); }
    else if (S.days.some((x) => same(x, dt))) cls.push('pk');
    h += `<button type="button" class="d ${cls.join(' ')}" data-t="${dt.getTime()}" ${dt < today ? 'disabled' : ''}>${d}</button>`;
  }
  $('cal').innerHTML = h + '</div>';
  $('cp').onclick = () => { if (canPrev) { S.view = new Date(y, m - 1, 1); drawCal(); } };
  $('cn').onclick = () => { S.view = new Date(y, m + 1, 1); drawCal(); };
};
$('cal').addEventListener('click', (e) => {
  const b = e.target.closest('.d'); if (!b || b.disabled) return; const dt = new Date(+b.dataset.t);
  if (S.svc === 'hotel') { if (!S.start || S.end || dt <= S.start) { S.start = dt; S.end = null; } else S.end = dt; }
  else { const i = S.days.findIndex((x) => same(x, dt)); i >= 0 ? S.days.splice(i, 1) : S.days.push(dt); S.days.sort((a, b) => a - b); }
  drawCal(); upd();
});

// times
const drawTimes = () => {
  const hotel = S.svc === 'hotel';
  $('dTitle').textContent = hotel ? '¿Qué noches?' : '¿Qué días?';
  $('dLead').textContent = hotel ? 'Toca el día de entrada y luego el de salida.' : 'Toca todos los días que vendrá. Puedes elegir varios.';
  const ins = hotel ? range(540, 840) : range(600, 840), outs = hotel ? range(540, 1080) : range(840, 1080);
  $('tin').innerHTML = ins.map((m) => `<button type="button" data-m="${m}" class="${S.tin === m ? 'on' : ''}">${hm(m)}</button>`).join('');
  $('tout').innerHTML = outs.map((m) => `<button type="button" data-m="${m}" class="${S.tout === m ? 'on' : ''} ${hotel && m > 840 ? 'late' : ''}">${hm(m)}</button>`).join('');
};
$('tin').onclick = (e) => { const b = e.target.closest('button'); if (!b) return; S.tin = +b.dataset.m; drawTimes(); upd(); };
$('tout').onclick = (e) => { const b = e.target.closest('button'); if (!b) return; S.tout = +b.dataset.m; drawTimes(); upd(); };

// dogs
const drawDogs = () => {
  $('dogs').innerHTML = S.dogs.map((d, i) => `<div class="dog" data-i="${i}">${S.dogs.length > 1 ? `<button type="button" class="x" data-rm="${i}" aria-label="Quitar">${ic('x')}</button>` : ''}<div class="t">${ic('paw-print', 30)}PERRITO ${i + 1}</div>
  <div class="row3"><div class="f"><label>NOMBRE</label><input data-k="name" value="${d.name}"></div><div class="f"><label>RAZA</label><input data-k="breed" value="${d.breed}" placeholder="o mestizo"></div><div class="f"><label>EDAD</label><input data-k="age" value="${d.age}" placeholder="años"></div></div>
  <label class="up ${d.file ? 'ok' : ''}"><input type="file" accept="image/*,.pdf" data-k="file">${ic(d.file ? 'check' : 'camera', 34)}<div><b>${d.file ? d.file : 'Foto de su cartilla de vacunación'}</b><small>${d.file ? 'Toca para cambiarla' : 'Toca para subirla'}</small></div></label></div>`).join('');
};
$('dogs').addEventListener('input', (e) => { const k = e.target.dataset.k; if (!k || k === 'file') return; S.dogs[+e.target.closest('.dog').dataset.i][k] = e.target.value; upd(false); });
$('dogs').addEventListener('change', (e) => { if (e.target.dataset.k !== 'file') return; const f = e.target.files[0]; if (f) { S.dogs[+e.target.closest('.dog').dataset.i].file = f.name; drawDogs(); upd(); } });
$('dogs').addEventListener('click', (e) => { const b = e.target.closest('[data-rm]'); if (b) { S.dogs.splice(+b.dataset.rm, 1); drawDogs(); upd(); } });
$('addDog').onclick = () => { S.dogs.push({ name: '', breed: '', age: '', file: '' }); drawDogs(); upd(); };

// requirements
const RQ = [['VACUNAS AL DÍA', 'Séxtuple, Bordetella, Giardia y Rabia'], ['DESPARASITADO', 'y con antipulgas / garrapatas'], ['100% SOCIABLE', 'con perros y personas'], ['SIN CELO', 'durante la estancia']];
$('reqs').innerHTML = RQ.map(([a, b], i) => `<label><input type="checkbox" data-r="${i}"><span class="bx">${ic('check', 28)}</span><span><b>${a}</b><small>${b}</small></span></label>`).join('');
$('reqs').addEventListener('change', (e) => { S.req[+e.target.dataset.r] = e.target.checked; upd(); });

// owner
['oName', 'oPhone'].forEach((id) => $(id).addEventListener('input', () => upd(false)));
$('xTrans').onchange = () => { $('addrBox').style.display = $('xTrans').checked ? '' : 'none'; upd(); };
$('xBath').onchange = () => upd();
$('pay').onclick = (e) => { const b = e.target.closest('button'); if (!b) return; S.pay = b.dataset.v; [...$('pay').children].forEach((x) => x.classList.toggle('on', x === b)); upd(); };

// validation + summary
const valid = (i) => {
  if (i === 0) return [true];
  if (i === 1) { const d = S.svc === 'hotel' ? (S.start && S.end) : S.days.length; if (!d) return [false, S.svc === 'hotel' ? 'Elige entrada y salida' : 'Elige al menos un día']; if (S.tin == null || S.tout == null) return [false, 'Elige los horarios']; return [true]; }
  if (i === 2) { const bad = S.dogs.find((d) => !d.name.trim() || !d.breed.trim() || !d.age.trim()); if (bad) return [false, 'Completa nombre, raza y edad']; if (S.dogs.some((d) => !d.file)) return [false, 'Falta la foto de la cartilla']; return [true]; }
  if (i === 3) { const c = S.req.filter(Boolean).length; return c === 4 ? [true] : [false, `Van ${c} de 4`]; }
  if (i === 4) { if (!$('oName').value.trim()) return [false, 'Escribe tu nombre']; if ($('oPhone').value.replace(/\D/g, '').length < 10) return [false, 'Escribe tu WhatsApp (10 dígitos)']; if (!S.pay) return [false, 'Elige cómo vas a pagar']; return [true]; }
};
const calc = () => {
  const n = S.dogs.length, hotel = S.svc === 'hotel';
  const units = hotel ? (S.start && S.end ? Math.round((S.end - S.start) / 864e5) : 0) : S.days.length;
  const sub = units * (hotel ? 350 : 200) * n, late = hotel && S.tout > 840 && units ? 200 * n : 0;
  return { n, units, sub, late, tot: sub + late, hotel };
};
const upd = (redraw = true) => {
  const c = calc();
  $('sSvc').textContent = c.hotel ? 'Hotel / Pensión' : 'Guardería / Daypass';
  $('sDates').textContent = c.hotel ? (S.start ? fmtD(S.start) + (S.end ? ' → ' + fmtD(S.end) + ` (${c.units} ${c.units === 1 ? 'noche' : 'noches'})` : ' → ?') : '—') : (S.days.length ? S.days.map(fmtD).join(', ') : '—');
  $('sTimes').textContent = S.tin != null || S.tout != null ? (S.tin != null ? hm(S.tin) : '?') + ' → ' + (S.tout != null ? hm(S.tout) : '?') : '—';
  const names = S.dogs.map((d) => d.name.trim()).filter(Boolean);
  $('sDogs').textContent = names.length ? names.join(', ') : c.n + (c.n === 1 ? ' perrito' : ' perritos');
  $('sSub').textContent = c.units ? `${c.units} × ${money(c.hotel ? 350 : 200)}${c.n > 1 ? ' × ' + c.n : ''}` : '—';
  $('sLateRow').style.display = c.late ? '' : 'none'; $('sLate').textContent = '+' + money(c.late);
  $('lateNote').style.display = c.hotel && S.tout > 840 ? '' : 'none';
  const t = $('sTot'), nt = money(c.tot); if (t.textContent !== nt) { t.textContent = nt; t.animate([{ transform: 'scale(1.12) rotate(-3deg)' }, { transform: 'none' }], { duration: 400, easing: 'cubic-bezier(.34,1.56,.64,1)' }); }
  const ex = [$('xTrans').checked && 'transporte', $('xBath').checked && 'baño'].filter(Boolean);
  $('sNote').textContent = (ex.length ? 'Te cotizamos ' + ex.join(' y ') + ' aparte. ' : 'Transporte y baño se cotizan aparte. ') + 'Se paga al llegar' + (S.pay ? ' (' + S.pay.toLowerCase() + ').' : '.');
  const [ok, msg] = valid(S.step); $('nextB').disabled = !ok; $('hint').textContent = ok ? '' : msg || '';
  $('nextB').innerHTML = S.step === 4 ? `Enviar solicitud ${ic('send')}` : `Siguiente ${ic('arrow-right')}`;
  $('back').style.visibility = S.step ? 'visible' : 'hidden';
};
const go = (i) => {
  S.step = i; S.max = Math.max(S.max, i);
  document.querySelectorAll('.pane').forEach((p) => p.classList.toggle('on', +p.dataset.step === i));
  drawSteps(); upd();
  const top = $('form').getBoundingClientRect().top + scrollY - 100; if (scrollY > top) scrollTo({ top, behavior: 'smooth' });
};
$('back').onclick = () => go(Math.max(0, S.step - 1));
$('nextB').onclick = () => { if (!valid(S.step)[0]) return; if (S.step < 4) go(S.step + 1); else submit(); };

const submit = () => {
  $('code').textContent = 'CH-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  document.querySelectorAll('.pane').forEach((p) => p.classList.remove('on'));
  $('nav2').style.display = 'none'; stepsEl.style.display = 'none'; $('done').classList.add('on');
  scrollTo({ top: $('form').getBoundingClientRect().top + scrollY - 100, behavior: 'smooth' }); confetti();
};
$('again').onclick = () => location.reload();

const confetti = () => {
  const cv = $('confetti'), cx = cv.getContext('2d'), dpr = Math.min(2, devicePixelRatio || 1); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  const C = ['#FF8A4C', '#FFC93C', '#6DBE6B', '#F28DA6', '#5DB2E3', '#FFFFFF'];
  const P = Array.from({ length: 60 }, (_, i) => ({ x: innerWidth / 2, y: innerHeight * .45, vx: (Math.random() - .5) * 22, vy: -Math.random() * 20 - 6, r: 8 + Math.random() * 14, c: C[i % 6] }));
  const t0 = performance.now();
  (function f(now) { cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, innerWidth, innerHeight);
    P.forEach((p) => { p.vy += .6; p.x += p.vx; p.y += p.vy; p.vx *= .99; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.2832); cx.fillStyle = p.c; cx.fill(); cx.lineWidth = 2.5; cx.strokeStyle = '#141414'; cx.stroke(); });
    if (now - t0 < 2600) requestAnimationFrame(f); else cx.clearRect(0, 0, innerWidth, innerHeight); })(t0);
};

drawSteps(); drawCal(); drawTimes(); drawDogs(); upd();
})();
