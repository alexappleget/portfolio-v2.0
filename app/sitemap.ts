import { MetadataRoute } from "next";
import { siteMetadata } from "./data/siteMetadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${siteMetadata.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
