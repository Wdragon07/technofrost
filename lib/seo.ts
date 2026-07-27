import type { Metadata } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const siteUrl = "https://www.technofrost.store";
export const socialImage = "/images/technofrost-hero-desktop.webp";
export const lastContentUpdate = "2026-07-27";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  imageAlt: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  imageAlt,
  keywords,
}: PageMetadataInput): Metadata {
  const socialTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      siteName: site.name,
      locale: "en_LK",
      type: "website",
      url: path,
      images: [
        {
          url: socialImage,
          width: 1774,
          height: 887,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteUrl}/#business`,
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}${site.logo}`,
  image: `${siteUrl}${socialImage}`,
  description: site.description,
  telephone: "+94 76 780 1583",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "6PCX+GQG, Kurakkanhena, Main Street",
    addressLocality: "Kalpitiya",
    postalCode: "61354",
    addressCountry: "LK",
  },
  areaServed: {
    "@type": "Place",
    name: "Kalpitiya and nearby areas, Sri Lanka",
  },
  hasMap: site.directionsHref,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94 76 780 1583",
    contactType: "customer service",
    areaServed: "LK",
    availableLanguage: ["English", "Sinhala", "Tamil"],
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      "@id": `${siteUrl}${service.href}#service`,
      url: `${siteUrl}${service.href}`,
      name: service.title,
      description: service.shortDescription,
      image: `${siteUrl}${service.image}`,
      areaServed: {
        "@type": "Place",
        name: "Kalpitiya and nearby areas, Sri Lanka",
      },
    },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.name,
  alternateName: site.displayName,
  description: site.description,
  publisher: { "@id": `${siteUrl}/#business` },
  inLanguage: "en-LK",
};

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
