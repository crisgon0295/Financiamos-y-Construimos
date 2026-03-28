'use client'

import Tag from '@/components/ui/Tag'
import TabsGlassmorphic, { type Tab } from '@/components/ui/TabsGlassmorphic'
import CardGlassmorphic from '@/components/ui/CardGlassmorphic'
import Button from '@/components/ui/Button'

export default function SolucionesPerfil() {
  const tabs: Tab[] = [
    {
      id: 'expansion',
      label: 'Expansión Industrial',
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Build-to-Suit */}
          <CardGlassmorphic withBlueprint padding="lg" withGoldAccent>
            <div className="mb-4">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="font-display text-2xl text-primary mb-3">
                Build-to-Suit Financiado al 0%
              </h3>
            </div>
            <p className="body-md text-on-surface/70 leading-relaxed mb-6">
              Construimos su bodega o planta industrial exacta a sus especificaciones.
              Usted paga con el canon de arrendamiento mensual. Sin desembolso inicial.
              Sin tasas bancarias. Su flujo de caja permanece intacto mientras operamos.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Diseño arquitectónico según su proceso operativo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Construcción clase A+ bajo NSR-10 con licencias completas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Financiación directa: 0% interés, plazos hasta 15 años
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Opción de compra al finalizar contrato
                </span>
              </li>
            </ul>
            <Button variant="primary" fullWidth href="#formulario">
              Solicitar Proyecto BTS
            </Button>
          </CardGlassmorphic>

          {/* Card 2: Certificación de Fondos */}
          <CardGlassmorphic withBlueprint padding="lg" withGoldAccent>
            <div className="mb-4">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-display text-2xl text-primary mb-3">
                Certificación de Fondos para Lote Propio
              </h3>
            </div>
            <p className="body-md text-on-surface/70 leading-relaxed mb-6">
              ¿Ya tiene el lote pero el banco exige pignoraciones imposibles? Nosotros
              certificamos los fondos ante curadoría, construimos con nuestro músculo
              financiero, y usted nos paga contra avance de obra sin comprometer su patrimonio.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Certificación inmediata ante curadoría urbana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Sin pignoración de inmuebles, CDTs ni pólizas empresariales
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Pagos contra hitos de obra verificables
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Transparencia total: acceso a obra 24/7
                </span>
              </li>
            </ul>
            <Button variant="primary" fullWidth href="#formulario">
              Consultar Certificación
            </Button>
          </CardGlassmorphic>
        </div>
      ),
    },
    {
      id: 'blindaje',
      label: 'Blindaje Patrimonial',
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Legalización Express */}
          <CardGlassmorphic withBlueprint padding="lg" withGoldAccent>
            <div className="mb-4">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="font-display text-2xl text-primary mb-3">
                Legalización de Construcciones
              </h3>
            </div>
            <p className="body-md text-on-surface/70 leading-relaxed mb-6">
              Proceso sancionatorio activo. Orden de demolición inminente. Su patrimonio
              en riesgo. Nuestro departamento jurídico-técnico integrado resuelve casos
              que otros abogados dilatan por años. Promedio: 90 días hasta cierre de expediente.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Diagnóstico estructural inmediato por ingeniero propio
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Trámite integral: estudios técnicos + gestión legal + curadoría
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Estrategia de cierre negociado con alcaldía/secretaría
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  25 años experiencia: sabemos qué funciona y qué no
                </span>
              </li>
            </ul>
            <Button variant="danger" fullWidth href="#formulario">
              Frenar Mi Proceso Sancionatorio
            </Button>
          </CardGlassmorphic>

          {/* Card 2: Regularización Preventiva */}
          <CardGlassmorphic withBlueprint padding="lg" withGoldAccent>
            <div className="mb-4">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-display text-2xl text-primary mb-3">
                Regularización Preventiva
              </h3>
            </div>
            <p className="body-md text-on-surface/70 leading-relaxed mb-6">
              ¿Aún no tiene proceso pero sabe que su construcción no está al día?
              Adelántese. Regularice antes que la autoridad toque su puerta. Proteja
              su patrimonio, evite multas millonarias, conserve su valorización.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Auditoría técnico-legal de cumplimiento normativo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Identificación de riesgos ocultos (POT, uso de suelo, alturas)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Plan de acción paso a paso hasta licencia definitiva
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✓</span>
                <span className="body-sm text-on-surface/65">
                  Evite el estrés del proceso sancionatorio
                </span>
              </li>
            </ul>
            <Button variant="secondary" fullWidth href="#formulario">
              Solicitar Auditoría Preventiva
            </Button>
          </CardGlassmorphic>
        </div>
      ),
    },
  ]

  return (
    <section id="soluciones" className="relative py-24 layer-2 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Tag>Soluciones por Perfil</Tag>
          <h2 className="display-md mb-4">
            Dos perfiles estratégicos.{' '}
            <span className="gradient-gold-text">Una sola firma de excelencia.</span>
          </h2>
          <p className="body-lg text-on-surface/65 max-w-2xl mx-auto">
            Seleccione su perfil y descubra cómo integramos construcción, legalidad y
            financiación bajo un solo responsable.
          </p>
        </div>

        {/* Tabs Glassmorphic */}
        <TabsGlassmorphic tabs={tabs} defaultTab="expansion" />
      </div>

      {/* Watermark */}
      <div className="watermark top-1/2 right-0 translate-x-1/4 -translate-y-1/2 opacity-[0.03]">
        SOLUCIONES
      </div>

      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(233, 193, 118, 0.04) 0%, transparent 70%)',
        }}
      />
    </section>
  )
}
