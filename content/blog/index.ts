import { normalizeLocale } from "@/lib/i18n/localize"
import { deBlogContent, deBlogPosts } from "./de"
import { enBlogContent, enBlogPosts } from "./en"
import { esBlogContent, esBlogPosts } from "./es"
import { frBlogContent, frBlogPosts } from "./fr"
import type { BlogContent, BlogPost } from "./types"

export function getBlogContent(locale: string): BlogContent {
  const normalized = normalizeLocale(locale)

  if (normalized === "fr") {
    return frBlogContent
  }

  if (normalized === "de") {
    return deBlogContent
  }

  if (normalized === "es") {
    return esBlogContent
  }

  return enBlogContent
}

export function getBlogPosts(locale: string): BlogPost[] {
  const normalized = normalizeLocale(locale)

  if (normalized === "fr") {
    return frBlogPosts
  }

  if (normalized === "de") {
    return deBlogPosts
  }

  if (normalized === "es") {
    return esBlogPosts
  }

  return enBlogPosts
}
