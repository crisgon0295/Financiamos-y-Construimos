import Tag from '@/components/ui/Tag'
import CardGlassmorphic from '@/components/ui/CardGlassmorphic'

export default function PruebaSocialCurada() {
  return (
    <section className="py-24 layer-0">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Tag>Resultados Reales</Tag>
          <h2 className="display-md mb-4">
            261 Proyectos. <span className="gradient-gold-text">Clientes que Exigen lo Mejor</span>
          </h2>
          <p className="body-lg text-on-surface/65 max-w-2xl mx-auto">
            Empresas que confiaron cuando el banco dijo que no, o cuando procesos sancionatorios parecían insalvables.
          </p>
        </div>

        {/* Números Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="layer-2 p-8 text-center ghost-border-bottom border-b-2 hover:border-b-primary transition-all duration-300">
            <div className="font-display text-6xl text-primary leading-none mb-2">261</div>
            <div className="label-sm text-on-surface/50">Proyectos Ejecutados</div>
          </div>
          <div className="layer-2 p-8 text-center ghost-border-bottom border-b-2 hover:border-b-primary transition-all duration-300">
            <div className="font-display text-6xl text-primary leading-none mb-2">25+</div>
            <div className="label-sm text-on-surface/50">Años en el Mercado</div>
          </div>
          <div className="layer-2 p-8 text-center ghost-border-bottom border-b-2 hover:border-b-primary transition-all duration-300">
            <div className="font-display text-6xl text-primary leading-none mb-2">0%</div>
            <div className="label-sm text-on-surface/50">Interés Financiación</div>
          </div>
          <div className="layer-2 p-8 text-center ghost-border-bottom border-b-2 hover:border-b-primary transition-all duration-300">
            <div className="font-display text-6xl text-primary leading-none mb-2">90</div>
            <div className="label-sm text-on-surface/50">Días Prom. Blindaje</div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <CardGlassmorphic padding="lg">
            <div className="font-display text-7xl text-primary/40 leading-none mb-3">"</div>
            <p className="body-lg text-on-surface/85 italic leading-relaxed mb-6">
              Llevábamos 8 meses buscando financiación. El banco exigía pignoraciones que comprometían toda la empresa. Bermúdez nos presentó el esquema al 0% en una reunión de 20 minutos. Hoy operamos y el flujo de caja está intacto.
            </p>
            <div className="flex items-center gap-4 pt-4 ghost-border-top">
              <div className="w-12 h-12 gradient-gold flex items-center justify-center font-display text-xl text-on-primary rounded-none">
                MR
              </div>
              <div>
                <div className="body-md font-semibold text-on-surface">Miguel R.</div>
                <div className="body-sm text-on-surface/50">Director de Operaciones — Logística, Funza</div>
              </div>
            </div>
          </CardGlassmorphic>

          <CardGlassmorphic padding="lg">
            <div className="font-display text-7xl text-primary/40 leading-none mb-3">"</div>
            <p className="body-lg text-on-surface/85 italic leading-relaxed mb-6">
              La alcaldía nos dio 30 días para presentar regularización o enfrentar demolición. El abogado anterior dilató 6 meses sin resultados. Bermúdez tomó el caso, ejecutó los estudios estructurales y cerró el expediente en 90 días. Salvaron mi patrimonio.
            </p>
            <div className="flex items-center gap-4 pt-4 ghost-border-top">
              <div className="w-12 h-12 gradient-gold flex items-center justify-center font-display text-xl text-on-primary rounded-none">
                CG
              </div>
              <div>
                <div className="body-md font-semibold text-on-surface">Carlos G.</div>
                <div className="body-sm text-on-surface/50">Propietario Bodega Comercial — Bogotá</div>
              </div>
            </div>
          </CardGlassmorphic>
        </div>

        {/* Logos Clientes */}
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-20">
          <div className="font-display text-lg tracking-widest text-secondary p-3 ghost-border">COMPENSAR</div>
          <div className="font-display text-lg tracking-widest text-secondary p-3 ghost-border">RAMO</div>
          <div className="font-display text-lg tracking-widest text-secondary p-3 ghost-border">LOGÍSTICA COL.</div>
          <div className="font-display text-lg tracking-widest text-secondary p-3 ghost-border">GRUPO INDUSTRIAL</div>
        </div>
      </div>
    </section>
  )
}
