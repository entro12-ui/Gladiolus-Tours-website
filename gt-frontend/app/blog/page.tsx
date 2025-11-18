import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safari Blog & Travel Tips - Gladiolus Tours",
  description:
    "Expert safari advice, destination guides, wildlife information, and travel tips for your African adventure.",
  openGraph: {
    title: "Safari Blog - Gladiolus Tours",
    description: "Expert safari advice and travel tips",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to the Great Migration",
    excerpt:
      "Everything you need to know about witnessing one of nature's greatest spectacles - the wildebeest migration across the Serengeti and Masai Mara.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Wildlife",
    date: "2024-11-15",
    readTime: "8 min read",
    author: "David Kimani",
  },
  {
    id: 2,
    title: "Best Photography Tips for Safari",
    excerpt:
      "Capture stunning wildlife photos with these expert tips on camera settings, timing, and composition for African safari photography.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Photography",
    date: "2024-11-10",
    readTime: "6 min read",
    author: "Sarah Mwangi",
  },
  {
    id: 3,
    title: "Choosing Between Tanzania and Kenya",
    excerpt:
      "A comprehensive comparison of safari destinations to help you decide which country is best for your African adventure.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Destinations",
    date: "2024-11-05",
    readTime: "10 min read",
    author: "James Omondi",
  },
  {
    id: 4,
    title: "Packing Essentials for Your Safari",
    excerpt:
      "The definitive packing list for safari travelers, including clothing, gear, and photography equipment recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Travel Tips",
    date: "2024-10-28",
    readTime: "5 min read",
    author: "Grace Njeri",
  },
  {
    id: 5,
    title: "Understanding Big Five Behavior",
    excerpt:
      "Learn about the habits, habitats, and behaviors of Africa's Big Five to enhance your safari experience and wildlife photography.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Wildlife",
    date: "2024-10-20",
    readTime: "12 min read",
    author: "David Kimani",
  },
  {
    id: 6,
    title: "Sustainable Safari: Our Conservation Efforts",
    excerpt: "How Gladiolus Tours contributes to wildlife conservation and supports local communities in Tanzania.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Conservation",
    date: "2024-10-15",
    readTime: "7 min read",
    author: "Sarah Mwangi",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-muted mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 text-balance">
            Safari Blog & Travel Tips
          </h1>
          <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert advice, destination guides, and insider tips for your African adventure
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{blogPosts[0].title}</h2>
                <p className="font-mono text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm font-mono text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button asChild className="w-fit bg-primary hover:bg-primary/90">
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-serif text-foreground mb-3 line-clamp-2">{post.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6 text-balance">Stay Updated on Safari Tips</h2>
          <p className="text-lg font-mono mb-8 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
            Subscribe to our newsletter for exclusive safari advice, special offers, and wildlife updates
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="#newsletter">Subscribe Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
