import { getTranslations } from "next-intl/server"

import { NotFoundView } from "@/components/not-found-view"

export default async function NotFound() {
  const t = await getTranslations("notFound")

  return (
    <NotFoundView
      copy={{
        title: t("title"),
        description: t("description"),
        ctaPrimary: t("ctaPrimary"),
        ctaSecondary: t("ctaSecondary"),
        suggestedHeading: t("suggestedHeading"),
        suggestedSubheading: t("suggestedSubheading"),
        suggestionSafaris: t("suggestionSafaris"),
        suggestionSafarisDesc: t("suggestionSafarisDesc"),
        suggestionTreks: t("suggestionTreks"),
        suggestionTreksDesc: t("suggestionTreksDesc"),
        suggestionDestinations: t("suggestionDestinations"),
        suggestionDestinationsDesc: t("suggestionDestinationsDesc"),
        exploreLink: t("exploreLink"),
      }}
    />
  )
}
