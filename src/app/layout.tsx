import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";

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
        {children}
      </body>
    </html>
  );
}
