'use client'

import Tag from '@/components/ui/Tag'
import LeadForm from '@/components/ui/LeadForm'
import CardGlassmorphic from '@/components/ui/CardGlassmorphic'

export default function CtaFinalAspiracional() {
  return (
    <section id="formulario" className="relative py-24 layer-1 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start">
          {/* Left: Copy + Guarantees */}
          <div className="space-y-6">
            <Tag>Último Paso</Tag>

            <h2 className="display-md">
              Hable con un<br />
              <span className="gradient-gold-text">Experto Real</span>
            </h2>

            <p className="body-lg text-on-surface/70 leading-relaxed">
              No un asesor de ventas. No un chatbot. Un ingeniero o abogado especializado que revisa su caso y le dice exactamente qué hacer — en menos de 48 horas.
            </p>

            {/* Guarantees */}
            <div className="space-y-4 pt-4">
              <CardGlassmorphic padding="sm" withGhostBorder={false} className="flex items-start gap-4">
                <div className="w-10 h-10 ghost-border flex items-center justify-center text-2xl flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="body-md font-semibold text-on-surface mb-1">
                    Respuesta en 48 horas hábiles
                  </div>
                  <div className="body-sm text-on-surface/50">
                    Desde el formulario hasta la llamada de diagnóstico.
                  </div>
                </div>
              </CardGlassmorphic>

              <CardGlassmorphic padding="sm" withGhostBorder={false} className="flex items-start gap-4">
                <div className="w-10 h-10 ghost-border flex items-center justify-center text-2xl flex-shrink-0">
                  🔒
                </div>
                <div>
                  <div className="body-md font-semibold text-on-surface mb-1">
                    Confidencialidad total
                  </div>
                  <div className="body-sm text-on-surface/50">
                    Su información tratada con reserva absoluta.
                  </div>
                </div>
              </CardGlassmorphic>

              <CardGlassmorphic padding="sm" withGhostBorder={false} className="flex items-start gap-4">
                <div className="w-10 h-10 ghost-border flex items-center justify-center text-2xl flex-shrink-0">
                  💯
                </div>
                <div>
                  <div className="body-md font-semibold text-on-surface mb-1">
                    Sin compromiso de compra
                  </div>
                  <div className="body-sm text-on-surface/50">
                    Si no somos la solución, se lo decimos con honestidad.
                  </div>
                </div>
              </CardGlassmorphic>

              <CardGlassmorphic padding="sm" withGhostBorder={false} className="flex items-start gap-4">
                <div className="w-10 h-10 ghost-border flex items-center justify-center text-2xl flex-shrink-0">
                  📋
                </div>
                <div>
                  <div className="body-md font-semibold text-on-surface mb-1">
                    25 años resolviendo casos complejos
                  </div>
                  <div className="body-sm text-on-surface/50">
                    261 proyectos nos dan la experiencia para actuar con precisión.
                  </div>
                </div>
              </CardGlassmorphic>
            </div>
          </div>

          {/* Right: Form Premium */}
          <CardGlassmorphic
            withBlueprint
            padding="lg"
            className="shadow-ambient-soft"
          >
            <div className="mb-8">
              <h3 className="font-display text-3xl text-on-surface mb-2">
                Solicite su Análisis Estratégico
              </h3>
              <p className="body-sm text-on-surface/60">
                Nuestro equipo se contactará en <strong className="text-primary">menos de 48 horas hábiles</strong> con análisis claro de su situación.
              </p>
            </div>

            <LeadForm />
          </CardGlassmorphic>
        </div>
      </div>

      {/* Watermark */}
      <div className="watermark bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.03]">
        BERMÚDEZ
      </div>

      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(233, 193, 118, 0.06) 0%, transparent 70%)',
        }}
      />
    </section>
  )
}
