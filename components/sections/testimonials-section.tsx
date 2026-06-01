import type { HomeContent } from "@/content/home/types"

type TestimonialsSectionProps = {
  content: HomeContent["testimonials"]
  id?: string
  className?: string
}

export function TestimonialsSection({
  content,
  id = "testimonials",
  className = "py-28 bg-white relative overflow-hidden border-y border-[#E2EAE0]/60 scroll-mt-24",
}: TestimonialsSectionProps) {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-5 sm:px-8 lg:px-14 max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-6" />
          <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
            {content.eyebrow}
          </span>

          <h2
            className="font-serif mt-5 text-[#1B2D1D] leading-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
          >
            {content.title}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[15px] md:text-[17px] text-[#556458] leading-[1.9] font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAF7] border border-[#E2EAE0] rounded-[28px] p-8 hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#D8B43A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[14px] md:text-[15px] text-[#4A5A4C] leading-[1.9] font-light mb-6">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="border-t border-[#E2EAE0] pt-4">
                <p className="font-semibold text-[#1B2D1D] text-[14px]">{item.name}</p>
                <p className="text-[12px] text-[#7C8B61] mt-1">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[13px] text-[#556458]">{content.trustBadge}</p>
        </div>
      </div>
    </section>
  )
}
