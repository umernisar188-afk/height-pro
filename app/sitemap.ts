import type { MetadataRoute } from "next";
import { people } from "./data/people";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://heightproapp.com";

  const peopleUrls = people.map((person) => ({
    url: `${baseUrl}/people/${person.slug}`,
    lastModified: new Date(),
  }));
  const manualPairs = [
    ["lionel-messi", "cristiano-ronaldo"],
    ["lionel-messi", "kylian-mbappe"],
    ["cristiano-ronaldo", "kylian-mbappe"],
    ["lionel-messi", "neymar"],
    ["kylian-mbappe", "erling-haaland"],
    ["conor-mcgregor", "khabib-nurmagomedov"],
    ["jon-jones", "alex-pereira"],
    ["lebron-james", "stephen-curry"],
    ["tom-cruise", "dwayne-johnson"],
    ["shah-rukh-khan", "salman-khan"],
  ];

  const pairSlugs = new Set<string>();

  // Same pairs the people pages link to (3 related people each)
  people.forEach((person) => {
    people
      .filter((p) => p.category === person.category && p.slug !== person.slug)
      .slice(0, 3)
      .forEach((related) => {
        const [a, b] = [person.slug, related.slug].sort();
        pairSlugs.add(`${a}-vs-${b}`);
      });
  });

  // Your manual pairs, put in alphabetical order
  manualPairs.forEach(([x, y]) => {
    const [a, b] = [x, y].sort();
    pairSlugs.add(`${a}-vs-${b}`);
  });

  const comparisonUrls = Array.from(pairSlugs).map((pair) => ({
    url: `${baseUrl}/compare/${pair}`,
    lastModified: new Date(),
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/people`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/how-accurate-are-celebrity-height`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
  ];

  return [...staticPages, ...peopleUrls, ...comparisonUrls];
}