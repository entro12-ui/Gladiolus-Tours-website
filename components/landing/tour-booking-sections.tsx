import { CheckCircle2, XCircle, Home, Calendar, CreditCard } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type TourBookingSectionsProps = {
  labels: {
    included: string
    excluded: string
    accommodation: string
    bestTime: string
    bookingCtaTitle: string
    bookingCtaDescription: string
    inquireNow: string
    requestQuote: string
    planWithExpert: string
  }
  included: string[]
  excluded: string[]
  accommodation?: string
  bestTime?: string
  inquiryHref?: string
  contactHref?: string
}

export function TourBookingSections({
  labels,
  included,
  excluded,
  accommodation,
  bestTime,
  inquiryHref = "/inquiry",
  contactHref = "/contact",
}: TourBookingSectionsProps) {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="rounded-3xl border border-[#E2EAE0] bg-[#F8FAF7] shadow-none">
          <CardContent className="p-8">
            <h2 className="text-2xl font-serif text-[#1B2D1D] mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-[#B8A840]" />
              {labels.included}
            </h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#4A5A4C] leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-[#B8A840] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-[#E2EAE0] bg-white shadow-none">
          <CardContent className="p-8">
            <h2 className="text-2xl font-serif text-[#1B2D1D] mb-6 flex items-center gap-2">
              <XCircle className="h-6 w-6 text-[#8B7355]" />
              {labels.excluded}
            </h2>
            <ul className="space-y-3">
              {excluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#4A5A4C] leading-relaxed">
                  <XCircle className="h-5 w-5 text-[#A89880] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {(accommodation || bestTime) && (
        <div className="grid md:grid-cols-2 gap-8">
          {accommodation ? (
            <Card className="rounded-3xl border border-[#E2EAE0] bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl font-serif text-[#1B2D1D] mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-[#B8A840]" />
                  {labels.accommodation}
                </h2>
                <p className="text-[15px] text-[#4A5A4C] leading-[1.9]">{accommodation}</p>
              </CardContent>
            </Card>
          ) : null}
          {bestTime ? (
            <Card className="rounded-3xl border border-[#E2EAE0] bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl font-serif text-[#1B2D1D] mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#B8A840]" />
                  {labels.bestTime}
                </h2>
                <p className="text-[15px] text-[#4A5A4C] leading-[1.9]">{bestTime}</p>
              </CardContent>
            </Card>
          ) : null}
        </div>
      )}

      <section className="rounded-[40px] bg-gradient-to-br from-[#2D4A30] via-[#3A5A3E] to-[#4A6B4E] p-10 md:p-14 text-center text-white">
        <CreditCard className="h-10 w-10 mx-auto mb-6 text-[#D8CC72] opacity-90" />
        <h2 className="text-3xl md:text-4xl font-serif">{labels.bookingCtaTitle}</h2>
        <p className="mt-5 max-w-2xl mx-auto text-white/85 text-[16px] leading-relaxed">
          {labels.bookingCtaDescription}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#C2B44A] hover:bg-[#A09838] text-[#1B2D1D] font-semibold px-8 py-6"
          >
            <Link href={inquiryHref}>{labels.inquireNow}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 px-8 py-6"
          >
            <Link href={contactHref}>{labels.requestQuote}</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/70">{labels.planWithExpert}</p>
      </section>
    </div>
  )
}
