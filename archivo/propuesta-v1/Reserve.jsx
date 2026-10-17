(() => {
const { Dialog, Input, Select, Radio, Checkbox, Button, Toast } = window.CasaHuellitasDesignSystem_e868a6;
function ReserveDialog({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => { if (open) setStep(0); }, [open]);
  if (!open) return null;
  if (step === 1) return (
    <Dialog title="¡Listo, guau!" onClose={onClose} actions={<Button onClick={onClose}>Entendido</Button>}>
      Recibimos tu solicitud. Te escribimos por WhatsApp para confirmar fechas y mandarte los requisitos.
      <Toast tone="info" title="Recuerda" style={{ marginTop: 16 }}>Trae su cartilla de vacunación vigente.</Toast>
    </Dialog>);
  return (
    <Dialog title="Reserva su lugar" onClose={onClose} width={560}
      actions={<><Button variant="ghost" onClick={onClose}>Cancelar</Button><Button onClick={() => setStep(1)} iconRight="send">Enviar solicitud</Button></>}>
      <div style={{ display: 'grid', gap: 16, marginTop: 8 }}>
        <Radio direction="row" defaultValue="hotel" options={[{ value: 'hotel', label: 'Hotel' }, { value: 'dia', label: 'Guardería por día' }]} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Input label="Nombre de tu perro" icon="paw-print" placeholder="Ej. Canela" />
          <Select label="Tamaño" placeholder="Elige" options={['Chico', 'Mediano', 'Grande']} />
          <Input label="Entrada" type="date" icon="calendar" />
          <Input label="Salida" type="date" icon="calendar" />
        </div>
        <Input label="Tu WhatsApp" icon="phone" placeholder="10 dígitos" />
        <Checkbox label="Necesito Pet Taxi (recolección a domicilio)" />
      </div>
    </Dialog>);
}
Object.assign(window, { ReserveDialog });
})();
