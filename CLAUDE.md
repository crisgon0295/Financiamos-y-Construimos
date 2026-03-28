# CLAUDE.md — Bermúdez Constructores | Landing Page de Alta Conversión

> Este archivo es la fuente de verdad para Claude Code en este proyecto.
> Léelo completo antes de escribir una sola línea de código.

---

## 1. CONTEXTO DEL NEGOCIO

**Cliente:** Financiamos & Construimos
**Website actual:** @bermudez-landing.html
**Propósito de este proyecto:** Landing page de alta conversión que captura leads de dos perfiles críticos y los envía automáticamente a Google Sheets + WhatsApp.

### Perfiles objetivo

**Perfil A — El Propietario Acorralado (urgencia extrema)**
- Dueño con predio fuera de norma, proceso sancionatorio activo, multa inminente (hasta 200 SMLV)
- Dolor principal: pánico a demolición o quiebra
- Motivador de compra: hablar HOY con alguien que lo pueda salvar
- Lenguaje: "multa", "querella", "sellamiento", "curaduría", "demolición"

**Perfil B — Director de Operaciones / CFO Expansivo (urgencia calculada)**
- COO o CFO de empresa logística/manufacturera que necesita expandirse sin banco
- Dolor principal: banco le exige pignoraciones que destruyen flujo de caja
- Motivador de compra: demostración matemática del ahorro vs crédito bancario
- Lenguaje: "CAPEX", "OPEX", "TIR", "flujo de caja", "0% de interés", "BTS"

### Propuesta de valor única (USP)
> "El único constructor logístico en Colombia que diseña la planta, sanea el predio legalmente y financia la obra directamente al 0% de interés — sin bancos, sin intermediarios, un solo responsable."

---

## 2. STACK TECNOLÓGICO — OBLIGATORIO

```
Framework:     Next.js 14 (App Router) — TypeScript estricto
Estilos:       Tailwind CSS v3 + CSS Variables (design tokens)
Formularios:   React Hook Form + Zod
Animaciones:   Framer Motion (solo en componentes no críticos al LCP)
Fuentes:       next/font con Space Grotesk + Manrope (Google Fonts, self-hosted)
Imágenes:      next/image con sizes y priority en above-the-fold
Deploy:        Vercel (Edge Network, región: GRU São Paulo → latencia Colombia)
CDN/Imágenes:  Cloudflare Images (transformación AVIF/WebP on-the-fly)
Analytics:     Google Analytics 4 (via GTM server-side en Partytown)
Tracking:      Meta Pixel + Conversions API (server-side en API Route)
Seguridad:     next-safe (headers HTTP), reCAPTCHA v3 invisible
Integración:   googleapis (Google Sheets API v4), Resend (email backup)
WhatsApp:      wa.me deep links + Meta WhatsApp Business API (templates)
Testing WPO:   Lighthouse CI (threshold: performance ≥ 95, CLS < 0.1)
```

---

## 3. ARQUITECTURA DE ARCHIVOS

```
bermudez-landing/
├── CLAUDE.md                          ← Este archivo
├── .env.local                         ← Variables de entorno (ver sección 8)
├── next.config.ts                     ← Config Next.js + headers de seguridad
├── tailwind.config.ts                 ← Design tokens del proyecto
├── lighthouserc.json                  ← Thresholds WPO
│
├── app/
│   ├── layout.tsx                     ← Root layout: fonts, GTM, metadata SEO
│   ├── page.tsx                       ← Landing page principal (Server Component)
│   ├── globals.css                    ← CSS variables + reset
│   │
│   └── api/
│       ├── lead/
│       │   └── route.ts               ← POST handler: validación + Sheets + WA + email
│       └── wa-webhook/
│           └── route.ts               ← Webhook entrante de WhatsApp Business API
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx                   ← Above the fold — Server Component
│   │   ├── DolorBand.tsx              ← Marquee animado de dolores
│   │   ├── Usp.tsx                    ← Diferenciador único
│   │   ├── Segmentos.tsx              ← Tabs interactivos por perfil (Client)
│   │   ├── LeadMagnet.tsx             ← Sección lead magnet con acento gold
│   │   ├── Servicios.tsx              ← Las 3 ofertas core
│   │   ├── Proceso.tsx                ← 4 pasos por segmento (tabs)
│   │   ├── SocialProof.tsx            ← Números + testimonios + logos
│   │   ├── Casos.tsx                  ← Casos de éxito con métricas
│   │   ├── CtaMid.tsx                 ← CTA intermedio
│   │   └── FormularioFinal.tsx        ← Formulario principal + garantías
│   │
│   ├── ui/
│   │   ├── Button.tsx                 ← Variantes: primary, ghost, dark, danger
│   │   ├── Tag.tsx                    ← Etiquetas de sección
│   │   ├── LeadForm.tsx               ← Formulario con React Hook Form + Zod
│   │   ├── WhatsAppButton.tsx         ← Botón flotante inteligente
│   │   ├── Marquee.tsx                ← Banda de texto animada
│   │   └── FadeUp.tsx                 ← Wrapper de animación scroll
│   │
│   └── layout/
│       ├── Navbar.tsx                 ← Nav fijo con CTA
│       └── Footer.tsx                 ← Footer legal
│
├── lib/
│   ├── sheets.ts                      ← Cliente Google Sheets API v4
│   ├── whatsapp.ts                    ← Builder de URLs wa.me + WA Business API
│   ├── recaptcha.ts                   ← Verificación server-side de reCAPTCHA v3
│   ├── validations.ts                 ← Schemas Zod compartidos
│   └── gtm.ts                         ← Push de eventos a dataLayer
│
├── hooks/
│   ├── useSegmento.ts                 ← Estado global del segmento activo
│   └── useFormStep.ts                 ← Progreso del formulario multi-paso
│
└── types/
    └── index.ts                       ← Lead, Segmento, FormData, APIResponse
```

---

## 4. DISEÑO — SISTEMA "SOVEREIGN BLUEPRINT"

### Filosofía de Diseño

**Creative North Star: Sovereign Blueprint**

Este sistema de diseño fusiona la autoridad arquitectónica de la construcción con la sofisticación del mundo financiero premium. El enfoque es riguroso, asimétrico y de alto contraste, priorizando espacios amplios y una jerarquía tipográfica que comanda atención. La pantalla se trata como un canvas donde "excelencia industrial" encuentra "solidez financiera".

### Design Tokens (globals.css)

```css
/* globals.css — nunca hardcodear estos valores en componentes */
:root {
  /* Palette - Material Design Tokens */
  --surface:                  #111317;    /* Background principal - Obsidian Navy */
  --surface-dim:              #111317;    /* Surface Dim */
  --surface-container-lowest: #0c0e11;    /* Nivel más bajo */
  --surface-container-low:    #1a1c1f;    /* Nivel bajo - Secciones secundarias */
  --surface-container:        #1e2024;    /* Container base */
  --surface-container-high:   #282a2e;    /* Cards, zonas interactivas */
  --surface-container-highest:#333538;    /* Nivel más alto */

  --primary:                  #e9c176;    /* Gold/Brass - CTAs de alto impacto */
  --primary-container:        #c5a059;    /* Gold Container - Para gradientes */
  --secondary:                #bfc7d7;    /* Cool Slate - Puente visual */
  --on-surface:               #e2e2e6;    /* Texto principal - Off-white legible */
  --on-primary:               #111317;    /* Texto sobre primary */

  --outline-variant:          #4e4639;    /* Bordes fantasma (15% opacity) */

  /* Typography */
  --font-display:             'Space Grotesk', sans-serif;  /* Headlines - Arquitectónico */
  --font-body:                'Manrope', sans-serif;         /* Body - Geométrico premium */

  /* Spacing */
  --spacing-8:                2.75rem;    /* Separación interna de cards (sin dividers) */

  /* Effects */
  --backdrop-blur:            40px;       /* Glassmorphism */
  --transition-base:          0.2s ease;
  --transition-slow:          0.6s ease;
}
```

### Paleta de Colores y Uso

**Background / Surface:**
- Base: `--surface` (#111317) - Fondo principal obsidian navy que provee sensación premium
- Secciones: `--surface-container-low` (#1a1c1f) - Para áreas secundarias
- Cards: `--surface-container-high` (#282a2e) - Elementos interactivos

**Acentos:**
- `--primary` (#e9c176) - Gold/Brass usado con parsimonia para CTAs y momentos de marca clave
- `--secondary` (#bfc7d7) - Cool Slate que conecta el fondo oscuro con texto blanco

**Tipografía:**
- `--on-surface` (#e2e2e6) - Off-white crujiente para máxima legibilidad

### La Regla "No-Line" (Crítico)

**PROHIBIDO:** Bordes sólidos de 1px para seccionar contenido.

**EN SU LUGAR, usar:**
1. **Cambios de color de fondo:** Colocar sección `surface-container-low` contra fondo `surface`
2. **Transiciones tonales:** Usar escala de spacing para crear "zonas de respiración" que separen naturalmente

### Texturas Signature & Efectos de Cristal

**Glassmorphism:**
- Elementos flotantes (navbar, modal headers): fondos semi-transparentes con `backdrop-blur: 20px-40px`

**Golden Gradient:**
- CTAs primarios: gradiente lineal de `primary` (#e9c176) a `primary-container` (#c5a059) a 135°
- Efecto "metal cepillado" que colores planos no pueden lograr

### Tipografía

**Space Grotesk (Display & Headlines):**
- Refleja líneas arquitectónicas del logo
- Terminales técnicos y ligeramente excéntricos sugieren "Construcción Moderna"
- Uso: `display-lg` (3.5rem) para declaraciones hero con letter-spacing ajustado (-2%)

**Manrope (Body & Titles):**
- Sans-serif geométrico de alta gama, accesible pero élite
- Uso: `body-lg` (1rem) para copy general con line-height generoso (1.6) manteniendo sensación editorial

**Labels:**
- `label-md` siempre uppercase con +5% letter-spacing (imita subtítulo "Inversiones Inmobiliarias" del logo)

### Elevación y Profundidad

**Principio de Layering Tonal** (NO sombras drop tradicionales):

El UI debe sentirse como modelo físico donde luz y sombra son sutiles e integradas.

**Niveles de Stack:**
- *Level 0:* `surface` (piso base)
- *Level 1:* `surface-container-low` (secciones, áreas secundarias)
- *Level 2:* `surface-container-high` (cards, zonas interactivas)

**Sombras Ambientales:**
- Para elementos flotantes (modales primarios): `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4)`
- Debe sentirse como oclusión ambiental, NO un "glow"

**Ghost Border:**
- Si accesibilidad requiere borde de container: usar `outline-variant` (#4e4639) a **15% opacity**
- Debe sentirse, no verse

### Componentes UI

**Botones:**
- **Primary:** Bordes afilados (`rounded-none` o `rounded-sm: 0.125rem`)
  - Background: Gradiente Gold/Brass
  - Texto: `on-primary`
  - Efecto: Inner-glow sutil (borde superior) simulando metal biselado
  - Todo botón debe tener `→` como sufijo en su label

- **Secondary:** Variante `outline`
  - Ghost border con texto `secondary`
  - Hover: rellenar con `surface-container-highest` (#333538)

**Cards & Módulos de Información:**
- **Regla estricta:** Sin dividers
- Separar contenido interno con `spacing-8` (2.75rem)
- **Interés visual:** Líneas de cuadrícula sutiles de fondo (0.5px, 10% opacity) en esquina superior derecha referenciando planos arquitectónicos

**Input Fields:**
- **Estilo:** Minimalista, solo línea bottom-weighted `outline-variant`
- **Estado activo:** Línea transiciona a `primary` gold
- **Label:** Texto Manrope flotante arriba en estilo `label-sm`

**Patrones Estructurales:**
- **Grid:** Usar grid de 12 columnas pero "romperlo" intencionalmente
- Imágenes o texto display sangrando fuera del centro para sensación bespoke, no-template

### Reglas de Diseño NO Negociables

**SÍ hacer:**
- Abrazar asimetría: headline grande a la izquierda, dejar 30% derecho vacío para crear "prestigio"
- Usar alto contraste: emparejar `surface-container-lowest` más profundo con `primary` gold más brillante para CTAs
- Acentos arquitectónicos: "Cables de oro" verticales finos (1px) que corren solo 40-60px para guiar ojo hacia headers específicos

**NO hacer:**
- **Bordes redondeados grandes:** Evitar tokens `xl` o `full` de roundedness para elementos estructurales. Queremos "excelencia afilada" de rascacielos, no suavidad de app de consumo
- **Sombras estándar:** Nunca usar presets "Drop Shadow" de default. Si parece sombra web estándar, está mal para esta marca
- **Cluttering:** Si sección se siente "llena", probablemente está sobre-diseñada. Remover elemento. Finanzas de alta gama = lujo del espacio

---

## 5. COMPONENTE CRÍTICO — LeadForm.tsx

Este es el componente más importante del proyecto. Implementarlo con máxima precisión.

### Schema Zod (lib/validations.ts)

```typescript
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
```

### Flujo de envío (LeadForm.tsx — Client Component)

```
1. Usuario completa campos → validación inline con Zod (onChange después del primer blur)
2. onSubmit:
   a. Ejecutar grecaptcha.execute('SITE_KEY', {action: 'lead_submit'})
   b. POST a /api/lead con token + datos
   c. Mostrar spinner en botón (disabled durante fetch)
   d. Éxito → mostrar estado de confirmación + trigger WhatsApp deep link
   e. Error → mostrar mensaje de error inline sin recargar página
3. Tracking: disparar evento GA4 'generate_lead' con situacion como parameter
```

### API Route (/api/lead/route.ts)

```typescript
// Este endpoint hace 5 cosas en orden:
// 1. Verificar reCAPTCHA v3 (score >= 0.5)
// 2. Validar body con Zod
// 3. Escribir en Google Sheets (fila nueva al final)
// 4. Enviar notificación interna (email a equipo + mensaje Slack via webhook)
// 5. Disparar WhatsApp Business API template si está disponible
// 6. Retornar { success: true, waUrl: string } al cliente

export async function POST(request: Request) {
  // Rate limiting: max 5 requests por IP por hora
  // Headers de respuesta: no-store, no-cache
  // Timeout: 10 segundos máximo
  // Log de errores: estructurado en JSON para Vercel Logs
}
```

### Columnas de Google Sheets (en este orden exacto)

| Col | Campo | Ejemplo |
|-----|-------|---------|
| A | Timestamp | 2026-03-28T14:32:00-05:00 |
| B | Nombre | Jorge Ramírez |
| C | Email | jorge@empresa.com |
| D | Teléfono | +573001234567 |
| E | Situación | expansion-bts |
| F | Fuente UTM | google / cpc / bodega-funza |
| G | IP País | CO |
| H | Score reCAPTCHA | 0.9 |
| I | Referrer | https://google.com |
| J | Estado | NUEVO |

---

## 6. EMBUDO WHATSAPP — IMPLEMENTACIÓN EXACTA

### Botón flotante (WhatsAppButton.tsx)

```typescript
// Mensajes prellenados por segmento
const MENSAJES: Record<string, string> = {
  'expansion-bts': `Hola Bermúdez Constructores. Soy director de operaciones y necesito información sobre el esquema de expansión industrial al 0% de interés. ¿Cuándo podemos hablar?`,
  'legalizacion': `Hola Bermúdez Constructores. Tengo un proceso sancionatorio activo en la curaduría y necesito hablar HOY con un experto en legalización. Es urgente.`,
  'lote-inactivo': `Hola Bermúdez Constructores. Tengo un lote industrial sin desarrollar y me interesa el programa de activación de tierras. ¿Me pueden dar más información?`,
  'default': `Hola Bermúdez Constructores. Quiero información sobre sus servicios de construcción y financiación industrial.`,
}

// URL: https://wa.me/57XXXXXXXXXX?text=MENSAJE_ENCODED
// El número de WhatsApp va en .env.local como NEXT_PUBLIC_WA_NUMBER
// El botón siempre visible en mobile (fixed bottom-right)
// En desktop: visible después de 15 segundos o scroll al 40%
// Al hacer clic: disparar evento GA4 'whatsapp_click' + Meta Pixel 'Contact'
```

### Flujo post-formulario

```
Formulario enviado exitosamente
    ↓
API Route escribe en Sheets + notifica equipo (Slack webhook)
    ↓
Cliente recibe { success: true, waUrl: string }
    ↓
Mostrar modal de confirmación:
  "✓ Recibimos su solicitud. Nuestro equipo le contactará en menos de 48 horas."
  [Botón]: "Hablar por WhatsApp ahora →" (abre waUrl)
    ↓
Si usuario hace clic en WA → evento GA4 'whatsapp_conversion'
    ↓
Paralelo (server): WA Business API envía template HSM aprobado:
  "Hola {nombre}, somos Bermúdez Constructores. Recibimos su solicitud
   sobre {situacion_label}. Un experto se comunicará con usted en las
   próximas horas. ¿Tiene alguna pregunta urgente?"
```

---

## 7. SEO — METADATA OBLIGATORIA

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Bermúdez Constructores | Bodegas Industriales y Legalización de Predios — Bogotá y La Sabana',
  description: 'Construimos bodegas y plantas industriales a la medida con financiación al 0% de interés. Legalizamos predios con multas ante la curaduría urbana. 25 años, 261 proyectos. Bogotá, Funza, Mosquera.',
  keywords: [
    'construcción bodegas industriales Colombia',
    'legalización predios Bogotá',
    'build to suit Sabana Bogotá',
    'bodega financiación cero interés',
    'multa curaduría urbana solución',
    'saneamiento urbanístico Bogotá',
    'Bermúdez Constructores',
  ],
  openGraph: {
    title: 'Construimos su Bodega al 0% de Interés — Bermúdez Constructores',
    description: 'Financiación directa sin banco. Legalización de predios en 90 días. 25 años en el mercado.',
    url: 'https://www.bermudezconstructores.com',
    type: 'website',
    locale: 'es_CO',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.bermudezconstructores.com' },
}
```

### Schema.org JSON-LD (en page.tsx)

```typescript
// Implementar como <script type="application/ld+json"> en el <head>
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bermúdez Constructores e Inmobiliaria SAS",
  "description": "Construcción industrial, legalización de predios y financiación directa al 0%",
  "url": "https://www.bermudezconstructores.com",
  "telephone": "+57XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bogotá",
    "addressCountry": "CO"
  },
  "areaServed": ["Bogotá", "Funza", "Mosquera", "Tocancipá", "Medellín"],
  "foundingDate": "2000",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
}
```

---

## 8. VARIABLES DE ENTORNO (.env.local)

```bash
# Google Sheets
GOOGLE_SERVICE_ACCOUNT_EMAIL=bermudez-leads@proyecto.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n..."
GOOGLE_SHEET_ID=1ABC...XYZ
GOOGLE_SHEET_NAME=Leads

# reCAPTCHA
RECAPTCHA_SECRET_KEY=6Lc...
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc...

# WhatsApp Business API (Meta Cloud API)
WA_ACCESS_TOKEN=EAAx...
WA_PHONE_NUMBER_ID=123456789
WA_TEMPLATE_BTS=bermudez_bts_confirmation
WA_TEMPLATE_LEGAL=bermudez_legal_confirmation
NEXT_PUBLIC_WA_NUMBER=573XXXXXXXXX

# Notificaciones internas
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
RESEND_API_KEY=re_...
INTERNAL_EMAIL=comercial@bermudezconstructores.com

# Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
META_PIXEL_ID=123456789
META_CAPI_ACCESS_TOKEN=EAAx...

# URLs
NEXT_PUBLIC_SITE_URL=https://www.bermudezconstructores.com
```

---

## 9. TARGETS WPO — NO NEGOCIABLES

Ejecutar `npx lighthouse-ci` en cada PR. El pipeline de CI debe bloquearse si:

| Métrica | Target |
|---------|--------|
| Performance | ≥ 95 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 95 |
| SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| TBT | < 200ms |
| TTFB | < 800ms |
| FID / INP | < 200ms |

**Optimizaciones obligatorias:**
- `next/image` con `priority` en todas las imágenes above-the-fold
- `next/font` con `display: 'swap'` y `preload: true`
- Todos los scripts de terceros (GTM, Hotjar, Pixel) cargados via Partytown
- Bundle JS del cliente < 150kb gzipped total
- CSS purged con Tailwind (0 clases no usadas en producción)
- `preconnect` a Google Fonts, GA4 y WhatsApp en el `<head>`

---

## 10. CONFIGURACIÓN LIGHTHOUSERC (lighthouserc.json)

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.95 }],
        "categories:accessibility": ["error", { "minScore": 0.90 }],
        "categories:seo": ["error", { "minScore": 1.0 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 200 }]
      }
    }
  }
}
```

---

## 11. NEXT.CONFIG.TS — HEADERS DE SEGURIDAD

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: 'imagedelivery.net' }], // Cloudflare Images
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://www.google.com https://www.gstatic.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https://imagedelivery.net https://www.facebook.com",
            "connect-src 'self' https://www.google-analytics.com https://graph.facebook.com",
            "frame-src https://www.google.com",
          ].join('; ')
        },
      ],
    }]
  },
}

export default nextConfig
```

---

## 12. TRACKING DE EVENTOS GA4 — EVENTOS OBLIGATORIOS

```typescript
// lib/gtm.ts
// Disparar desde el cliente con: window.dataLayer.push(...)

export const GA4Events = {
  // Navegación por segmentos
  segmento_click: (segmento: 'expansion-bts' | 'legalizacion') =>
    ({ event: 'segmento_click', segmento }),

  // Formulario
  form_start: (ubicacion: 'hero' | 'lead-magnet' | 'final') =>
    ({ event: 'form_start', ubicacion }),

  form_submit: (situacion: string) =>
    ({ event: 'generate_lead', situacion, currency: 'COP' }),

  form_error: (campo: string, error: string) =>
    ({ event: 'form_error', campo, error }),

  // WhatsApp
  whatsapp_click: (segmento: string, origen: 'flotante' | 'modal' | 'cta') =>
    ({ event: 'whatsapp_click', segmento, origen }),

  whatsapp_conversion: (segmento: string) =>
    ({ event: 'whatsapp_conversion', segmento }),

  // Scroll
  scroll_depth: (profundidad: 25 | 50 | 75 | 100) =>
    ({ event: 'scroll', percent_scrolled: profundidad }),
}
```

---

## 13. ORDEN DE EJECUCIÓN — COMANDOS INICIALES

Claude Code debe ejecutar estos comandos en este orden exacto al iniciar el proyecto:

```bash
# 1. Crear proyecto
npx create-next-app@latest bermudez-landing \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd bermudez-landing

# 2. Instalar dependencias de producción
npm install \
  react-hook-form \
  zod \
  @hookform/resolvers \
  framer-motion \
  googleapis \
  resend \
  @next-safe/middleware

# 3. Instalar dependencias de desarrollo
npm install -D \
  @lhci/cli \
  @types/node \
  prettier \
  eslint-config-prettier

# 4. Crear estructura de carpetas
mkdir -p app/api/lead app/api/wa-webhook \
  components/sections components/ui components/layout \
  lib hooks types

# 5. Copiar .env.local (ya preparado)
# 6. Iniciar desarrollo
npm run dev
```

---

## 14. REGLAS DE CALIDAD — NUNCA VIOLAR

1. **TypeScript estricto**: `strict: true` en tsconfig. Sin `any`. Sin `@ts-ignore`.
2. **Server Components por defecto**: Solo marcar con `'use client'` lo que realmente necesita interactividad.
3. **Sin useEffect para fetch de datos**: Usar Server Components o Server Actions.
4. **API Routes son el único lugar** donde van credenciales, tokens y lógica sensible.
5. **Zod en cliente Y servidor**: Validar siempre en ambos lados. El servidor nunca confía en el cliente.
6. **Sin `console.log` en producción**: Usar solo en desarrollo con guard `if (process.env.NODE_ENV === 'development')`.
7. **Accesibilidad**: Todo elemento interactivo debe tener `aria-label` o contenido de texto descriptivo.
8. **Sin `!important` en CSS**: Si lo necesitas, estás haciendo algo mal.
9. **Variables de entorno**: Nunca exponer variables server-side al cliente (sin `NEXT_PUBLIC_` prefix).
10. **Rate limiting en API Routes**: Implementar con un Map en memoria o Vercel KV. Máximo 5 requests por IP por hora para `/api/lead`.

---

## 15. DEFINICIÓN DE "DONE" (DoD)

Una tarea está terminada cuando:

- [ ] El código compila sin errores TypeScript (`npx tsc --noEmit`)
- [ ] ESLint sin warnings (`npx eslint . --max-warnings 0`)
- [ ] Lighthouse CI pasa todos los thresholds en 3 corridas
- [ ] Formulario envía lead a Google Sheets correctamente (verificar en hoja real)
- [ ] WhatsApp deep link abre con mensaje prellenado correcto por segmento
- [ ] GA4 recibe el evento `generate_lead` (verificar en DebugView)
- [ ] La página carga en < 3 segundos en una conexión 3G simulada (DevTools)
- [ ] Diseño es pixel-perfect contra el HTML de referencia en mobile (375px) y desktop (1280px)
- [ ] reCAPTCHA bloquea submissions con score < 0.5
- [ ] Los headers de seguridad están presentes (verificar con securityheaders.com)
