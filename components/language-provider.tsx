"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useRouter, usePathname } from "@/i18n/routing"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as string

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const savedLanguage = localStorage.getItem('preferred-language')
    const supportedLocales = ['en', 'fr', 'es']

    // If user has a saved preference and it's different from current locale
    if (savedLanguage && supportedLocales.includes(savedLanguage) && savedLanguage !== currentLocale) {
      // Get current path without locale prefix
      const currentPath = window.location.pathname.replace(/^\/(en|fr|es)/, '') || '/'
      router.replace(currentPath, { locale: savedLanguage })
    }
  }, [currentLocale, pathname, router])

  return <>{children}</>
}
