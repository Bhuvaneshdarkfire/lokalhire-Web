export function ImpactMetricsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24">
      <div className="rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white shadow-2xl relative overflow-hidden">
        {/* Ambient subtle glow overlay */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider">
            Verified Pilot Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            Tangible Neighborhood Metrics
          </h2>
          <p className="text-blue-100/80 text-sm mt-2">
            Recorded across 4 months of pilot operations across Karnataka urban corridors.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all">
            <p className="text-4xl sm:text-5xl font-extrabold text-white">10K+</p>
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mt-2">
              Opportunities Indexed
            </p>
            <p className="text-[11px] text-blue-100/70 mt-1">Across 3 pilot cities</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all">
            <p className="text-4xl sm:text-5xl font-extrabold text-emerald-300">1,200+</p>
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mt-2">
              Verified Merchants
            </p>
            <p className="text-[11px] text-blue-100/70 mt-1">Retail, groceries &amp; medical</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all">
            <p className="text-4xl sm:text-5xl font-extrabold text-white">28K+</p>
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mt-2">
              Applications Processed
            </p>
            <p className="text-[11px] text-blue-100/70 mt-1">74% same-day response</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all">
            <p className="text-4xl sm:text-5xl font-extrabold text-emerald-300">65%</p>
            <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mt-2">
              Commute Distance Saved
            </p>
            <p className="text-[11px] text-blue-100/70 mt-1">Avg 1.6 km daily transit radius</p>
          </div>
        </div>
      </div>
    </section>
  )
}
