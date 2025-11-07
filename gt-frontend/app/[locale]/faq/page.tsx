import type { Metadata } from "next"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema, FAQSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Gladiolus Tours",
  description:
    "Find answers to common questions about safari planning, travel requirements, and what to expect on your African adventure.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "African Safari FAQs | Gladiolus Tours",
    description: "Get answers to top questions about planning luxury safaris in Tanzania and Kenya.",
    url: absoluteUrl("/faq"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours safari FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gladiolus Tours Safari FAQs",
    description: "Everything you need to know before your East African safari adventure.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

const faqCategories = [
  {
    category: "Planning Your Safari",
    questions: [
      {
        question: "When is the best time to visit for safari?",
        answer:
          "The best time depends on what you want to see. June to October is peak season with dry weather and excellent game viewing. January to March offers the Great Migration calving season. Each season has unique advantages.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking 6-12 months in advance, especially for peak season (June-October) and migration periods. This ensures availability at premium lodges and camps.",
      },
      {
        question: "Can you customize my itinerary?",
        answer:
          "We specialize in creating personalized safaris tailored to your interests, budget, and schedule. Contact us to discuss your dream safari.",
      },
      {
        question: "What is included in the safari price?",
        answer:
          "Typically includes accommodation, meals, park fees, professional guide, 4x4 safari vehicle, and airport transfers. International flights, visas, travel insurance, and personal expenses are usually excluded.",
      },
    ],
  },
  {
    category: "Travel Requirements",
    questions: [
      {
        question: "Do I need a visa for Tanzania/Kenya?",
        answer:
          "Most visitors need a visa. Tanzania offers e-visas online, and Kenya has a similar system. We can provide guidance, but please check current requirements for your nationality.",
      },
      {
        question: "What vaccinations are required?",
        answer:
          "Yellow fever vaccination is required if traveling from certain countries. Malaria prophylaxis is recommended. Consult your doctor 6-8 weeks before travel for personalized advice.",
      },
      {
        question: "Is travel insurance necessary?",
        answer:
          "Yes, we strongly recommend comprehensive travel insurance covering medical emergencies, evacuation, trip cancellation, and lost luggage.",
      },
      {
        question: "What currency should I bring?",
        answer:
          "US Dollars are widely accepted. Credit cards work in major hotels and lodges. Bring small bills for tips and local purchases.",
      },
    ],
  },
  {
    category: "Safari Experience",
    questions: [
      {
        question: "What should I pack for safari?",
        answer:
          "Light, neutral-colored clothing, comfortable walking shoes, sun protection, binoculars, camera with zoom lens, and any personal medications. We provide a detailed packing list upon booking.",
      },
      {
        question: "Are safaris safe?",
        answer:
          "Yes, safaris are very safe when following guide instructions. Our experienced guides prioritize your safety while providing incredible wildlife encounters.",
      },
      {
        question: "What wildlife can I expect to see?",
        answer:
          "You can expect to see the Big Five (lion, leopard, elephant, buffalo, rhino), giraffes, zebras, wildebeest, cheetahs, hippos, and hundreds of bird species. Sightings vary by location and season.",
      },
      {
        question: "How long are game drives?",
        answer:
          "Typically 3-4 hours in the morning and afternoon. Full-day drives with picnic lunches are also available. We adjust schedules based on wildlife activity and guest preferences.",
      },
    ],
  },
  {
    category: "Accommodation & Meals",
    questions: [
      {
        question: "What type of accommodation is available?",
        answer:
          "We offer luxury lodges, tented camps, and hotels ranging from mid-range to ultra-luxury. All are carefully selected for comfort, location, and service quality.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, most lodges and camps can accommodate vegetarian, vegan, gluten-free, and other dietary requirements with advance notice.",
      },
      {
        question: "Is wifi available?",
        answer:
          "Most lodges offer wifi in common areas, though connections can be limited in remote locations. We encourage unplugging to fully enjoy the safari experience.",
      },
    ],
  },
]

export default function FAQPage() {
  const faqList = faqCategories.flatMap((category) => category.questions)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "FAQ", url: absoluteUrl("/faq") },
        ]}
      />
      <FAQSchema
        url={absoluteUrl("/faq")}
        title="Gladiolus Tours Safari FAQs"
        description="Answers to the most common luxury African safari questions from Gladiolus Tours."
        faqs={faqList}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-muted mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about planning your African safari adventure
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-serif text-foreground mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="font-mono text-left hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-mono text-sm text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-serif mb-4 text-balance">Still Have Questions?</h2>
              <p className="text-lg font-mono mb-8 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
                Our safari experts are here to help. Get in touch and we'll answer all your questions.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
