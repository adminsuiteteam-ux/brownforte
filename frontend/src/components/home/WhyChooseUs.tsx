import { ShieldCheck, Map, Clock, CheckSquare, Zap, Users } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const features = [
  {
    icon: Users,
    title: 'Professional COREN Engineers',
    desc: 'Our design and installation projects are overseen by certified members of the Council for the Regulation of Engineering in Nigeria.',
  },
  {
    icon: ShieldCheck,
    title: 'HSE Safety Certified Workforce',
    desc: 'Strict site safety policies with zero-incident goals. All technical staff are equipped with premium safety gear and protocols.',
  },
  {
    icon: Map,
    title: 'Nationwide Projects Execution',
    desc: 'From Lagos state to Port Harcourt and northern industrial zones, we have logistics networks to deploy teams anywhere in Nigeria.',
  },
  {
    icon: CheckSquare,
    title: 'Quality Assurance Testing',
    desc: 'Hydrostatic pressure tests on piping, material thickness verification, and weld inspections before commissioning.',
  },
  {
    icon: Zap,
    title: 'Fast & Precise Delivery',
    desc: 'Pre-fabricated structural panels and standardized process piping modular layouts speed up deployment, reducing plant downtime.',
  },
  {
    icon: Clock,
    title: '24/7 Service Support Contracts',
    desc: 'Dedicated technicians available on call to perform emergency repairs, pump replacements, or membrane cleaning.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <div className="container-xl">
        <SectionHeading
          label="Why BMEL"
          title="Engineered for Reliability, Built for Durability"
          subtitle="Our clients choose us because we combine certified technical expertise with rigorous quality checking and countrywide logistics reach."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner decorative accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-amber/5 rounded-bl-xl group-hover:bg-amber/10 transition-colors" />

              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6 text-navy group-hover:bg-navy group-hover:text-amber transition-colors duration-300">
                <feature.icon size={22} />
              </div>

              <h3 className="font-heading font-bold text-navy text-lg mb-3">
                {feature.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
