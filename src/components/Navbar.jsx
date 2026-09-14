import { useState } from 'react'
import {
  MapPin,
  Smartphone,
  Download,
  Menu,
  X,
  Briefcase,
  Users,
  CheckCircle2,
  ChevronDown,
  Building2,
  Footprints
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

  const neighborhoodsList = ['Indiranagar', 'Koramangala', 'HSR Layout', 'Jayanagar', 'Whitefield', 'JP Nagar']

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Top micro-announcement bar */}
      <div className="bg-slate-50 border-b border-slate-200/60 py-1.5 px-4 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-semibold text-slate-900 font-display">Hyperlocal Radar</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 hidden sm:inline">2,480+ local openings within 3 km radius</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {/* Perspective Switcher Mini-pill */}
            {onPerspectiveChange && (
              <div className="hidden md:flex items-center bg-slate-200/70 p-0.5 rounded-lg text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => onPerspectiveChange('talent')}
                  className={`px-2 py-0.5 rounded-md transition ${
                    perspective === 'talent'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Seekers
                </button>
                <button
                  type="button"
                  onClick={() => onPerspectiveChange('business')}
                  className={`px-2 py-0.5 rounded-md transition ${
                    perspective === 'business'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Employers
                </button>
              </div>
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Area: <strong className="text-slate-900 font-semibold">{activeNeighborhood}</strong></span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-400 border-b border-slate-100">
                    Select Radius
                  </div>
                  {neighborhoodsList.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => {
                        onSelectNeighborhood(area)
                        setDropdownOpen(false)
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between ${
                        activeNeighborhood === area ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>{area}</span>
                      {activeNeighborhood === area && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
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
              className={`hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full border transition ${
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-xs shadow-emerald-500/20 group-hover:bg-emerald-700 transition">
            L
          </div>
          <div>
            <div className="flex items-baseline gap-0.5 font-bold tracking-tight text-slate-900 text-xl font-display">
              <span>LOKAL</span>
              <span className="text-emerald-600">HIRE</span>
            </div>
            <span className="block text-[10px] font-medium tracking-wide uppercase text-slate-500 -mt-1">
              Work Nearby • Hire Nearby
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#jobs"
            onClick={() => onPerspectiveChange && onPerspectiveChange('talent')}
            className={`transition flex items-center gap-1.5 ${
              perspective === 'talent' ? 'text-emerald-700 font-semibold' : 'hover:text-emerald-600'
            }`}
          >
            <Footprints className="w-4 h-4 text-slate-400" />
            Find Jobs (Seekers)
          </a>

          <a
            href="#employers"
            onClick={() => onPerspectiveChange && onPerspectiveChange('business')}
            className={`transition flex items-center gap-1.5 ${
              perspective === 'business' ? 'text-emerald-700 font-semibold' : 'hover:text-emerald-600'
            }`}
          >
            <Building2 className="w-4 h-4 text-slate-400" />
            For Businesses
          </a>

          <a
            href="#download"
            className="text-emerald-700 font-semibold hover:text-emerald-800 transition flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100"
          >
            <Smartphone className="w-4 h-4 text-emerald-600" />
            Download App
          </a>

          <a href="#calculator" className="hover:text-emerald-600 transition">
            Commute Calculator
          </a>

          <a href="#how-it-works" className="hover:text-emerald-600 transition">
            How It Works
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Get App (APK)</span>
          </button>

          <a
            href="#jobs"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition shadow-xs shadow-emerald-600/20"
          >
            <span>{perspective === 'talent' ? 'Find Walking Roles' : 'Post Free Job'}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          {/* Mobile perspective switch */}
          {onPerspectiveChange && (
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold mb-2">
              <button
                type="button"
                onClick={() => {
                  onPerspectiveChange('talent')
                  setMobileMenuOpen(false)
                }}
                className={`flex-1 py-1.5 rounded-lg text-center ${
                  perspective === 'talent' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
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
                className={`flex-1 py-1.5 rounded-lg text-center ${
                  perspective === 'business' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                For Employers
              </button>
            </div>
          )}

          <a
            href="#jobs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Find Nearby Jobs
          </a>
          <a
            href="#employers"
            onClick={() => {
              onPerspectiveChange && onPerspectiveChange('business')
              setMobileMenuOpen(false)
            }}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            For Local Businesses
          </a>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100"
          >
            <span className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> Download Mobile App
            </span>
            <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">Free</span>
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Commute Savings Calculator
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            How It Works
          </a>
          <a
            href="#stories"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            Neighbourhood Stories
          </a>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenDownload()
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-xl text-sm font-semibold"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              Download Lokalhire App (APK & iOS)
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
