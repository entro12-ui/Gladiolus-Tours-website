import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/">
              Return Home
            </Link>
          </Button>
          
          <div className="text-sm text-gray-500">
            <Link href="/destinations" className="hover:text-orange-600 transition-colors">
              Explore Destinations
            </Link>
            {" | "}
            <Link href="/contact" className="hover:text-orange-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
