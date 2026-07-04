import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-navy relative overflow-hidden">
      {/* Background visual filters */}
      <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
        <span className="text-amber font-heading font-semibold text-sm uppercase tracking-widest">
          Need an Engineering Partner?
        </span>
        
        <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
          Let's Design and Build Your Next Mechanical System
        </h2>

        <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Get in touch with our engineering team today for custom blueprints, volume specifications, and detailed budgetary quotation drafts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/quote" className="btn-primary group w-full sm:w-auto justify-center">
            Get a Free Consultation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:07063332335"
            className="btn-secondary w-full sm:w-auto justify-center flex items-center gap-2"
          >
            <PhoneCall size={16} />
            <span>Speak to Sales</span>
          </a>
        </div>
      </div>
    </section>
  )
}
