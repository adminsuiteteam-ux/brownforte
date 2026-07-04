import SEO from '@/components/ui/SEO'
import { Award, Compass, Eye, ShieldCheck, Target, Users } from 'lucide-react'

export default function AboutPage() {
  const values = [
    { icon: Compass, title: 'Vision', desc: 'To be Nigeria\'s foremost mechanical engineering provider, recognized for innovative designs, absolute reliability, and environmental sustainability.' },
    { icon: Target, title: 'Mission', desc: 'To build, install, and support premium fluid utilities, treatment systems, and storage sectional panels that empower industries and local communities.' },
    { icon: ShieldCheck, title: 'Safety & Quality', desc: 'To adhere strictly to global engineering standards (ASME, ISO) and prioritize zero-injury safety cultures on every job site.' },
  ]

  const team = [
    { name: 'Engr. Samuel Brown', role: 'Managing Director & Founder', desc: '15+ years in mechanical assemblies and industrial project engineering. Ex-Senior Architect.' },
    { name: 'Engr. Olabisi Durojaiye', role: 'Head of Water Technologies', desc: 'Specialist in Reverse Osmosis systems, membrane bio-reactors, and municipal plant integration.' },
    { name: 'Engr. Nnamdi Kalu', role: 'Lead Piping Draftsman & Fabricator', desc: 'Certified ASME welder coordinator with expertise in high-pressure oil/gas pipeline spools.' },
    { name: 'Mrs. Funmi Balogun', role: 'HSE Compliance Director', desc: 'Manages occupational safety systems, environmental audits, and on-site regulatory compliance checks.' }
  ]

  return (
    <>
      <SEO
        title="About Us — Corporate Profile & Leadership"
        description="Learn about Brownforte Mechanical Engineering Limited (BMEL), formerly O'Brown Modern Plumbing. Read our vision, mission, core values, and meet our COREN-registered team."
      />

      {/* Page Header */}
      <section className="bg-navy py-20 text-white relative">
        <div className="absolute inset-0 dot-grid-bg opacity-15 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber font-heading font-semibold text-sm uppercase tracking-widest">Our Organization</span>
          <h1 className="text-4xl sm:text-5xl font-black mt-2">About Brownforte Mechanical</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mt-4">
            Established with a vision to build durable utility systems and mechanical processing loops across Nigeria.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="border border-slate-100 p-8 rounded-xl shadow-card text-center hover:shadow-card-hover hover:border-slate-200 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4 text-navy">
                  <val.icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-amber font-heading font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl font-heading font-bold text-navy mt-2">Company Milestones</h2>
          </div>

          <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-10">
            <div>
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber" />
              <span className="text-xs font-mono font-bold text-amber block mb-1">2010</span>
              <h3 className="font-heading font-bold text-navy text-lg">Foundation of O'Brown Plumbing</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Started as O'Brown Modern Plumbing, executing premium plumbing grids and pressure tanks for high-end residential estates in Lagos state.
              </p>
            </div>
            <div>
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber" />
              <span className="text-xs font-mono font-bold text-amber block mb-1">2015</span>
              <h3 className="font-heading font-bold text-navy text-lg">Transition to BMEL & Industrial Focus</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Incorporated as Brownforte Mechanical Engineering Limited. Shifted core services toward heavy-duty fluid handling systems, water treatment plants, and ASME certified fabrications.
              </p>
            </div>
            <div>
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber" />
              <span className="text-xs font-mono font-bold text-amber block mb-1">2020</span>
              <h3 className="font-heading font-bold text-navy text-lg">Expansion of Fabrication Facility</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Launched a specialized engineering and fabrication workshop in Lagos, scaling logistics systems to supply hot-dip steel sectional tanks nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="text-amber font-heading font-semibold text-sm uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl font-heading font-bold text-navy mt-2">Meet Our Engineers & Directors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all text-center">
                <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4 text-navy">
                  <Users size={32} />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs text-amber font-semibold mt-1 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

