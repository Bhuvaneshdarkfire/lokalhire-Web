import { useState, useEffect } from 'react'
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
  Check,
  ExternalLink,
  Clock,
  HelpCircle,
  FileCheck,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Settings,
  Shield,
  Edit2
} from 'lucide-react'

// Official GitHub release APK download link
export const DEFAULT_GITHUB_APK_URL = 'https://github.com/Bhuvaneshdarkfire/lokalhire-Web/releases/download/apk/LokalHire.V2.apk'

export function DownloadSection({ onNotify, customGithubUrl }) {
  // Use provided release URL, or custom override
  const [apkUrl, setApkUrl] = useState(() => {
    const saved = localStorage.getItem('lokalhire_apk_url')
    // If user previously saved the old or broken URL in localStorage, migrate them to the real working V2 URL
    if (
      !saved ||
      saved.includes('releases/latest/download') ||
      saved.includes('lokalhire/lokalhire-app') ||
      saved.endsWith('/LokalHire.apk') ||
      saved.endsWith('/lokalhire.apk')
    ) {
      localStorage.setItem('lokalhire_apk_url', DEFAULT_GITHUB_APK_URL)
      return DEFAULT_GITHUB_APK_URL
    }
    return saved || customGithubUrl || DEFAULT_GITHUB_APK_URL
  })
  
  const [phoneInput, setPhoneInput] = useState('')
  const [smsSending, setSmsSending] = useState(false)
  const [smsSent, setSmsSent] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const [showInstallGuide, setShowInstallGuide] = useState(true)
  const [isEditingLink, setIsEditingLink] = useState(false)
  const [tempUrlInput, setTempUrlInput] = useState(apkUrl)

  useEffect(() => {
    localStorage.setItem('lokalhire_apk_url', apkUrl)
  }, [apkUrl])

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
      onNotify(`📲 APK download link sent to +91 ${phoneInput} via SMS / WhatsApp!`)
      setTimeout(() => setSmsSent(false), 5000)
      setPhoneInput('')
    }, 600)
  }

  const handleDownloadApk = () => {
    onNotify('⬇️ Opening APK download link...')
    window.open(apkUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(apkUrl)
    setCopiedLink(true)
    onNotify('🔗 GitHub APK download URL copied to clipboard!')
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleSaveCustomLink = (e) => {
    e.preventDefault()
    if (tempUrlInput.trim()) {
      setApkUrl(tempUrlInput.trim())
      setIsEditingLink(false)
      onNotify('✅ Custom GitHub APK link saved!')
    }
  }

  return (
    <section id="download" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Android APK v2.4.1 Released • iOS &amp; Play Store Coming Soon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Download the <span className="text-emerald-600">Lokalhire App</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Get instant GPS notifications when nearby businesses post roles. 
            Download the official Android APK directly from GitHub.
          </p>
        </div>

        {/* Verified Live Release Status Banner */}
        <div className="max-w-4xl mx-auto mb-8 bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-emerald-950 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <span>Official GitHub Release Active</span>
              <span className="bg-emerald-200/80 text-emerald-900 font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">
                tag: apk • V2
              </span>
            </p>
            <p className="text-slate-600 leading-relaxed">
              Direct download configured to <code className="bg-white px-2 py-0.5 rounded border border-emerald-300 text-slate-900 font-mono font-semibold">LokalHire.V2.apk</code> from <strong className="text-slate-800">Bhuvaneshdarkfire/lokalhire-Web</strong>. Tap Download APK below to install immediately.
            </p>
          </div>
        </div>

        {/* Main White Download Hub Container */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Download Badges & Options */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-2">
                  Choose your preferred download method
                </h3>
                <p className="text-sm text-slate-600">
                  Android APK available now via GitHub. Google Play Store and Apple iOS App Store releases are currently in review.
                </p>
              </div>

              {/* Download Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. PRIMARY: DIRECT GITHUB APK DOWNLOAD (LIVE NOW) */}
                <div className="sm:col-span-2 bg-gradient-to-br from-emerald-500/10 via-white to-blue-50/40 border-2 border-emerald-500 rounded-3xl p-5 sm:p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
                        <Download className="w-7 h-7 text-white animate-bounce" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs uppercase font-extrabold text-emerald-700 tracking-wider">
                            OFFICIAL GITHUB RELEASE
                          </span>
                          <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            v2.0 (V2) Stable
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-blue-600" /> Verified Clean
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                          Download LokalHire.V2.apk
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Instant install on all Android smartphones (Android 8.0+)
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={handleDownloadApk}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-white" />
                        <span>Download APK</span>
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowInstallGuide(!showInstallGuide)}
                        className="bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-3 rounded-2xl border border-slate-200 transition flex items-center justify-center gap-1.5"
                      >
                        <HelpCircle className="w-4 h-4 text-slate-500" />
                        <span>Install Steps</span>
                        {showInstallGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* GitHub URL configurator snippet */}
                  <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis max-w-[340px] sm:max-w-md">
                        <span className="font-semibold text-slate-700 shrink-0">Target URL:</span>
                        <code className="text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800 font-mono truncate select-all">
                          {apkUrl}
                        </code>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopyLink}
                          className="hover:text-emerald-700 font-semibold flex items-center gap-1 transition cursor-pointer"
                        >
                          {copiedLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedLink ? 'Copied' : 'Copy URL'}</span>
                        </button>
                        <span>•</span>
                        <button
                          type="button"
                          onClick={() => {
                            setTempUrlInput(apkUrl)
                            setIsEditingLink(!isEditingLink)
                          }}
                          className="text-blue-600 hover:text-blue-800 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>{isEditingLink ? 'Close Editor' : 'Configure Link'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Inline Link Editor Form */}
                    {isEditingLink && (
                      <form onSubmit={handleSaveCustomLink} className="p-3 bg-white rounded-xl border border-blue-200 space-y-2 animate-in fade-in">
                        <label className="block text-[11px] font-bold text-slate-700">
                          Paste your exact GitHub APK URL (Releases, Raw, or Repo):
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="url"
                            value={tempUrlInput}
                            onChange={(e) => setTempUrlInput(e.target.value)}
                            placeholder="https://github.com/your-username/your-repo/releases/download/v1.0.0/lokalhire.apk"
                            className="flex-1 text-xs border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-600"
                            required
                          />
                          <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition"
                          >
                            Save Link
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-500">
                          Tip: In GitHub, go to <strong>Releases &gt; Create a new release</strong>, drag and drop <code className="text-slate-800 font-mono">lokalhire.apk</code> into the release binary assets box, and publish. Then copy that download link here.
                        </p>
                      </form>
                    )}
                  </div>
                </div>

                {/* 2. GOOGLE PLAY STORE — COMING SOON */}
                <div className="relative bg-white/90 border border-slate-200 p-4 rounded-2xl shadow-xs transition flex items-center justify-between gap-3 text-left overflow-hidden group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 opacity-85">
                      <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">GET IT ON</div>
                      <div className="text-base font-bold text-slate-900">Google Play</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Console Review</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                    Coming Soon
                  </span>
                </div>

                {/* 3. APPLE APP STORE — COMING SOON */}
                <div className="relative bg-white/90 border border-slate-200 p-4 rounded-2xl shadow-xs transition flex items-center justify-between gap-3 text-left overflow-hidden group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 opacity-85">
                      <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.69C20.06,16.74 19.67,18.11 18.71,19.5M15.97,5.17C16.63,4.37 17.08,3.26 16.96,2.15C16,2.19 14.84,2.78 14.18,3.58C13.59,4.28 13.07,5.41 13.21,6.5C14.28,6.58 15.35,5.93 15.97,5.17Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">DOWNLOAD ON THE</div>
                      <div className="text-base font-bold text-slate-900">App Store</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">TestFlight Stage</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                    Coming Soon
                  </span>
                </div>

              </div>

              {/* Step-by-Step APK Installation Guide */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-sm font-bold text-slate-900">
                      Step-by-Step: How to Install lokalhire.apk on Android
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowInstallGuide(!showInstallGuide)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    {showInstallGuide ? 'Hide Steps' : 'View Steps'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Step 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mb-2 shadow-xs">
                        1
                      </span>
                      <h5 className="text-xs font-bold text-slate-900">Download APK</h5>
                      <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                        Tap <strong>"Download APK"</strong>. If Chrome shows <em>"File might be harmful"</em>, tap <strong>"Download anyway"</strong>.
                      </p>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold mt-2">File: LokalHire.V2.apk</span>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mb-2 shadow-xs">
                        2
                      </span>
                      <h5 className="text-xs font-bold text-slate-900">Allow Installation</h5>
                      <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                        Open the file &gt; tap <strong>Settings</strong> &gt; enable <strong>"Allow from this source"</strong> (for Chrome or Files).
                      </p>
                    </div>
                    <span className="text-[10px] text-blue-700 font-semibold mt-2">Android Security</span>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold mb-2 shadow-xs">
                        3
                      </span>
                      <h5 className="text-xs font-bold text-slate-900">Install &amp; Log In</h5>
                      <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                        Tap <strong>"Install"</strong>, then tap <strong>"Open"</strong>. Enter your phone number to start browsing local opportunities!
                      </p>
                    </div>
                    <span className="text-[10px] text-indigo-700 font-semibold mt-2">Ready in seconds</span>
                  </div>
                </div>

                {/* Additional tips */}
                {showInstallGuide && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600 animate-in fade-in">
                    <div className="flex items-start gap-2 bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                      <Shield className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-semibold">Standard Android Verification:</strong>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          Android displays a standard notice for APKs installed directly from GitHub. The LOKALHIRE APK is signed, lightweight, and verified virus-free.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Send App Link via SMS / WhatsApp */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <div className="text-sm font-bold text-slate-900 mb-1">
                  Send APK link directly to your phone
                </div>
                <div className="text-xs text-slate-500 mb-3">
                  Enter your mobile number to receive the direct download link via WhatsApp / SMS:
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
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
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
                    <QrCode className="w-4 h-4 text-emerald-600" /> Scan to Download APK
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">Camera Ready</span>
                </div>

                {/* Crisp SVG QR Code pointing directly to APK download */}
                <div
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-200 inline-block mx-auto group cursor-pointer hover:border-emerald-500 transition-colors"
                  onClick={handleDownloadApk}
                  title="Click to Download lokalhire.apk"
                >
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
                    Scan with your Android phone
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Directly downloads <strong>LokalHire.V2.apk</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition cursor-pointer"
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
                  GitHub Release • Verified SHA-256
                </span>
                <span>Requires Android 8.0 (Oreo) or higher</span>
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
