import Image from "next/image"
import { Link } from "@/i18n/routing"
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/destinations", label: "Destinations" },
  { href: "/safaris", label: "Safari Packages" },
  { href: "/treks", label: "Kilimanjaro Treks" },
  { href: "/adventures", label: "Adventure Tours" },
  { href: "/gallery", label: "Safari Gallery" },
  { href: "/contact", label: "Plan Your Safari" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1C2B1E] via-[#182618] to-[#141F15] text-white border-t border-[#2D4A30]/40">

      {/* Top gold accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D8CC72] to-transparent opacity-70"
      />

      {/* Ambient decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-[#D8CC72]/[0.06] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 w-[400px] h-[400px] rounded-full bg-[#8DAE6F]/[0.05] blur-[100px]"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <div className="space-y-12">

            {/* BRAND */}
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 rounded-[28px] bg-white/10 border border-white/15 p-3">
                <Image
                  src="/logo.png"
                  alt="Gladiolus Tours Tanzania Safari Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-3xl font-serif text-white">
                  Gladiolus Tours
                </h3>
                <p className="text-xs tracking-[0.35em] uppercase text-[#D8CC72] font-semibold">
                  Your Gateway To Tanzania
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-[1.9] max-w-xl text-base font-light">
              Tanzania safari packages for every traveler — from budget group
              adventures to exclusive private tours. Based in Usa River,
              Arusha, we craft Serengeti safaris, Kilimanjaro treks, Zanzibar
              holidays, and bespoke wildlife experiences.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-8">

              {/* Facebook */}
              <a
                href="https://web.facebook.com/GladiolusTours"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group p-4 rounded-2xl bg-white/8 border border-white/15 hover:border-[#D8CC72] hover:bg-[#D8CC72]/10 transition-all duration-300"
              >
                <Facebook className="h-5 w-5 text-white/80 group-hover:text-[#D8CC72] transition-colors duration-300" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/gladiolus_tours/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group p-4 rounded-2xl bg-white/8 border border-white/15 hover:border-[#D8CC72] hover:bg-[#D8CC72]/10 transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-white/80 group-hover:text-[#D8CC72] transition-colors duration-300" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@gladiolus.tours.l"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group p-4 rounded-2xl bg-white/8 border border-white/15 hover:border-[#D8CC72] hover:bg-[#D8CC72]/10 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5 text-white/80 group-hover:text-[#D8CC72] transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                </svg>
              </a>

            </div>

            {/* CONTACT SUNDAY */}
            <div className="mt-10">

              <h4 className="text-2xl font-serif text-white mb-6">
                Contact Sunday Directly
              </h4>

              <div className="space-y-4 text-white">

                <div className="flex gap-3 items-center">
                  <Phone className="text-[#D8CC72] h-5 w-5 flex-shrink-0" />
                  <a
                    href="tel:+255789736559"
                    className="text-white/85 hover:text-[#D8CC72] transition-colors duration-300"
                  >
                    +255 789 736 559
                  </a>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail className="text-[#D8CC72] h-5 w-5 flex-shrink-0" />
                  <a
                    href="mailto:info@gladiolustours.com"
                    className="text-white/85 hover:text-[#D8CC72] transition-colors duration-300"
                  >
                    info@gladiolustours.com
                  </a>
                </div>

                <div className="flex gap-3 items-center">
                  <MapPin className="text-[#D8CC72] h-5 w-5 flex-shrink-0" />
                  <span className="text-white/85">Usa River, Arusha, Tanzania</span>
                </div>

                {/* ✅ ONLINE INDICATOR */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="relative flex h-3 w-3" aria-hidden>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
                  </span>
                  <span className="text-sm text-[#25D366] font-medium">
                    Sunday is Online Now
                  </span>
                </div>

                {/* ✅ WhatsApp Button */}
                <a
                  href="https://wa.me/255789736559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-all duration-300"
                >
                  Chat with Sunday on WhatsApp
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">

            <div>
              <h4 className="text-2xl font-serif text-white mb-6">
                Explore Safaris
              </h4>

              <div className="grid grid-cols-2 gap-4 text-white">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/80 hover:text-[#D8CC72] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-serif text-white mb-4">
                Get Safari Updates
              </h4>

              <p className="text-white/75 mb-6 font-light leading-relaxed">
                Receive exclusive safari offers and Tanzania travel updates.
              </p>

              <NewsletterForm
                sendConfirmationDefault
                inputClassName="border border-white/25 bg-white/8 text-white placeholder:text-white/50 rounded-full px-6 py-4 focus:border-[#D8CC72]/60 focus:outline-none transition-colors duration-300"
                buttonClassName="w-full rounded-full bg-gradient-to-r from-[#C2B44A] to-[#A8B545] hover:from-[#B0A040] hover:to-[#8E9A35] px-6 py-4 text-white font-semibold hover:scale-[1.02] hover:shadow-[0_10px_32px_rgba(168,181,69,0.3)] transition-all duration-300"
                labelClassName="text-white/85"
                mutedTextClassName="text-white/55"
              />
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

          <p className="text-white/60">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/85 font-medium">Gladiolus Tours</span>.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/faq"
              className="text-white/70 hover:text-[#D8CC72] transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-white/70 hover:text-[#D8CC72] transition-colors duration-300"
            >
              Plan Your Safari
            </Link>
          </div>

        </div>

      </div>

    </footer>
  )
}