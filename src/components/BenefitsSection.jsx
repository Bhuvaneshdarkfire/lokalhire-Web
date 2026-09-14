export function BenefitsSection() {
  const benefits = [
    {
      icon: 'distance',
      title: 'Location-Based Matching',
      desc: 'Dynamic GPS radius calculations prioritizing authentic neighborhood vacancies within 500 meters to 10 kilometers.',
      tag: 'Sub-15 min commute',
      color: 'blue'
    },
    {
      icon: 'storefront',
      title: 'Local Opportunities',
      desc: 'Curated positions across neighborhood retail, healthcare pharmacies, neighborhood logistics, and community marts.',
      tag: 'Real physical shops',
      color: 'emerald'
    },
    {
      icon: 'bolt',
      title: 'Faster Hiring Speed',
      desc: 'Employers post vacancies in under 2 minutes and connect directly with pre-screened local applicants on the same day.',
      tag: 'Same-day interviews',
      color: 'indigo'
    },
    {
      icon: 'verified_user',
      title: 'Trusted Community',
      desc: 'Two-way mutual review metrics, physical storefront geo-stamps, and automated 14-day ghost vacancy expiration.',
      tag: 'Zero ghost postings',
      color: 'teal'
    }
  ]

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24" id="benefits">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Engineered For Neighborhood Dynamics
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Why Hyperlocal Makes Sense
        </h2>
        <p className="text-slate-600 text-base mt-3 leading-relaxed">
          Zero commute fatigue, authentic storefront verification, and direct neighborhood relationships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="glass-panel glass-card-hover rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                  b.color === 'blue'
                    ? 'bg-blue-100 text-blue-700'
                    : b.color === 'emerald'
                    ? 'bg-emerald-100 text-emerald-700'
                    : b.color === 'indigo'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-teal-100 text-teal-700'
                }`}
              >
                <span className="material-symbols-outlined text-[26px]">{b.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
            <div
              className={`mt-6 pt-4 border-t border-slate-100 text-xs font-semibold flex items-center gap-1 ${
                b.color === 'blue'
                  ? 'text-blue-600'
                  : b.color === 'emerald'
                  ? 'text-emerald-600'
                  : b.color === 'indigo'
                  ? 'text-indigo-600'
                  : 'text-teal-600'
              }`}
            >
              <span>{b.tag}</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
