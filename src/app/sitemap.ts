import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collection`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/shipping-returns`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Product pages - in production, fetch from database
  const products = [
    { slug: "crimson-peony-khaden", date: "2025-01-15" },
    { slug: "indigo-dragon-runner", date: "2025-01-14" },
    { slug: "saffron-meditation-mat", date: "2025-01-13" },
    { slug: "phoenix-cloud-khaden", date: "2025-01-12" },
    { slug: "lotus-medallion-cushion", date: "2025-01-11" },
    { slug: "tiger-stripe-saddle-rug", date: "2025-01-10" },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/product/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = siteConfig.categories.map(
    (cat) => ({
      url: `${baseUrl}/collection/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...productPages, ...categoryPages];
}
