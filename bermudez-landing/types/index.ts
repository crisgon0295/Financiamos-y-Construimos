export type Segmento = 'expansion-bts' | 'legalizacion' | 'lote-inactivo' | 'inversion-cdf'

export interface Lead {
  nombre: string
  email: string
  telefono: string
  situacion: Segmento
  timestamp?: string
  fuente?: string
  ip?: string
  recaptchaScore?: number
}

export interface FormData {
  nombre: string
  email: string
  telefono: string
  situacion: Segmento
  recaptchaToken: string
}

export interface APIResponse {
  success: boolean
  message?: string
  waUrl?: string
  error?: string
}
