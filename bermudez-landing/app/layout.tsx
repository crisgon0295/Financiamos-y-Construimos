import type { Metadata } from 'next'
import { Space_Grotesk, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Financiamos & Construimos | Bodegas Industriales y Blindaje Patrimonial — Bogotá y La Sabana',
  description: 'Construimos bodegas y plantas industriales a la medida con financiación al 0% de interés. Blindaje patrimonial integral. 25 años, 261 proyectos. Bogotá, Funza, Mosquera.',
  keywords: [
    'construcción bodegas industriales Colombia',
    'blindaje patrimonial Bogotá',
    'build to suit Sabana Bogotá',
    'bodega financiación cero interés',
    'saneamiento urbanístico Bogotá',
    'Financiamos & Construimos',
  ],
  openGraph: {
    title: 'Construimos su Bodega al 0% de Interés — Financiamos & Construimos',
    description: 'Financiación directa sin banco. Blindaje patrimonial en 90 días. 25 años en el mercado.',
    url: 'https://www.bermudezconstructores.com',
    type: 'website',
    locale: 'es_CO',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
