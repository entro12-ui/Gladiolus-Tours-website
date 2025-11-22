import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Gladiolus Tours</h3>
            <p className="font-mono text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Your gateway to unforgettable African safari adventures. Experience the wild like never before.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>+255-753-858-059</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>info@gladiolustours.com</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Arusha, Tanzania</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-mono text-sm font-semibold mb-4 uppercase tracking-wider">Newsletter</h4>
            <p className="font-mono text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Subscribe for exclusive safari deals and travel tips.
            </p>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Gladiolus Tours. All rights reserved.
          </p>
          <div className="flex gap-6 font-mono text-sm">
            {/*<Link href="/faq" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              FAQ
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Terms of Service
            </Link>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}
