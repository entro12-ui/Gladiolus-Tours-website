/** Short URL aliases → canonical slugs */
export const DESTINATION_ALIASES: Record<string, string> = {
  zanzibar: "zanzibar-island-escape",
}

export const SAFARI_ALIASES: Record<string, string> = {
  "great-migration": "great-migration-safari",
}

export function resolveDestinationSlug(slug: string): string {
  return DESTINATION_ALIASES[slug] ?? slug
}

export function resolveSafariSlug(slug: string): string {
  return SAFARI_ALIASES[slug] ?? slug
}
