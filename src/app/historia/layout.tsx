import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nuestra Trayectoria y Esencia de Ebanistería Fina",
  description:
    "Conoce la historia del taller de ebanistería fina líder en Cajamarca. Nuestro compromiso con la madera noble de origen sostenible, técnicas tradicionales de precisión y muebles de lujo.",
  keywords: [
    "taller de carpintería Cajamarca",
    "ebanistas peruanos",
    "historia de Ebanis",
    "muebles sostenibles Perú",
    "artesanía de madera maciza",
    "muebles de diseño",
    "ebanisteria tradicional",
    "maderas finas peru",
    "taller de ebanistas",
    "carpinteros recomendados cajamarca",
  ],
};

export default function HistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
