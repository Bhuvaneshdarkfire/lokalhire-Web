import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const jobs = [
  { role: 'Sales Assistant', company: 'Neighbourhood Retailer', location: 'Your neighbourhood', pay: '\u20B916,000', distance: '1.8 km', match: '94%', tag: 'Retail' },
  { role: 'Delivery Executive', company: 'Local Distribution Co.', location: 'Nearby district', pay: '\u20B918,500', distance: '2.4 km', match: '88%', tag: 'Logistics' },
  { role: 'Billing Associate', company: 'Community Market', location: 'Your local area', pay: '\u20B915,000', distance: '0.9 km', match: '96%', tag: 'Retail' },
]

const candidates = [
  { name: 'Pooja Gowda', initials: 'PG', detail: '0.8 km - 1.5 yrs POS & Inventory', match: '96%' },
  { name: 'Manjunath R.', initials: 'MR', detail: '1.3 km - 2 yrs Retail Sales', match: '92%' },
  { name: 'Asha N.', initials: 'AN', detail: '1.9 km - Multilingual support', match: '89%' },
]

function Icon({ children }) { return <span className="icon">{children}</span> }
function Kicker({ children, light = false }) { return <div className={`kicker ${light ? 'light' : ''}`}><span className="kicker-line" />{children}</div> }

function JobCard({ job, index, saved, onSave, onSelect }) {
  return <article className={`job-card ${index === 0 ? 'featured' : ''}`}>
    <div className="job-top"><span className="eyebrow">{job.tag}</span><span className="match">{job.match} match</span></div>
    <h3>{job.role}</h3><p className="company">{job.company}</p>
    <div className="job-meta"><span><Icon>@</Icon> {job.location}</span><span>{job.distance} away</span></div>
    <div className="job-bottom"><strong>{job.pay}<small>/month</small></strong><div className="job-actions">
      <button className="save-button" type="button" aria-label={saved ? `Remove ${job.role} from saved jobs` : `Save ${job.role}`} onClick={() => onSave(job.role)}>{saved ? '\u2665' : '\u2661'}</button>
      <button className="text-button" type="button" onClick={() => onSelect(job)}>View role <span className="arrow">&#8599;</span></button>
    </div></div>
  </article>
}

function PhonePreview() {
  return <div className="phone-card"><div className="phone-notch" /><div className="phone-status"><span>09:41</span><span>... o</span></div>
    <div className="phone-head"><div><small>Good morning, there</small><h3>Find your next<br /><em>nearby move.</em></h3></div><div className="mini-avatar">You</div></div>
    <div className="location-pill"><Icon>@</Icon> Your current area <span>v</span></div><div className="radius-row"><span>Within <strong>3.5 km</strong></span><span className="green-text">24 openings</span></div><div className="range"><span /></div>
    <div className="map-mini"><span className="map-label one">Local shop <b>94%</b></span><span className="map-label two">Nearby co. <b>88%</b></span><span className="map-label three">You</span><i className="map-road road-a" /><i className="map-road road-b" /><i className="map-road road-c" /></div>
    <div className="phone-section"><div className="section-label"><span>Picked for you</span><a href="#product">See all</a></div>{jobs.slice(0, 2).map((job, index) => <div className="mini-job" key={job.role}><div className="mini-job-icon">{index === 0 ? 'S' : 'C'}</div><div><strong>{job.role}</strong><small>{job.company} - {job.distance}</small></div><span>{job.match}</span></div>)}</div>
  </div>
}

function CandidateRow({ candidate, index, onAction }) {
  return <div className="candidate-row"><div className={`avatar avatar-${index + 1}`}>{candidate.initials}</div><div className="candidate-copy"><strong>{candidate.name}</strong><span>{candidate.detail}</span></div><span className="match">{candidate.match}</span><button className="icon-button" type="button" aria-label={`Invite ${candidate.name}`} onClick={() => onAction(`Invite sent to ${candidate.name}`)}>+</button></div>
}

function JobDialog({ job, onClose, onApply }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!job) return undefined
    closeButtonRef.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [job, onClose])

  if (!job) return null
  return <div className="job-dialog-backdrop" role="presentation" onClick={onClose}><section className="job-dialog" role="dialog" aria-modal="true" aria-labelledby="job-dialog-title" onClick={(event) => event.stopPropagation()}>
    <button ref={closeButtonRef} className="dialog-close" type="button" aria-label="Close job details" onClick={onClose}>&#215;</button><span className="eyebrow">{job.tag} - {job.distance}</span><h3 id="job-dialog-title">{job.role}</h3><p className="company">{job.company}</p>
    <p className="dialog-copy">A nearby opportunity matched to your skills, schedule, and preferred commute.</p><div className="dialog-meta"><strong>{job.pay}<small>/month</small></strong><span>{job.match} match</span></div>
    <button className="solid-button" type="button" onClick={onApply}>Start application <span className="arrow">&#8599;</span></button>
  </section></div>
}

function ProductPanel({ onAction }) {
  const [tab, setTab] = useState('seeker')
  const [saved, setSaved] = useState([])
  const [filter, setFilter] = useState('Recommended')
  const [query, setQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState(null)
  const saveJob = (role) => setSaved((current) => current.includes(role) ? current.filter((item) => item !== role) : [...current, role])
  const visibleJobs = jobs.filter((job) => `${job.role} ${job.company} ${job.tag}`.toLowerCase().includes(query.toLowerCase())).sort((first, second) => {
    if (filter === 'Closest') return parseFloat(first.distance) - parseFloat(second.distance)
    if (filter === 'Highest pay') return parseInt(second.pay.replace(/\D/g, ''), 10) - parseInt(first.pay.replace(/\D/g, ''), 10)
    return parseInt(second.match, 10) - parseInt(first.match, 10)
  })
  return <div className="product-panel">
    <div className="panel-tabs" role="tablist" aria-label="Lokalhire views"><button className={`tab ${tab === 'seeker' ? 'active' : ''}`} role="tab" aria-selected={tab === 'seeker'} onClick={() => setTab('seeker')}>For job seekers</button><button className={`tab ${tab === 'employer' ? 'active' : ''}`} role="tab" aria-selected={tab === 'employer'} onClick={() => setTab('employer')}>For employers</button><span className="panel-live"><span className="live-dot" /> Live data</span></div>
    {tab === 'seeker' ? <div className="tab-content"><div className="panel-top"><div><span className="panel-kicker">Job seeker view / 01</span><h3>Find a role that fits<br /><em>your real life.</em></h3></div><span className="panel-number">01</span></div>
      <div className="filter-bar"><div className="filter-search"><Icon>?</Icon><input aria-label="Search roles" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search role or skill" />{query && <button className="clear-search" type="button" aria-label="Clear search" onClick={() => setQuery('')}>x</button>}</div><div className="filter-chips" role="group" aria-label="Sort roles">{['Recommended', 'Closest', 'Highest pay'].map((item) => <button type="button" className={filter === item ? 'selected' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <div className="seeker-layout"><div className="job-list">{visibleJobs.length ? visibleJobs.map((job, index) => <JobCard key={job.role} job={job} index={index} onSelect={setSelectedJob} saved={saved.includes(job.role)} onSave={saveJob} />) : <div className="empty-state"><strong>No roles found</strong><span>Try a different role, skill, or company.</span></div>}</div><div className="panel-note"><span className="note-mark">&#8599;</span><p><strong>{saved.length ? `${saved.length} saved ${saved.length === 1 ? 'role' : 'roles'}.` : 'One tap to apply.'}</strong><br />No long forms. No mysterious black holes. Just a clear next step.</p><div className="mini-status"><span className="status-check">&#10003;</span> Profile 82% complete</div></div></div>
    </div> : <div className="tab-content"><div className="panel-top"><div><span className="panel-kicker">Employer view / 02</span><h3>Meet the right person<br /><em>before lunch.</em></h3></div><span className="panel-number">02</span></div><div className="employer-dashboard"><div className="dashboard-summary"><div><span>Open role</span><strong>Retail Counter Staff</strong></div><div><span>Applicants</span><strong>14 received</strong></div><div><span>Avg. distance</span><strong>1.4 km</strong></div><span className="status-pill">* Vacancy active</span></div><div className="candidate-header"><span>Smart shortlist</span><span>Ranked by fit + distance</span></div>{candidates.map((candidate, index) => <CandidateRow key={candidate.name} candidate={candidate} index={index} onAction={onAction} />)}</div></div>}
    <JobDialog job={selectedJob} onClose={() => setSelectedJob(null)} onApply={() => { const role = selectedJob.role; setSelectedJob(null); onAction(`Application started for ${role}`) }} />
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [available, setAvailable] = useState(true)
  const [toast, setToast] = useState('')
  const notify = (message) => { setToast(message); window.clearTimeout(window.lokalhireToast); window.lokalhireToast = window.setTimeout(() => setToast(''), 2600) }
  const links = [['Why Lokalhire', '#why'], ['How it works', '#how'], ['Product', '#product'], ['Stories', '#stories']]
  return <div className="page-shell"><div className="top-note"><span><span className="live-dot" /> Live pilot  -  Available in your area</span><span className="top-note-right">Built for the people who keep a neighbourhood moving &#8599;</span></div>
    <header className="site-header"><a className="brand" href="#top" aria-label="Lokalhire home"><span className="brand-mark">L</span><span>LOKAL<span>HIRE</span></span></a><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><div className="header-actions"><button className={`availability-toggle ${available ? 'on' : ''}`} type="button" onClick={() => { setAvailable(!available); notify(available ? 'You are now hidden from employers' : 'You are now available for opportunities') }}><span className="toggle-dot" />{available ? 'Available' : 'Paused'}</button><a className="ghost-button" href="#product">View product</a><a className="solid-button" href="#start">Get started <span className="arrow">&#8599;</span></a><button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}></button></div></header>
    <nav id="mobile-navigation" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>{links.map(([label, href]) => <a href={href} key={label} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
    <main id="top"><section className="hero section-wrap"><div className="hero-copy"><Kicker>Hyperlocal hiring, human-sized</Kicker><h1>Good work<br /><em>is closer</em><br />than you think.</h1><p className="hero-intro">LOKALHIRE helps people find meaningful work around the corner, and helps local businesses meet the right person before the day gets away.</p><div className="hero-actions"><a className="solid-button large" href="#product">Explore the product <span className="arrow">&#8599;</span></a><a className="underlined-link" href="#how">See how it works <span>&#8595;</span></a></div><div className="hero-proof"><div className="proof-avatars"><span>AK</span><span>SS</span><span>VG</span><span className="more">+</span></div><p><strong>1,200+ local businesses</strong><br />already building their teams nearby</p></div></div><div className="hero-visual" aria-label="Lokalhire product preview"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="pin-card pin-card-one"><span>24</span><small>open roles<br />near you</small></div><div className="pin-card pin-card-two"><span>94%</span><small>best match<br />for your skills</small></div><PhonePreview /></div></section>
      <section className="ticker"><div className="ticker-inner"><span>LOCAL FIRST</span><i>*</i><span>REAL PEOPLE</span><i>*</i><span>NO LONG COMMUTES</span><i>*</i><span>FASTER HIRING</span><i>*</i><span>LOCAL FIRST</span><i>*</i></div></section>
      <section className="section-wrap split-section" id="why"><div className="section-heading"><Kicker>Why Lokalhire</Kicker><h2>Every neighbourhood<br />has <em>untapped potential.</em></h2></div><div className="section-copy"><p>Traditional job platforms make local work feel far away. We make distance, trust, and timing part of the match from the start.</p><a className="underlined-link" href="#stories">Read our point of view <span>&#8599;</span></a></div></section>
      <section className="section-wrap stat-grid"><div><strong>3.5<span>km</span></strong><p>average search radius</p></div><div><strong>74<span>%</span></strong><p>responses within 24 hours</p></div><div><strong>1.6<span>km</span></strong><p>average daily commute</p></div><div className="stat-note"><span className="asterisk">*</span><p>Less time in transit.<br /><strong>More time living.</strong></p></div></section>
      <section className="section-wrap product-section" id="product"><div className="product-intro"><Kicker>One platform, two perspectives</Kicker><h2>Built for the<br /><em>whole picture.</em></h2><p>From a first search to a first day, every touchpoint is designed to feel clear, quick, and close to home.</p></div><ProductPanel onAction={notify} /></section>
      <section className="section-wrap how-section" id="how"><div className="how-heading"><Kicker>How it works</Kicker><h2>A shorter path<br />to <em>somewhere good.</em></h2></div><div className="steps"><div className="step"><span>01</span><h3>Set your radius</h3><p>Tell us how far you want to travel. We make the map work for you.</p></div><div className="step"><span>02</span><h3>Find your fit</h3><p>See roles and people ranked by skills, schedule, salary, and distance.</p></div><div className="step"><span>03</span><h3>Make a move</h3><p>Apply or invite in one tap. Then meet in the real world.</p></div></div></section>
      <section className="section-wrap stories-section" id="stories"><div className="story-copy"><Kicker>From the neighbourhood</Kicker><blockquote>&quot;I stopped spending three hours on the bus. The store I wanted was seven minutes from my home.&quot;</blockquote><p><strong>A local sales assistant</strong><br />Building a better workday nearby</p></div><div className="story-art"><div className="sun" /><div className="building b-one" /><div className="building b-two" /><div className="building b-three" /><div className="street-person">*</div><div className="story-label">A better<br /><em>way to work</em></div></div></section>
      <section className="section-wrap final-cta" id="start"><div><Kicker light>Start closer</Kicker><h2>Your next good thing<br /><em>might be nearby.</em></h2><p>Join the pilot or bring Lokalhire to your neighbourhood.</p></div><div className="final-actions"><a className="light-button" href="mailto:pilot@lokalhire.in">Talk to our team <span className="arrow">&#8599;</span></a><a className="light-link" href="#product">Explore the platform &#8599;</a></div></section></main>
    <footer className="site-footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">L</span><span>LOKAL<span>HIRE</span></span></a><p>Work nearby. Hire nearby.</p><div><a href="#why">Why us</a><a href="#product">Product</a><a href="mailto:pilot@lokalhire.in">Contact</a></div><small>Copyright  2026 LOKALHIRE  -  Built for every neighbourhood</small></footer><div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">{toast}</div>
  </div>
}

createRoot(document.querySelector('#app')).render(<App />)



