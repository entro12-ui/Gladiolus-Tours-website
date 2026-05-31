type SupportedLocale = "en" | "fr" | "de" | "es"

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function cloneValue<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => cloneValue(item)) as T
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, cloneValue(nestedValue)])
    ) as T
  }

  return value
}

export function normalizeLocale(locale: string): SupportedLocale {
  const normalized = locale.toLowerCase().split("-")[0]

  if (normalized === "fr") {
    return "fr"
  }

  if (normalized === "de") {
    return "de"
  }

  if (normalized === "es") {
    return "es"
  }

  return "en"
}

export function mergeLocalized<T>(base: T, overlay?: Partial<T>): T {
  if (!overlay) {
    return cloneValue(base)
  }

  if (Array.isArray(base) || Array.isArray(overlay)) {
    return cloneValue((overlay ?? base) as T)
  }

  if (!isPlainObject(base) || !isPlainObject(overlay)) {
    return cloneValue((overlay ?? base) as T)
  }

  const merged: Record<string, unknown> = {
    ...cloneValue(base),
  }

  for (const [key, overlayValue] of Object.entries(overlay)) {
    if (overlayValue === undefined) {
      continue
    }

    const baseValue = merged[key]

    if (isPlainObject(baseValue) && isPlainObject(overlayValue)) {
      merged[key] = mergeLocalized(baseValue, overlayValue)
      continue
    }

    merged[key] = cloneValue(overlayValue)
  }

  return merged as T
}

export function localizeList<T extends { slug: string }>(
  items: T[],
  locale: string,
  overlays?: Record<string, Partial<T>>
): T[] {
  const normalized = normalizeLocale(locale)

  return items.map((item) => {
    if (normalized === "en") {
      return mergeLocalized(item)
    }

    return mergeLocalized(item, overlays?.[item.slug])
  })
}
