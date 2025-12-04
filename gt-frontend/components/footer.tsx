import { Link } from "@/i18n/routing"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

const quickLinks = [
  { href: "/about", labelKey: "nav.about" },
  { href: "/destinations", labelKey: "nav.destinations" },
  { href: "/accommodation", labelKey: "nav.accommodation" },
  { href: "/contact", labelKey: "nav.contact" },
]

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="relative bg-[#0d1b1e] text-primary-foreground">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%),_radial-gradient(circle_at_bottom_right,_rgba(255,158,10,0.2),_transparent_45%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-10 py-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Left column */}
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 font-mono text-xs tracking-[0.3em] uppercase text-white/80">
                GLADIOLUS TOURS
              </p>
              <p className="text-4xl md:text-5xl font-serif leading-tight text-white">
                Crafted journeys across East Africa's most breathtaking landscapes
              </p>
              <p className="font-mono text-sm text-white/70 max-w-2xl">
                From the endless plains of Serengeti to the dramatic peaks of Kilimanjaro, our team curates soulful safari experiences with meticulous care and local expertise.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://web.facebook.com/GladiolusTours"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 transition group-hover:scale-110" />
                </a>
                <a
                  href="https://www.instagram.com/gladiolus_tours/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 transition group-hover:scale-110" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70 mb-4">
                  {t("footer.contactInfo")}
                </h4>
                <div className="space-y-4 text-sm font-mono text-white/80">
                  <div className="flex gap-3">
                    <Phone className="h-4 w-4 text-secondary mt-1" />
                    <div className="space-y-1">
                      <p>+255 (789) 736-559</p>
                      <p>+255 (753) 858-059</p>
                      <p>+1 (401) 500-6480</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-4 w-4 text-secondary mt-1" />
                    <p>info@gladiolustours.com</p>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 text-secondary mt-1" />
                    <p>MV8C+MC, Usa River, Arusha, Tanzania</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
                <h4 className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70 mb-4">Newsletter</h4>
                <p className="text-sm font-mono text-white/70 mb-4">
                  Receive curated safari stories and early access to expedition releases.
                </p>
                <form className="space-y-3">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="border border-white/20 bg-white/5 text-white placeholder:text-white/50"
                  />
                  <Button className="w-full rounded-full bg-secondary px-6 py-5 text-secondary-foreground font-semibold tracking-widest uppercase">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur space-y-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                {t("footer.quickLinks")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-mono text-white/80 transition hover:border-secondary hover:bg-white/10"
                  >
                    {t(link.labelKey)}
                    <span className="text-xs text-white/60 transition group-hover:text-secondary">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c1416] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/50 mb-3">On Safari Support</p>
              <h3 className="text-2xl font-serif mb-2">24/7 concierge desk</h3>
              <p className="text-sm font-mono text-white/70 mb-4">
                Already traveling with us? Our operations team is on call for any itinerary changes or special requests.
              </p>
              <p className="text-lg font-mono">+255 (789) 736-559</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 text-sm font-mono text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Gladiolus Tours. {t("footer.copyright")}
          </p>
          <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em]">
            <Link href="/faq" className="hover:text-white transition">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
