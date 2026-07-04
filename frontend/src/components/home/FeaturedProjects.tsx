import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react'
import { mockProjects } from '../../data/mockData'
import SectionHeading from '../ui/SectionHeading'

export default function FeaturedProjects() {
  // Show only first 3 projects as featured on home
  const featured = mockProjects.slice(0, 3)

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="section-label">Selected Portfolio</span>
            <h2 className="section-title mt-2 text-navy">Engineering In Action</h2>
            <p className="text-slate-600 mt-4 text-lg">
              Explore some of our recently completed and ongoing infrastructure developments delivered to top standards across Nigeria.
            </p>
          </div>
          <Link to="/projects" className="btn-outline group mt-6 md:mt-0 flex-shrink-0">
            View All Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-card card-hover flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-block px-2.5 py-1 rounded text-xs font-heading font-bold uppercase tracking-wider ${
                    project.status === 'Completed'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-amber text-navy'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Industry Label Overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="bg-navy/80 backdrop-blur-sm text-amber text-xs font-heading font-semibold px-2.5 py-1 rounded">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-3 leading-tight hover:text-amber-600 transition-colors">
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} className="text-amber flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} className="text-amber flex-shrink-0" />
                    <span>Completed: {project.completionDate}</span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber transition-colors"
                    >
                      Read Case Study <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
