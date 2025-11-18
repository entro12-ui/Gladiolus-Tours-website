"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { languageNames, type Locale } from "@/lib/i18n"

export function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en")

  const handleLanguageChange = (locale: Locale) => {
    setCurrentLocale(locale)
    // In a production app, this would update the URL and reload with the new locale
    // For now, it just updates the state
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline font-mono text-xs">{languageNames[currentLocale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")} className="font-mono text-sm">
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("sw")} className="font-mono text-sm">
          Kiswahili
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
