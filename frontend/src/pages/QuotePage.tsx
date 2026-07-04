import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import { CheckCircle2, ChevronRight, ChevronLeft, Droplets, Settings, Building2, Wrench, AlertCircle } from 'lucide-react'

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    company: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [validationError, setValidationError] = useState('')

  const services = [
    { label: 'Water Treatment Plants', icon: Droplets },
    { label: 'Pumping Systems', icon: Settings },
    { label: 'Steel Panel Tanks', icon: Building2 },
    { label: 'Mechanical Fabrication', icon: Wrench },
    { label: 'Installation Services', icon: Settings },
    { label: 'Maintenance Services', icon: Wrench },
  ]

  const nextStep = () => {
    setValidationError('')
    if (step === 1 && !formData.service) {
      setValidationError('Please select an engineering service capability to proceed.')
      return
    }
    if (step === 2 && (!formData.name || !formData.email || !formData.phone || !formData.company)) {
      setValidationError('Please populate all mandatory fields (*).')
      return
    }
    setStep(prev => prev + 1)
  }

  const prevStep = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1800)
  }

  return (
    <>
      <SEO
        title="Request Quote — Engineering Solutions"
        description="Submit a request for quote to Brownforte Mechanical Engineering Limited. Get customized blueprints, storage, and utility installations pricing."
      />

      {/* Header */}
      <section className="bg-navy py-20 text-white relative">
        <div className="absolute inset-0 dot-grid-bg opacity-15 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber font-heading font-semibold text-sm uppercase tracking-widest">Quotations</span>
          <h1 className="text-4xl sm:text-5xl font-black mt-2">Request a Project Quote</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mt-4">
            Provide details of your required engineering specifications, and our estimators will draft a custom budget proposal.
          </p>
        </div>
      </section>

      {/* Step Wizard Container */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-3xl">
          
          {/* Step Progress indicators */}
          {!submitted && (
            <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
              {[1, 2, 3].map(sNum => (
                <div key={sNum} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all ${
                    step >= sNum
                      ? 'bg-navy text-amber'
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    {sNum}
                  </div>
                  <span className={`text-xs font-heading font-semibold tracking-wide uppercase hidden sm:block ${
                    step >= sNum ? 'text-navy' : 'text-slate-400'
                  }`}>
                    {sNum === 1 ? 'Service selection' : sNum === 2 ? 'Client details' : 'Project parameters'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Validation Banner */}
          {validationError && (
            <div className="bg-rose-50 border border-rose-100 text-rose-600 rounded-lg p-4 mb-6 flex items-start gap-2.5 text-sm font-medium">
              <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Steps Form */}
          {submitted ? (
            <div className="text-center py-12 border border-slate-100 rounded-2xl shadow-card bg-slate-50/50 p-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 text-emerald-500">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-3">Quote Request Submitted!</h2>
              <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
                Thank you for choosing BMEL. An engineering estimator has been assigned to review your parameters. We will contact you at <strong>{formData.email}</strong> within 48 business hours with custom specification designs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-slate-100 rounded-2xl p-8 shadow-card bg-slate-50/50 space-y-6">
              
              {/* STEP 1: Service selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-navy text-lg">Which engineering capability do you require?</h3>
                    <p className="text-xs text-slate-500 mt-1">Select the primary service sector matching your project.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map(s => {
                      const isSelected = formData.service === s.label
                      return (
                        <button
                          key={s.label}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s.label })}
                          className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-navy text-white border-navy shadow-md'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-amber text-navy' : 'bg-navy/5 text-navy'}`}>
                            <s.icon size={16} />
                          </div>
                          <span className="text-sm font-semibold">{s.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Client Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-navy text-lg">Tell us about your organization</h3>
                    <p className="text-xs text-slate-500 mt-1">Provide your primary contact and organizational parameters.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder="Project contact"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder="e.g. +234 80 1234 5678"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Project Metrics */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-navy text-lg">Define Project Boundaries</h3>
                    <p className="text-xs text-slate-500 mt-1">Select approximate timeline goals and financial allocation budgets.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Select Package *</label>
                      <select
                        required
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      >
                        <option value="">Select a package...</option>
                        <option value="Basic (₦250,000)">Basic — ₦250,000</option>
                        <option value="Premium (₦350,000)">Premium — ₦350,000</option>
                        <option value="Business (₦550,000)">Business — ₦550,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Target Timeline *</label>
                      <select
                        required
                        value={formData.timeline}
                        onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      >
                        <option value="">Select target timeline...</option>
                        <option value="Under 3 months">Under 3 Months</option>
                        <option value="3 - 6 months">3 - 6 Months</option>
                        <option value="6 - 12 months">6 - 12 Months</option>
                        <option value="12+ months">12+ Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Project Message & Specifications *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50 resize-none"
                      placeholder="Detail pump volumes, raw water chemical reports, fabrication lengths..."
                    />
                  </div>
                </div>
              )}

              {/* Wizard Control Buttons */}
              <div className="flex justify-between border-t border-slate-100 pt-6 mt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary text-slate-600 border-slate-200 hover:bg-slate-100 text-xs py-2.5 px-4 flex items-center gap-1"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary text-xs py-2.5 px-4 flex items-center gap-1"
                  >
                    Next Step <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary text-xs py-2.5 px-6"
                  >
                    {submitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                )}
              </div>

            </form>
          )}

        </div>
      </section>
    </>
  )
}
