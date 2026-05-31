import { resolveGalleryImage } from "./gallery-images"

/** Preview image for each nav dropdown link (href without locale prefix). */
export const NAV_LINK_IMAGES: Record<string, string> = {
  // Treks
  "/treks": "/gallery/kili1.jpeg",
  "/treks/kilimanjaro-machame-route": "/gallery/Machame Route.jpeg",
  "/treks/kilimanjaro-lemosho-route": "/gallery/Lemosho Route.jpeg",
  "/treks/kilimanjaro-marangu-route": "/gallery/Marangu Route.jpeg",
  "/treks/kilimanjaro-rongai-route": "/gallery/Rongai Route.jpeg",
  "/treks/umbwe-route": "/gallery/kili2.jpeg",
  "/treks/shira-route": "/gallery/kili3.jpeg",
  "/treks/mount-meru-trek": "/gallery/Mount meru, Arusha national park.jpeg",
  "/treks/packing-list": "/gallery/kili4.jpeg",
  "/treks/altitude-acclimatization": "/gallery/kili5.jpeg",
  "/treks/best-time-to-climb": "/gallery/kili6.jpeg",
  "/treks/climbing-faqs": "/gallery/kili7.jpeg",

  // Safaris — national parks
  "/destinations": "/gallery/This is Serengeti national park.jpeg",
  "/destinations/serengeti-national-park": "/gallery/This is Serengeti national park.jpeg",
  "/destinations/tarangire-national-park": "/gallery/elephant.jpeg",
  "/destinations/lake-manyara-national-park": "/gallery/lion-00.jpeg",
  "/destinations/ngorongoro-crater": "/gallery/Ngorongoro.jpeg",
  "/destinations/lake-natron": "/gallery/kik1.jpeg",
  "/destinations/arusha-national-park": "/gallery/Mount meru, Arusha national park.jpeg",

  // Safaris — itineraries & info
  "/safaris": "/gallery/safari2.jpeg",
  "/safaris/great-migration-safari": "/gallery/zebra.jpeg",
  "/safaris/private-tours": "/gallery/safari1.jpeg",
  "/safaris/packing-list": "/gallery/pkok.jpeg",
  "/safaris/safari-vehicles": "/gallery/car.jpeg",
  "/safaris/honeymoon-safari": "/gallery/sunday.jpeg",

  // Day trips
  "/day-trips": "/gallery/chemka.jpeg",
  "/day-trips/chemka-hot-springs": "/gallery/chemka.jpeg",
  "/day-trips/lake-duluti": "/gallery/kik1.jpeg",
  "/day-trips/arusha-town-tour": "/gallery/sunday.jpeg",
  "/day-trips/curios-gift-shops": "/gallery/car.jpeg",
  "/day-trips/local-markets": "/gallery/sunday.jpeg",

  // Zanzibar
  "/zanzibar": "/gallery/chemka2.jpeg",
  "/zanzibar/spice-tours": "/gallery/chemka2.jpeg",
  "/zanzibar/cultural-tour": "/gallery/sunday.jpeg",
  "/zanzibar/diving-snorkeling": "/gallery/ballon.jpeg",
  "/zanzibar/transfers": "/gallery/car.jpeg",

  // Gallery & about
  "/gallery": "/gallery/This is Serengeti national park.jpeg",
  "/gallery/videos": "/gallery/safarphoto.jpeg",
  "/about": "/gallery/sunday.jpeg",
  "/#testimonials": "/gallery/safarphoto.jpeg",
  "/#faq": "/gallery/safari1.jpeg",
  "/blog": "/gallery/sunday.jpeg",
}

export function getNavLinkImage(href: string): string {
  return resolveGalleryImage(NAV_LINK_IMAGES[href] ?? "/gallery/safari1.jpeg")
}
