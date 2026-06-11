import { MetadataRoute } from "next";
import { destinationData } from "@/lib/destinations";

const BASE_URL = "https://www.huntkashmir365.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const destinationPages = destinationData.map((dest) => ({
    url:              `${BASE_URL}/destinations/${dest.slug}`,
    lastModified:     new Date(),
    changeFrequency:  "monthly" as const,
    priority:         0.85,
  }));

  return [
    {
      url:             BASE_URL,
      lastModified:    new Date(),
      changeFrequency: "weekly" as const,
      priority:        1.0,
    },
    {
      url:             `${BASE_URL}/destinations`,
      lastModified:    new Date(),
      changeFrequency: "monthly" as const,
      priority:        0.9,
    },
    {
      url:             `${BASE_URL}/gallery`,
      lastModified:    new Date(),
      changeFrequency: "monthly" as const,
      priority:        0.7,
    },
    ...destinationPages,
  ];
}
