import { useState } from 'react'
import {
  MapPin,
  Smartphone,
  Download,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  Building2,
  Footprints,
  Radar,
  ArrowRight
} from 'lucide-react'

export function Navbar({
  onOpenDownload,
  activeNeighborhood,
  onSelectNeighborhood,
  available,
  onToggleAvailable,
  perspective = 'talent',
  onPerspectiveChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const neighborhoodsList = [
    'Bengaluru (Vijayanagar)',
    'Bengaluru (Indiranagar)',
    'Bengaluru (Jayanagar)',
    'Bengaluru (Koramangala)',
    'Hassan (Kuvempu Nagar)',
    'Mysuru (Saraswathipuram)'
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all">
      {/* Top micro-announcement bar */}
      <div className="bg-slate-50/90 border-b border-slate-200/50 py-1.5 px-4 text-xs text-slate-600">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold tracking-wide uppercase text-blue-950">
              Live Hyperlocal Matching v2.4
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              Bengaluru, Hassan &amp; Mysuru Pilots Active
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* Perspective Switcher Mini-pill */}
            {onPerspectiveChange && (
              <div className="hidden sm:flex items-center bg-slate-200/70 p-0.5 rounded-lg text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => onPerspectiveChange('talent')}
                  className={`px-2.5 py-0.5 rounded-md transition ${
                    perspective === 'talent'
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Job Seekers
                </button>
                <button
                  type="button"
                  onClick={() => onPerspectiveChange('business')}
                  className={`px-2.5 py-0.5 rounded-md transition ${
                    perspective === 'business'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Local Employers
                </button>
              </div>
            )}

            {/* Neighborhood selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-[11px] font-medium text-slate-700 hover:text-blue-700 transition"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Area: <strong className="text-slate-900 font-semibold">{activeNeighborhood}</strong></span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-400 border-b border-slate-100">
                    Pilot Corridors
                  </div>
                  {neighborhoodsList.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => {
                        onSelectNeighborhood(area.split(' ')[0] || area)
                        setDropdownOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-slate-50 flex items-center justify-between ${
                        activeNeighborhood.includes(area.split(' ')[0]) ? 'text-blue-700 font-bold bg-blue-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>{area}</span>
                      {activeNeighborhood.includes(area.split(' ')[0]) && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-slate-300 hidden sm:inline">|</span>

            {/* Quick Seeker Status toggle */}
            <button
              type="button"
              onClick={onToggleAvailable}
              className={`hidden md:flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full border transition ${
                available
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
              <span>{available ? 'Available to work' : 'Hiring paused'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
        {/* Brand Logo matching provided spec */}
        <a href="#hero" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <img
            alt="LOKALHIRE"
            className="h-9 sm:h-10 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WjpVm4T6Vc0UbvQx0aoDXjwL682FA6uOSM83-X44iXCkHDjqYKqxBbjx7xsVPT_BjZLidCg_Od5FOEX0XgUsDPUZUdYZQb1IART_S9mwXErSmQPKuKlKz-jkFZfNWXL4DPkY6BhzlBL6uoNUClx_V3GViqpI7uo2scbN9Qt3rE6o9rdQPc-oXvKtvYuXYAGRIg01Ydah1MAej5Ir05fX8uqnnfLPbL6LE9fcA0YuIpIgYYLZ4nt1CMMDQ"
          />
        </a>

        {/* Desktop Nav Pills */}
        <nav className="hidden xl:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/70 border border-white/80 shadow-inner">
          <a
            href="#hero"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-white shadow-sm transition-all"
          >
            Overview
          </a>
          <a
            href="#benefits"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all"
          >
            Benefits
          </a>
          <a
            href="#problem-solution"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all"
          >
            Comparison
          </a>
          <a
            href="#match-engine"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all"
          >
            Match Engine
          </a>
          <a
            href="#how-it-works"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all"
          >
            How It Works
          </a>
          <a
            href="#openings"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all"
          >
            Live Openings
          </a>
          <a
            href="#roadmap"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all"
          >
            Roadmap
          </a>
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white/80 border border-slate-200/80 shadow-sm hover:bg-white hover:border-slate-300 transition-all gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
            <span>Get App</span>
          </button>

          <a
            href="#openings"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>Find Nearby Jobs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-2xl px-6 py-5 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
          {/* Mobile perspective switch */}
          {onPerspectiveChange && (
            <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-bold mb-3">
              <button
                type="button"
                onClick={() => {
                  onPerspectiveChange('talent')
                  setMobileMenuOpen(false)
                }}
                className={`flex-1 py-2 rounded-xl text-center ${
                  perspective === 'talent' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-500'
                }`}
              >
                For Job Seekers
              </button>
              <button
                type="button"
                onClick={() => {
                  onPerspectiveChange('business')
                  setMobileMenuOpen(false)
                }}
                className={`flex-1 py-2 rounded-xl text-center ${
                  perspective === 'business' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-500'
                }`}
              >
                For Employers
              </button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50 border border-slate-100"
            >
              Overview
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50 border border-slate-100"
            >
              Benefits
            </a>
            <a
              href="#problem-solution"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50 border border-slate-100"
            >
              Comparison
            </a>
            <a
              href="#match-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50 border border-slate-100"
            >
              Match Engine
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50 border border-slate-100"
            >
              How It Works
            </a>
            <a
              href="#openings"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-800 hover:bg-slate-50 border border-slate-100"
            >
              Live Openings
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenDownload()
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-2xl text-xs font-semibold shadow-md"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              Download LOKALHIRE Mobile App
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
