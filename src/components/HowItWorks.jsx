import { useState } from 'react'
import {
  MapPin,
  CheckCircle2,
  Zap,
  Footprints,
  Building2,
  CalendarCheck,
  Smartphone,
  Phone,
  ArrowRight
} from 'lucide-react'

export function HowItWorks() {
  const [tab, setTab] = useState('talent') // 'talent' or 'business'

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24" id="how-it-works">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
          Frictionless Lifecycle
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          How LOKALHIRE Works
        </h2>
        <p className="text-slate-600 text-base mt-3">
          Tailored workflows built for candidates on mobile and shop owners on store counters.
        </p>

        {/* Dual Tab Switcher */}
        <div className="pt-6 flex justify-center">
          <div className="inline-flex p-1 bg-slate-100/90 rounded-2xl border border-white/80 shadow-inner">
            <button
              type="button"
              onClick={() => setTab('talent')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                tab === 'talent'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Footprints className="w-4 h-4 text-emerald-600" />
              <span>For Job Seekers</span>
            </button>
            <button
              type="button"
              onClick={() => setTab('business')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                tab === 'business'
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>For Shop &amp; Business Owners</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Job Seeker Workflow */}
        <div
          className={`glass-panel rounded-3xl p-8 sm:p-10 shadow-lg transition-all ${
            tab === 'talent' ? 'ring-2 ring-blue-500/20 shadow-xl' : 'opacity-90'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">For Local Job Seekers</h3>
              <p className="text-xs text-slate-500">Find work next door with 1-tap ease</p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">60-Second Mobile Onboarding</h4>
                <p className="text-xs text-slate-600 mt-0.5">Phone OTP sign-in, GPS location capture, and 3-tap skill badge selection.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Slide Radius &amp; Browse Map</h4>
                <p className="text-xs text-slate-600 mt-0.5">Adjust radar distance from 500m to 5km to view real-time neighborhood vacancies.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">1-Tap Transparent Apply</h4>
                <p className="text-xs text-slate-600 mt-0.5">Submit credentials with clear knowledge of wages, shifts, and weekly offs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                4
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Live Status Tracking</h4>
                <p className="text-xs text-slate-600 mt-0.5">Instant notification the minute the employer views your profile and shortlists you.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                5
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Walk-In &amp; Start Working</h4>
                <p className="text-xs text-slate-600 mt-0.5">Attend a scheduled walk-in interview right around the corner and start within days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Owner Workflow */}
        <div
          className={`glass-panel rounded-3xl p-8 sm:p-10 shadow-lg transition-all ${
            tab === 'business' ? 'ring-2 ring-emerald-500/20 shadow-xl' : 'opacity-90'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
              <span className="material-symbols-outlined text-[20px]">storefront</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">For Shop &amp; Business Owners</h3>
              <p className="text-xs text-slate-500">Staff your frontline counter team fast</p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Storefront Geo-Verification</h4>
                <p className="text-xs text-slate-600 mt-0.5">Capture your business signboard and GPS coordinates to claim verified shop status.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Post Vacancy in Under 2 Minutes</h4>
                <p className="text-xs text-slate-600 mt-0.5">Choose standard retail roles (Billing, Sales, Dispatch) and set fixed take-home pay.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Receive Geo-Ranked Candidates</h4>
                <p className="text-xs text-slate-600 mt-0.5">Applications populate ordered strictly by walking radius and match compatibility.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                4
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">1-Tap WhatsApp or Call Invite</h4>
                <p className="text-xs text-slate-600 mt-0.5">Invite candidates for afternoon walk-ins with automated regional SMS confirmations.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-sm">
                5
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Close Post &amp; Boost Shop Trust</h4>
                <p className="text-xs text-slate-600 mt-0.5">Mark vacancy filled to halt incoming calls and build local employer prestige.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
