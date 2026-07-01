import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cotizar Muebles a Medida | Contacto Ebanis",
  description:
    "¿Listo para transformar tu espacio? Cotiza tus muebles a medida en Cajamarca. Ebanis Soluciones ofrece asesoría técnica inicial sin costo para cocinas, closets, puertas y acabados premium.",
  keywords: [
    "cotizar carpintería Cajamarca",
    "presupuesto muebles a medida",
    "diseño de muebles premium",
    "carpintero Cajamarca contacto",
    "ebanistería fina teléfono",
    "cotizar cocina melamina",
    "cotizar closets cajamarca",
    "cotizar puertas de madera",
    "precio carpintero cajamarca",
    "presupuesto melamina cajamarca",
    "contratar carpintero peru",
  ],
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
