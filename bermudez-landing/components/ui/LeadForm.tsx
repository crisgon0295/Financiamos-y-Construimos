'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadFormData } from '@/lib/validations'
import InputField from '@/components/ui/InputField'
import Button from '@/components/ui/Button'

interface LeadFormProps {
  className?: string
}

export default function LeadForm({ className = '' }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: En producción, cargar reCAPTCHA v3 y ejecutar
      // const token = await grecaptcha.execute('SITE_KEY', { action: 'submit_lead' })
      const recaptchaToken = 'simulated-token-for-development'

      const dataWithToken = {
        ...data,
        recaptchaToken,
      }

      // Llamada a API route
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithToken),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error enviando formulario')
      }

      setSubmitStatus('success')

      // Opcional: Evento de conversión para Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'Formulario',
          event_label: data.situacion,
        })
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`.trim()}>
      <InputField
        {...register('nombre')}
        label="Nombre Completo"
        placeholder="Ej: Jorge Ramírez"
        error={errors.nombre?.message}
      />

      <InputField
        {...register('email')}
        type="email"
        label="Correo Electrónico"
        placeholder="correo@empresa.com"
        error={errors.email?.message}
      />

      <InputField
        {...register('telefono')}
        type="tel"
        label="Teléfono / WhatsApp"
        placeholder="+57 300 000 0000"
        error={errors.telefono?.message}
      />

      <InputField
        {...register('situacion')}
        label="¿Cuál es su situación?"
        isSelect
        options={[
          { value: '', label: 'Seleccione una opción' },
          { value: 'expansion-bts', label: 'Necesito expandir mi bodega o planta industrial' },
          { value: 'legalizacion', label: 'Tengo un proceso legal o sancionatorio activo' },
          { value: 'lote-inactivo', label: 'Tengo un lote industrial sin desarrollar' },
          { value: 'inversion-cdf', label: 'Quiero invertir en proyectos logísticos' },
        ]}
        error={errors.situacion?.message}
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={isSubmitting}
        className="mt-6"
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Análisis Estratégico'}
      </Button>

      {submitStatus === 'success' && (
        <div className="p-4 layer-2 ghost-border border-l-4 border-l-primary text-on-surface/80 body-sm">
          ✓ Recibimos su solicitud. Nuestro equipo le contactará en menos de 48 horas.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 layer-2 ghost-border border-l-4 border-l-[#D94F3D] text-on-surface/80 body-sm">
          Hubo un error. Por favor intente nuevamente o contáctenos directamente.
        </div>
      )}

      <p className="text-xs text-on-surface/30 text-center">
        🔒 Información confidencial. Sin spam. Sin llamadas no solicitadas.
      </p>
    </form>
  )
}
