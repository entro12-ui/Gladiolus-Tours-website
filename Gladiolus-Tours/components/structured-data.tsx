import Script from "next/script"
import { absoluteUrl } from "@/lib/seo"

interface StructuredDataProps {
  data: object
  id?: string
}

export function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <Script
      id={id ?? "structured-data"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Gladiolus Tours",
    "url": "https://www.gladiolustours.com",
    "logo": "https://www.gladiolustours.com/logo-no-bg.png",
    "description":
      "Gladiolus Tours is a licensed Tanzania tour operator based in Usa River, Arusha. We specialize in private Serengeti safaris, Ngorongoro Crater tours, Mount Kilimanjaro trekking, and Zanzibar beach holidays.",
    "founder": [
      {
        "@type": "Person",
        "name": "Sunday Mtui",
        "jobTitle": "Co-Founder"
      },
      {
        "@type": "Person",
        "name": "Francois Martin",
        "jobTitle": "Co-Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Usa River",
      "addressRegion": "Arusha",
      "addressCountry": "Tanzania"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+255695754463",
      "contactType": "customer service",
      "areaServed": "TZ",
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Tanzania"
    },
    "sameAs": [
  "https://web.facebook.com/GladiolusTours",
  "https://www.instagram.com/gladiolus_tours/",
  "https://www.tripadvisor.com/",
  "https://www.safaribookings.com/",
  "https://www.safarigo.com/",
  "https://www.google.com/maps/place/Gladiolus+Tours/",
  "https://www.linkedin.com/company/gladiolus-tours/"
],
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Tanzania Safari Packages",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Serengeti Safari"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Ngorongoro Crater Tour"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mount Kilimanjaro Trek"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Zanzibar Beach Holiday"
      }
    }
  ]
},
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "36"
},

"review": [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Lærke Skye"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "reviewBody": "Sunday from Gladiolus Tours made my stay unforgettable. Professional, kind, and deeply knowledgeable."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Maite Gonzalo"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "reviewBody": "Summiting Kilimanjaro with Gladiolus was seamless and perfectly organized."
  }
],
"makesOffer": [
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Serengeti Safari",
      "areaServed": {
        "@type": "Place",
        "name": "Serengeti National Park"
      }
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Ngorongoro Crater Tour",
      "areaServed": {
        "@type": "Place",
        "name": "Ngorongoro Conservation Area"
      }
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Mount Kilimanjaro Trekking",
      "areaServed": {
        "@type": "Place",
        "name": "Mount Kilimanjaro"
      }
    }
  },
  {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Zanzibar Beach Holiday",
      "areaServed": {
        "@type": "Place",
        "name": "Zanzibar Island"
      }
    }
  }
],
"@id": "https://www.gladiolustours.com/#organization",
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "-3.3699",
  "longitude": "36.6830"
},
"openingHoursSpecification": {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ],
  "opens": "08:00",
  "closes": "18:00"
}
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface TourSchemaProps {
  name: string
  description: string
  image: string
  price: number
  duration: string
  location: string
}

export function TourSchema({ name, description, image, price, duration, location }: TourSchemaProps) {
  const idSlug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    image,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    itinerary: {
      "@type": "ItemList",
      name: `${duration} Safari`,
    },
    touristType: "Adventure Travelers",
    location: {
      "@type": "Place",
      name: location,
    },
  }

  return <StructuredData id={`tour-schema-${idSlug}`} data={schema} />
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <StructuredData id={`breadcrumb-${items.map((item) => item.url).join("-")}`} data={schema} />
}

interface FAQSchemaProps {
  url: string
  title: string
  description: string
  faqs: { question: string; answer: string }[]
}

export function FAQSchema({ url, title, description, faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: title,
    description,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url,
  }

  return <StructuredData id="faq-schema" data={schema} />
}
export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Gladiolus Tours",
    url: "https://www.gladiolustours.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2800"
    }
  }

  return <StructuredData id="review-schema" data={schema} />
}

export function TripAdvisorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "TravelAgency",
      name: "Gladiolus Tours"
    },
    author: {
      "@type": "Organization",
      name: "TripAdvisor"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5"
    }
  }

  return <StructuredData id="tripadvisor-schema" data={schema} />
}