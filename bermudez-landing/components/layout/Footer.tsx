import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest ghost-border-top py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo Footer - Con opacidad reducida */}
          <div className="flex items-center opacity-40 hover:opacity-60 transition-opacity">
            <Image
              src="/logo-horizontal.svg"
              alt="Financiamos & Construimos"
              width={160}
              height={36}
              className="brightness-90"
            />
          </div>

          {/* Info y Links */}
          <div className="text-center md:text-right max-w-md">
            <p className="body-sm text-on-surface/30 leading-relaxed mb-3">
              Financiamos & Construimos · NIT Colombia<br />
              Bogotá & La Sabana · Medellín y Valle de Aburrá
            </p>
            <div className="flex flex-col sm:flex-row items-center md:justify-end gap-4 text-on-surface/20 body-xs">
              <a
                href="https://www.bermudezconstructores.com"
                className="text-primary/40 hover:text-primary/60 transition-colors"
              >
                www.bermudezconstructores.com
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href="mailto:contacto@bermudezconstructores.com"
                className="text-primary/40 hover:text-primary/60 transition-colors"
              >
                Contacto
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href="/politica-privacidad"
                className="text-on-surface/20 hover:text-on-surface/40 transition-colors"
              >
                Privacidad
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 ghost-border-top text-center">
          <p className="body-xs text-on-surface/15">
            © {new Date().getFullYear()} Financiamos & Construimos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
