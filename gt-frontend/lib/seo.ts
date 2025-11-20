export const siteUrl = "https://gladiolustours.com"

export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) {
    return path
  }

  return `${siteUrl}${path === "/" ? "" : path}`
}
