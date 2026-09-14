import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BenefitsSection } from './components/BenefitsSection'
import { ProblemSolutionSection } from './components/ProblemSolutionSection'
import { MatchEngineSection } from './components/MatchEngineSection'
import { HowItWorks } from './components/HowItWorks'
import { LiveOpeningsSection } from './components/LiveOpeningsSection'
import { ImpactMetricsSection } from './components/ImpactMetricsSection'
import { RoadmapSection } from './components/RoadmapSection'
import { CallToActionSection } from './components/CallToActionSection'
import { DownloadSection } from './components/DownloadSection'
import { JobSearchSection } from './components/JobSearchSection'
import { CommuteCalculator } from './components/CommuteCalculator'
import { StoriesSection } from './components/StoriesSection'
import { Footer } from './components/Footer'
import { DownloadModal } from './components/DownloadModal'
import { initialJobs, initialCandidates } from './data/mockData'
import { CheckCircle2, X } from 'lucide-react'

export function App() {
  const [jobs, setJobs] = useState(initialJobs)
  const [candidates] = useState(initialCandidates)
  const [savedJobs, setSavedJobs] = useState(['job-1'])
  const [activeNeighborhood, setActiveNeighborhood] = useState('Bengaluru (Vijayanagar)')
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
    showToast(`🔍 Searching for "${query || 'all roles'}" within ${radius} km`)
  }

  const handlePerspectiveChange = (mode) => {
    setPerspective(mode)
    if (mode === 'business') {
      showToast('🏪 Switched to Local Business Mode — Viewing candidate radar & vacancy tools')
    } else {
      showToast('🎯 Switched to Job Seeker Mode — Viewing walking-distance jobs')
    }
  }

  const handleApplyRole = (job) => {
    showToast(`🎉 1-Tap Application sent to ${job.store} for ${job.role}! Verified SMS confirmation triggered.`)
  }

  return (
    <div className="bg-[#f6f8fc] text-[#0f172a] relative selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden min-h-screen font-sans antialiased">
      {/* Ambient Ethereal Glow Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[38%] -right-32 w-[650px] h-[650px] bg-emerald-100/40 rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] -left-32 w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[180px]" />
      </div>

      {/* iOS Frosted Glass Sticky Header */}
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

      <main className="w-full pt-20 relative z-10">
        {/* 1. HERO SECTION WITH 3D GEOSPATIAL SCENE & FLOATING FROSTED GLASS CARDS */}
        <Hero
          onOpenDownload={() => setDownloadModalOpen(true)}
          onSearchSubmit={handleSearchFromHero}
          activeNeighborhood={activeNeighborhood}
          activePerspective={perspective}
          onPerspectiveChange={handlePerspectiveChange}
        />

        {/* 2. PRODUCT HIGHLIGHTS & WHY HYPERLOCAL (Spacious Bento Grid) */}
        <BenefitsSection />

        {/* 3. CLEAN VISUAL COMPARISON: TRADITIONAL VS LOKALHIRE 3D GEOSPATIAL ENGINE */}
        <ProblemSolutionSection />

        {/* 4. INTERACTIVE MATCH ENGINE SHOWCASE (Radial Match Visualizer) */}
        <MatchEngineSection />

        {/* 5. HOW IT WORKS (Spacious Step-by-Step Dual Workflow) */}
        <HowItWorks />

        {/* 6. LIVE NEIGHBORHOOD OPENINGS (Authentic Indian Pilot Vacancies) */}
        <LiveOpeningsSection
          onOpenDownload={() => setDownloadModalOpen(true)}
          onApplyRole={handleApplyRole}
        />

        {/* Extended Interactive Portal for granular searching & posting vacancies */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
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
        </section>

        {/* 7. PILOT IMPACT METRICS (Clean Spacious Counter Cards) */}
        <ImpactMetricsSection />

        {/* Interactive Commute Savings Calculator */}
        <CommuteCalculator onOpenDownload={() => setDownloadModalOpen(true)} />

        {/* Authentic Local Community Stories */}
        <StoriesSection />

        {/* Prominent App Download Section */}
        <DownloadSection onNotify={showToast} />

        {/* 8. FUTURE ROADMAP (iOS Clean Bento Grid) */}
        <RoadmapSection />

        {/* 9. FINAL CALL TO ACTION (LOKALHIRE Community Banner) */}
        <CallToActionSection onOpenDownload={() => setDownloadModalOpen(true)} />
      </main>

      {/* Clean Minimalist Footer */}
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
