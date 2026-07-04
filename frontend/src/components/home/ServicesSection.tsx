import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { mockServices } from '../../data/mockData'
import SectionHeading from '../ui/SectionHeading'

export default function ServicesSection() {
  return (
    <section className="section-pad bg-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-steel/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeading
          label="Our Expertise"
          title="Engineered Solutions for Complex Utilities"
          subtitle="From design through installation and support, we handle full engineering cycles for fluid storage, processing, and transportation infrastructure."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map((service, idx) => {
            // Get Lucide Icon dynamically
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative glass rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all card-hover"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                {/* Service Icon */}
                <div className="w-14 h-14 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center mb-6 group-hover:bg-amber group-hover:text-navy transition-all duration-300">
                  <IconComponent size={24} className="text-amber group-hover:text-navy transition-all" />
                </div>

                {/* Service Title */}
                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 mb-6 line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Action Link */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:text-amber-400 group-hover:translate-x-1 transition-all"
                >
                  Explore Capabilities
                  <Icons.ArrowRight size={15} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services & Specifications
          </Link>
        </div>
      </div>
    </section>
  )
}

