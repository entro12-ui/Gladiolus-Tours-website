import type { MetadataRoute } from "next"
import { destinations } from "@/lib/destinations-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gladiolustours.com"

  // Static pages
  const staticPages = ["", "/about", "/destinations", "/gallery", "/contact", "/faq"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  )

  // Dynamic destination pages
  const destinationPages = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...destinationPages]
}
