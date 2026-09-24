import type { MetadataRoute } from "next";
import { people } from "./data/people";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://heightproapp.com";

  const peopleUrls = people.map((person) => ({
    url: `${baseUrl}/people/${person.slug}`,
    lastModified: new Date(),
  }));

  const comparisonPairs = [
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

  const comparisonUrls = comparisonPairs.map(([personA, personB]) => ({
    url: `${baseUrl}/compare/${personA}-vs-${personB}`,
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
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
    },
    ...peopleUrls,
    ...comparisonUrls,
  ];
}