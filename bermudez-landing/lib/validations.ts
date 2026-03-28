import { z } from 'zod'

export const leadSchema = z.object({
  nombre: z
    .string()
    .min(2, 'Ingrese su nombre completo')
    .max(80, 'Nombre demasiado largo'),
  email: z
    .string()
    .email('Ingrese un correo electrónico válido'),
  telefono: z
    .string()
    .regex(/^(\+57)?[ -]?3[0-9]{9}$/, 'Ingrese un número de WhatsApp colombiano válido')
    .transform(t => t.replace(/[\s-]/g, '')),
  situacion: z.enum([
    'expansion-bts',
    'legalizacion',
    'lote-inactivo',
    'inversion-cdf',
  ], { required_error: 'Seleccione su situación' }),
  recaptchaToken: z.string().min(1),
})

export type LeadFormData = z.infer<typeof leadSchema>
