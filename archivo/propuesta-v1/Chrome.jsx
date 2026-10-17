(() => {
const { Button, IconButton, Logo, Icon } = window.CasaHuellitasDesignSystem_e868a6;
function SiteHeader({ onReserve, page, setPage }) {
  const links = [['inicio','Inicio'],['servicios','Servicios'],['instalaciones','Instalaciones'],['nosotros','Nosotros'],['contacto','Contacto']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(252,248,241,.9)', backdropFilter: 'blur(8px)', borderBottom: '2px solid var(--tinta)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('inicio'); }}><Logo variant="horizontal" size={42} base="../../" /></a>
        <nav style={{ display: 'flex', gap: 22, marginLeft: 'auto' }}>
          {links.map(([k, l]) => <a key={k} href="#" onClick={(e) => { e.preventDefault(); setPage(k); }} style={{ font: '600 15px var(--font-body)', color: 'var(--tinta)', textDecoration: 'none', borderBottom: page === k ? '2px solid var(--mandarina-400)' : '2px solid transparent', paddingBottom: 2 }}>{l}</a>)}
        </nav>
        <Button size="sm" onClick={onReserve} iconRight="arrow-right">Reservar</Button>
      </div>
    </header>);
}
function SiteFooter() {
  return (
    <footer style={{ background: 'var(--tinta)', color: 'var(--crema)', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 40 }}>
        <div><Logo variant="stacked-white" size={150} base="../../" /></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, font: '400 15px/1.5 var(--font-body)' }}>
          <div style={{ font: '700 12px var(--font-body)', letterSpacing: '.14em', color: 'var(--cielo-200)' }}>CONTACTO</div>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="phone" size={16} />[teléfono]</span>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="map-pin" size={16} />[dirección]</span>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="clock" size={16} />[horario]</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ font: '700 12px var(--font-body)', letterSpacing: '.14em', color: 'var(--cielo-200)' }}>SÍGUENOS</div>
          <div style={{ display: 'flex', gap: 10 }}><IconButton icon="instagram" label="Instagram" /><IconButton icon="facebook" label="Facebook" /><IconButton icon="message-circle" label="WhatsApp" variant="primary" /></div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '48px auto 0', paddingTop: 20, borderTop: '1px solid var(--tinta-80)', font: '400 13px var(--font-body)', color: 'var(--tinta-40)' }}>© Casa Huellitas · Hotel y guardería de perros sin jaulas</div>
    </footer>);
}
function Photo({ label, ratio = '4/3', radius = 24, style }) {
  return <div style={{ aspectRatio: ratio, borderRadius: radius, border: '2px solid var(--tinta)', background: 'repeating-linear-gradient(45deg,var(--arena-100) 0 14px,var(--arena-200) 14px 28px)', display: 'grid', placeItems: 'center', font: '600 13px var(--font-body)', color: 'var(--tinta-60)', ...style }}>{label}</div>;
}
Object.assign(window, { SiteHeader, SiteFooter, Photo });
})();
