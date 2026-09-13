import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUI } from '../context/UIContext'
import SectionLink from './SectionLink'

const LEARN_ITEMS = [
  { label: 'All Learning Areas', href: '#learning-areas' },
  { label: 'Technology & Development', href: '#technology' },
  { label: 'Data & Analytics', href: '#data' },
  { label: 'Cybersecurity', href: '#cybersecurity' },
  { label: 'AI & Emerging Tech', href: '#ai' }
]

const SUPPORT_ITEMS = [
  { label: 'Help Center', href: '#footer' },
  { label: 'Contact Support', href: '#footer' },
  { label: 'System Requirements', href: '#footer' },
  { label: 'FAQs', href: '#footer' }
]

function BrandMark() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="#005B5C" stroke="#D4AF37" strokeWidth="4" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3,3" />
      <path d="M50 18 L62 38 L84 38 L66 52 L73 74 L50 60 L27 74 L34 52 L16 38 L38 38 Z" fill="#D4AF37" opacity="0.3" />
      <path d="M30 46 C35 42, 45 42, 50 47 C55 42, 65 42, 70 46 L70 68 C65 64, 55 64, 50 69 C45 64, 35 64, 30 68 Z" fill="#FFFFFF" />
      <path d="M50 47 L50 69" stroke="#005B5C" strokeWidth="2" />
      <circle cx="50" cy="30" r="7" fill="#E65100" />
    </svg>
  )
}

function TopLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
    >
      {children}
    </a>
  )
}

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        {label}
        <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <path d="M5.5 7.5 10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-line bg-white p-2 shadow-xl">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              {i.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNav({ open, openModal }) {
  const links = [
    { label: 'Learn', href: '#learning-areas' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'For Institutions', href: '#audience' },
    { label: 'Partners', href: '#impact' },
    { label: 'About JEF', href: '#about' },
    { label: 'Support', href: '#footer' }
  ]

  return (
    <div
      id="mobile-nav"
      className={`xl:hidden overflow-hidden bg-white transition-all duration-300 ease-in-out ${open ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}
      aria-hidden={!open}
      {...(!open ? { inert: '' } : {})}
    >
      <nav className="px-4 sm:px-6" aria-label="Mobile navigation">
        <div className="grid gap-0.5 border-t border-line">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-semibold text-ink transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="mt-2 grid gap-2.5 border-t border-line py-4 pb-6">
          <button
            type="button"
            onClick={() => openModal('login')}
            className="h-11 w-full rounded-lg border border-teal bg-white px-4 text-sm font-bold text-teal transition-colors hover:bg-teal/[0.08]"
          >
            Student Login
          </button>
          <button
            type="button"
            onClick={() => openModal('register')}
            className="h-11 w-full rounded-lg bg-teal px-4 text-sm font-bold text-white transition-colors hover:bg-teal-dark"
          >
            Register
          </button>
        </div>
      </nav>
    </div>
  )
}

function HomeHeader() {
  const { openModal } = useUI()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/90 backdrop-blur-md shadow-[0_1px_3px_rgba(7,23,53,0.04)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-3 sm:gap-4 md:h-[72px] lg:h-20 lg:gap-6">
          {/* Brand / logo */}
          <a href="/" aria-label="JNTUH Education Foundation Home" className="flex shrink-0 min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="h-10 w-10 shrink-0 lg:h-12 lg:w-12">
              <BrandMark />
            </div>
            <div className="hidden min-w-0 leading-tight md:block">
              <span className="block whitespace-nowrap font-heading text-[15px] font-extrabold tracking-wide text-navy sm:text-base lg:text-lg">JNTUH</span>
              <span className="block whitespace-nowrap text-[0.58rem] font-bold tracking-[0.18em] text-muted sm:text-[0.62rem] lg:text-[0.65rem]">EDUCATION FOUNDATION</span>
              <span className="hidden whitespace-nowrap text-xs font-semibold italic text-teal sm:block">Learn. Certify. Build Your Career.</span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="ml-2 hidden items-center gap-1 xl:flex 2xl:ml-6" id="site-nav" aria-label="Main navigation">
            <NavDropdown label="Learn" items={LEARN_ITEMS} />
            <TopLink href="#certifications">Certifications</TopLink>
            <TopLink href="#audience">For Institutions</TopLink>
            <TopLink href="#impact">Partners</TopLink>
            <TopLink href="#about">About JEF</TopLink>
            <NavDropdown label="Support" items={SUPPORT_ITEMS} />
          </nav>

          {/* Desktop actions */}
          <div className="ml-auto hidden shrink-0 items-center gap-2.5 xl:flex">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-all duration-200 hover:border-teal hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              onClick={() => openModal('search')}
              aria-label="Open search dialog"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
                <path d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => openModal('login')}
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-lg border border-teal bg-white px-4 text-sm font-semibold text-teal transition-all duration-200 hover:bg-teal/[0.08] active:scale-[0.98] sm:px-5"
            >
              Student Login
            </button>
            <button
              type="button"
              onClick={() => openModal('register')}
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-lg bg-teal px-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-dark hover:brightness-105 active:scale-[0.98] sm:px-5"
            >
              Register
            </button>
          </div>

          {/* Mobile controls */}
          <div className="ml-auto flex shrink-0 items-center gap-2 xl:hidden sm:gap-2.5">
            <button
              type="button"
              onClick={() => openModal('login')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              aria-label="Student login"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileNav open={mobileOpen} openModal={openModal} />
    </header>
  )
}

function SubHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="site-header" id="header">
      <div className="header-container">
        <a className="brand" href="/" aria-label="JNTUH Education Foundation Home">
          <div className="brand-titles">
            <span className="brand-name">JNTUH</span>
            <span className="brand-sub">EDUCATION FOUNDATION</span>
            <span className="brand-tagline">Learn. Certify. Build Your Career.</span>
          </div>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`site-nav${mobileOpen ? ' is-open' : ''}`} id="site-nav" aria-label="Main navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="#subjects" className="nav-link">CSE Subjects</a>
          <a href="#catalog" className="nav-link">Courses</a>
          <a href="#pe3" className="nav-link">PE-3 Details</a>
          <SectionLink to="/" hash="learning-areas" className="nav-link">All Streams</SectionLink>
        </nav>
        <div className="header-actions">
          <SectionLink to="/" hash="learning-areas" className="button button-outline">All Streams</SectionLink>
          <a href="#catalog" className="button button-teal">View CSE Subjects</a>
        </div>
      </div>
    </header>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  return pathname === '/' ? <HomeHeader /> : <SubHeader />
}