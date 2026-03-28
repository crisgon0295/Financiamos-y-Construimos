import Tag from '@/components/ui/Tag'

export default function UspSignature() {
  return (
    <section className="relative py-24 layer-1 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_10%_45%] gap-8 items-center">
          {/* Left: Copy + Comparison */}
          <div className="space-y-8">
            <Tag>Autoridad Constructiva</Tag>

            <h2 className="display-md">
              El Integrador <span className="gradient-gold-text">Maestro</span>
            </h2>

            <p className="body-lg text-on-surface/70 leading-relaxed">
              Mientras otros coordinan proveedores, nosotros integramos soluciones. Somos el único en Colombia que reúne músculo constructor, blindaje legal y financiación directa bajo un solo responsable.
            </p>

            <p className="body-lg text-on-surface/70 leading-relaxed">
              Sin intermediarios. Sin coordinación entre terceros. Sin sorpresas.
            </p>

            {/* Comparison Table (Tonal Layering - NO borders) */}
            <div className="space-y-3 mt-8">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                <div className="layer-0 p-4 text-on-surface/40 line-through body-sm">
                  El abogado sin ingeniero
                </div>
                <div className="label-sm text-on-surface/30">VS</div>
                <div className="layer-2 p-4 text-primary font-semibold body-sm">
                  Bermúdez: Jurídico + Técnico
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                <div className="layer-0 p-4 text-on-surface/40 line-through body-sm">
                  Banco con tasas usureras
                </div>
                <div className="label-sm text-on-surface/30">VS</div>
                <div className="layer-2 p-4 text-primary font-semibold body-sm">
                  Financiación directa al 0%
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                <div className="layer-0 p-4 text-on-surface/40 line-through body-sm">
                  3 proveedores descoordinados
                </div>
                <div className="label-sm text-on-surface/30">VS</div>
                <div className="layer-2 p-4 text-primary font-semibold body-sm">
                  Un solo responsable total
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Spacer (lujo del espacio) */}
          <div className="hidden lg:block"></div>

          {/* Right: 4 Cards with Gold Cables */}
          <div className="space-y-5">
            <div className="gold-cable pl-6 py-4 layer-2 hover:layer-1 transition-all duration-300">
              <h4 className="font-display text-lg text-primary mb-2 uppercase tracking-wide">
                🏗️ Construcción Industrial
              </h4>
              <p className="body-sm text-on-surface/70 leading-relaxed">
                Bodegas y plantas clase A+ bajo NSR-10. Equipo técnico interno, sin subcontratistas misteriosos.
              </p>
            </div>

            <div className="gold-cable pl-6 py-4 layer-2 hover:layer-1 transition-all duration-300">
              <h4 className="font-display text-lg text-primary mb-2 uppercase tracking-wide">
                ⚖️ Blindaje Patrimonial
              </h4>
              <p className="body-sm text-on-surface/70 leading-relaxed">
                Departamento jurídico-técnico propio. Abogados que entienden de vigas y columnas.
              </p>
            </div>

            <div className="gold-cable pl-6 py-4 layer-2 hover:layer-1 transition-all duration-300">
              <h4 className="font-display text-lg text-primary mb-2 uppercase tracking-wide">
                💰 Financiación Directa 0%
              </h4>
              <p className="body-sm text-on-surface/70 leading-relaxed">
                Fondeamos con nuestro propio capital. Su flujo de caja permanece 100% intacto.
              </p>
            </div>

            <div className="gold-cable pl-6 py-4 layer-2 hover:layer-1 transition-all duration-300">
              <h4 className="font-display text-lg text-primary mb-2 uppercase tracking-wide">
                🏆 Trayectoria Demostrable
              </h4>
              <p className="body-sm text-on-surface/70 leading-relaxed">
                25 años. 261 proyectos. Cuando novatos quiebran, nosotros dictamos las reglas del juego.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        INTEGRADOR
      </div>
    </section>
  )
}
