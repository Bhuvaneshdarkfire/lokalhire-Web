import { useState, useEffect } from 'react'
import {
  MapPin,
  Search,
  SlidersHorizontal,
  Smartphone,
  Download,
  ShieldCheck,
  Star,
  CheckCircle2,
  Navigation,
  Clock,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Users,
  Briefcase,
  Building2,
  HeartHandshake,
  Send,
  Zap,
  Coffee,
  ShoppingBag,
  Footprints,
  CalendarCheck,
  ChevronRight
} from 'lucide-react'

export function Hero({ onOpenDownload, onSearchSubmit, activeNeighborhood, activePerspective, onPerspectiveChange }) {
  // Perspective: 'talent' (Job Seekers) vs 'business' (Employers/Stores)
  const [perspective, setPerspective] = useState(activePerspective || 'talent')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRadius, setSelectedRadius] = useState(2)
  const [selectedPin, setSelectedPin] = useState(1) // Active pin in phone preview
  const [phoneMode, setPhoneMode] = useState('radar') // 'radar' vs 'shortlist'

  // Sync internal perspective with parent if prop updates
  useEffect(() => {
    if (activePerspective && activePerspective !== perspective) {
      setPerspective(activePerspective)
    }
  }, [activePerspective])

  const handlePerspectiveToggle = (mode) => {
    setPerspective(mode)
    if (onPerspectiveChange) {
      onPerspectiveChange(mode)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    onSearchSubmit(searchQuery, selectedRadius)
    document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Simulated live neighborhood ticker items
  const tickerItems = [
    { text: 'Royal Bakery hired Barista', dist: '700m away', time: '4m ago', type: 'hire' },
    { text: 'Apollo Pharmacy posted Billing Role', dist: 'Indiranagar', time: '8m ago', type: 'job' },
    { text: 'Pooja G. accepted trial shift', dist: 'FreshMart (800m)', time: '14m ago', type: 'match' },
    { text: 'Organic Greens added 2 Cashier spots', dist: '12th Main', time: '19m ago', type: 'job' },
    { text: 'Kiran K. marked Available for Work', dist: 'Defence Colony', time: '22m ago', type: 'talent' }
  ]

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-6 sm:pt-10 pb-16 lg:pb-24">
      {/* Crisp subtle micro-dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_10%,#000_65%,transparent_100%)]" />

      {/* Live Hiring Pulse Ticker */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl py-2 px-3.5 sm:px-5 flex items-center justify-between gap-4 overflow-hidden shadow-xs">
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-900 font-display">
              Live Neighborhood Radar
            </span>
            <span className="text-slate-300">|</span>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar text-xs text-slate-600 whitespace-nowrap">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 shrink-0">
                <span className="text-slate-900 font-medium">{item.text}</span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                  {item.dist}
                </span>
                <span className="text-[10px] text-slate-400">• {item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography-Focused Value Proposition for Both Talent & Businesses */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Dual Perspective Switcher Pills */}
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-xs">
              <button
                type="button"
                onClick={() => handlePerspectiveToggle('talent')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  perspective === 'talent'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Footprints className={`w-4 h-4 ${perspective === 'talent' ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>For Job Seekers & Talent</span>
                {perspective === 'talent' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                )}
              </button>

              <button
                type="button"
                onClick={() => handlePerspectiveToggle('business')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  perspective === 'business'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className={`w-4 h-4 ${perspective === 'business' ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>For Local Businesses</span>
                {perspective === 'business' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                )}
              </button>
            </div>

            {/* DYNAMIC VALUE PROPOSITION 1: FOR TALENT */}
            {perspective === 'talent' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hyperlocal Commute Revolution • Within 2 km</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.08]">
                  Work where you live. <br />
                  <span className="text-emerald-600 underline decoration-emerald-200 decoration-4 underline-offset-4">
                    Reclaim 2+ hours
                  </span>{' '}
                  from traffic daily.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Discover verified store, clinic, cafe, and retail roles within 15 minutes walk of your home. 
                  Get transparent monthly salaries, 1-tap WhatsApp interviews, and zero resume bureaucracy.
                </p>

                {/* 3 Core Value Pillars for Talent */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Footprints className="w-4 h-4 text-emerald-600" />
                      <span>10–15 Min Walk</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Zero buses, zero metro stress, home for lunch.</div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-emerald-600" />
                      <span>1-Tap Fast Apply</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">No resume or PDF needed. Direct chat with owner.</div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verified Pay & Store</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Clear fixed salaries with weekly or monthly payouts.</div>
                  </div>
                </div>
              </div>
            )}

            {/* DYNAMIC VALUE PROPOSITION 2: FOR BUSINESSES */}
            {perspective === 'business' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Neighborhood Storefront Recruitment • 2 km Radius</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.08]">
                  Staff your store before lunch. <br />
                  <span className="text-emerald-600 underline decoration-emerald-200 decoration-4 underline-offset-4">
                    Hire reliable neighbors
                  </span>{' '}
                  who arrive on time.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Stop losing staff to cross-town travel fatigue and rain delays. Connect with pre-screened talent living within 2 km of your storefront. 
                  68% lower attrition, same-day walk-in trials, and zero agency fees.
                </p>

                {/* 3 Core Value Pillars for Businesses */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>&lt; 48h Time-to-Hire</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Review verified applicants and schedule trial shifts today.</div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>Strict 2 km Radius</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Staff live down the street. Zero traffic commute excuses.</div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>68% Higher Retention</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Employees stay longer because their commute is painless.</div>
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Search & Filter Toolbar */}
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-3xl p-3 border border-slate-200 shadow-xl shadow-slate-100 max-w-xl space-y-3"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      perspective === 'talent'
                        ? `Search roles in ${activeNeighborhood} (e.g. Sales, Barista, Billing)...`
                        : `Search available talent profiles (e.g. Cashier, Store Manager)...`
                    }
                    className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/80 rounded-2xl border border-slate-200/80 focus:bg-white focus:border-emerald-500 focus:outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>{perspective === 'talent' ? 'Find Nearby Jobs' : 'Find Local Staff'}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </button>
              </div>

              {/* Radius Filter & Live Area Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 px-1 text-xs text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold text-slate-700">Radius:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 5].map((km) => (
                      <button
                        key={km}
                        type="button"
                        onClick={() => setSelectedRadius(km)}
                        className={`px-2 py-0.5 rounded-lg text-xs font-semibold transition ${
                          selectedRadius === km
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        ≤ {km} km
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <span>Hub:</span>
                  <strong className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                    {activeNeighborhood}
                  </strong>
                </div>
              </div>
            </form>

            {/* Quick Keyword Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Popular right now:</span>
              {['Store Sales', 'Cafe Barista', 'Billing Executive', 'Pharmacy Assistant', 'Delivery Rider'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSearchQuery(tag)
                    onSearchSubmit(tag, selectedRadius)
                    document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-xl text-xs transition"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Value Proposition Ribbon & App CTA */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl transition flex items-center gap-2 shadow-xs shadow-emerald-600/20"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download Mobile App (APK & iOS)</span>
                </button>

                <a
                  href="#jobs"
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-xl hover:bg-slate-100 transition flex items-center gap-1"
                >
                  <span>Browse Web Directory</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-semibold text-slate-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  4.8 / 5 Rating
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Free for Seekers
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive White-Themed Device Preview */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Ambient subtle light glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

            {/* Smartphone Canvas */}
            <div className="relative w-72 sm:w-80 bg-white rounded-[44px] p-3 shadow-2xl shadow-slate-200 border-4 border-slate-200 transition-all">
              
              {/* Dynamic Island / Top Speaker */}
              <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800 mr-2"></div>
                <div className="w-2.5 h-1 rounded-full bg-slate-700"></div>
              </div>

              {/* Inner Smartphone Screen */}
              <div className="bg-slate-50 rounded-[34px] overflow-hidden border border-slate-200 flex flex-col h-[500px]">
                
                {/* App Screen Top Nav */}
                <div className="bg-white px-4 pt-3 pb-2.5 border-b border-slate-200">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="font-bold text-slate-900 font-display">Lokalhire Radar</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      GPS Active (2 km)
                    </span>
                  </div>
                  
                  {/* Phone Mode Toggle */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="text-xs font-bold text-slate-900">
                      {activeNeighborhood}
                      <span className="text-[10px] font-normal text-slate-500 ml-1">
                        {perspective === 'talent' ? '• 28 Openings' : '• 14 Local Candidates'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
                      <button
                        type="button"
                        onClick={() => setPhoneMode('radar')}
                        className={`px-2 py-0.5 rounded-md transition ${phoneMode === 'radar' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'}`}
                      >
                        Radar
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhoneMode('list')}
                        className={`px-2 py-0.5 rounded-md transition ${phoneMode === 'list' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'}`}
                      >
                        Feed
                      </button>
                    </div>
                  </div>
                </div>

                {/* Radar Interactive Visual Area */}
                {phoneMode === 'radar' ? (
                  <div className="relative h-48 bg-slate-100/80 overflow-hidden border-b border-slate-200 flex items-center justify-center">
                    
                    {/* Concentric Radar Rings */}
                    <div className="w-40 h-40 rounded-full border border-emerald-300/40 bg-emerald-50/20 absolute"></div>
                    <div className="w-28 h-28 rounded-full border border-emerald-400/50 bg-emerald-100/30 absolute"></div>
                    <div className="w-16 h-16 rounded-full border border-emerald-500/60 bg-emerald-200/40 absolute flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center shadow-md">
                        📍
                      </div>
                    </div>

                    {/* Interactive GPS Pins: TALENT VIEW (Shows Stores) */}
                    {perspective === 'talent' && (
                      <>
                        <button
                          type="button"
                          onClick={() => setSelectedPin(1)}
                          className={`absolute top-4 left-5 px-2 py-1 rounded-xl text-[9px] font-bold shadow-sm transition border flex items-center gap-1 ${
                            selectedPin === 1
                              ? 'bg-emerald-600 text-white border-emerald-700 scale-105 shadow-md'
                              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <ShoppingBag className="w-2.5 h-2.5" />
                          <span>FreshMart • 800m</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedPin(2)}
                          className={`absolute bottom-5 right-4 px-2 py-1 rounded-xl text-[9px] font-bold shadow-sm transition border flex items-center gap-1 ${
                            selectedPin === 2
                              ? 'bg-emerald-600 text-white border-emerald-700 scale-105 shadow-md'
                              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <Coffee className="w-2.5 h-2.5" />
                          <span>Artisan Brew • 1.2km</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedPin(3)}
                          className={`absolute top-6 right-5 px-2 py-1 rounded-xl text-[9px] font-bold shadow-sm transition border flex items-center gap-1 ${
                            selectedPin === 3
                              ? 'bg-emerald-600 text-white border-emerald-700 scale-105 shadow-md'
                              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <ShieldCheck className="w-2.5 h-2.5" />
                          <span>CareWell • 600m</span>
                        </button>
                      </>
                    )}

                    {/* Interactive GPS Pins: BUSINESS VIEW (Shows Nearby Candidates) */}
                    {perspective === 'business' && (
                      <>
                        <button
                          type="button"
                          onClick={() => setSelectedPin(1)}
                          className={`absolute top-4 left-5 px-2 py-1 rounded-xl text-[9px] font-bold shadow-sm transition border flex items-center gap-1 ${
                            selectedPin === 1
                              ? 'bg-slate-900 text-white border-slate-950 scale-105 shadow-md'
                              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <Users className="w-2.5 h-2.5 text-emerald-400" />
                          <span>Pooja G. • 800m</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedPin(2)}
                          className={`absolute bottom-5 right-4 px-2 py-1 rounded-xl text-[9px] font-bold shadow-sm transition border flex items-center gap-1 ${
                            selectedPin === 2
                              ? 'bg-slate-900 text-white border-slate-950 scale-105 shadow-md'
                              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <Users className="w-2.5 h-2.5 text-blue-400" />
                          <span>Manjunath • 1.3km</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedPin(3)}
                          className={`absolute top-6 right-5 px-2 py-1 rounded-xl text-[9px] font-bold shadow-sm transition border flex items-center gap-1 ${
                            selectedPin === 3
                              ? 'bg-slate-900 text-white border-slate-950 scale-105 shadow-md'
                              : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <Users className="w-2.5 h-2.5 text-emerald-400" />
                          <span>Asha N. • 1.7km</span>
                        </button>
                      </>
                    )}

                    {/* Bottom distance caption */}
                    <div className="absolute bottom-1.5 left-3 bg-white/95 px-2 py-0.5 rounded-md text-[9px] font-bold text-slate-700 border border-slate-200">
                      Active Radius: 2.0 km
                    </div>
                  </div>
                ) : (
                  <div className="p-2.5 bg-slate-100/50 border-b border-slate-200 text-[10px] text-slate-500 text-center font-medium">
                    Swipe or tap to preview local profiles
                  </div>
                )}

                {/* Selected Details Card on Phone Screen */}
                <div className="p-3 space-y-2.5 flex-1 overflow-y-auto">
                  {perspective === 'talent' ? (
                    /* TALENT CARD PREVIEW */
                    <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                          {selectedPin === 1 ? '96% Match' : selectedPin === 2 ? '94% Match' : '97% Match'}
                        </span>
                        <span className="text-slate-500 font-medium">
                          {selectedPin === 1 ? '800m • 10 min walk' : selectedPin === 2 ? '1.2 km • 15 min walk' : '600m • 7 min walk'}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-900 font-display">
                          {selectedPin === 1 ? 'Store Sales Associate' : selectedPin === 2 ? 'Specialty Coffee Barista' : 'Pharmacy Billing Executive'}
                        </h4>
                        <div className="text-[11px] text-slate-600">
                          {selectedPin === 1 ? 'FreshMart Supermarket' : selectedPin === 2 ? 'Artisan Brew Roastery' : 'CareWell Chemist & Wellness'}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
                        <div>
                          <div className="text-[9px] uppercase font-semibold text-slate-400">Monthly Pay</div>
                          <div className="font-bold text-slate-900">
                            {selectedPin === 1 ? '₹18,500' : selectedPin === 2 ? '₹22,000' : '₹19,000'}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] px-3 py-1.5 rounded-xl transition shadow-xs flex items-center gap-1"
                        >
                          <span>1-Tap Apply</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* BUSINESS CARD PREVIEW */
                    <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                          {selectedPin === 1 ? '96% Fit' : selectedPin === 2 ? '93% Fit' : '90% Fit'}
                        </span>
                        <span className="text-emerald-700 font-bold">
                          {selectedPin === 1 ? 'Available Today' : selectedPin === 2 ? 'Notice 3 days' : 'Available Today'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          {selectedPin === 1 ? 'PG' : selectedPin === 2 ? 'MR' : 'AN'}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">
                            {selectedPin === 1 ? 'Pooja Gowda' : selectedPin === 2 ? 'Manjunath R.' : 'Asha N.'}
                          </h4>
                          <div className="text-[10px] text-slate-500">
                            {selectedPin === 1 ? 'Retail Cashier (1.8 yrs exp)' : selectedPin === 2 ? 'Store Sales (2.5 yrs exp)' : 'Customer Support (1.2 yrs)'}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
                        <span className="text-[10px] text-slate-500">
                          Lives {selectedPin === 1 ? '800m' : selectedPin === 2 ? '1.3 km' : '1.7 km'} away
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            document.getElementById('employers')?.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] px-3 py-1.5 rounded-xl transition shadow-xs flex items-center gap-1"
                        >
                          <Send className="w-3 h-3 text-emerald-400" />
                          <span>Invite to Store</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Secondary notification preview */}
                  <div className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/60 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div className="text-[10px] text-slate-700">
                      <strong>Direct Connect:</strong> No middleman fees. Direct chat via WhatsApp or store walk-in.
                    </div>
                  </div>
                </div>

                {/* Bottom App Navigation Bar */}
                <div className="bg-white border-t border-slate-200 py-2 px-6 flex justify-between items-center text-[9px] text-slate-400">
                  <div className="text-emerald-600 font-bold flex flex-col items-center">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Radar</span>
                  </div>
                  <div className="flex flex-col items-center hover:text-slate-600">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </div>
                  <div className="flex flex-col items-center hover:text-slate-600">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Applied</span>
                  </div>
                </div>

              </div>

              {/* Floating Real-time Match Notification Badge on Desktop */}
              <div className="absolute -left-10 bottom-24 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 w-56 animate-in slide-in-from-left-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-display">Nearby Match!</div>
                  <div className="text-[10px] text-slate-500 leading-tight">
                    {perspective === 'talent'
                      ? 'Store 600m away matched your morning shift'
                      : 'Candidate 800m away marked immediate availability'}
                  </div>
                </div>
              </div>

              {/* Floating Verified Trust Pill */}
              <div className="absolute -right-6 top-16 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Hyperlocal</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
