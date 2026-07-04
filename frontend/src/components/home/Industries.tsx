import { Fuel, Factory, Stethoscope, Building, Sprout, HardHat, Hotel, GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const industries = [
  { icon: Fuel, name: 'Oil & Gas', desc: 'Utility process loops, water injection assemblies, fire suppression storage setups.' },
  { icon: Factory, name: 'Manufacturing', desc: 'Process water purification plants, stainless fabrication, factory boilers, piping.' },
  { icon: Stethoscope, name: 'Healthcare', desc: 'Ultra-pure water treatment units, clinical piping, auxiliary mechanical setups.' },
  { icon: Building, name: 'Government', desc: 'Municipal clean water networks, booster stations, public storage sectional tanks.' },
  { icon: Sprout, name: 'Agriculture', desc: 'High-volume irrigation distribution lines, solar pumping setups, raw storage.' },
  { icon: HardHat, name: 'Construction', desc: 'Subcontracting for high-rise building plumbing, structural supports, main risers.' },
  { icon: Hotel, name: 'Hospitality', desc: 'Hot-water boilers installation, estate water filtration plants, storage tank towers.' },
  { icon: GraduationCap, name: 'Education', desc: 'Campus mechanical lab piping loops, primary reservoir tanks, booster pump arrays.' },
]

export default function Industries() {
  return (
    <section className="section-pad bg-navy text-white relative overflow-hidden">
      {/* Decorative background visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-steel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeading
          label="Sectors We Serve"
          title="Engineered Solutions Across Key Industries"
          subtitle="We specialize in providing high-pressure piping, water plants, and tanks customized to the operational demands of diverse markets."
          centered
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:bg-white/[0.04] transition-all hover:border-amber/25 group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center mb-4 text-amber group-hover:bg-amber group-hover:text-navy transition-all duration-300">
                <ind.icon size={20} />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-amber transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
