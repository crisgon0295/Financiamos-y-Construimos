'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Tag from '@/components/ui/Tag'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)

  const portfolioImages = [
    {
      src: '/portfolio/interpark.avif',
      alt: 'Interpark Parque Industrial - Bodega logística clase A+',
      size: 'large',
    },
    {
      src: '/portfolio/zuma.avif',
      alt: 'Parque Industrial ZUMA - Construcción industrial',
      size: 'medium',
    },
    {
      src: '/portfolio/praguita-park.avif',
      alt: 'Praguita Park Siberia - Cota, Zona industrial',
      size: 'medium',
    },
    {
      src: '/portfolio/zfo-mosquera.avif',
      alt: 'ZFO Parque Industrial Zona Franca, Mosquera',
      size: 'large',
    },
    {
      src: '/portfolio/proyecto-1.avif',
      alt: 'Proyecto de construcción industrial ejecutado',
      size: 'small',
    },
    {
      src: '/portfolio/proyecto-2.jpg',
      alt: 'Bodega industrial con certificación NSR-10',
      size: 'small',
    },
    {
      src: '/portfolio/proyecto-3.jpg',
      alt: 'Infraestructura logística Build-to-Suit',
      size: 'medium',
    },
    {
      src: '/portfolio/proyecto-4.jpg',
      alt: 'Proyecto de legalización y blindaje patrimonial',
      size: 'small',
    },
  ]

  const clientLogos = [
    { src: '/clients/compensar.avif', alt: 'Compensar' },
    { src: '/clients/ramo.avif', alt: 'Ramo' },
    { src: '/clients/arquib.avif', alt: 'ARQUIB' },
    { src: '/clients/action.avif', alt: 'Action' },
    { src: '/clients/american-school.avif', alt: 'American School Way' },
    { src: '/clients/irene-melo.avif', alt: 'Irene Melo' },
    { src: '/clients/logotyt.avif', alt: 'Logotyt' },
    { src: '/clients/cliente-1.avif', alt: 'Cliente corporativo' },
    { src: '/clients/cliente-2.avif', alt: 'Cliente industrial' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título con fade y slide
      gsap.from('.portfolio-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-header',
          start: 'top 85%',
        },
      })

      // Animación de las imágenes del portfolio con stagger
      const portfolioItems = gsap.utils.toArray('.portfolio-item')
      portfolioItems.forEach((item: any) => {
        gsap.from(item, {
          opacity: 0,
          scale: 0.9,
          y: 60,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        })

        // Parallax suave en hover
        item.addEventListener('mouseenter', () => {
          gsap.to(item.querySelector('img'), {
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.out',
          })
        })

        item.addEventListener('mouseleave', () => {
          gsap.to(item.querySelector('img'), {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
        })
      })

      // Animación de logos con stagger horizontal
      gsap.from('.client-logo', {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.clients-grid',
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 layer-1 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="portfolio-header text-center mb-16">
          <Tag>261 Proyectos Ejecutados</Tag>
          <h2 className="display-md mb-4">
            Obras que Hablan por{' '}
            <span className="gradient-gold-text">Nuestra Experiencia</span>
          </h2>
          <p className="body-lg text-on-surface/65 max-w-2xl mx-auto">
            Desde parques industriales clase A+ hasta legalizaciones complejas. Cada proyecto
            con un solo responsable: nosotros.
          </p>
        </div>

        {/* Portfolio Grid - Layout Asimétrico */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {portfolioImages.map((image, index) => {
            const sizeClasses = {
              large: 'col-span-2 row-span-2',
              medium: 'col-span-2 md:col-span-1 row-span-1',
              small: 'col-span-1 row-span-1',
            }

            return (
              <div
                key={index}
                className={`
                  portfolio-item
                  relative overflow-hidden
                  rounded-[7px]
                  shadow-[0_4px_25px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_8px_40px_rgba(233,193,118,0.25)]
                  transition-shadow duration-500
                  group
                  ${sizeClasses[image.size as keyof typeof sizeClasses]}
                `}
              >
                {/* Image con overlay gradient */}
                <div className="relative w-full h-full min-h-[200px] md:min-h-[280px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  {/* Overlay con info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="body-sm text-on-surface/90 leading-relaxed">
                      {image.alt}
                    </p>
                  </div>

                  {/* Gold accent corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Divider con texto */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <span className="label-sm text-on-surface/30 uppercase tracking-widest">
            Clientes que Confían
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Client Logos Grid */}
        <div
          ref={clientsRef}
          className="clients-grid grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center"
        >
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="client-logo relative w-20 h-20 md:w-24 md:h-24 opacity-40 hover:opacity-70 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 96px"
              />
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16">
          <p className="body-md text-on-surface/50 max-w-xl mx-auto">
            Cada proyecto con{' '}
            <span className="text-primary font-semibold">
              músculo constructor, blindaje legal y financiación directa
            </span>{' '}
            bajo un solo responsable. Sin sorpresas. Sin intermediarios.
          </p>
        </div>
      </div>

      {/* Watermark */}
      <div className="watermark top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 opacity-[0.02]">
        PORTFOLIO
      </div>

      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(233, 193, 118, 0.03) 0%, transparent 70%)',
        }}
      />
    </section>
  )
}
