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
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Gladiolus Tours",
    description: "Premier African safari tour operator specializing in Tanzania wildlife adventures",
    url: "https://www.gladiolustours.com",
    logo: absoluteUrl("/logo-no-bg.png"),
    image: absoluteUrl("/og-image.jpg"),
    telephone: "+255-123-456-789",
    email: "info@gladiolustours.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MV8C+MC, Usa River",
      addressLocality: "Arusha",
      addressCountry: "TZ",
    },
    sameAs: [
      "https://facebook.com/GladiolusTours",
      "https://instagram.com/gladiolus_tours",
    ],
    priceRange: "$$-$$$",
  }

  return <StructuredData id="organization-schema" data={schema} />
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
