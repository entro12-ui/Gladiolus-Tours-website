"use client"

export default function GlobalWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div className="absolute bottom-14 right-0 bg-white text-[#1B2D1D] text-sm px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        Hi, I’m Sunday 👋
      </div>

      {/* Button */}
      <a
        href="https://wa.me/255789736559"
        target="_blank"
        className="relative bg-[#25D366] text-white px-5 py-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center gap-2"
      >
        {/* Pulse */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-pulse blur-md"></span>

        {/* Text */}
        <span className="relative font-medium">
          Chat
        </span>
      </a>

    </div>
  )
}