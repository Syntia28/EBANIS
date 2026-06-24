import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedPhoto from "../components/AnimatedPhoto";
import Script from "next/script";

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
  title: "EBANIS SOLUCIONES | Muebles que Transforman Espacios",
  description: "Exclusivo taller de ebanistería y diseño de muebles a medida. Creamos piezas únicas que transforman tus espacios. Fundada en Cajamarca en 2021.",
  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
    apple: "/logo/favicon.png",
  },
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
      </body>
    </html>
  );
}
