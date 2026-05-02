# Mudanzasgandia.com
Web de Mudanzas Russafa para Gandia y La Safor

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

{
  "name": "mudanzasgandia",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.1.6",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8",
    "tailwindcss": "^4.0.0",
    "typescript": "^5"
  }
}

# Mudanzas Gandia

Web de **Mudanzas Russafa** geo-targeted para Gandia y La Safor. Construida con Next.js 15 + Tailwind v4 y desplegada en Vercel.

## 🚀 Cómo arrancar

### En local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Despliegue en Vercel

1. Crea un repositorio en GitHub y sube el código:

```bash
git init
git add .
git commit -m "feat: web inicial"
git branch -M main
git remote add origin git@github.com:TU_USUARIO/mudanzasgandia.git
git push -u origin main
```

2. Entra en [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta Next.js automáticamente. Pulsa **Deploy**.
4. Conecta el dominio `mudanzasgandia.com`:
   - **Settings → Domains → Add**
   - Añade los registros DNS que te indica Vercel en tu proveedor del dominio.
5. Cada push a `main` despliega automáticamente.

## 📝 Personalización rápida

### 1. Datos de contacto y SEO

Edita **`src/lib/site-config.ts`**. Es el punto único:

- `phone`, `whatsapp`, `email`, `address`
- `geo` (latitud/longitud para Schema)
- `social` (redes sociales)

### 2. Servicios

Edita **`src/data/services.ts`**. Cada servicio genera automáticamente:

- Su página propia en `/servicios/{slug}`
- Entrada en el footer y home
- Entrada en el sitemap

### 3. Zonas (clave para SEO local)

Edita **`src/data/zones.ts`**. Cada zona genera:

- Página propia en `/mudanzas-{slug}` (URL SEO-friendly)
- Entrada en home y footer
- Entrada en sitemap
- Datos estructurados Schema.org propios

### 4. Logo de marca

El componente `src/components/BrandLogo.tsx` es una **aproximación SVG** del isotipo Russafa. Cuando tengas el SVG oficial:

1. Coloca el archivo en `public/brand/isotipo.svg`
2. Sustituye el SVG inline en `BrandLogo.tsx`

### 5. Imagen Open Graph

Coloca una imagen 1200×630 px en `public/og-image.jpg`. Es la que se mostrará al compartir en WhatsApp, Twitter, LinkedIn, etc. Debería incluir logo Russafa + claim "Mudanzas en Gandia" sobre fondo verde oscuro.

### 6. Favicon

Coloca `favicon.ico` en `src/app/` (Next.js lo detecta automáticamente). También puedes añadir `icon.png` (32×32) y `apple-icon.png` (180×180).

## 📧 Conectar el formulario de presupuesto

Por defecto el formulario funciona pero solo registra en la consola del servidor. Para que envíe emails reales:

### Opción A — Resend (recomendado)

```bash
npm install resend
```

1. Regístrate en [resend.com](https://resend.com) (100 emails/día gratis)
2. Verifica el dominio `mudanzasgandia.com`
3. Crea API key
4. Añade `RESEND_API_KEY=re_xxx` en Vercel → Settings → Environment Variables
5. Descomenta el bloque correspondiente en `src/app/actions.ts`

### Opción B — Webhook (Zapier, Make, n8n)

1. Crea un webhook en Zapier/Make que acabe en email/CRM/Slack
2. Añade `BUDGET_WEBHOOK_URL=https://...` en variables de entorno
3. Descomenta el bloque correspondiente en `src/app/actions.ts`

## 🔍 Plan SEO de lanzamiento

### Semana 1 — Antes del lanzamiento

- [ ] Imagen OG en `public/og-image.jpg`
- [ ] Favicon real
- [ ] Datos reales en `site-config.ts` (teléfono, email, dirección)
- [ ] Conectar formulario a email
- [ ] Verificar dominio en Google Search Console
- [ ] Verificar dominio en Bing Webmaster Tools
- [ ] Crear ficha **Google Business Profile** para Gandia con misma dirección y teléfono
- [ ] Conseguir mínimo 5 reseñas iniciales en Google

### Semana 2 — Post-lanzamiento

- [ ] Subir sitemap a Search Console: `https://mudanzasgandia.com/sitemap.xml`
- [ ] Pedir indexación de la home + páginas principales
- [ ] Conseguir backlink desde `mudanzasrussafa.com` (footer / página de zonas)
- [ ] Alta en directorios locales: Páginas Amarillas, QDQ, eMudanzas, MundoMudanzas, Habitissimo
- [ ] Alta en directorios de Gandia: ayuntamiento, cámara de comercio, asociaciones de comerciantes

### Mes 1 — Contenido

- [ ] 4 artículos de blog optimizados para long-tail:
  - "Cuánto cuesta una mudanza en Gandia"
  - "Cómo embalar bien para una mudanza"
  - "Permisos de aparcamiento para mudanzas en Gandia"
  - "Checklist mudanza: 30 días antes"
- [ ] Optimizar `og-image.jpg` por sección importante
- [ ] Configurar Google Analytics 4 + Microsoft Clarity (mapas de calor gratis)

### Mes 2-3 — Autoridad local

- [ ] Conseguir backlinks de:
  - Asociaciones empresariales de Gandia
  - Inmobiliarias locales (acuerdo de recomendación cruzada)
  - Centros de coliving y residencias de estudiantes
- [ ] Nuevas reseñas mensuales en Google (objetivo: +10/mes los primeros 3 meses)
- [ ] Crear landings adicionales para servicios long-tail: "vaciado de pisos Gandia", "mudanzas estudiantes Gandia"

## 🏗️ Estructura del proyecto

```
mudanzasgandia/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout raíz + SEO + JSON-LD
│   │   ├── page.tsx                # Home
│   │   ├── globals.css             # Tokens de marca + Tailwind v4
│   │   ├── sitemap.ts              # Sitemap dinámico
│   │   ├── robots.ts               # Robots.txt
│   │   ├── not-found.tsx           # 404 personalizada
│   │   ├── actions.ts              # Server action del formulario
│   │   ├── servicios/[slug]/       # Páginas de servicios
│   │   └── zonas/[zone]/           # Páginas locales (URL: /mudanzas-{zone})
│   ├── components/
│   │   ├── BrandLogo.tsx
│   │   ├── BudgetForm.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── MobileBottomBar.tsx
│   ├── data/
│   │   ├── services.ts             # ⚙️ Edita para añadir servicios
│   │   └── zones.ts                # ⚙️ Edita para añadir zonas
│   └── lib/
│       └── site-config.ts          # ⚙️ Datos de empresa
├── public/                         # Assets estáticos
├── next.config.ts                  # Incluye rewrite SEO /mudanzas-{zona}
└── package.json
```

## 🎨 Sistema de diseño

Tokens definidos en `src/app/globals.css` bajo `@theme`:

- **Colores:** `russafa-lime`, `russafa-dark`, `russafa-yellow`, `russafa-cream`
- **Tipografías:** `font-display` (Doing) para titulares, body (Manrope) para cuerpo
- **Botones:** `.btn-russafa` con variantes `-primary`, `-dark`, `-ghost`

## ⚡ Performance objetivo

- Lighthouse 95+ en todas las categorías
- LCP < 2s
- Imágenes en AVIF/WebP automático con `next/image`
- Generación estática (SSG) en todas las páginas

## 📊 Tras el lanzamiento

Conecta:

1. **Google Search Console** — `https://search.google.com/search-console`
2. **Google Analytics 4** — `https://analytics.google.com`
3. **Google Business Profile** — `https://business.google.com`
4. **Microsoft Clarity** (mapas de calor gratis) — `https://clarity.microsoft.com`

## 📞 Marca paraguas

Esta web pertenece al grupo **Mudanzas Russafa** (`mudanzasrussafa.com`). El footer enlaza a la web matriz para reforzar autoridad y consolidar el grupo.

# =====================================================
# Mudanzas Gandia — variables de entorno
# Copia este archivo a `.env.local` y rellena los valores
# =====================================================

# URL pública del sitio (sin barra final)
NEXT_PUBLIC_SITE_URL=https://mudanzasgandia.com

# === Email transaccional (opcional, recomendado: Resend) ===
# https://resend.com — plan gratis 100 emails/día
# RESEND_API_KEY=re_xxxxxxxxxxxxxx
# CONTACT_EMAIL=info@mudanzasgandia.com

# === Webhook alternativo para presupuestos (Zapier/Make) ===
# BUDGET_WEBHOOK_URL=https://hooks.zapier.com/...

# === Google Search Console (opcional) ===
# Añade el código de verificación en src/app/layout.tsx -> verification.google
# GOOGLE_VERIFICATION=xxxxxxxx

# === Google Analytics 4 (opcional, recomendado tras lanzamiento) ===
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        // URL pública SEO-friendly: /mudanzas-gandia, /mudanzas-oliva, etc.
        // Ruta interna: /zonas/[zone]
        source: "/mudanzas-:zone",
        destination: "/zonas/:zone",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files
.env*
!.env.example

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
