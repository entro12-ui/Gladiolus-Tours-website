import { resolveGalleryImage } from "./gallery-images"

/** Preview image for each nav dropdown link (href without locale prefix). */
export const NAV_LINK_IMAGES: Record<string, string> = {
  // Treks
  "/treks": "/gallery/kiliman.jpeg",
  "/treks/kilimanjaro-machame-route": "/gallery/kiliman1.jpeg",
  "/treks/kilimanjaro-lemosho-route": "/gallery/Lemoshoroute.jpeg",
  "/treks/kilimanjaro-marangu-route": "/gallery/marangu-hero.jpg",
  "/treks/kilimanjaro-rongai-route": "/gallery/kiliman3.jpeg",
  "/treks/umbwe-route": "/gallery/kiliman4.jpeg",
  "/treks/shira-route": "/gallery/kiliman5.jpeg",
  "/treks/mount-meru-trek": "/gallery/Mountmeru.jpeg",
  "/treks/packing-list": "/gallery/kiliman6.jpeg",
  "/treks/altitude-acclimatization": "/gallery/kiliman7.jpeg",
  "/treks/best-time-to-climb": "/gallery/kiliman8.jpeg",
  "/treks/climbing-faqs": "/gallery/kiliman9.jpeg",

  // Safaris — national parks
  "/destinations": "/gallery/saf6.jpeg",
  "/destinations/serengeti-national-park": "/gallery/saf6.jpeg",
  "/destinations/tarangire-national-park": "/gallery/saf1.jpeg",
  "/destinations/lake-manyara-national-park": "/gallery/saf2.jpeg",
  "/destinations/ngorongoro-crater": "/gallery/Nogrogo.jpeg",
  "/destinations/lake-natron": "/gallery/Nogrogo7.jpeg",
  "/destinations/arusha-national-park": "/gallery/Mountmeru.jpeg",

  // Safaris — itineraries & info
  "/safaris": "/gallery/saf2.jpeg",
  "/safaris/great-migration-safari": "/gallery/saf6.jpeg",
  "/safaris/private-tours": "/gallery/privatesafar.jpeg",
  "/safaris/packing-list": "/gallery/saf7.jpeg",
  "/safaris/safari-vehicles": "/gallery/safariM.jpeg",
  "/safaris/honeymoon-safari": "/gallery/bandsafari.jpeg",

  // Day trips
  "/day-trips": "/gallery/chemka.jpeg",
  "/day-trips/chemka-hot-springs": "/gallery/chemka.jpeg",
  "/day-trips/lake-duluti": "/gallery/duluti-00.webp",
  "/day-trips/arusha-town-tour": "/gallery/sunday.jpeg",
  "/day-trips/curios-gift-shops": "/gallery/saf8.jpeg",
  "/day-trips/local-markets": "/gallery/saf4.jpeg",

  // Zanzibar
  "/zanzibar": "/gallery/chemka2.jpeg",
  "/zanzibar/spice-tours": "/gallery/chemka2.jpeg",
  "/zanzibar/cultural-tour": "/gallery/sunday.jpeg",
  "/zanzibar/diving-snorkeling": "/gallery/chemka1.jpeg",
  "/zanzibar/transfers": "/gallery/car.jpeg",

  // Gallery & about
  "/gallery": "/gallery/saf6.jpeg",
  "/gallery/videos": "/gallery/safariM.jpeg",
  "/about": "/gallery/sunday-with-tourists.webp",
  "/testimonials": "/gallery/safarphoto.jpeg",
  "/faq": "/gallery/saf1.jpeg",
  "/blog": "/gallery/sunday.jpeg",
}

export function getNavLinkImage(href: string): string {
  const path = href.split("#")[0]
  return resolveGalleryImage(NAV_LINK_IMAGES[path] ?? "/gallery/safariM.jpeg")
}
