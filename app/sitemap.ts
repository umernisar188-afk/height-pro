import type { MetadataRoute } from "next";
import { people } from "./data/people";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com";

  const peopleUrls = people.map((person) => ({
    url: `${baseUrl}/people/${person.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/people`,
      lastModified: new Date(),
    },
    ...peopleUrls,
  ];
}