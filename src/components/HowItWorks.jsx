import { useState } from 'react'
import {
  MapPin,
  CheckCircle2,
  Users,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Footprints,
  Building2,
  CalendarCheck,
  Smartphone
} from 'lucide-react'

export function HowItWorks() {
  const [tab, setTab] = useState('talent') // 'talent' or 'business'

  const talentSteps = [
    {
      number: '01',
      title: 'Set Your Walking Radius',
      description: 'Define your desired commute radius from 500m to 3km. Only view verified cafes, supermarkets, clinics, and retail stores within walking distance.',
      badge: 'Zero Traffic Delays',
      icon: Footprints
    },
    {
      number: '02',
      title: '1-Tap Fast Apply (No CV)',
      description: 'Review transparent monthly pay, shift timings, and perks upfront. Apply in 5 seconds with your verified phone profile—no confusing PDF uploads.',
      badge: 'Transparent Pay',
      icon: Zap
    },
    {
      number: '03',
      title: 'Chat on WhatsApp & Start',
      description: 'Connect directly with neighborhood shop owners. Confirm your trial shift or walk over for a quick meet-and-greet in the same afternoon.',
      badge: 'Same-Day Trials',
      icon: MessageSquare
    }
  ]

  const businessSteps = [
    {
      number: '01',
      title: 'Post Opening in 60 Seconds',
      description: 'Share your role, shift hours, and monthly pay with zero recruiter jargon. Instantly beam the vacancy to active talent within 2 km of your storefront.',
      badge: 'Free Storefront Listing',
      icon: Building2
    },
    {
      number: '02',
      title: 'Review Verified Local Profiles',
      description: 'See pre-screened neighborhood candidates ranked by proximity, previous retail experience, and same-day availability.',
      badge: 'Strict 2 km Filter',
      icon: Users
    },
    {
      number: '03',
      title: 'Hire Punctual Neighbors',
      description: 'Invite candidates for walk-in trials directly via WhatsApp. Hire employees who live down the street and never quit due to bus delays.',
      badge: '68% Lower Turnover',
      icon: CalendarCheck
    }
  ]

  const currentSteps = tab === 'talent' ? talentSteps : businessSteps

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Hyperlocal Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            How Lokalhire works
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Hiring locally shouldn&apos;t require resume bureaucracy or algorithmic black holes. 
            We make proximity, transparency, and human timing front and center.
          </p>

          {/* Interactive Dual Switcher */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => setTab('talent')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  tab === 'talent'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Footprints className={`w-4 h-4 ${tab === 'talent' ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>For Candidates & Seekers</span>
              </button>

              <button
                type="button"
                onClick={() => setTab('business')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  tab === 'business'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className={`w-4 h-4 ${tab === 'business' ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>For Store Owners & Employers</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative animate-in fade-in duration-300">
          {currentSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="bg-slate-50/70 rounded-3xl border border-slate-200 p-8 shadow-xs hover:shadow-md hover:bg-white transition-all relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-700 font-bold text-lg font-display flex items-center justify-center shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-emerald-700 transition">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <IconComponent className="w-4 h-4 text-emerald-600" />
                    Verified Workflow
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 font-display">
                {tab === 'talent' ? 'Ready to find work 10 minutes from home?' : 'Need to fill an urgent store shift today?'}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {tab === 'talent'
                  ? 'Join 50,000+ local job seekers on the free Lokalhire Android & iOS app.'
                  : 'Post in 60 seconds with no upfront fees. Review local profiles immediately.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#jobs"
              className="w-full sm:w-auto text-center bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition"
            >
              {tab === 'talent' ? 'Search Open Roles' : 'Post Free Vacancy'}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
