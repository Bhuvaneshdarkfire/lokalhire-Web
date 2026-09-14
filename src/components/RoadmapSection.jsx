export function RoadmapSection() {
  const milestones = [
    {
      quarter: 'Q3 2026',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      title: 'Vernacular Voice Search',
      desc: 'Search by voice in Kannada, Hindi, and Tamil: "Near Gandhi Bazar, cashier role, ₹15,000".',
      status: 'In Active Prototyping',
      statusColor: 'text-emerald-600'
    },
    {
      quarter: 'Q4 2026',
      badgeColor: 'bg-blue-100 text-blue-800',
      title: 'Micro-Credential Hub',
      desc: '5-minute interactive app assessments for POS billing and inventory handling badging.',
      status: 'NSDC Alignment',
      statusColor: 'text-blue-600'
    },
    {
      quarter: 'Q1 2027',
      badgeColor: 'bg-indigo-100 text-indigo-800',
      title: 'Shared Fleet Pooling',
      desc: 'Enable local grocers and pharmacies to share verified delivery staff during peak order hours.',
      status: 'Research & Pilot',
      statusColor: 'text-indigo-600'
    },
    {
      quarter: 'Q2 2027',
      badgeColor: 'bg-purple-100 text-purple-800',
      title: 'Instant Daily UPI Payouts',
      desc: 'Integrated escrow contracts enabling daily wage settlements via UPI directly to worker accounts.',
      status: 'Fintech Architecture',
      statusColor: 'text-purple-600'
    }
  ]

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24" id="roadmap">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Product Evolution 2026 - 2027
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          The Future of Hyperlocal Work
        </h2>
        <p className="text-slate-600 text-base mt-3">
          Expanding from storefront retail to vernacular voice interactions and shared micro-fleets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="glass-panel glass-card-hover rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${m.badgeColor}`}
              >
                {m.quarter}
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-4">{m.title}</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{m.desc}</p>
            </div>
            <span
              className={`text-[11px] font-bold mt-6 pt-3 border-t border-slate-100 ${m.statusColor}`}
            >
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
