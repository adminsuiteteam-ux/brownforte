import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, HelpCircle, HardHat, Award } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  const milestones = [
    { year: '2010', title: "O'Brown Plumbing Established", desc: 'Began operations as O\'Brown Modern Plumbing, offering high-end commercial plumbing assemblies in Lagos.' },
    { year: '2015', title: 'BMEL Incorporation', desc: 'Rebranded as Brownforte Mechanical Engineering Limited, shifting focus to large-scale industrial fluid systems.' },
    { year: '2020', title: 'Nationwide Expansion', desc: 'Successfully executed mechanical projects in over 20 states. Launched dedicated fabrication facility in Lekki.' },
    { year: '2026', title: 'Industrial Engineering Leader', desc: 'Partnering with global technology suppliers (Grundfos, Veolia) to deliver smart, sustainable utility infrastructure.' }
  ]

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Rich Content */}
          <div className="lg:col-span-6">
            <SectionHeading
              label="Who We Are"
              title="15+ Years of Proven Mechanical Engineering Leadership"
              subtitle="Formerly operating as O'Brown Modern Plumbing, we transitioned into Brownforte Mechanical Engineering Limited to scale our delivery capability, engineering talent, and industrial footprint across Nigeria."
            />
            
            <p className="text-slate-600 mb-8">
              Today, BMEL is a leading mechanical fabrication and installation firm. We serve government ministries, 
              multinational factories, and real estate developers with safety-certified, precision-engineered fluid utility loops, 
              treatment systems, and sectional panel tanks.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wide">ISO Standards</h4>
                  <p className="text-xs text-slate-500 mt-1">Strict quality controls on weld joints and structural panels.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <HardHat className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wide">HSE Certified</h4>
                  <p className="text-xs text-slate-500 mt-1">Zero-incident safety culture maintained across all project sites.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-outline group">
              Learn Our History
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Timeline Grid */}
          <div className="lg:col-span-6 relative">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200" />
            
            <div className="space-y-8 pl-12 relative">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[54px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-navy shadow-md transition-all group-hover:bg-amber group-hover:scale-110" />
                  
                  {/* Timeline Badge */}
                  <span className="inline-block text-xs font-mono font-bold bg-navy text-amber px-2 py-0.5 rounded mb-2">
                    {milestone.year}
                  </span>
                  
                  <h3 className="font-heading font-bold text-navy text-lg leading-tight mb-2">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {milestone.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

