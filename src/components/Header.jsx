import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUI } from '../context/UIContext'
import SectionLink from './SectionLink'

function BrandMark() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="#005B5C" stroke="#D4AF37" strokeWidth="4" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3,3" />
      <path d="M50 18 L62 38 L84 38 L66 52 L73 74 L50 60 L27 74 L34 52 L16 38 L38 38 Z" fill="#D4AF37" opacity="0.3" />
      <path d="M30 46 C35 42, 45 42, 50 47 C55 42, 65 42, 70 46 L70 68 C65 64, 55 64, 50 69 C45 64, 35 64, 30 68 Z" fill="#FFFFFF" />
      <path d="M50 47 L50 69" stroke="#005B5C" strokeWidth="2" />
      <circle cx="50" cy="30" r="7" fill="#E65100" />
    </svg>
  )
}

function HomeHeader() {
  const { openModal } = useUI()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line" id="header">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-4">
        <Link className="flex items-center gap-3 shrink-0" to="/" aria-label="JNTUH Education Foundation Home">
          <div className="w-12 h-12 shrink-0">
            <BrandMark />
          </div>
          <div className="leading-tight">
            <span className="block font-heading font-extrabold text-navy text-lg tracking-wide">JNTUH</span>
            <span className="block text-[0.65rem] font-bold tracking-[0.2em] text-muted">EDUCATION FOUNDATION</span>
            <span className="block text-xs text-teal font-semibold italic">Learn. Certify. Build Your Career.</span>
          </div>
        </Link>

        <button
          className="lg:hidden ml-auto w-10 h-10 grid place-items-center rounded-lg border border-line"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-navy mb-1"></span>
          <span className="block w-5 h-0.5 bg-navy mb-1"></span>
          <span className="block w-5 h-0.5 bg-navy"></span>
        </button>

        <nav className="hidden lg:flex items-center gap-6 ml-8 text-[0.95rem] font-semibold text-ink" id="site-nav" aria-label="Main navigation">
          <div className="relative group">
            <a href="#learning-areas" className="hover:text-teal py-2 inline-flex items-center gap-1">Learn <span>▾</span></a>
            <div className="absolute left-0 top-full min-w-[220px] bg-white border border-line rounded-xl shadow-xl p-2 hidden group-hover:block">
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#learning-areas">All Learning Areas</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#technology">Technology &amp; Development</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#data">Data &amp; Analytics</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#cybersecurity">Cybersecurity</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#ai">AI &amp; Emerging Tech</a>
            </div>
          </div>
          <a href="#certifications" className="hover:text-teal">Certifications</a>
          <a href="#audience" className="hover:text-teal">For Institutions</a>
          <a href="#impact" className="hover:text-teal">Partners</a>
          <a href="#about" className="hover:text-teal">About JEF</a>
          <div className="relative group">
            <a href="#footer" className="hover:text-teal py-2 inline-flex items-center gap-1">Support <span>▾</span></a>
            <div className="absolute left-0 top-full min-w-[200px] bg-white border border-line rounded-xl shadow-xl p-2 hidden group-hover:block">
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#footer">Help Center</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#footer">Contact Support</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#footer">System Requirements</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-soft hover:text-teal" href="#footer">FAQs</a>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-2.5 ml-auto">
          <button
            className="w-10 h-10 grid place-items-center rounded-full border border-line text-navy hover:border-teal hover:text-teal [&_svg]:w-5 [&_svg]:h-5"
            onClick={() => openModal('search')}
            type="button"
            aria-label="Open search dialog"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
          <button className="px-5 py-2.5 rounded-lg text-sm font-bold border border-teal text-teal hover:bg-teal/5" onClick={() => openModal('login')} type="button">
            Student Login
          </button>
          <button className="px-5 py-2.5 rounded-lg text-sm font-bold bg-teal text-white hover:bg-teal-dark" onClick={() => openModal('register')} type="button">
            Register
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${mobileOpen ? '' : 'hidden'} border-t border-line bg-white px-6 py-4`} id="mobile-nav">
        <div className="grid gap-1 font-semibold">
          <a className="px-2 py-2.5 rounded-lg hover:bg-soft" href="#learning-areas">Learn</a>
          <a className="px-2 py-2.5 rounded-lg hover:bg-soft" href="#certifications">Certifications</a>
          <a className="px-2 py-2.5 rounded-lg hover:bg-soft" href="#audience">For Institutions</a>
          <a className="px-2 py-2.5 rounded-lg hover:bg-soft" href="#impact">Partners</a>
          <a className="px-2 py-2.5 rounded-lg hover:bg-soft" href="#about">About JEF</a>
          <a className="px-2 py-2.5 rounded-lg hover:bg-soft" href="#footer">Support</a>
        </div>
      </div>
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