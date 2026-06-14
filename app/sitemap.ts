import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-domain.com",
      lastModified: new Date(),
    },
    {
      url: "https://your-domain.com/compare/170cm-vs-180cm",
      lastModified: new Date(),
    },
  ];
}