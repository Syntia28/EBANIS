import type { Metadata } from "next";
import { SERVICES_DATA } from "../../../data/products";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceKey = resolvedParams.service;
  const service = SERVICES_DATA[serviceKey];

  if (!service) {
    return {
      title: "Servicios de Ebanistería y Carpintería Fina | Ebanis Soluciones",
      description:
        "Ofrecemos servicios de carpintería y ebanistería fina a medida en Cajamarca.",
    };
  }

  const title = `${service.title} en Cajamarca`;
  const description = `${service.description} Ebanis Soluciones ofrece carpintería fina con precisión, diseño personalizado y garantía profesional en Cajamarca.`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ebanis.pe";
  const ogImage = service.image.startsWith("/")
    ? `${siteUrl}${service.image}`
    : service.image;

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      "servicios de carpinteria cajamarca",
      "ebanistas profesionales cajamarca",
      "mejores carpinterias",
      "carpinteria fina cajamarca",
      "muebles a medida cajamarca",
      `servicio de ${service.title.toLowerCase()}`,
      "empresa de carpinteria cajamarca",
      "talleres de ebanisteria cajamarca",
      "carpinteros calificados cajamarca",
      "diseño de muebles premium",
    ],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/services/${serviceKey}`,
      siteName: "Ebanis Soluciones",
      type: "website",
      images: [
        {
          url: ogImage,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
