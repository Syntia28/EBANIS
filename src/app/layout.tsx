import type { Metadata, Viewport } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedPhoto from "../components/AnimatedPhoto";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ebanis.pe";
const pageTitle = "Ebanis Soluciones | Muebles a Medida y Ebanistería Premium";
const pageDescription =
  "Ebanis Soluciones crea muebles a medida, ebanistería fina y diseños exclusivos en Cajamarca para hogares y negocios con estilo y funcionalidad.";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s | Ebanis Soluciones",
  },
  description: pageDescription,
  keywords: [
    "ebanistería cajamarca",
    "muebles a medida",
    "cocinas a medida",
    "closets personalizados",
    "diseño de interiores",
    "muebles premium",
  ],
  authors: [{ name: "Ebanis Soluciones" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
    apple: "/logo/favicon.png",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: "Ebanis Soluciones",
    locale: "es_PE",
    type: "website",
    images: [{ url: "/logo/ebanis.png", width: 1200, height: 630, alt: "Ebanis Soluciones" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/logo/ebanis.png"],
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
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body>
        {/* Animated background shared across all routes */}
        <AnimatedBackground />
        {/* Animated photographic layer (Ken Burns) */}
        <AnimatedPhoto />
        <div className="site-content">{children}</div>

        {/* UserWay Accessibility Widget */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="au1j2fECe0"
          strategy="afterInteractive"
        />

        <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FurnitureStore",
            name: "Ebanis Soluciones",
            url: siteUrl,
            logo: `${siteUrl}/logo/ebanis.png`,
            description: pageDescription,
            telephone: "+51 945 876 123",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cajamarca",
              addressCountry: "PE",
            },
            sameAs: ["https://wa.me/51945876123"],
          })}
        </Script>
      </body>
    </html>
  );
}
