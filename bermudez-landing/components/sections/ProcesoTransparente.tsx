import Tag from '@/components/ui/Tag'
import CardGlassmorphic from '@/components/ui/CardGlassmorphic'

export default function ProcesoTransparente() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Estratégico',
      duration: '48-72h',
      description:
        'Reunión con ingeniero o abogado. Revisión de documentos, planos, licencias. Análisis de viabilidad técnica y legal. Propuesta sin compromiso.',
      deliverable: 'Documento de factibilidad + Cotización detallada',
    },
    {
      number: '02',
      title: 'Estructuración Financiera',
      duration: '5-7 días',
      description:
        'Certificación de fondos ante curadoría (si aplica). Firma de contrato BTS o construcción. Cronograma de obra con hitos claros. Cláusula de penalidad si incumplimos.',
      deliverable: 'Contrato firmado + Cronograma vinculante',
    },
    {
      number: '03',
      title: 'Ejecución con Transparencia',
      duration: '3-12 meses',
      description:
        'Licencias, permisos, estudios técnicos tramitados por nosotros. Obra con supervisión interna: no subcontratamos estudios críticos. Reportes quincenales de avance. Acceso a obra 24/7.',
      deliverable: 'Informes periódicos + Fotos georeferenciadas',
    },
    {
      number: '04',
      title: 'Entrega y Blindaje',
      duration: 'Final',
      description:
        'Licencia definitiva o cierre de expediente sancionatorio. Acta de recibo final con garantías. Documentación completa para escrituración. Post-venta: asesoría técnico-legal por 12 meses.',
      deliverable: 'Licencia + Garantías + Asesoría anual',
    },
  ]

  return (
    <section className="relative py-24 layer-1 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Tag>Proceso Transparente</Tag>
          <h2 className="display-md mb-4">
            Transparencia en Cada Fase.{' '}
            <span className="gradient-gold-text">Penalidad Contractual si Incumplimos.</span>
          </h2>
          <p className="body-lg text-on-surface/65 max-w-2xl mx-auto">
            Cuatro etapas con entregables verificables. Sin sorpresas. Sin dilaciones. Si no
            cumplimos los hitos acordados, pagamos penalidad — está en el contrato.
          </p>
        </div>

        {/* Timeline Horizontal */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <CardGlassmorphic
                key={step.number}
                padding="lg"
                withGhostBorder
                className="relative hover:scale-105 transition-transform duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 left-6 w-12 h-12 gradient-gold flex items-center justify-center font-display text-xl text-on-primary rounded-none ghost-border">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-display text-xl text-primary">{step.title}</h3>
                    <span className="label-sm text-on-surface/40">{step.duration}</span>
                  </div>

                  <p className="body-sm text-on-surface/70 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Deliverable */}
                  <div className="pt-4 ghost-border-top">
                    <div className="label-xs text-on-surface/40 mb-2">ENTREGABLE</div>
                    <div className="body-xs text-primary font-semibold">
                      {step.deliverable}
                    </div>
                  </div>
                </div>

                {/* Gold Cable Left */}
                {index > 0 && (
                  <div className="hidden lg:block absolute left-0 top-12 w-0.5 h-8 bg-primary/50 -translate-x-full" />
                )}
              </CardGlassmorphic>
            ))}
          </div>
        </div>

        {/* Guarantee Statement */}
        <div className="mt-16 text-center">
          <CardGlassmorphic
            withGoldAccent
            padding="lg"
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="text-5xl flex-shrink-0">⚠️</div>
              <div className="text-left">
                <h4 className="font-display text-2xl text-primary mb-3">
                  Cláusula Anti-Dilación
                </h4>
                <p className="body-md text-on-surface/75 leading-relaxed">
                  Si incumplimos los plazos pactados en el cronograma (salvo causas de fuerza
                  mayor certificadas), <strong className="text-primary">aplicamos descuento del 5%
                  sobre el valor mensual</strong> por cada semana de retraso. Nuestro compromiso
                  es vinculante. 261 proyectos nos respaldan — el tuyo no será la excepción.
                </p>
              </div>
            </div>
          </CardGlassmorphic>
        </div>
      </div>

      {/* Watermark */}
      <div className="watermark bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 opacity-[0.03]">
        PROCESO
      </div>

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none blueprint-grid-sparse opacity-[0.015]" />
    </section>
  )
}
