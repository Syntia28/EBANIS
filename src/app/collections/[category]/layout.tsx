import type { Metadata } from "next";
import { PRODUCT_DATA } from "../../../data/products";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryKey = resolvedParams.category;
  const product = PRODUCT_DATA[categoryKey];

  if (!product) {
    return {
      title: "Colección de Muebles a Medida | Ebanis Soluciones",
      description:
        "Explora nuestras colecciones exclusivas de muebles premium de ebanistería fina a medida en Cajamarca.",
    };
  }

  const title = `${product.title} a Medida | Ebanistería Premium`;
  const description = `${product.description} Fabricamos muebles de madera maciza premium en Cajamarca usando maderas nobles como ${product.woods.join(", ")}. Acabados de lujo y garantía de por vida.`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ebanis.pe";
  const ogImage = product.image.startsWith("/")
    ? `${siteUrl}${product.image}`
    : product.image;

  return {
    title,
    description,
    keywords: [
      `${product.category.toLowerCase()} a medida`,
      product.title.toLowerCase(),
      `muebles de ${product.woods[0]?.toLowerCase() ?? "madera maciza"}`,
      `carpinteria cajamarca ${product.category.toLowerCase()}`,
      "muebles a medida premium",
      "ebanistería premium",
      "mejores carpinterias",
      `diseño de ${product.title.toLowerCase()}`,
      `fabricacion de ${product.title.toLowerCase()}`,
      `${product.title.toLowerCase()} cajamarca`,
      "carpinterias recomendadas cajamarca",
      "muebles de madera fina peru",
    ],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/collections/${categoryKey}`,
      siteName: "Ebanis Soluciones",
      type: "website",
      images: [
        {
          url: ogImage,
          alt: product.title,
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

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
