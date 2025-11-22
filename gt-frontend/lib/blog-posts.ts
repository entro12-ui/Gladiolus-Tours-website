export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ultimate-guide-great-migration",
    title: "The Ultimate Guide to the Great Migration",
    excerpt:
      "Everything you need to know about witnessing one of nature's greatest spectacles - the wildebeest migration across the Serengeti and Masai Mara.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Wildlife",
    date: "2024-11-15",
    readTime: "8 min read",
    author: "David Kimani",
    content: [
      "The Great Migration sees over 1.5 million wildebeest, zebras, and gazelles traverse the Serengeti-Mara ecosystem each year in search of fresh grazing lands.",
      "Prime viewing occurs between July and October in the Masai Mara, while dramatic river crossings in the Serengeti often happen from June through September.",
      "Plan your safari with an experienced guide who can position you responsibly for unforgettable sightings while respecting wildlife and park regulations.",
    ],
  },
  {
    id: 2,
    slug: "safari-photography-tips",
    title: "Best Photography Tips for Safari",
    excerpt:
      "Capture stunning wildlife photos with these expert tips on camera settings, timing, and composition for African safari photography.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Photography",
    date: "2024-11-10",
    readTime: "6 min read",
    author: "Sarah Mwangi",
    content: [
      "Golden hours at dawn and dusk offer soft light and active wildlife, so plan to be out early and late each day.",
      "Use burst mode to capture elusive moments, and remember to steady your camera with bean bags or vehicle supports.",
      "Respect the animals by maintaining distance and avoiding disruptive flash photography.",
    ],
  },
  {
    id: 3,
    slug: "tanzania-vs-kenya-safaris",
    title: "Choosing Between Tanzania and Kenya",
    excerpt:
      "A comprehensive comparison of safari destinations to help you decide which country is best for your African adventure.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Destinations",
    date: "2024-11-05",
    readTime: "10 min read",
    author: "James Omondi",
    content: [
      "Tanzania offers the iconic Serengeti, Ngorongoro Crater, and Mount Kilimanjaro, while Kenya shines with the Masai Mara and Amboseli National Park.",
      "Consider logistics: Kenya's air safari network enables quick travel, while Tanzania rewards travelers with diverse landscapes on longer itineraries.",
      "Both countries deliver exceptional wildlife viewing; the right choice depends on your preferred experiences, travel style, and timing.",
    ],
  },
  {
    id: 4,
    slug: "safari-packing-essentials",
    title: "Packing Essentials for Your Safari",
    excerpt:
      "The definitive packing list for safari travelers, including clothing, gear, and photography equipment recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Travel Tips",
    date: "2024-10-28",
    readTime: "5 min read",
    author: "Grace Njeri",
    content: [
      "Lightweight, neutral-colored clothing helps you stay comfortable and blend into the environment.",
      "Pack essential gear such as binoculars, a reusable water bottle, and insect repellent for a safe journey.",
      "Soft-sided luggage is ideal for bush flights, and don't forget a hat, sunscreen, and personal medications.",
    ],
  },
  {
    id: 5,
    slug: "understanding-big-five-behavior",
    title: "Understanding Big Five Behavior",
    excerpt:
      "Learn about the habits, habitats, and behaviors of Africa's Big Five to enhance your safari experience and wildlife photography.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Wildlife",
    date: "2024-10-20",
    readTime: "12 min read",
    author: "David Kimani",
    content: [
      "Each member of the Big Five—lion, leopard, elephant, rhino, and buffalo—exhibits unique behaviors that guides use to anticipate sightings.",
      "Patience pays off; observing body language and habitat clues can help you predict movement and interactions.",
      "Support conservation initiatives that protect these species from poaching and habitat loss.",
    ],
  },
  {
    id: 6,
    slug: "sustainable-safari-conservation-efforts",
    title: "Sustainable Safari: Our Conservation Efforts",
    excerpt: "How Gladiolus Tours contributes to wildlife conservation and supports local communities in Tanzania.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Conservation",
    date: "2024-10-15",
    readTime: "7 min read",
    author: "Sarah Mwangi",
    content: [
      "Gladiolus Tours partners with local conservation trusts to fund anti-poaching patrols and wildlife monitoring.",
      "We invest in community education programs that promote sustainable livelihoods and environmental stewardship.",
      "Travelers can make a difference by choosing eco-friendly lodges and minimizing their environmental footprint.",
    ],
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug || String(post.id) === slug)
}
