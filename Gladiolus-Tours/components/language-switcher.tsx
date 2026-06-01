"use client"

import { useParams } from "next/navigation"
import { useRouter, usePathname } from "@/i18n/routing"
import { useTransition, type ChangeEvent } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const locales = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
] as const

function getLocale(code: string) {
  return locales.find((locale) => locale.code === code) ?? locales[0]
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const currentLocale = (params.locale as string) || "en"
  const activeLocale = getLocale(currentLocale)

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value
    if (locale === currentLocale) return

    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", locale)
    }

    startTransition(() => {
      router.replace(pathname, { locale })
    })
  }

  return (
    <div className={cn("relative", className)}>
      <span
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-base leading-none"
        aria-hidden
      >
        {activeLocale.flag}
      </span>
      <select
        value={currentLocale}
        onChange={handleSelectChange}
        disabled={isPending}
        aria-label="Change language"
        className="h-10 w-full min-w-[9.5rem] appearance-none rounded-full border border-[#D0DBCC] bg-white/85 py-0 pl-9 pr-10 text-[13px] font-medium text-[#2D4A30] shadow-sm outline-none transition-colors duration-300 hover:border-[#B8C8B1] focus:border-[#B8A840] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7B6D]"
        aria-hidden
      />
    </div>
  )
}
