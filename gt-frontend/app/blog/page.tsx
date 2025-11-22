import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema, StructuredData } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Safari Blog & Travel Tips - Gladiolus Tours",
  description:
    "Expert safari advice, destination guides, wildlife information, and travel tips for your African adventure.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Gladiolus Tours Safari Blog",
    description: "Expert safari advice, destination guides, and conservation stories from East Africa.",
    url: absoluteUrl("/blog"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Safari blog wildlife montage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gladiolus Tours Safari Blog",
    description: "Travel tips and inspiration for planning your African safari adventure.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function BlogPage() {
  if (!blogPosts.length) {
    return null
  }

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Gladiolus Tours Safari Blog",
    description:
      "Expert safari advice, destination guides, and conservation updates from Gladiolus Tours' travel specialists.",
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: "Gladiolus Tours",
      url: absoluteUrl("/"),
    },
  }

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
        ]}
      />
      <StructuredData id="blog-schema" data={blogStructuredData} />
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
                <Button
                  asChild
                  className="w-fit rounded-full bg-gradient-to-r from-primary-alt to-primary px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                >
                  <Link href={`/blog/${blogPosts[0].slug}`}>
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
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                  >
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
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
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
          >
            <Link href="#newsletter">Subscribe Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
