export default function Partners() {
  const partners = [
    'Grundfos',
    'Veolia',
    'GEA',
    'Julius Berger',
    'Bosch Engineering',
    'Lowara Pumps',
    'Schneider Electric',
    'Danfoss'
  ]

  // Duplicate for seamless infinite loop scroll
  const scrollList = [...partners, ...partners]

  return (
    <section className="py-12 bg-navy border-y border-white/5 overflow-hidden">
      <div className="container-xl mb-6">
        <p className="text-center text-white/40 text-xs font-heading font-semibold uppercase tracking-widest">
          Suppliers & Technical Integrators
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex w-[200%] gap-12 animate-marquee">
        {scrollList.map((partner, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 text-white/50 text-xl font-heading font-extrabold tracking-wider px-8 hover:text-amber transition-colors select-none"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  )
}

