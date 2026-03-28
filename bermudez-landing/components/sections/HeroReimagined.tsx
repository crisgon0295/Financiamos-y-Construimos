import Button from '@/components/ui/Button'
import CardGlassmorphic from '@/components/ui/CardGlassmorphic'
import GoldGradient from '@/components/ui/GoldGradient'

export default function HeroReimagined() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden blueprint-grid layer-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-center">
          {/* Left: Headline + Stats */}
          <div className="space-y-8">
            {/* Eyebrow with gold cable */}
            <div className="gold-cable pl-6">
              <p className="label-md text-primary/80">
                25 Años · 261 Proyectos · Autoridad Constructiva
              </p>
            </div>

            {/* Headline */}
            <h1 className="display-lg">
              Construimos,<br />
              Legalizamos<br />
              <GoldGradient asText>y Financiamos</GoldGradient>
            </h1>

            {/* Subheadline */}
            <p className="body-lg text-on-surface/75 max-w-xl">
              <strong className="text-on-surface">El único integrador industrial</strong> con músculo constructor, blindaje legal y capital propio. Financiamos al{' '}
              <strong className="text-primary">0% de interés</strong> — sin bancos, sin intermediarios.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="#formulario" variant="primary">
                Diagnóstico Estratégico
              </Button>
              <Button href="#soluciones" variant="ghost">
                Ver Soluciones
              </Button>
            </div>

            {/* Stats (sin borders, con spacing) */}
            <div className="flex gap-12 pt-10 ghost-border-top">
              <div>
                <div className="font-display text-5xl text-primary leading-none">261</div>
                <div className="label-sm text-on-surface/50 mt-1">Proyectos Ejecutados</div>
              </div>
              <div>
                <div className="font-display text-5xl text-primary leading-none">25</div>
                <div className="label-sm text-on-surface/50 mt-1">Años de Experiencia</div>
              </div>
              <div>
                <div className="font-display text-5xl text-primary leading-none">0%</div>
                <div className="label-sm text-on-surface/50 mt-1">Interés Directo</div>
              </div>
            </div>
          </div>

          {/* Right: Selector Glassmorphic */}
          <div className="lg:pl-8">
            <CardGlassmorphic withBlueprint padding="lg">
              <h3 className="label-md text-on-surface/60 mb-6">
                ¿Cuál es su situación?
              </h3>

              <div className="space-y-4">
                {/* Profile Card 1 */}
                <a
                  href="#soluciones"
                  className="block p-5 ghost-border hover:border-primary/50 transition-all duration-300 hover:bg-surface-container group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">🏭</div>
                    <div className="flex-1">
                      <h4 className="body-md font-semibold text-on-surface mb-1 group-hover:text-primary transition-colors">
                        Necesito expandir mi operación
                      </h4>
                      <span className="inline-block text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-none mb-2">
                        Alta prioridad
                      </span>
                      <p className="body-sm text-on-surface/60">
                        Director de Operaciones / CFO que necesita bodega o planta sin comprometer flujo de caja.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Profile Card 2 */}
                <a
                  href="#soluciones"
                  className="block p-5 ghost-border hover:border-primary/50 transition-all duration-300 hover:bg-surface-container group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">⚖️</div>
                    <div className="flex-1">
                      <h4 className="body-md font-semibold text-on-surface mb-1 group-hover:text-primary transition-colors">
                        Mi predio tiene problemas legales
                      </h4>
                      <span className="inline-block text-xs px-2 py-0.5 bg-[#D94F3D]/10 text-[#D94F3D] rounded-none mb-2">
                        Urgencia máxima
                      </span>
                      <p className="body-sm text-on-surface/60">
                        Propietario con proceso sancionatorio que necesita blindaje patrimonial integral.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </CardGlassmorphic>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
        INTEGRADOR
      </div>
    </section>
  )
}
