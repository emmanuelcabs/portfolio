import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}${site.cvPath}`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
