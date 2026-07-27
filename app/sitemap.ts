import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { lastContentUpdate, siteUrl, socialImage } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/hero.webp`, `${siteUrl}${socialImage}`],
    },
    {
      url: `${siteUrl}/services`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
      images: services.map((service) => `${siteUrl}${service.image}`),
    },
    ...services.map((service) => ({
      url: `${siteUrl}${service.href}`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${service.image}`],
    })),
    {
      url: `${siteUrl}/contact`,
      lastModified: lastContentUpdate,
      changeFrequency: "yearly",
      priority: 0.7,
      images: [`${siteUrl}/images/technofrost-map-preview.png`],
    },
  ];
}
