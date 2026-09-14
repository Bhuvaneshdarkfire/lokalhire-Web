import {
  MapPin,
  Download,
  Smartphone,
  ShieldCheck,
  Heart,
  ArrowUp,
  Mail
} from 'lucide-react'
import { neighborhoods } from '../data/mockData'

export function Footer({ onOpenDownload }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid: Brand & Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                L
              </div>
              <div className="flex items-baseline gap-0.5 font-bold tracking-tight text-slate-900 text-xl font-display">
                <span>LOKAL</span>
                <span className="text-emerald-600">HIRE</span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Connecting neighborhood talent with nearby stores, cafes, and businesses for faster, more human-sized hiring within walking distance.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenDownload}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2 shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Get Mobile App</span>
              </button>
            </div>
          </div>

          {/* Quick Links for Seekers */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Job Seekers
            </h4>
            <ul className="space-y-2">
              <li><a href="#jobs" className="hover:text-emerald-700 transition">Browse Nearby Jobs</a></li>
              <li><a href="#download" className="hover:text-emerald-700 transition">Android APK Download</a></li>
              <li><a href="#calculator" className="hover:text-emerald-700 transition">Commute Calculator</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-700 transition">How Matching Works</a></li>
              <li><a href="#stories" className="hover:text-emerald-700 transition">Success Stories</a></li>
            </ul>
          </div>

          {/* Quick Links for Employers */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Local Employers
            </h4>
            <ul className="space-y-2">
              <li><a href="#employers" className="hover:text-emerald-700 transition">Post a Vacancy</a></li>
              <li><a href="#employers" className="hover:text-emerald-700 transition">Nearby Candidate Radar</a></li>
              <li><a href="#download" className="hover:text-emerald-700 transition">Lokalhire Business App</a></li>
              <li><a href="mailto:pilot@lokalhire.in" className="hover:text-emerald-700 transition">Store Verification</a></li>
            </ul>
          </div>

          {/* Neighborhood Directory */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Active Neighborhood Hubs
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {neighborhoods.map((n) => (
                <div key={n.name} className="bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="font-medium text-slate-800">{n.name}</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                    {n.jobsCount} jobs
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar: Trust & Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Free & Direct. Zero middlemen or agent fees for job seekers.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 LOKALHIRE Inc. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
