import { useState, useEffect } from 'react'
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  SlidersHorizontal,
  ChevronRight,
  Plus,
  Send,
  Building,
  UserCheck,
  Smartphone,
  Navigation
} from 'lucide-react'

export function JobSearchSection({
  jobs,
  candidates,
  savedJobs,
  onToggleSave,
  onAddNewJob,
  onNotify,
  onOpenDownload,
  activeNeighborhood,
  externalSearchQuery,
  externalRadius,
  perspective = 'talent',
  onPerspectiveChange
}) {
  const [activeTab, setActiveTab] = useState(perspective === 'business' ? 'employer' : 'seeker')
  const [searchQuery, setSearchQuery] = useState(externalSearchQuery || '')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDistance, setSelectedDistance] = useState(externalRadius || 5)
  const [sortBy, setSortBy] = useState('recommended')
  const [selectedJob, setSelectedJob] = useState(null)
  const [showOnlySaved, setShowOnlySaved] = useState(false)

  // Sync with perspective prop
  useEffect(() => {
    setActiveTab(perspective === 'business' ? 'employer' : 'seeker')
  }, [perspective])

  // Sync external search & radius when changed from Hero
  useEffect(() => {
    if (externalSearchQuery !== undefined) {
      setSearchQuery(externalSearchQuery)
    }
  }, [externalSearchQuery])

  useEffect(() => {
    if (externalRadius !== undefined) {
      setSelectedDistance(externalRadius)
    }
  }, [externalRadius])

  // Quick Apply Modal state
  const [applyName, setApplyName] = useState('')
  const [applyPhone, setApplyPhone] = useState('')
  const [applySubmitting, setApplySubmitting] = useState(false)

  // Employer Post Job modal
  const [postJobOpen, setPostJobOpen] = useState(false)
  const [newJobTitle, setNewJobTitle] = useState('')
  const [newJobCompany, setNewJobCompany] = useState('')
  const [newJobCategory, setNewJobCategory] = useState('Retail')
  const [newJobPay, setNewJobPay] = useState('₹18,000')
  const [newJobLocation, setNewJobLocation] = useState(`${activeNeighborhood}, Bangalore`)
  const [newJobDistance, setNewJobDistance] = useState('0.9 km')

  const categories = ['All', 'Retail', 'Hospitality', 'Logistics', 'Healthcare', 'Customer Support', 'Admin']

  // Filter and sort jobs
  const filteredJobs = jobs
    .filter((job) => {
      // Category filter
      if (selectedCategory !== 'All' && job.category !== selectedCategory) return false
      // Distance filter
      if (job.distanceKm > selectedDistance) return false
      // Saved filter
      if (showOnlySaved && !savedJobs.includes(job.id)) return false
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const text = `${job.role} ${job.company} ${job.tag} ${job.location}`.toLowerCase()
        if (!text.includes(q)) return false
      }
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'closest') return a.distanceKm - b.distanceKm
      if (sortBy === 'pay') return b.payNumber - a.payNumber
      return b.matchScore - a.matchScore
    })

  const handleApplySubmit = (e) => {
    e.preventDefault()
    if (!applyName || !applyPhone) {
      onNotify('Please enter your name and phone number')
      return
    }

    setApplySubmitting(true)
    setTimeout(() => {
      setApplySubmitting(false)
      const appliedRole = selectedJob.role
      const appliedCompany = selectedJob.company
      setSelectedJob(null)
      setApplyName('')
      setApplyPhone('')
      onNotify(`🎉 Application sent to ${appliedCompany} for ${appliedRole}! Expect a WhatsApp message shortly.`)
    }, 600)
  }

  const handleCreateJob = (e) => {
    e.preventDefault()
    if (!newJobTitle || !newJobCompany) {
      onNotify('Please enter the job title and business name')
      return
    }

    const payNum = parseInt(newJobPay.replace(/\D/g, ''), 10) || 18000
    const created = {
      id: `job-${Date.now()}`,
      role: newJobTitle,
      company: newJobCompany,
      category: newJobCategory,
      location: newJobLocation,
      distance: newJobDistance,
      distanceKm: parseFloat(newJobDistance) || 1.0,
      walkTime: '12 min walk',
      pay: newJobPay.startsWith('₹') ? newJobPay : `₹${newJobPay}`,
      payNumber: payNum,
      match: '95%',
      matchScore: 95,
      openings: 1,
      timings: '10:00 AM - 7:00 PM',
      shift: 'Full-time • Day Shift',
      tag: `${newJobCategory} & Services`,
      verified: true,
      urgent: true,
      description: 'Neighborhood vacancy posted directly by verified local business manager. Quick trial shift available.',
      requirements: ['Enthusiastic and reliable', 'Punctual work ethic', 'Good communication'],
      benefits: ['Fixed monthly salary', 'Local community workplace', 'Weekly payout support']
    }

    onAddNewJob(created)
    setPostJobOpen(false)
    setNewJobTitle('')
    setNewJobCompany('')
    onNotify(`✅ New vacancy "${newJobTitle}" is now live in ${activeNeighborhood}!`)
  }

  return (
    <section id="jobs" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live Neighborhood Board</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Explore nearby opportunities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Active openings in and around <strong>{activeNeighborhood}</strong> within your selected commute radius.
            </p>
          </div>

          {/* Seeker / Employer Tabs */}
          <div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-xs flex items-center shrink-0">
            <button
              type="button"
              onClick={() => {
                setActiveTab('seeker')
                if (onPerspectiveChange) onPerspectiveChange('talent')
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'seeker'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Job Seekers
            </button>
            <button
              type="button"
              id="employers"
              onClick={() => {
                setActiveTab('employer')
                if (onPerspectiveChange) onPerspectiveChange('business')
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'employer'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>For Employers</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                Hire
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: JOB SEEKER VIEW */}
        {activeTab === 'seeker' && (
          <div className="space-y-6">
            
            {/* Filter Toolbar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              
              {/* Search & Distance row */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by role, company, or neighborhood..."
                    className="w-full pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-emerald-500 focus:outline-none transition"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Distance Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                  <span className="text-xs font-semibold text-slate-500 shrink-0 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600" /> Radius:
                  </span>
                  {[1, 2, 3, 5, 10].map((radius) => (
                    <button
                      key={radius}
                      type="button"
                      onClick={() => setSelectedDistance(radius)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition ${
                        selectedDistance === radius
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      ≤ {radius} km
                    </button>
                  ))}
                </div>

                {/* Sort dropdown */}
                <div className="flex items-center gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none"
                  >
                    <option value="recommended">Best Fit Match</option>
                    <option value="closest">Closest Distance</option>
                    <option value="pay">Highest Pay</option>
                  </select>

                  {/* Saved Jobs Toggle */}
                  <button
                    type="button"
                    onClick={() => setShowOnlySaved(!showOnlySaved)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                      showOnlySaved
                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${showOnlySaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>Saved ({savedJobs.length})</span>
                  </button>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pt-1 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500 shrink-0">Category:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* Results Count Summary Bar */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                Showing <strong>{filteredJobs.length}</strong> jobs within <strong>{selectedDistance} km</strong> of {activeNeighborhood}
              </span>
              <button
                type="button"
                onClick={onOpenDownload}
                className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Get new job alerts on app &rarr;</span>
              </button>
            </div>

            {/* Jobs Grid */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredJobs.map((job) => {
                  const isSaved = savedJobs.includes(job.id)
                  return (
                    <article
                      key={job.id}
                      className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group relative"
                    >
                      {/* Top row: tags, match score & save button */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="bg-slate-100 text-slate-700 font-semibold text-[11px] px-2.5 py-0.5 rounded-md">
                            {job.tag}
                          </span>

                          <div className="flex items-center gap-2">
                            <span className="bg-emerald-50 text-emerald-800 font-bold text-xs px-2 py-0.5 rounded-full border border-emerald-100">
                              {job.match} match
                            </span>

                            <button
                              type="button"
                              onClick={() => {
                                onToggleSave(job.id)
                                onNotify(isSaved ? `Removed ${job.role} from saved jobs` : `Saved ${job.role}`)
                              }}
                              className="p-1 text-slate-400 hover:text-rose-600 transition"
                              aria-label="Save job"
                            >
                              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                            </button>
                          </div>
                        </div>

                        {/* Role Title & Company */}
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                          {job.role}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1 mb-3">
                          <span className="font-semibold text-slate-800">{job.company}</span>
                          {job.verified && (
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Business" />
                          )}
                        </div>

                        {/* Location and Distance Pill */}
                        <div className="space-y-1.5 py-2.5 border-y border-slate-100 text-xs text-slate-500">
                          <div className="flex items-center gap-1.5 text-slate-700">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{job.location}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-emerald-700 font-semibold flex items-center gap-1">
                              <Navigation className="w-3 h-3" />
                              {job.distance} away ({job.walkTime})
                            </span>
                            <span className="text-slate-500">{job.shift}</span>
                          </div>
                        </div>

                        {/* Snippet */}
                        <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      {/* Bottom row: Salary & Action button */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-semibold text-slate-400">Salary</div>
                          <div className="text-base font-bold text-slate-900">
                            {job.pay}
                            <span className="text-xs font-normal text-slate-500">/mo</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedJob(job)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-xs shadow-emerald-600/20"
                        >
                          <span>View & Apply</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No matching roles found</h3>
                <p className="text-xs text-slate-500">
                  Try expanding your radius (e.g. up to 5 km) or clear your search keywords.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('All')
                      setSelectedDistance(10)
                      setShowOnlySaved(false)
                    }}
                    className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: EMPLOYER / BUSINESS VIEW */}
        {activeTab === 'employer' && (
          <div className="space-y-8">
            
            {/* Employer Dashboard Hero Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    <Building className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Neighbourhood Business Portal</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    Hire reliable staff living within 2 km of your store.
                  </h3>
                  <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Local candidates have lower attrition, zero traffic commute delays, and show up on time. 
                    Post your opening in 60 seconds or invite verified candidates directly.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-2xl font-bold text-slate-900 font-display">14</div>
                      <div className="text-xs text-slate-500">Applicants Received</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600 font-display">1.2 km</div>
                      <div className="text-xs text-slate-500">Avg. Commute Distance</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 font-display">48 hrs</div>
                      <div className="text-xs text-slate-500">Avg. Time to Hire</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 font-display">100%</div>
                      <div className="text-xs text-slate-500">Verified Profiles</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-stretch gap-3">
                  <button
                    type="button"
                    onClick={() => setPostJobOpen(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 px-5 rounded-2xl transition flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/30"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Post a Free Vacancy</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenDownload}
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs py-2.5 px-4 rounded-2xl transition flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span>Manage on Lokalhire Business App</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Smart Shortlist of Nearby Candidates */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">
                    Smart Shortlist: Available Candidates Nearby
                  </h4>
                  <p className="text-xs text-slate-500">
                    Ranked by location proximity, past store experience, and immediate availability.
                  </p>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  {candidates.length} Profiles Ready for Walk-in
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {candidates.map((cand) => (
                  <div
                    key={cand.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {cand.initials}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{cand.name}</span>
                          <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                            {cand.match} match
                          </span>
                        </div>

                        <div className="text-xs font-medium text-slate-700">
                          {cand.roleSeeking} • <span className="text-emerald-700">{cand.distance} from store</span>
                        </div>

                        <div className="text-[11px] text-slate-500">
                          {cand.experience} • <span className="text-slate-700 font-medium">{cand.status}</span>
                        </div>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {cand.skills.map((skill) => (
                            <span key={skill} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNotify(`📲 Interview invitation sent to ${cand.name} via WhatsApp!`)}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shrink-0 w-full sm:w-auto justify-center"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Invite to Chat</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* JOB DETAILS & FAST APPLY MODAL */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md">
                    {selectedJob.tag} • {selectedJob.distance} away
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display mt-1.5">
                    {selectedJob.role}
                  </h3>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    {selectedJob.company} • {selectedJob.location}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-600">
                
                {/* Highlights bar */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Pay</div>
                    <div className="text-sm font-bold text-slate-900">{selectedJob.pay}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Commute</div>
                    <div className="text-sm font-bold text-emerald-700">{selectedJob.walkTime}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Match</div>
                    <div className="text-sm font-bold text-blue-600">{selectedJob.match}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Role Description
                  </h4>
                  <p className="leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Requirements
                  </h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Benefits & Perks
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedJob.benefits.map((b, i) => (
                      <span key={i} className="bg-emerald-50 text-emerald-800 text-[11px] px-2 py-0.5 rounded-md font-medium">
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 1-Tap Fast Apply Form */}
                <form onSubmit={handleApplySubmit} className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-xs font-bold text-slate-900">
                    Apply in 1-Click (No CV or Resume Needed)
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      required
                      value={applyName}
                      onChange={(e) => setApplyName(e.target.value)}
                      placeholder="Your Full Name"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      value={applyPhone}
                      onChange={(e) => setApplyPhone(e.target.value)}
                      placeholder="WhatsApp Mobile (10 digits)"
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={applySubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-600/30"
                  >
                    {applySubmitting ? (
                      <span>Sending application...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send 1-Tap Application Directly to Store</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">
                    The employer will contact you directly on WhatsApp or phone for interview timing.
                  </p>
                </form>

              </div>

            </div>
          </div>
        )}

        {/* POST NEW VACANCY MODAL */}
        {postJobOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-4 animate-in zoom-in-95">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-bold text-slate-900 text-base font-display">Post a Local Vacancy</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPostJobOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateJob} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    required
                    value={newJobTitle}
                    onChange={(e) => setNewJobTitle(e.target.value)}
                    placeholder="e.g. Counter Cashier, Delivery Rider, Barista"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    required
                    value={newJobCompany}
                    onChange={(e) => setNewJobCompany(e.target.value)}
                    placeholder="e.g. Royal Bakery, Urban Pharmacy"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Category</label>
                    <select
                      value={newJobCategory}
                      onChange={(e) => setNewJobCategory(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:bg-white focus:outline-none"
                    >
                      <option value="Retail">Retail</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Logistics">Logistics</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Monthly Pay</label>
                    <input
                      type="text"
                      value={newJobPay}
                      onChange={(e) => setNewJobPay(e.target.value)}
                      placeholder="e.g. ₹20,000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Location / Street</label>
                  <input
                    type="text"
                    value={newJobLocation}
                    onChange={(e) => setNewJobLocation(e.target.value)}
                    placeholder="e.g. 100ft Road, Indiranagar"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl transition shadow-xs"
                  >
                    Publish Opening to Nearby Seekers
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
