export function ProblemSolutionSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24" id="problem-solution">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">The Modern Contrast</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Traditional Hiring vs LOKALHIRE</h2>
        <p className="text-slate-600 text-base mt-3">Why generic job portals fail miserably for neighborhood commerce.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Card 1: Traditional Hiring (Pain Points) */}
        <div className="rounded-3xl p-8 sm:p-10 bg-rose-50/60 border border-rose-200/70 shadow-lg backdrop-blur-xl">
          <div className="flex items-center gap-3.5 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[24px]">close</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Traditional Local Hiring</h3>
              <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide">Friction-heavy &amp; non-transparent</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✕</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Paper Notices &amp; Word of Mouth</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Faded flyers taped to storefront shutters reach fewer than 25 pedestrians a day.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✕</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Zero Salary &amp; Timing Clarity</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Candidates interview without knowing wages, leading to 74% walk-out drop-off.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✕</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Commute-Driven High Attrition</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Workers hired from across town quit within 30 days due to unbearable transit costs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✕</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Heavy PDF Resumes</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Shopkeepers cannot open or review wordy resumes while managing store customers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: LOKALHIRE 3D Geospatial Engine */}
        <div className="rounded-3xl p-8 sm:p-10 bg-white/80 border border-emerald-200/80 shadow-xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center gap-3.5 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[24px]">check</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">LOKALHIRE 3D Geospatial Engine</h3>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Instant, verified &amp; walking-distance</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">GPS-Calibrated Walk Radius</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Candidates discover openings filtered down to 500m walking zones, cutting transit friction.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">100% Upfront Salary (₹) &amp; Shift Metrics</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Mandatory monthly wage transparency and shift hours before applying.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">1-Tap Fast Apply &amp; SMS Fallback</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Tactile 3-tap skill cards replace bulky CVs with automated bilingual status updates.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">Physical Storefront Geo-Stamp</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Every listing is verified through GPS storefront audit to eliminate bogus listings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
