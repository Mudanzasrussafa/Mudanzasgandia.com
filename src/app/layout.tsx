import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileBottomBar from "@/components/MobileBottomBar";

/**
 * Manrope para body (geométrica, legible, no genérica)
 */
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Doing es la tipografía oficial del manual de marca Russafa.
 * Si la sirves desde Google Fonts añade aquí el import correspondiente
 * y reemplaza este `localFont` por `Doing` desde `next/font/google`.
 *
 * Mientras tanto, fallback con system-ui geométrico para que el sitio
 * no se rompa en build sin las fuentes locales descargadas.
 */
const fontFallback = {
  variable: "--font-doing-fallback",
  className: "",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.defaultDescription,
  keywords: [
    "mudanzas Gandia",
    "mudanzas La Safor",
    "guardamuebles Gandia",
    "mudanzas Playa de Gandia",
    "mudanzas Oliva",
    "empresa de mudanzas Valencia",
    "mudanzas baratas Gandia",
    "mudanzas internacionales",
    "mudanzas oficinas Gandia",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Añade aquí cuando lo tengas
    // google: "tu-codigo-search-console",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E3B36",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD para LocalBusiness / MovingCompany
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/og-image.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Gandia" },
      { "@type": "City", name: "Oliva" },
      { "@type": "City", name: "Daimús" },
      { "@type": "City", name: "Bellreguard" },
      { "@type": "City", name: "Tavernes de la Valldigna" },
      { "@type": "AdministrativeArea", name: "La Safor" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [SITE.social.instagram, SITE.social.facebook].filter(Boolean),
  };

  return (
    <html lang={SITE.language} className={`${manrope.variable} ${fontFallback.variable}`}>
      <head>
        {/* Tipografía Doing desde Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Doing:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={manrope.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileBottomBar />
      </body>
    </html>
  );
}
