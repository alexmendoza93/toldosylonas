import type { Metadata } from "next";
import { Cinzel, Montserrat, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  SITE_URL,
  COMPANY_NAME,
  SEO_KEYWORDS,
} from "@/lib/constants";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Script accent for the brand line "Diseñamos experiencias."
const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Arquitectura Exterior desde 2009`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Fabricantes de toldos residenciales y comerciales en Guadalajara. Más de 15 años diseñando espacios exteriores con materiales premium. Cotización sin compromiso.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Arquitectura Exterior desde 2009`,
    description:
      "Transformamos espacios exteriores en lugares de confort y estilo. Toldos residenciales y comerciales en Guadalajara.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toldos y Lonas Guadalajara — Arquitectura Exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Arquitectura Exterior`,
    description:
      "Transformamos espacios exteriores en lugares de confort y estilo.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD structured data — LocalBusiness schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: COMPANY_NAME,
  description:
    "Fabricantes especializados en toldos residenciales, comerciales e industriales en Guadalajara, Jalisco. Arquitectura exterior desde 2009.",
  url: SITE_URL,
  foundingDate: "2009",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  areaServed: [
    { "@type": "City", name: "Guadalajara" },
    { "@type": "City", name: "Zapopan" },
    { "@type": "City", name: "Tlaquepaque" },
    { "@type": "City", name: "Tlajomulco de Zúñiga" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de toldos y lonas",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toldos Residenciales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas Comerciales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lonas Industriales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toldos Retráctiles" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Persianas Roller Screen" } },
    ],
  },
  sameAs: [
    "https://www.facebook.com/toldosylonasgdl",
    "https://instagram.com/toldosylonasguadalajara/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${cinzel.variable} ${montserrat.variable} ${pinyon.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-noir text-crema">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
