import HeroReimagined from '@/components/sections/HeroReimagined'
import UspSignature from '@/components/sections/UspSignature'
import SolucionesPerfil from '@/components/sections/SolucionesPerfil'
import ProcesoTransparente from '@/components/sections/ProcesoTransparente'
import PortfolioShowcase from '@/components/sections/PortfolioShowcase'
import PruebaSocialCurada from '@/components/sections/PruebaSocialCurada'
import CtaFinalAspiracional from '@/components/sections/CtaFinalAspiracional'

export default function Home() {
  return (
    <>
      {/* Hero con selector glassmorphic - First impression crítica */}
      <HeroReimagined />

      {/* USP Signature - El Integrador Maestro */}
      <UspSignature />

      {/* Soluciones por Perfil con tabs glassmorphic */}
      <SolucionesPerfil />

      {/* Proceso Transparente con timeline horizontal */}
      <ProcesoTransparente />

      {/* Portfolio Showcase - Galería de proyectos con GSAP */}
      <PortfolioShowcase />

      {/* Prueba Social Curada - 261 proyectos */}
      <PruebaSocialCurada />

      {/* CTA Final Aspiracional con Formulario Premium */}
      <CtaFinalAspiracional />

      {/* Cierre con escasez estratégica */}
      <section className="py-16 layer-2 text-center">
        <div className="container mx-auto px-6">
          <p className="label-md text-[#D94F3D] mb-6">El tiempo corre — actúe hoy</p>
          <h2 className="display-md mb-4">
            Su competencia ya está <span className="gradient-gold-text">expandiéndose</span>.<br />
            ¿Y usted?
          </h2>
          <p className="body-lg text-on-surface/60 max-w-2xl mx-auto mb-8">
            Vacancia de bodegas en la Sabana: &lt; 2%. Procesos sancionatorios no esperan. Cada día sin actuar acumula costos y riesgos.
          </p>
          <p className="body-sm text-on-surface/30">
            Cupos limitados para nuevos proyectos por trimestre — <span className="text-[#D94F3D]">disponibilidad: limitada Q2 2026</span>
          </p>
        </div>
      </section>
    </>
  )
}
