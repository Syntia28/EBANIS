import type { MetadataRoute } from "next";
import { PRODUCT_DATA, SERVICES_DATA } from "../data/products";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ebanis.pe";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const collectionRoutes = Object.keys(PRODUCT_DATA).map((slug) => ({
    url: `${baseUrl}/collections/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/historia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/derechos-reservados`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...collectionRoutes,
    ...serviceRoutes,
  ];
}
