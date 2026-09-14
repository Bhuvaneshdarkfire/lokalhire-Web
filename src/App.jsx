import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DownloadSection } from './components/DownloadSection'
import { JobSearchSection } from './components/JobSearchSection'
import { CommuteCalculator } from './components/CommuteCalculator'
import { HowItWorks } from './components/HowItWorks'
import { StoriesSection } from './components/StoriesSection'
import { Footer } from './components/Footer'
import { DownloadModal } from './components/DownloadModal'
import { initialJobs, initialCandidates } from './data/mockData'
import { CheckCircle2, X } from 'lucide-react'

export function App() {
  const [jobs, setJobs] = useState(initialJobs)
  const [candidates] = useState(initialCandidates)
  const [savedJobs, setSavedJobs] = useState(['job-1'])
  const [activeNeighborhood, setActiveNeighborhood] = useState('Indiranagar')
  const [available, setAvailable] = useState(true)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [perspective, setPerspective] = useState('talent') // 'talent' or 'business'
  
  // Toast notification state
  const [toastMessage, setToastMessage] = useState('')
  const [externalSearch, setExternalSearch] = useState('')
  const [externalRadius, setExternalRadius] = useState(2)

  const showToast = (message) => {
    setToastMessage(message)
    window.clearTimeout(window.lokalhireToastTimer)
    window.lokalhireToastTimer = window.setTimeout(() => {
      setToastMessage('')
    }, 3800)
  }

  const handleToggleSave = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    )
  }

  const handleAddNewJob = (newJob) => {
    setJobs((prev) => [newJob, ...prev])
  }

  const handleSearchFromHero = (query, radius) => {
    setExternalSearch(query)
    setExternalRadius(radius)
  }

  const handlePerspectiveChange = (mode) => {
    setPerspective(mode)
    if (mode === 'business') {
      showToast('🏪 Switched to Local Business Mode — Viewing candidate radar & vacancy tools')
    } else {
      showToast('🎯 Switched to Job Seeker Mode — Viewing walking-distance jobs')
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 font-sans antialiased">
      {/* Navbar with dual perspective toggle */}
      <Navbar
        onOpenDownload={() => setDownloadModalOpen(true)}
        activeNeighborhood={activeNeighborhood}
        onSelectNeighborhood={(area) => {
          setActiveNeighborhood(area)
          showToast(`📍 Switched search radius to ${area}!`)
        }}
        available={available}
        onToggleAvailable={() => {
          setAvailable(!available)
          showToast(
            !available
              ? '✅ Your status is now "Available for work" — nearby shops can see your profile!'
              : '⏸️ Your profile is now hidden from new store searches'
          )
        }}
        perspective={perspective}
        onPerspectiveChange={handlePerspectiveChange}
      />

      {/* Hero with dual value proposition for Talent & Businesses, live radar mockup, and typography-focused design */}
      <Hero
        onOpenDownload={() => setDownloadModalOpen(true)}
        onSearchSubmit={handleSearchFromHero}
        activeNeighborhood={activeNeighborhood}
        activePerspective={perspective}
        onPerspectiveChange={handlePerspectiveChange}
      />

      {/* Prominent App Download Section explicitly requested by user */}
      <DownloadSection onNotify={showToast} />

      {/* Live Job Search and Employer Portal synced with current perspective */}
      <JobSearchSection
        jobs={jobs}
        candidates={candidates}
        savedJobs={savedJobs}
        onToggleSave={handleToggleSave}
        onAddNewJob={handleAddNewJob}
        onNotify={showToast}
        onOpenDownload={() => setDownloadModalOpen(true)}
        activeNeighborhood={activeNeighborhood}
        externalSearchQuery={externalSearch}
        externalRadius={externalRadius}
        perspective={perspective}
        onPerspectiveChange={handlePerspectiveChange}
      />

      {/* Interactive Commute Savings Calculator */}
      <CommuteCalculator onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* How it works for both Talent and Businesses */}
      <HowItWorks />

      {/* Authentic Local Community Stories */}
      <StoriesSection />

      {/* Clean White Footer */}
      <Footer onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        onNotify={showToast}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in slide-in-from-bottom-3 max-w-md text-xs sm:text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="flex-1">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage('')}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
export default App
