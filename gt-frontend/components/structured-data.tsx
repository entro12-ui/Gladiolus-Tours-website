import Script from "next/script"

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
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
    description: "Premier African safari tour operator specializing in Tanzania and Kenya wildlife adventures",
    url: "https://gladiolustours.com",
    logo: "https://gladiolustours.com/logo.png",
    image: "https://gladiolustours.com/og-image.jpg",
    telephone: "+255-123-456-789",
    email: "info@gladiolustours.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Safari Road",
      addressLocality: "Arusha",
      addressCountry: "TZ",
    },
    sameAs: [
      "https://facebook.com/gladiolustours",
      "https://instagram.com/gladiolustours",
      "https://twitter.com/gladiolustours",
    ],
    priceRange: "$$-$$$",
  }

  return <StructuredData data={schema} />
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

  return <StructuredData data={schema} />
}
