'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'glass ghost-border-bottom py-2.5' : 'bg-transparent py-4'}
      `.trim()}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Responsive */}
        <a href="#" className="flex items-center transition-opacity hover:opacity-80">
          {/* Desktop: Logo horizontal completo */}
          <div className="hidden sm:block">
            <Image
              src="/logo-horizontal.svg"
              alt="Financiamos & Construimos"
              width={isScrolled ? 180 : 200}
              height={isScrolled ? 40 : 45}
              className="transition-all duration-300"
              priority
            />
          </div>

          {/* Mobile: Logo más pequeño */}
          <div className="block sm:hidden">
            <Image
              src="/logo-horizontal.svg"
              alt="Financiamos & Construimos"
              width={150}
              height={35}
              priority
            />
          </div>
        </a>

        {/* CTA Button - Adaptive */}
        <Button
          href="#formulario"
          variant="primary"
          className="text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3"
        >
          <span className="hidden sm:inline">Consulta Estratégica</span>
          <span className="inline sm:hidden">Consulta</span>
        </Button>
      </div>
    </nav>
  )
}
