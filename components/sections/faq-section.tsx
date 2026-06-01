import { Link } from "@/i18n/routing"
import type { HomeContent } from "@/content/home/types"

type FaqSectionProps = {
  content: HomeContent["faq"]
  id?: string
  className?: string
  viewAllLabel?: string
  viewAllHref?: string
}

export function FaqSection({
  content,
  id = "faq",
  className = "py-28 bg-[#F5F1EB] relative overflow-hidden scroll-mt-24",
  viewAllLabel,
  viewAllHref,
}: FaqSectionProps) {
  return (
    <section id={id} className={className}>
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-[360px] h-[360px] bg-[#C2B44A]/6 blur-[90px] rounded-full pointer-events-none"
      />

      <div className="relative container mx-auto px-5 sm:px-8 lg:px-14 max-w-3xl">
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-6" />
          <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
            {content.eyebrow}
          </span>
          <h2
            className="font-serif mt-4 text-[#1B2D1D] leading-tight"
            style={{ fontSize: "clamp(1.7rem, 4vw, 2.7rem)" }}
          >
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-[#4A5A4C] leading-[1.85] font-light text-[14px] md:text-[15px]">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {content.items.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-[22px] p-6 border border-[#E2EAE0]/80 hover:border-[#C2B44A]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-400"
            >
              <summary className="cursor-pointer font-semibold text-[15px] md:text-[16px] flex justify-between items-center text-[#1B2D1D] gap-4 leading-[1.6] list-none">
                {faq.q}
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C2B44A]/12 flex items-center justify-center text-[#C2B44A] group-open:rotate-45 transition-transform duration-300"
                  aria-hidden
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="mt-5">
                <p className="text-[14px] md:text-[15px] text-[#4A5A4C] leading-[1.9] font-light">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {viewAllLabel && viewAllHref ? (
          <div className="mt-12 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center rounded-full border border-[#D0DBCC] bg-white px-8 py-3.5 text-[14px] font-semibold text-[#1B2D1D] hover:border-[#B8A840] hover:text-[#B8A840] transition-colors"
            >
              {viewAllLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
