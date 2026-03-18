"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useRouter, usePathname } from "@/i18n/routing"
import { useTransition, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const locales = [
  { code: "en", name: "English", flagSrc: "/flags/en.svg", flagAlt: "United States" },
  { code: "fr", name: "Français", flagSrc: "/flags/fr.svg", flagAlt: "France" },
  { code: "es", name: "Español", flagSrc: "/flags/es.svg", flagAlt: "Spain" },
] as const

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()
  const [mounted, setMounted] = useState(false)

  const currentLocale = (params.locale as string) || "en"

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (locale: string) => {
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', locale)
    }

    startTransition(() => {
      router.replace(pathname, { locale })
    })
  }

  const currentLocaleName = locales.find((l) => l.code === currentLocale)?.name || "English"
  const currentLocaleFlag = locales.find((l) => l.code === currentLocale)

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Loading language menu">
        <Globe className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-border/60 bg-background/60"
          disabled={isPending}
          aria-label={`Change language from ${currentLocaleName}`}
        >
          {currentLocaleFlag ? (
            <Image
              src={currentLocaleFlag.flagSrc}
              alt={currentLocaleFlag.flagAlt}
              width={18}
              height={12}
              className="rounded-sm"
              priority
            />
          ) : (
            <Globe className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleLanguageChange(locale.code)}
            className="text-sm"
            disabled={currentLocale === locale.code}
          >
            <span className="flex items-center gap-2">
              <Image
                src={locale.flagSrc}
                alt={locale.flagAlt}
                width={18}
                height={12}
                className="rounded-sm"
              />
              <span>{locale.name}</span>
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
