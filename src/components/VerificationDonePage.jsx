import { useState, useEffect } from 'react'
import { CheckCircle2, Smartphone, ArrowRight, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react'

export function VerificationDonePage() {
  const [copied, setCopied] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(5)

  useEffect(() => {
    // Attempt deep link redirect if on mobile device
    const timer = setTimeout(() => {
      // Intent/custom scheme fallback for mobile app
      window.location.href = 'lokalhire://login'
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#f6f8fc] flex flex-col justify-between text-[#0f172a] relative selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans antialiased">
      {/* Ambient ethereal background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[30%] -right-32 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] -left-32 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[180px]" />
      </div>

      {/* Minimal Top Brand Bar */}
      <header className="w-full py-6 px-6 sm:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <img
            alt="LOKALHIRE"
            className="h-8 sm:h-9 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WjpVm4T6Vc0UbvQx0aoDXjwL682FA6uOSM83-X44iXCkHDjqYKqxBbjx7xsVPT_BjZLidCg_Od5FOEX0XgUsDPUZUdYZQb1IART_S9mwXErSmQPKuKlKz-jkFZfNWXL4DPkY6BhzlBL6uoNUClx_V3GViqpI7uo2scbN9Qt3rE6o9rdQPc-oXvKtvYuXYAGRIg01Ydah1MAej5Ir05fX8uqnnfLPbL6LE9fcA0YuIpIgYYLZ4nt1CMMDQ"
          />
        </a>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-emerald-200/80 shadow-xs text-xs font-semibold text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Mobile Verification Auth</span>
        </div>
      </header>

      {/* Main Verification Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-auto">
        <div className="w-full max-w-md glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/90 text-center relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          
          {/* Subtle top glow ring */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-36 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

          {/* Success Check Badge */}
          <div className="relative mx-auto mb-6 flex items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10 text-white stroke-[2.5]" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Mandatory requested text: "Verification is done. Go and log in with your app." */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Verification is done.
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-medium mb-6 leading-relaxed">
            Go and log in with your app.
          </p>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-xs text-xs text-slate-600 mb-8 space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span>Status</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Verified &amp; Active
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-500">
              <span>Next step</span>
              <span className="font-medium text-slate-800">Open LOKALHIRE on phone</span>
            </div>
          </div>

          {/* Action Button: Return to / Open Mobile App */}
          <div className="space-y-3">
            <a
              href="lokalhire://login"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Smartphone className="w-4 h-4" />
              <span>Open LOKALHIRE App</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200/70 transition"
            >
              Back to Home
            </a>
          </div>

          {/* Micro helper note */}
          <p className="text-[11px] text-slate-400 mt-6">
            You can safely close this browser window once you switch back to your application.
          </p>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-6 text-center text-xs text-slate-400 border-t border-slate-200/50 bg-white/40 backdrop-blur-md">
        <span>© 2026 LOKALHIRE • Hyperlocal Talent &amp; Storefront Platform</span>
      </footer>
    </div>
  )
}
