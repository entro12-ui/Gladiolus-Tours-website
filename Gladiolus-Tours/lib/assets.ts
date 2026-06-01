import { resolveGalleryImage } from "./gallery-images"

const DEFAULT_ASSET_BASE_URL = ""

const rawAssetBase = (
  process.env.NEXT_PUBLIC_ASSET_BASE_URL ||
  process.env.ASSET_BASE_URL ||
  DEFAULT_ASSET_BASE_URL
).trim()
const assetBase = rawAssetBase ? rawAssetBase.replace(/\/$/, "") : ""

export const hasAssetBase = Boolean(assetBase)

export function assetUrl(path: string) {
  if (!path) return path
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  const resolvedPath = resolveGalleryImage(normalizedPath)
  const encodedPath = encodeURI(resolvedPath)

  if (!assetBase) {
    return encodedPath
  }

  return `${assetBase}${encodedPath}`
}
