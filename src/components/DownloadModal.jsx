import { useState, useEffect } from 'react'
import {
  Smartphone,
  Download,
  QrCode,
  X,
  Star,
  ShieldCheck,
  Check,
  Copy,
  Send,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Clock,
  Edit2
} from 'lucide-react'
import { DEFAULT_GITHUB_APK_URL } from './DownloadSection'

export function DownloadModal({ isOpen, onClose, onNotify, customGithubUrl }) {
  const [apkUrl, setApkUrl] = useState(() => {
    const saved = localStorage.getItem('lokalhire_apk_url')
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
  const [copied, setCopied] = useState(false)
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [tempUrl, setTempUrl] = useState(apkUrl)

  useEffect(() => {
    const saved = localStorage.getItem('lokalhire_apk_url')
    if (
      saved &&
      !saved.includes('releases/latest/download') &&
      !saved.includes('lokalhire/lokalhire-app') &&
      !saved.endsWith('/LokalHire.apk') &&
      !saved.endsWith('/lokalhire.apk')
    ) {
      setApkUrl(saved)
    } else {
      setApkUrl(DEFAULT_GITHUB_APK_URL)
      localStorage.setItem('lokalhire_apk_url', DEFAULT_GITHUB_APK_URL)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard?.writeText?.(apkUrl)
    setCopied(true)
    onNotify('🔗 APK download link copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!phone || phone.length < 10) {
      onNotify('Please enter a valid 10-digit mobile number')
      return
    }
    setSent(true)
    onNotify(`📲 APK link sent to +91 ${phone}!`)
    setTimeout(() => {
      setSent(false)
      setPhone('')
      onClose()
    }, 2500)
  }

  const handleDownloadApk = () => {
    onNotify('⬇️ Opening APK download link...')
    window.open(apkUrl, '_blank', 'noopener,noreferrer')
  }

  const handleSaveUrl = (e) => {
    e.preventDefault()
    if (tempUrl.trim()) {
      setApkUrl(tempUrl.trim())
      localStorage.setItem('lokalhire_apk_url', tempUrl.trim())
      setIsEditing(false)
      onNotify('✅ Custom APK URL saved!')
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              L
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg font-display">Download Lokalhire App</h3>
              <p className="text-xs text-slate-500">Android APK via GitHub • iOS &amp; Play Store Coming Soon</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs">
          
          {/* Direct APK Download Button (PRIMARY) */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase text-emerald-800 tracking-wider">
                ACTIVE RELEASE (ANDROID)
              </span>
              <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">
                v2.0 (V2) Stable
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Download LokalHire.V2.apk
            </h4>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Official signed APK release from Bhuvaneshdarkfire/lokalhire-Web.
            </p>

            <button
              type="button"
              onClick={handleDownloadApk}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download LokalHire.V2.apk</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
            </button>

            {/* Quick Link Editor in Modal */}
            <div className="mt-3 pt-2.5 border-t border-emerald-200/70 flex items-center justify-between text-[11px] text-emerald-900">
              <span className="truncate max-w-[240px] text-slate-600 font-mono text-[10px]">
                {apkUrl}
              </span>
              <button
                type="button"
                onClick={() => {
                  setTempUrl(apkUrl)
                  setIsEditing(!isEditing)
                }}
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 shrink-0"
              >
                <Edit2 className="w-3 h-3" />
                <span>{isEditing ? 'Cancel' : 'Change Link'}</span>
              </button>
            </div>

            {isEditing && (
              <form onSubmit={handleSaveUrl} className="mt-2.5 pt-2 border-t border-emerald-200/60 flex gap-1.5">
                <input
                  type="url"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="Paste GitHub APK URL"
                  className="flex-1 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-slate-900 text-white font-semibold text-xs px-3 py-1.5 rounded-lg"
                >
                  Save
                </button>
              </form>
            )}
          </div>

          {/* Quick 2 App store badges (MARKED COMING SOON) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Google Play Store */}
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-left flex items-center justify-between opacity-85">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 uppercase font-bold">GET IT ON</div>
                  <div className="font-bold text-slate-900 text-xs">Google Play</div>
                </div>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 shrink-0">
                Coming Soon
              </span>
            </div>

            {/* Apple App Store */}
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-left flex items-center justify-between opacity-85">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.69C20.06,16.74 19.67,18.11 18.71,19.5M15.97,5.17C16.63,4.37 17.08,3.26 16.96,2.15C16,2.19 14.84,2.78 14.18,3.58C13.59,4.28 13.07,5.41 13.21,6.5C14.28,6.58 15.35,5.93 15.97,5.17Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 uppercase font-bold">DOWNLOAD ON</div>
                  <div className="font-bold text-slate-900 text-xs">App Store</div>
                </div>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 shrink-0">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Quick 3-step installation notice */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                How to install on Android:
              </span>
              <button
                type="button"
                onClick={() => setShowGuide(!showGuide)}
                className="text-[10px] text-blue-600 font-semibold"
              >
                {showGuide ? 'Less' : 'Details'}
              </button>
            </div>

            <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-600 leading-relaxed">
              <li>Tap <strong>Download LokalHire.V2.apk</strong> (tap "Download anyway" if prompted).</li>
              <li>Open the downloaded file &amp; tap <strong>"Allow from this source"</strong> if requested.</li>
              <li>Tap <strong>"Install"</strong> and launch LOKALHIRE!</li>
            </ol>
          </div>

          {/* Send link via phone */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">Send APK link to your mobile</div>
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile number"
                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs flex-1 text-slate-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-emerald-400" />
                <span>Send</span>
              </button>
            </form>
            {sent && (
              <div className="mt-2 text-emerald-700 text-[11px] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Link sent via WhatsApp / SMS!</span>
              </div>
            )}
          </div>

          {/* Copy Share Link */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Direct GitHub Release Link
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="text-slate-700 hover:text-slate-900 font-semibold flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy APK Link'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
