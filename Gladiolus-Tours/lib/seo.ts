const DEFAULT_PROD_URL = "https://www.gladiolustours.com"

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : DEFAULT_PROD_URL)

const rawSiteUrl = resolvedSiteUrl?.trim() ?? DEFAULT_PROD_URL
export const siteUrl = rawSiteUrl.replace(/\/$/, "")

export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) {
    return path
  }

  return `${siteUrl}${path === "/" ? "" : path}`
}
