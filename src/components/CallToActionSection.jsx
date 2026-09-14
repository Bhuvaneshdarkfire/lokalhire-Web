export function CallToActionSection({ onOpenDownload }) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
      <div className="glass-panel rounded-3xl p-10 sm:p-16 text-center shadow-xl border border-white/90 relative overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <span className="material-symbols-outlined text-[32px]">handshake</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Join the Hyperlocal Movement
          </h2>

          <p className="text-slate-600 text-base mt-4 mb-8 leading-relaxed">
            Whether you are a local business seeking dependable frontline staff, an engineer passionate about spatial routing, or a job seeker eager to skip long commutes—connect with LOKALHIRE today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all cursor-pointer"
              href="#hero"
            >
              Schedule Business Demo
            </a>
            <a
              className="px-8 py-4 rounded-full bg-slate-100 text-slate-800 font-semibold text-xs hover:bg-slate-200 transition-all cursor-pointer"
              href="#openings"
            >
              Browse Open Positions
            </a>
            <button
              type="button"
              onClick={onOpenDownload}
              className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold text-xs shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
            >
              Get Mobile App (APK)
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-8">
            Pilot Desk: <strong className="text-slate-700 font-semibold">pilot@lokalhire.in</strong> • South Bengaluru &amp; Hassan, Karnataka
          </p>
        </div>
      </div>
    </section>
  )
}
