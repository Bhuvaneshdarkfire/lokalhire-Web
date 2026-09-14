import { useState } from 'react'

export function LiveOpeningsSection({ onOpenDownload, onApplyRole }) {
  const [appliedId, setAppliedId] = useState(null)

  const openings = [
    {
      id: 'job-k1',
      category: 'RETAIL DAIRY',
      categoryColor: 'bg-blue-50 text-blue-700',
      role: 'Cashier & Billing Specialist',
      store: 'Nandini Milk Parlour',
      location: 'Vijayanagar, Bengaluru',
      pay: '₹14,000 / month',
      commute: '0.8 km (9 min walk)',
      commuteIcon: 'directions_walk',
      timing: 'Morning (6 AM - 2 PM)',
      verified: true
    },
    {
      id: 'job-k2',
      category: 'HEALTHCARE & PHARMA',
      categoryColor: 'bg-emerald-50 text-emerald-700',
      role: 'Pharma Counter Assistant',
      store: 'MedPlus Pharmacy',
      location: 'Kuvempu Nagar, Hassan',
      pay: '₹17,000 / month',
      commute: '1.5 km (18 min walk)',
      commuteIcon: 'directions_walk',
      timing: 'General (10 AM - 7 PM)',
      verified: true,
      highlight: true
    },
    {
      id: 'job-k3',
      category: 'HARDWARE & COMMERCE',
      categoryColor: 'bg-indigo-50 text-indigo-700',
      role: 'Hardware Sales Associate',
      store: 'SLV Electricals & Hardware',
      location: 'Saraswathipuram, Mysuru',
      pay: '₹19,000 / month',
      commute: '2.1 km (Quick Bus Ride)',
      commuteIcon: 'directions_bus',
      timing: 'Full Time (9:30 AM - 8 PM)',
      verified: true
    }
  ]

  const handleApply = (job) => {
    setAppliedId(job.id)
    if (onApplyRole) {
      onApplyRole(job)
    }
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24" id="openings">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Authentic Karnataka Pilot Data
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Active Neighborhood Vacancies
        </h2>
        <p className="text-slate-600 text-base mt-3">
          Curated live postings directly from verified shops in Bengaluru, Hassan &amp; Mysuru.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {openings.map((job) => {
          const isApplied = appliedId === job.id
          return (
            <div
              key={job.id}
              className="glass-panel glass-card-hover rounded-3xl p-8 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${job.categoryColor}`}>
                    {job.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>Verified Shop</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {job.store} • {job.location}
                </p>

                <div className="my-6 py-4 border-y border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Compensation:</span>
                    <span className="text-blue-700 font-bold text-sm">{job.pay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Commute:</span>
                    <span className="text-slate-800 font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-emerald-600">
                        {job.commuteIcon}
                      </span>
                      <span>{job.commute}</span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Shift Timing:</span>
                    <span className="text-slate-800 font-semibold">{job.timing}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleApply(job)}
                className={`w-full py-3 rounded-full text-xs font-bold transition-all shadow-sm ${
                  isApplied
                    ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                    : job.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {isApplied ? '✓ Application Sent' : 'Quick 1-Tap Apply'}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
