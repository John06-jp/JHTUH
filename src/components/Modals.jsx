import { useState } from 'react'
import { useUI } from '../context/UIContext'

// Port of script.js mockCourses used by the search dialog.
const MOCK_COURSES = {
  python: ['Python Fundamentals (Beginner)', 'Python for Data Science (Intermediate)'],
  'cloud computing': ['AWS Cloud Practitioner (Beginner)', 'Azure Administrator (Intermediate)'],
  cybersecurity: ['CompTIA Security+ Prep (Intermediate)', 'Ethical Hacking 101 (Beginner)'],
  ai: ['AI Fundamentals (Beginner)', 'Machine Learning Basics (Intermediate)'],
  'machine learning': ['Machine Learning Basics (Intermediate)', 'Deep Learning Foundations (Advanced)']
}

const POPULAR = ['Python', 'Cloud Computing', 'Cybersecurity', 'AI', 'Machine Learning']

function ModalShell({ children, onClose, width }) {
  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-navy/60" onClick={onClose} aria-hidden="true" />
      <div className={`relative bg-white rounded-2xl ${width} max-h-[90vh] overflow-y-auto shadow-2xl p-6`}>
        {children}
        <button
          className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full bg-soft hover:bg-line text-xl leading-none"
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
        >
          &times;
        </button>
      </div>
    </div>
  )
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-bold text-navy" htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  )
}

function SearchModal({ onClose }) {
  const { showToast } = useUI()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)

  const runSearch = (term) => {
    const q = (term || '').trim().toLowerCase()
    setQuery(term || '')
    if (!q) {
      setResults([])
      setSearched(false)
      return
    }
    const out = []
    Object.keys(MOCK_COURSES).forEach((key) => {
      if (key.includes(q)) out.push(...MOCK_COURSES[key])
    })
    setResults(out)
    setSearched(true)
    if (out.length) showToast(`Found ${out.length} course${out.length > 1 ? 's' : ''} for “${term}”.`)
  }

  return (
    <ModalShell width="w-[min(94vw,560px)]" onClose={onClose}>
      <h2 className="font-heading font-bold text-navy text-lg">Search Skillsoft Courses &amp; Certifications</h2>
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault()
          runSearch(query)
        }}
      >
        <div className="flex items-center gap-2 border border-line rounded-xl p-2 pl-3">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-muted shrink-0">
            <path d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Cybersecurity, AWS, Python..."
            autoComplete="off"
            className="flex-1 min-w-0 outline-none text-sm"
          />
          <button type="submit" className="px-4 py-2 rounded-lg text-sm font-bold bg-teal text-white hover:bg-teal-dark">
            Search
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
          <span className="text-muted">Popular Searches:</span>
          {POPULAR.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => runSearch(term)}
              className="px-3 py-1.5 rounded-full border border-line text-xs font-bold hover:border-teal hover:text-teal"
            >
              {term}
            </button>
          ))}
        </div>
      </form>
      <div className="mt-4 grid gap-2.5">
        {searched && results.length === 0 && (
          <p className="text-sm text-muted">No courses match “{query}”. Try a popular search.</p>
        )}
        {results.map((r, i) => (
          <div key={i} className="border border-line rounded-xl px-4 py-2.5 text-sm">
            {r}
          </div>
        ))}
      </div>
    </ModalShell>
  )
}

function LoginModal({ onClose }) {
  const { showToast } = useUI()
  return (
    <ModalShell width="w-[min(94vw,440px)]" onClose={onClose}>
      <h2 className="font-heading font-bold text-navy text-lg">Student Login</h2>
      <form
        className="grid gap-3.5 mt-4"
        onSubmit={(e) => {
          e.preventDefault()
          onClose()
          showToast('Login is a demo — no accounts are stored.')
        }}
      >
        <p className="text-sm text-muted">Access your Skillsoft courses through JNTUH Education Foundation portal.</p>
        <Field label="Student Roll No. or Email" htmlFor="login-email">
          <input className="input" id="login-email" type="text" required placeholder="e.g. 21031A0501@jntuh.ac.in" />
        </Field>
        <Field label="Password" htmlFor="login-password">
          <input className="input" id="login-password" type="password" required placeholder="••••••••" />
        </Field>
        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 text-muted">
            <input type="checkbox" className="accent-teal-700" /> Remember me
          </label>
          <a href="#" className="font-bold text-teal hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className="w-full px-5 py-3 rounded-xl text-sm font-bold bg-teal text-white hover:bg-teal-dark">
          Login to Student Dashboard
        </button>
      </form>
    </ModalShell>
  )
}

function RegisterModal({ onClose }) {
  const { showToast } = useUI()
  return (
    <ModalShell width="w-[min(94vw,440px)]" onClose={onClose}>
      <h2 className="font-heading font-bold text-navy text-lg">Register for Skillsoft Access</h2>
      <form
        className="grid gap-3.5 mt-4"
        onSubmit={(e) => {
          e.preventDefault()
          onClose()
          showToast('Registration submitted successfully!')
        }}
      >
        <p className="text-sm text-muted">Create your learner account to access 22,000+ courses and certifications.</p>
        <Field label="Full Name" htmlFor="reg-name">
          <input className="input" id="reg-name" type="text" required placeholder="Enter your full name" />
        </Field>
        <Field label="Institutional or Personal Email" htmlFor="reg-email">
          <input className="input" id="reg-email" type="email" required placeholder="name@example.com" />
        </Field>
        <Field label="I am a" htmlFor="reg-role">
          <select id="reg-role" required className="input bg-white">
            <option value="student">Student</option>
            <option value="faculty">Faculty Member</option>
            <option value="professional">Working Professional</option>
            <option value="institution">Institutional Administrator</option>
          </select>
        </Field>
        <button type="submit" className="w-full px-5 py-3 rounded-xl text-sm font-bold bg-teal text-white hover:bg-teal-dark">
          Submit Registration
        </button>
      </form>
    </ModalShell>
  )
}

export default function Modals() {
  const { activeModal, closeModal } = useUI()
  if (!activeModal) return null
  if (activeModal === 'search') return <SearchModal onClose={closeModal} />
  if (activeModal === 'login') return <LoginModal onClose={closeModal} />
  if (activeModal === 'register') return <RegisterModal onClose={closeModal} />
  return null
}