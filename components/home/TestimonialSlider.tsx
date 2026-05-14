"use client"

import { useEffect, useState } from "react"

export default function TestimonialSlider() {

  const testimonials = [
    {
      quote:
        "Our Serengeti safari exceeded expectations — incredible wildlife sightings and luxury lodges.",
      name: "Michael R."
    },
    {
      quote:
        "Summiting Kilimanjaro with Gladiolus was seamless and professionally organized.",
      name: "Maite Gonzalo"
    },
    {
      quote:
        "Highly recommend Gladiolus Tours for private Tanzania safaris with real local expertise.",
      name: "Lærke Skye"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl text-center">

        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          What Our Tanzania Safari Guests Say
        </h2>

        <div className="bg-[#F5F1EB] rounded-[32px] p-10 shadow-lg transition duration-500">

          <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#3E2A1F]">
            “{testimonials[activeIndex].quote}”
          </p>

          <p className="mt-6 font-semibold text-[#8C6239]">
            {testimonials[activeIndex].name}
          </p>

        </div>

      </div>
    </section>
  )
}