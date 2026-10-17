(() => {
const { Button, Badge, ServiceCard, Card, Icon } = window.CasaHuellitasDesignSystem_e868a6;
const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' };
function Hero({ onReserve }) {
  return (
    <section style={{ background: 'var(--cielo-200)', borderBottom: '2px solid var(--tinta)', overflow: 'hidden' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center', padding: '80px 32px 96px' }}>
        <div>
          <div style={{ font: '700 12px var(--font-body)', letterSpacing: '.14em', color: 'var(--cielo-800)' }}>HOTEL Y GUARDERÍA DE PERROS</div>
          <h1 style={{ margin: '14px 0 0', font: '400 112px/.92 var(--font-chunky)' }}>¡sin jaulas!</h1>
          <p style={{ font: '400 20px/1.55 var(--font-body)', color: 'var(--tinta-80)', maxWidth: 480, margin: '20px 0 28px' }}>Tu perrhijo se queda en familia: juega, nada en la alberquita y duerme en camita — vigilado las 24 horas.</p>
          <div style={{ display: 'flex', gap: 12 }}><Button size="lg" onClick={onReserve} iconRight="arrow-right">Reservar estancia</Button><Button size="lg" variant="dark" icon="message-circle">WhatsApp</Button></div>
        </div>
        <div style={{ position: 'relative' }}>
          <Photo label="Foto: perros jugando en el patio" ratio="1/1" radius="48% 52% 46% 54% / 55% 48% 52% 45%" style={{ boxShadow: '8px 8px 0 var(--tinta)' }} />
          <Badge tone="sol" size="lg" sticker tilt={-6} style={{ position: 'absolute', top: 24, left: -18 }}>CUIDADO 24 H</Badge>
          <Badge tone="mandarina" size="lg" sticker tilt={5} style={{ position: 'absolute', bottom: 40, right: -10 }}>VIDEOS DIARIOS</Badge>
        </div>
      </div>
    </section>);
}
const SERVICES = [
  ['house', 'Hotel sin jaulas', 'Estancias de una noche o de vacaciones completas, conviviendo en grupo.', 'var(--cielo-200)'],
  ['sun', 'Guardería por día', 'Que gaste su energía mientras tú haces tus pendientes.', 'var(--sol-400)'],
  ['truck', 'Pet Taxi', 'Pasamos por tu perro a casa y te lo regresamos feliz y cansado.', 'var(--mandarina-200)'],
  ['waves', 'Alberquita', 'Una alberca hecha especialmente para perros.', 'var(--pasto-200)'],
];
function Services({ onReserve }) {
  return (
    <section style={{ padding: '112px 0' }}><div style={wrap}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 40 }}>
        <h2 style={{ margin: 0, font: '500 64px/1 var(--font-display)' }}>LO QUE HACEMOS<br />POR TU PERRO</h2>
        <p style={{ margin: 0, maxWidth: 360, font: '400 17px/1.55 var(--font-body)', color: 'var(--text-body)' }}>No es solo una mascota, es parte de la familia. Así lo cuidamos.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {SERVICES.map(([i, t, d, c]) => <ServiceCard key={t} icon={i} title={t} iconTone={c} cta="Saber más" onClick={onReserve}>{d}</ServiceCard>)}
      </div>
    </div></section>);
}
function Promise() {
  const items = [['shield-check', 'Cuidadores profesionales 24 h'], ['video', 'Videos diarios de tu perro'], ['heart', 'Refuerzo positivo, siempre'], ['users', 'Grupos por tamaño y energía']];
  return (
    <section style={{ background: 'var(--tinta)', color: 'var(--crema)', padding: '96px 0' }}><div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
      <Photo label="Foto: cuidadora con perros" ratio="5/4" style={{ borderColor: 'var(--crema)' }} />
      <div>
        <div style={{ font: '400 88px/1 var(--font-chunky)', color: 'var(--cielo-200)' }}>como en casa</div>
        <div style={{ display: 'grid', gap: 16, marginTop: 28 }}>
          {items.map(([i, t]) => <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center', font: '500 26px/1.1 var(--font-display)', textTransform: 'uppercase' }}><span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--cielo-200)', color: 'var(--tinta)', display: 'grid', placeItems: 'center', flex: 'none' }}><Icon name={i} size={20} /></span>{t}</div>)}
        </div>
      </div>
    </div></section>);
}
function CTA({ onReserve }) {
  return (
    <section style={{ padding: '112px 0' }}><div style={wrap}>
      <Card tone="sol" padding="56px 56px" radius={36} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, boxShadow: '8px 8px 0 var(--tinta)' }}>
        <div><h2 style={{ margin: 0, font: '500 52px/1 var(--font-display)' }}>¿SE VAN DE VACACIONES?</h2><p style={{ margin: '10px 0 0', font: '400 18px/1.5 var(--font-body)' }}>Aparta su lugar — las fechas de temporada se llenan rápido.</p></div>
        <Button size="lg" variant="dark" onClick={onReserve} iconRight="calendar">Ver disponibilidad</Button>
      </Card>
    </div></section>);
}
function HomePage({ onReserve }) { return <><Hero onReserve={onReserve} /><Services onReserve={onReserve} /><Promise /><CTA onReserve={onReserve} /></>; }
Object.assign(window, { HomePage });
})();
