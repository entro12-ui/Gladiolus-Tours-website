/**
 * Many legacy `.webp` paths in public/ are SVG placeholders (not valid images).
 * Map them to real photos in public/gallery/.
 */
export const GALLERY_IMAGE_ALIASES: Record<string, string> = {
  "/gallery/zebra-00.webp": "/gallery/zebra.jpeg",
  "/gallery/zebra-01.webp": "/gallery/zebra1.jpeg",
  "/gallery/elephant-00.webp": "/gallery/elephant.jpeg",
  "/gallery/elephant.webp": "/gallery/elephant.jpeg",
  "/gallery/lion-00.webp": "/gallery/lion-00.jpeg",
  "/gallery/sunset.webp": "/gallery/sunday.jpeg",
  "/gallery/chemka-00.webp": "/gallery/chemka.jpeg",
  "/gallery/chemka-01.webp": "/gallery/chemka1.jpeg",
  "/gallery/chemka-02.webp": "/gallery/chemka2.jpeg",
  "/gallery/duluti-00.webp": "/gallery/kik1.jpeg",
  "/gallery/duluti-01.webp": "/gallery/chemka1.jpeg",
  "/gallery/duluti-02.webp": "/gallery/chemka2.jpeg",
  "/gallery/tour-guide.webp": "/gallery/sunday.jpeg",
  "/gallery/photo-00.webp": "/gallery/safarphoto.jpeg",
  "/gallery/lunch-00.webp": "/gallery/pkok.jpeg",
  "/gallery/lunch-01.webp": "/gallery/car.jpeg",
  "/gallery/lunch-02.webp": "/gallery/sunday.jpeg",
  "/gallery/gt-tourist-vehicle-00.webp": "/gallery/car.jpeg",
  "/gallery/gt-tourist-vehicle-01.webp": "/gallery/car.jpeg",
  "/gallery/Olduvai-Gorge-00.webp": "/gallery/nogron.jpeg",
  "/gallery/Olduvai-Gorge-01.webp": "/gallery/nogron1.jpeg",
  "/gallery/serengeti-balloon.webp": "/gallery/ballon.jpeg",
  "/gallery/cheater-00.webp": "/gallery/lion-00.jpeg",
  "/gallery/cheater-01.webp": "/gallery/lion-00.jpeg",
  "/gallery/cheater-02.webp": "/gallery/lion-00.jpeg",
  "/gallery/beer.webp": "/gallery/chemka2.jpeg",
  "/gallery/sunday-in-serengeti-00.webp": "/gallery/This is Serengeti national park1.jpeg",
  "/gallery/sunday-in-serengeti-01.webp": "/gallery/This is Serengeti national park2.jpeg",
  "/gallery/sunday-with-tourists.webp": "/gallery/sunday.jpeg",
  "/about-us/team.webp": "/gallery/sunday.jpeg",
  "/about-us/safari-go.webp": "/gallery/safarphoto.jpeg",
  "/about-us/safari-booking.webp": "/gallery/sunday.jpeg",
  "/about-us/team-work.webp": "/gallery/safari1.jpeg",
}

export function resolveGalleryImage(path: string): string {
  if (!path) return path
  const normalized = path.startsWith("/") ? path : `/${path}`
  return GALLERY_IMAGE_ALIASES[normalized] ?? normalized
}
