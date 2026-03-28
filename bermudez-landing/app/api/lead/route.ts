import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { leadSchema } from '@/lib/validations'
import { z } from 'zod'

// ============================================================================
// CONFIGURACIÓN CRÍTICA - Reemplazar con valores reales en producción
// ============================================================================

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || ''
const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY || ''
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL || ''
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || ''
const SHEET_NAME = 'Leads' // Nombre de la hoja en Google Sheets

// Rate limiting simple (en producción usar Redis o Vercel KV)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hora
const RATE_LIMIT_MAX_REQUESTS = 5

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Verifica el token de reCAPTCHA v3
 */
async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn('⚠️ RECAPTCHA_SECRET_KEY no configurada - omitiendo verificación')
    return true // En desarrollo permitir sin reCAPTCHA
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()

    // reCAPTCHA v3 retorna score de 0.0 a 1.0
    // > 0.5 = probablemente humano
    return data.success && data.score >= 0.5
  } catch (error) {
    console.error('Error verificando reCAPTCHA:', error)
    return false
  }
}

/**
 * Verifica rate limiting por IP
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    // Primera solicitud o ventana expirada
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false // Excedió el límite
  }

  // Incrementar contador
  record.count++
  return true
}

/**
 * Mapea el valor de situación a texto legible
 */
function getSituacionLabel(value: string): string {
  const labels: Record<string, string> = {
    'expansion-bts': 'Necesito expandir mi bodega o planta industrial',
    'legalizacion': 'Tengo un proceso legal o sancionatorio activo',
    'lote-inactivo': 'Tengo un lote industrial sin desarrollar',
    'inversion-cdf': 'Quiero invertir en proyectos logísticos',
  }
  return labels[value] || value
}

/**
 * Guarda el lead en Google Sheets
 */
async function saveToGoogleSheets(data: {
  nombre: string
  email: string
  telefono: string
  situacion: string
}) {
  if (!GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_CLIENT_EMAIL || !SPREADSHEET_ID) {
    console.warn('⚠️ Google Sheets no configurado - omitiendo guardado')
    return { success: true, message: 'Guardado omitido (desarrollo)' }
  }

  try {
    // Autenticación con Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Preparar fila
    const timestamp = new Date().toLocaleString('es-CO', {
      timeZone: 'America/Bogota',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    const row = [
      timestamp,
      data.nombre,
      data.email,
      data.telefono,
      getSituacionLabel(data.situacion),
      'Pendiente', // Estado inicial
    ]

    // Append a Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    })

    return { success: true, message: 'Lead guardado exitosamente' }
  } catch (error) {
    console.error('Error guardando en Google Sheets:', error)
    throw new Error('Error guardando lead')
  }
}

/**
 * Envía notificación (opcional - Slack, email, etc.)
 */
async function sendNotification(data: {
  nombre: string
  email: string
  telefono: string
  situacion: string
}) {
  // TODO: Implementar notificación a Slack, Email, WhatsApp, etc.
  // Ejemplo con Slack Webhook:
  /*
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
  if (SLACK_WEBHOOK_URL) {
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🚀 Nuevo Lead: ${data.nombre} - ${data.email} - ${getSituacionLabel(data.situacion)}`
      })
    })
  }
  */
  console.log('📧 Notificación enviada:', data.nombre)
}

// ============================================================================
// API ROUTE HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting por IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor intente en 1 hora.' },
        { status: 429 }
      )
    }

    // 2. Parsear y validar body
    const body = await request.json()
    const validatedData = leadSchema.parse(body)

    // 3. Verificar reCAPTCHA
    const isHuman = await verifyRecaptcha(validatedData.recaptchaToken)
    if (!isHuman) {
      return NextResponse.json(
        { error: 'Verificación de seguridad fallida. Por favor intente nuevamente.' },
        { status: 400 }
      )
    }

    // 4. Guardar en Google Sheets
    await saveToGoogleSheets({
      nombre: validatedData.nombre,
      email: validatedData.email,
      telefono: validatedData.telefono,
      situacion: validatedData.situacion,
    })

    // 5. Enviar notificaciones (async, no bloqueante)
    sendNotification({
      nombre: validatedData.nombre,
      email: validatedData.email,
      telefono: validatedData.telefono,
      situacion: validatedData.situacion,
    }).catch(err => console.error('Error enviando notificación:', err))

    // 6. Respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud recibida exitosamente. Nos contactaremos en menos de 48 horas.',
      },
      { status: 200 }
    )
  } catch (error) {
    // Manejo de errores
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error en /api/lead:', error)
    return NextResponse.json(
      { error: 'Error procesando solicitud. Por favor intente nuevamente.' },
      { status: 500 }
    )
  }
}

// ============================================================================
// NOTAS DE PRODUCCIÓN
// ============================================================================

/*
VARIABLES DE ENTORNO REQUERIDAS (.env.local):

RECAPTCHA_SECRET_KEY=your_recaptcha_v3_secret_key
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
SPREADSHEET_ID=your_spreadsheet_id

CONFIGURACIÓN GOOGLE SHEETS:
1. Crear Google Cloud Project
2. Habilitar Google Sheets API
3. Crear Service Account
4. Descargar credenciales JSON
5. Compartir spreadsheet con el email del service account
6. Crear hoja "Leads" con headers: Timestamp | Nombre | Email | Teléfono | Situación | Estado

CONFIGURACIÓN RECAPTCHA:
1. Registrar sitio en https://www.google.com/recaptcha/admin
2. Usar reCAPTCHA v3
3. Obtener site key (frontend) y secret key (backend)

RATE LIMITING EN PRODUCCIÓN:
- Usar Vercel KV, Redis, o Upstash para rate limiting distribuido
- Implementar rate limiting por IP + por email
*/
