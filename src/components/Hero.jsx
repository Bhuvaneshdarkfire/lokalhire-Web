import { useState } from 'react'
import { ThreeRadarScene } from './ThreeRadarScene'
import {
  MapPin,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  PlayCircle,
  Building2,
  Footprints,
  Sparkles
} from 'lucide-react'

export function Hero({
  onOpenDownload,
  onSearchSubmit,
  activeNeighborhood,
  activePerspective,
  onPerspectiveChange
}) {
  const [perspective, setPerspective] = useState(activePerspective || 'talent')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRadius, setSelectedRadius] = useState(2)

  const handlePerspectiveToggle = (mode) => {
    setPerspective(mode)
    if (onPerspectiveChange) {
      onPerspectiveChange(mode)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery, selectedRadius)
    }
    document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-32" id="hero">
      {/* Top Pilot Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-blue-200/60 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-blue-900">
            Live Hyperlocal Matching v2.4 • Bengaluru, Hassan &amp; Mysuru
          </span>
        </div>
      </div>

      {/* Main Catchphrase Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
          Find Local Opportunities.<br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            Hire Verified Local Talent.
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
          LOKALHIRE connects job seekers with nearby neighborhood businesses through smart real-time geospatial matching, transparent wages, and walking-distance convenience.
        </p>

        {/* Dual Perspective Toggle Pills */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 bg-slate-100/90 rounded-2xl border border-white/80 shadow-inner">
            <button
              type="button"
              onClick={() => handlePerspectiveToggle('talent')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                perspective === 'talent'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Footprints className="w-4 h-4 text-emerald-600" />
              <span>For Job Seekers</span>
              {perspective === 'talent' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              )}
            </button>
            <button
              type="button"
              onClick={() => handlePerspectiveToggle('business')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                perspective === 'business'
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>For Local Businesses</span>
              {perspective === 'business' && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              )}
            </button>
          </div>
        </div>

        {/* CTA Action Cluster */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#openings"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            <span>Explore LOKALHIRE Pilot</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/85 text-slate-800 font-semibold text-sm border border-white/90 shadow-md backdrop-blur-xl hover:bg-white hover:border-slate-200 transition-all"
          >
            <PlayCircle className="w-5 h-5 text-emerald-600" />
            <span>How Matching Works</span>
          </a>
        </div>
      </div>

      {/* Quick Interactive Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <form
          onSubmit={handleSearch}
          className="glass-panel rounded-full p-2 flex items-center gap-2 shadow-lg"
        >
          <div className="flex items-center gap-2 pl-4 flex-1">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                perspective === 'talent'
                  ? `Search walking roles in ${activeNeighborhood} (e.g. Billing, Cashier, Barista)...`
                  : `Search available local talent (e.g. Retail Associate, Store Helper)...`
              }
              className="w-full text-xs sm:text-sm bg-transparent border-0 focus:ring-0 text-slate-900 placeholder:text-slate-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-blue-600/25 shrink-0 flex items-center gap-1.5"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* 3D RADAR STAGE + FLOATING FROSTED GLASS CARDS */}
      <div className="relative w-full rounded-3xl p-3 bg-white/40 border border-white/70 shadow-2xl backdrop-blur-md">
        {/* 3D WebGL Canvas Component */}
        <div className="relative w-full h-[540px] rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50/70 via-white/50 to-emerald-50/50 border border-white/80 shadow-inner">
          <ThreeRadarScene />
        </div>

        {/* Floating Glass Card: Radar Range Controller (Top Left) */}
        <div className="absolute top-8 left-8 hidden md:block max-w-[280px] p-5 rounded-2xl glass-panel shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-[20px]">radar</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Geospatial Turf</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">500m - 2km</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">Radius calibrated to true walking proximity for instant neighborhood walk-ins.</p>
          <div className="w-full bg-slate-200/70 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full w-[45%]"></div>
          </div>
        </div>

        {/* Floating Glass Card: Live Candidate Match (Top Right) */}
        <div className="absolute top-8 right-8 hidden md:block max-w-[300px] p-5 rounded-2xl glass-panel shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/30">
              94%
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-slate-900">Harish Kumar</h4>
                <span className="material-symbols-outlined text-blue-600 text-[16px]">verified</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Billing Specialist • 0.8 km away</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold">
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Immediate Walk-in</span>
            <span className="text-blue-700 font-bold">₹16,500/mo</span>
          </div>
        </div>

        {/* Floating Glass Card: Verified Local Storefront (Bottom Left) */}
        <div className="absolute bottom-8 left-8 hidden lg:block max-w-[320px] p-5 rounded-2xl glass-panel shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">storefront</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="text-xs font-bold text-slate-900">SLV Supermarket Control Hub</h4>
                <span className="material-symbols-outlined text-emerald-600 text-[14px]">check_circle</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Physical Storefront Geo-Stamped • Jayanagar 4th Block</p>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold">3 Vacancies Live</span>
                <span className="text-[10px] text-slate-400">Avg response: 18 mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Glass Card: Quick Action Pill (Bottom Right) */}
        <div className="absolute bottom-8 right-8 hidden sm:flex items-center gap-3 px-5 py-3 rounded-full glass-panel shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-bold text-slate-800">42 Local Jobs Near You Now</span>
          <a className="text-xs font-bold text-blue-600 hover:text-blue-800 underline underline-offset-2" href="#openings">
            View
          </a>
        </div>
      </div>
    </section>
  )
}
