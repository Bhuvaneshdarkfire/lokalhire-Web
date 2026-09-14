import { useState } from 'react'
import {
  Smartphone,
  Download,
  QrCode,
  CheckCircle2,
  Share2,
  Send,
  ShieldCheck,
  Zap,
  MapPin,
  Bell,
  Star,
  Copy,
  Check
} from 'lucide-react'

export function DownloadSection({ onNotify }) {
  const [phoneInput, setPhoneInput] = useState('')
  const [smsSending, setSmsSending] = useState(false)
  const [smsSent, setSmsSent] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  const handleSendLink = (e) => {
    e.preventDefault()
    if (!phoneInput || phoneInput.length < 10) {
      onNotify('Please enter a valid 10-digit mobile number')
      return
    }

    setSmsSending(true)
    setTimeout(() => {
      setSmsSending(false)
      setSmsSent(true)
      onNotify(`📲 App download link sent to ${phoneInput}!`)
      setTimeout(() => setSmsSent(false), 5000)
      setPhoneInput('')
    }, 600)
  }

  const handleDownloadApk = () => {
    // Create an immediate downloadable mock APK file for users
    const element = document.createElement('a')
    const file = new Blob([
      'LOKALHIRE Mobile Application Package (Simulated v2.4.1 Production Build for Android).\n\nApp: LOKALHIRE Hyperlocal Job Platform\nVersion: 2.4.1\nSize: 22.4 MB\nPackage: in.lokalhire.app\nVerified Signature: SHA-256 Validated\n\nThank you for installing Lokalhire. Open on Android to begin!'
    ], { type: 'application/vnd.android.package-archive' })
    element.href = URL.createObjectURL(file)
    element.download = 'lokalhire-v2.4.1.apk'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    onNotify('⬇️ Downloading Lokalhire APK (v2.4.1)... Check your downloads!')
  }

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(window.location.origin + '#download')
    setCopiedLink(true)
    onNotify('🔗 App download link copied to clipboard!')
    setTimeout(() => setCopiedLink(false), 2000)
  }

  return (
    <section id="download" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mobile App Available Now</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Download the <span className="text-emerald-600">Lokalhire App</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Get instant GPS notifications when nearby businesses post roles. 
            Apply in 5 seconds and chat directly with store owners on your phone.
          </p>
        </div>

        {/* Main White Download Hub Container */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Direct Download Badges & Options */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-2">
                  Choose your preferred download method
                </h3>
                <p className="text-sm text-slate-600">
                  Available for Android & iOS devices. Free download, zero ads, no hidden fees for job seekers.
                </p>
              </div>

              {/* Download Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Google Play Store */}
                <button
                  type="button"
                  onClick={() => onNotify('Redirecting to Google Play Store (Lokalhire App)...')}
                  className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 p-4 rounded-2xl shadow-xs transition flex items-center gap-3.5 text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">GET IT ON</div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">Google Play</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>4.8 • 50K+ Downloads</span>
                    </div>
                  </div>
                </button>

                {/* Apple App Store */}
                <button
                  type="button"
                  onClick={() => onNotify('Redirecting to Apple App Store (Lokalhire for iOS)...')}
                  className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 p-4 rounded-2xl shadow-xs transition flex items-center gap-3.5 text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.69C20.06,16.74 19.67,18.11 18.71,19.5M15.97,5.17C16.63,4.37 17.08,3.26 16.96,2.15C16,2.19 14.84,2.78 14.18,3.58C13.59,4.28 13.07,5.41 13.21,6.5C14.28,6.58 15.35,5.93 15.97,5.17Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">DOWNLOAD ON THE</div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">App Store</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>4.9 • iOS 15.0 or later</span>
                    </div>
                  </div>
                </button>

                {/* Direct Android APK Button */}
                <button
                  type="button"
                  onClick={handleDownloadApk}
                  className="bg-white hover:bg-emerald-50/60 border-2 border-emerald-500/40 hover:border-emerald-600 p-4 rounded-2xl shadow-xs transition flex items-center gap-3.5 text-left sm:col-span-2 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30">
                    <Download className="w-6 h-6 text-white group-hover:translate-y-0.5 transition" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">DIRECT APK DOWNLOAD</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">v2.4.1 (22.4 MB)</span>
                    </div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">
                      Download Lokalhire APK for Android
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Direct install without Play Store • Works on all Android 8.0+ phones
                    </div>
                  </div>
                </button>

              </div>

              {/* Send App Link via SMS / WhatsApp */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <div className="text-sm font-bold text-slate-900 mb-1">
                  Send download link to your phone
                </div>
                <div className="text-xs text-slate-500 mb-3">
                  Enter your mobile number to receive a direct WhatsApp / SMS link to download:
                </div>

                <form onSubmit={handleSendLink} className="flex flex-col sm:flex-row items-stretch gap-2">
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex-1">
                    <span className="text-xs font-semibold text-slate-500 pr-2 border-r border-slate-200">+91</span>
                    <input
                      type="tel"
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="98765 43210"
                      className="w-full bg-transparent pl-2.5 text-sm text-slate-900 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={smsSending}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shrink-0"
                  >
                    {smsSending ? (
                      <span>Sending link...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Send App Link</span>
                      </>
                    )}
                  </button>
                </form>

                {smsSent && (
                  <div className="mt-2 text-xs text-emerald-700 font-medium flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Download link sent successfully via WhatsApp / SMS!</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Scan QR Code Card & App Features */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              {/* QR Code White Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md w-full max-w-sm text-center space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 border-b border-slate-100 pb-3">
                  <span className="flex items-center gap-1 text-slate-900">
                    <QrCode className="w-4 h-4 text-emerald-600" /> Instant Install
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">Camera Ready</span>
                </div>

                {/* Crisp SVG QR Code */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 inline-block mx-auto group cursor-pointer" onClick={handleDownloadApk}>
                  <svg className="w-44 h-44 mx-auto" viewBox="0 0 100 100" fill="currentColor">
                    {/* Top-left position marker */}
                    <rect x="10" y="10" width="22" height="22" rx="3" fill="#0f172a" />
                    <rect x="14" y="14" width="14" height="14" fill="#ffffff" />
                    <rect x="17" y="17" width="8" height="8" rx="1.5" fill="#059669" />

                    {/* Top-right position marker */}
                    <rect x="68" y="10" width="22" height="22" rx="3" fill="#0f172a" />
                    <rect x="72" y="14" width="14" height="14" fill="#ffffff" />
                    <rect x="75" y="17" width="8" height="8" rx="1.5" fill="#059669" />

                    {/* Bottom-left position marker */}
                    <rect x="10" y="68" width="22" height="22" rx="3" fill="#0f172a" />
                    <rect x="14" y="72" width="14" height="14" fill="#ffffff" />
                    <rect x="17" y="75" width="8" height="8" rx="1.5" fill="#059669" />

                    {/* Data modules */}
                    <rect x="36" y="12" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="46" y="12" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="56" y="12" width="6" height="6" rx="1" fill="#334155" />

                    <rect x="36" y="22" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="46" y="22" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="56" y="22" width="6" height="6" rx="1" fill="#0f172a" />

                    <rect x="12" y="36" width="6" height="6" rx="1" fill="#0f172a" />
                    <rect x="22" y="36" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="32" y="36" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="42" y="36" width="6" height="6" rx="1" fill="#0f172a" />
                    <rect x="52" y="36" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="62" y="36" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="72" y="36" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="82" y="36" width="6" height="6" rx="1" fill="#0f172a" />

                    <rect x="12" y="46" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="22" y="46" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="42" y="46" width="16" height="16" rx="3" fill="#059669" />
                    <rect x="62" y="46" width="6" height="6" rx="1" fill="#0f172a" />
                    <rect x="72" y="46" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="82" y="46" width="6" height="6" rx="1" fill="#059669" />

                    <rect x="12" y="56" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="22" y="56" width="6" height="6" rx="1" fill="#0f172a" />
                    <rect x="62" y="56" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="72" y="56" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="82" y="56" width="6" height="6" rx="1" fill="#0f172a" />

                    <rect x="36" y="68" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="46" y="68" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="56" y="68" width="6" height="6" rx="1" fill="#0f172a" />
                    <rect x="68" y="68" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="78" y="68" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="86" y="68" width="6" height="6" rx="1" fill="#0f172a" />

                    <rect x="36" y="78" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="46" y="78" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="56" y="78" width="6" height="6" rx="1" fill="#059669" />
                    <rect x="68" y="78" width="6" height="6" rx="1" fill="#0f172a" />
                    <rect x="78" y="78" width="6" height="6" rx="1" fill="#334155" />
                    <rect x="86" y="78" width="6" height="6" rx="1" fill="#059669" />

                    {/* Center Lokalhire Badge */}
                    <circle cx="50" cy="50" r="10" fill="#ffffff" />
                    <circle cx="50" cy="50" r="8" fill="#059669" />
                    <text x="47" y="54" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">L</text>
                  </svg>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-900">
                    Scan with any phone camera
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Opens direct installer on Android or iOS
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Download Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Micro Trust Points under QR */}
              <div className="mt-4 flex flex-col gap-1.5 text-xs text-slate-500 text-center">
                <span className="flex items-center justify-center gap-1 text-slate-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  SHA-256 Verified APK • No malware / Spyware
                </span>
                <span>Works on low-spec phones (Android 8.0 & above)</span>
              </div>

            </div>

          </div>

          {/* Bottom 4 App Exclusive Features */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Live GPS Matching</div>
                <div className="text-xs text-slate-500 mt-0.5">Strictly see jobs within 500m to 5km radius from where you live.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">1-Tap Fast Apply</div>
                <div className="text-xs text-slate-500 mt-0.5">No resume writing or PDF uploads. Tap once to send your profile.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Real-Time Radar Alerts</div>
                <div className="text-xs text-slate-500 mt-0.5">Instant push notification the minute a shop on your street posts a vacancy.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Store Walk-In Mode</div>
                <div className="text-xs text-slate-500 mt-0.5">Get turn-by-turn walking navigation to visit the employer in person.</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
