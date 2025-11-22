export const defaultLocale = "en"
export const locales = ["en", "sw"] as const
export type Locale = (typeof locales)[number]

export const languageNames: Record<Locale, string> = {
  en: "English",
  sw: "Kiswahili",
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      destinations: "Destinations",
      accommodation: "Accommodation",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Book Now",
    },
    home: {
      heroTitle: "Discover the Heart of Africa",
      heroSubtitle:
        "Experience unforgettable safari adventures through pristine wilderness and encounter majestic wildlife",
      exploreSafaris: "Explore Safaris",
      planYourTrip: "Plan Your Trip",
      featuredDestinations: "Featured Destinations",
      whyChooseUs: "Why Choose Gladiolus Tours",
      readyForAdventure: "Ready for Your African Adventure?",
    },
    footer: {
      tagline: "Your gateway to unforgettable African safari adventures. Experience the wild like never before.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      newsletter: "Newsletter",
      subscribeMessage: "Subscribe for exclusive safari deals and travel tips.",
      subscribe: "Subscribe",
      copyright: "All rights reserved.",
    },
  },
  sw: {
    nav: {
      home: "Nyumbani",
      about: "Kuhusu Sisi",
      destinations: "Maeneo",
      accommodation: "Malazi",
      gallery: "Picha",
      contact: "Wasiliana",
      bookNow: "Weka Nafasi",
    },
    home: {
      heroTitle: "Gundua Moyo wa Afrika",
      heroSubtitle: "Furahia safari zisizosahaulika kupitia jangwa safi na kukutana na wanyama wa porini",
      exploreSafaris: "Chunguza Safari",
      planYourTrip: "Panga Safari Yako",
      featuredDestinations: "Maeneo Maarufu",
      whyChooseUs: "Kwa Nini Uchague Gladiolus Tours",
      readyForAdventure: "Uko Tayari kwa Safari Yako ya Afrika?",
    },
    footer: {
      tagline: "Lango lako la safari zisizosahaulika za Afrika. Furahia porini kama hapo awali.",
      quickLinks: "Viungo vya Haraka",
      contactUs: "Wasiliana Nasi",
      newsletter: "Jarida",
      subscribeMessage: "Jiandikishe kupata ofa maalum za safari na vidokezo vya kusafiri.",
      subscribe: "Jiandikishe",
      copyright: "Haki zote zimehifadhiwa.",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
