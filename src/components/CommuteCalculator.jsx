import { useState } from 'react'
import {
  Clock,
  Coins,
  Smile,
  ArrowRight,
  TrendingDown,
  Footprints,
  Smartphone
} from 'lucide-react'

export function CommuteCalculator({ onOpenDownload }) {
  const [commuteMinutes, setCommuteMinutes] = useState(45)
  const [dailyExpense, setDailyExpense] = useState(120)

  // Working days per year ~ 260 days
  const workDays = 260

  // Total daily roundtrip commute in hours: (commuteMinutes * 2) / 60
  const totalDailyCommuteHours = (commuteMinutes * 2) / 60
  // Walking commute locally ~ 10 mins each way = 20 mins = 0.33 hours
  const localCommuteHours = 0.33
  const hoursSavedPerYear = Math.round((totalDailyCommuteHours - localCommuteHours) * workDays)

  // Local walk travel expense = 0. Saved = dailyExpense * workDays
  const moneySavedPerYear = Math.round(dailyExpense * workDays)

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <Footprints className="w-3.5 h-3.5 text-emerald-600" />
                <span>Hyperlocal Advantage</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
                How much life are you losing to traffic?
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Estimate the precious hours and money you can reclaim by switching from cross-town travel to a job within walking distance.
              </p>

              <div className="space-y-6 bg-white p-5 rounded-2xl border border-slate-200">
                {/* Commute Time Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      One-way commute time:
                    </span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-lg">
                      {commuteMinutes} minutes
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="90"
                    step="5"
                    value={commuteMinutes}
                    onChange={(e) => setCommuteMinutes(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>15 min (Nearby)</span>
                    <span>45 min (Average city)</span>
                    <span>90 min (Cross-town)</span>
                  </div>
                </div>

                {/* Daily Expense Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 text-emerald-600" />
                      Daily transit / petrol spend:
                    </span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-lg">
                      ₹{dailyExpense} / day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="300"
                    step="10"
                    value={dailyExpense}
                    onChange={(e) => setDailyExpense(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>₹30 (Bus pass)</span>
                    <span>₹120 (Bike / Metro)</span>
                    <span>₹300 (Cab / Auto)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Savings Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md text-center space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                  Your Annual Hyperlocal Gain
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="text-3xl sm:text-4xl font-bold text-emerald-600 font-display">
                      {hoursSavedPerYear.toLocaleString()}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Hours Reclaimed</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Equivalent to ~{Math.round(hoursSavedPerYear / 24)} full days of free time
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
                      ₹{moneySavedPerYear.toLocaleString()}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Cash Saved / Year</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Pure savings on petrol, buses, and metro tickets
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-2xl p-4 text-left flex items-start gap-3">
                  <Smile className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong>Less transit fatigue = More energy.</strong> Walk home for fresh lunches, avoid rush-hour delays, and spend meaningful time with friends and family.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-2xl transition flex items-center justify-center gap-2 shadow-xs"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Download App to Find Jobs Within 2 km</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
