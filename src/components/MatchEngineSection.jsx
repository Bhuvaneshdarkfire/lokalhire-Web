import { useState } from 'react'

export function MatchEngineSection() {
  const [activeCandidate, setActiveCandidate] = useState(0)

  const candidates = [
    {
      name: 'Harish Kumar',
      store: 'Sri Krishna Mart',
      role: 'Billing Specialist',
      score: 92,
      tag: 'Exceptional Fit',
      distance: '1.2 km away • ~14 min pleasant walk',
      distScore: '+35%',
      skills: 'POS Billing, Kannada Fluency, Inventory',
      skillsScore: '+25%',
      salary: 'Expected: ₹16,000 • Offered: ₹16,500/mo',
      salaryScore: '+18%',
      shift: 'Immediate joining • Morning shift match',
      shiftScore: '+14%'
    },
    {
      name: 'Pooja Gowda',
      store: 'SLV Supermarket',
      role: 'Cashier & Customer Sales',
      score: 95,
      tag: 'Immediate Match',
      distance: '0.8 km away • ~9 min walk',
      distScore: '+38%',
      skills: 'Barcode Scanning, Cash Mgmt, Kannada & English',
      skillsScore: '+26%',
      salary: 'Expected: ₹15,000 • Offered: ₹15,500/mo',
      salaryScore: '+19%',
      shift: 'Ready Today • Flexible Afternoon Shift',
      shiftScore: '+12%'
    },
    {
      name: 'Raghu Venkatesh',
      store: 'MedPlus Pharmacy',
      role: 'Pharmacy Counter Asst',
      score: 89,
      tag: 'Strong Match',
      distance: '1.8 km away • ~6 min bike / quick bus',
      distScore: '+30%',
      skills: 'Prescription Reading, Stock Tally, Kannada',
      skillsScore: '+27%',
      salary: 'Expected: ₹17,000 • Offered: ₹17,000/mo',
      salaryScore: '+20%',
      shift: 'Available in 2 Days • General Day Shift',
      shiftScore: '+12%'
    }
  ]

  const current = candidates[activeCandidate]

  // Circumference = 2 * PI * 42 ~= 263.89
  const circumference = 264
  const strokeDashoffset = circumference - (circumference * current.score) / 100

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24" id="match-engine">
      <div className="glass-panel rounded-3xl p-8 sm:p-14 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Algorithmic Precision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            The LOKALHIRE Match Engine
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Multi-factor scoring weighing geographic walkability, language ability, wage fit, and shift preferences.
          </p>

          {/* Interactive Candidate Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {candidates.map((c, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCandidate(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCandidate === idx
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                    : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200/80'
                }`}
              >
                {c.name} ({c.score}%)
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Radial Progress Gauge Block */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-50/80 border border-slate-200/60 shadow-inner">
            <div className="relative w-52 h-52 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-slate-200"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <circle
                  className="text-emerald-500 transition-all duration-700 ease-out"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="42"
                  stroke="currentColor"
                  strokeDasharray="264"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  strokeWidth="8"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-extrabold text-slate-900 leading-none">
                  {current.score}%
                </span>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1.5">
                  {current.tag}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h4 className="text-base font-bold text-slate-900">
                {current.name} → {current.store}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Matched for {current.role} within neighborhood turf
              </p>
            </div>
          </div>

          {/* Factor Breakdown Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-100 shadow-sm flex items-center justify-between transition-all hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">directions_walk</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Walking Commute Distance</h4>
                  <p className="text-xs text-slate-500">{current.distance}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full shrink-0">
                {current.distScore} Score
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-100 shadow-sm flex items-center justify-between transition-all hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Core Skill Overlap</h4>
                  <p className="text-xs text-slate-500">{current.skills}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full shrink-0">
                {current.skillsScore} Score
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-100 shadow-sm flex items-center justify-between transition-all hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Salary Alignment</h4>
                  <p className="text-xs text-slate-500">{current.salary}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full shrink-0">
                {current.salaryScore} Score
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-100 shadow-sm flex items-center justify-between transition-all hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Shift &amp; Availability</h4>
                  <p className="text-xs text-slate-500">{current.shift}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full shrink-0">
                {current.shiftScore} Score
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
