# Landing Page - Financiamos & Construimos

Landing page premium transaccional para Bermúdez Constructores, diseñada con el sistema "Sovereign Blueprint" que comunica profesionalidad, aspiracionalidad, crecimiento y oportunidad.

## 🎨 Sistema de Diseño "Sovereign Blueprint"

- **Glassmorphism**: backdrop-blur en navegación, formularios y cards premium
- **Tonal Layering**: Profundidad mediante gradaciones de surface (sin drop shadows tradicionales)
- **Golden Gradients**: Linear 135° (#e9c176 → #c5a059) para CTAs y acentos
- **Ghost Borders**: outline-variant al 15% opacity
- **Blueprint Grid**: Líneas arquitectónicas 0.5px a baja opacidad
- **Gold Cables**: Guías visuales verticales 1px × 40-60px

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: Tailwind CSS con design tokens customizados
- **Tipografía**: Space Grotesk (display) + Manrope (body)
- **Formularios**: React Hook Form + Zod validation
- **Animaciones**: Framer Motion
- **Backend**: Next.js API Routes
- **Integración**: Google Sheets API, reCAPTCHA v3

## 📁 Estructura del Proyecto

```
bermudez-landing/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # API route para captura de leads
│   ├── globals.css               # Design tokens Sovereign Blueprint
│   ├── layout.tsx                # Root layout con fonts y metadata
│   └── page.tsx                  # Landing page principal
│
├── components/
│   ├── sections/                 # Secciones de la landing
│   │   ├── HeroReimagined.tsx   # Hero con selector glassmorphic
│   │   ├── UspSignature.tsx     # "El Integrador Maestro"
│   │   ├── SolucionesPerfil.tsx # Tabs: Expansión vs Blindaje
│   │   ├── ProcesoTransparente.tsx # Timeline 4 pasos
│   │   ├── PruebaSocialCurada.tsx  # 261 proyectos + testimonios
│   │   └── CtaFinalAspiracional.tsx # Formulario premium
│   │
│   ├── ui/                       # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   ├── CardGlassmorphic.tsx # Wrapper glassmorphism (crítico)
│   │   ├── InputField.tsx
│   │   ├── LeadForm.tsx         # Formulario con validación
│   │   ├── TabsGlassmorphic.tsx
│   │   └── WhatsAppButton.tsx   # Botón flotante inteligente
│   │
│   └── layout/
│       ├── Navbar.tsx            # Navbar sticky con glassmorphism
│       └── Footer.tsx            # Footer minimalista
│
├── lib/
│   └── validations.ts            # Schemas Zod compartidos
│
├── .env.example                  # Template de variables de entorno
└── package.json
```

## 🔧 Instalación y Setup

### 1. Clonar e instalar dependencias

```bash
cd bermudez-landing
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Editar `.env.local` con valores reales:

#### reCAPTCHA v3 (Obligatorio)
1. Registrar sitio en https://www.google.com/recaptcha/admin
2. Seleccionar reCAPTCHA v3
3. Copiar Site Key y Secret Key

#### Google Sheets API (Obligatorio)
1. Crear proyecto en Google Cloud Console
2. Habilitar Google Sheets API
3. Crear Service Account
4. Descargar JSON de credenciales
5. Crear spreadsheet con hoja "Leads" y headers:
   ```
   Timestamp | Nombre | Email | Teléfono | Situación | Estado
   ```
6. Compartir spreadsheet con email del service account (permisos de Editor)

#### WhatsApp (Opcional)
Actualizar número en `components/ui/WhatsAppButton.tsx`:
```typescript
phoneNumber = '+573001234567' // Reemplazar con número real
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abrir http://localhost:3000

### 4. Build para producción

```bash
npm run build
npm start
```

## 🎯 Secciones Implementadas

### 1. HeroReimagined
- Grid roto 60/40 con selector glassmorphic
- Dos perfiles: Propietario Acorralado vs Director de Operaciones
- Stats sin bordes: 25 años, 261 proyectos, 0% interés
- **Archivo**: `components/sections/HeroReimagined.tsx`

### 2. UspSignature
- Layout asimétrico 45-10-45 (luxury of space)
- "El Integrador Maestro" positioning
- Comparison table con tonal layering (NO borders)
- 4 cards con gold cables: Construcción, Blindaje, Financiación, Trayectoria
- **Archivo**: `components/sections/UspSignature.tsx`

### 3. SolucionesPerfil
- Tabs glassmorphic interactivos
- **Expansión Industrial**: Build-to-Suit + Certificación de Fondos
- **Blindaje Patrimonial**: Legalización Express + Regularización Preventiva
- **Archivo**: `components/sections/SolucionesPerfil.tsx`

### 4. ProcesoTransparente
- Timeline horizontal con 4 pasos
- Entregables verificables por fase
- Cláusula Anti-Dilación con penalidad contractual
- **Archivo**: `components/sections/ProcesoTransparente.tsx`

### 5. PruebaSocialCurada
- Grid de métricas: 261 proyectos, 25+ años, 0% interés, 90 días blindaje
- 2 testimonios premium con glassmorphic cards
- Logos de clientes (opacity reducida)
- **Archivo**: `components/sections/PruebaSocialCurada.tsx`

### 6. CtaFinalAspiracional
- Split 40/60: Guarantees (izq) + Form premium (der)
- 4 guarantee cards con glassmorphism
- Formulario con React Hook Form + Zod
- **Archivo**: `components/sections/CtaFinalAspiracional.tsx`

### 7. WhatsAppButton Flotante
- Aparece después de scroll > 300px
- Pulsa durante 5 segundos
- Mensaje pre-llenado inteligente
- **Archivo**: `components/ui/WhatsAppButton.tsx`

## 🔐 Seguridad y Validación

### Validación de Formularios (Zod)
```typescript
leadSchema = {
  nombre: string (2-80 chars),
  email: email válido,
  telefono: regex colombiano /^(\+57)?[ -]?3[0-9]{9}$/,
  situacion: enum de 4 opciones,
  recaptchaToken: string mínimo 1 char
}
```

### Rate Limiting
- 5 requests por hora por IP
- Implementación simple en memoria (en producción usar Redis/Vercel KV)

### reCAPTCHA v3
- Score mínimo: 0.5 (probablemente humano)
- Verificación server-side en `/api/lead`

## 📊 Conversión y Analytics

### Eventos de Conversión
```javascript
// Google Analytics 4 (opcional)
gtag('event', 'generate_lead', {
  event_category: 'Formulario',
  event_label: situacion_seleccionada
})
```

### Puntos de Captura de Leads
1. **HeroReimagined**: Click en profile cards → scroll a formulario
2. **CtaFinalAspiracional**: Formulario principal (final de página)

## 🚧 TODOs Pendientes

### Críticos (antes de producción)
- [ ] Configurar reCAPTCHA v3 real (site key + secret key)
- [ ] Configurar Google Sheets API (service account + spreadsheet)
- [ ] Actualizar número de WhatsApp en `WhatsAppButton.tsx`
- [ ] Agregar Google Analytics / Tag Manager
- [ ] Configurar dominio y SSL en Vercel/hosting

### Mejoras Opcionales
- [ ] Agregar notificaciones Slack/Email cuando llega nuevo lead
- [ ] Implementar rate limiting distribuido (Redis/Upstash)
- [ ] Agregar animaciones Framer Motion (FadeUp component)
- [ ] Optimizar imágenes con next/image
- [ ] Lighthouse CI para garantizar Performance ≥ 95
- [ ] Tests E2E con Playwright

## 🎨 Paleta de Colores

```css
--surface:                  #111317   /* Background principal */
--surface-container-low:    #1a1c1f   /* Secciones secundarias */
--surface-container-high:   #282a2e   /* Cards interactivos */
--primary:                  #e9c176   /* Gold/Brass */
--primary-container:        #c5a059   /* Gold gradientes */
--secondary:                #bfc7d7   /* Cool Slate */
--on-surface:               #e2e2e6   /* Texto principal */
```

## 📝 Notas de Implementación

### Regla "No-Line"
**PROHIBIDO**: Bordes sólidos de 1px entre secciones.
**EN SU LUGAR**: Cambios tonales + spacing generoso.

### Server Components First
- Por defecto usar Server Components
- Client Components (`'use client'`) solo cuando necesario:
  - Formularios (LeadForm)
  - Tabs interactivos (SolucionesPerfil)
  - Navbar con scroll detection
  - WhatsAppButton con state

### Tipografía
```css
--font-display: 'Space Grotesk' /* Headlines, display text */
--font-body: 'Manrope'          /* Body text, parágrafos */
```

## 🚀 Deploy en Vercel

1. Push a repositorio Git
2. Conectar repositorio en Vercel
3. Configurar variables de entorno en Vercel Dashboard
4. Deploy automático

**Variables de entorno en Vercel**:
- `RECAPTCHA_SECRET_KEY`
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_PRIVATE_KEY`
- `SPREADSHEET_ID`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (client-side)

## 📞 Soporte

Para dudas sobre implementación o customización, revisar:
- Documentación de Next.js: https://nextjs.org/docs
- Documentación de Tailwind CSS: https://tailwindcss.com/docs
- Google Sheets API: https://developers.google.com/sheets/api
- reCAPTCHA v3: https://developers.google.com/recaptcha/docs/v3

---

**Desarrollado con Claude Code** | Sistema "Sovereign Blueprint" | Next.js 15 + TypeScript
