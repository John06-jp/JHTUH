import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUI } from '../context/UIContext'
import SectionLink from './SectionLink'
import { SKILLSOFT_CATEGORIES } from '../data/skillsoftCatalog'

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
  return <img src="/logo.png" className="h-full w-full object-contain" alt="Area 51 logo" />
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
    { label: 'About', href: '#about' },
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
          <a href="/" aria-label="Area 51 Home" className="flex shrink-0 min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="h-10 w-10 shrink-0 lg:h-12 lg:w-12">
              <BrandMark />
            </div>
            <div className="block min-w-0 leading-tight">
              <span className="block whitespace-nowrap font-heading text-[15px] font-extrabold tracking-wide text-navy sm:text-base lg:text-lg">Area 51</span>
              <span className="block whitespace-nowrap text-[0.5rem] font-bold tracking-[0.14em] text-teal sm:text-[0.62rem] sm:tracking-[0.18em] lg:text-[0.65rem]">INFORMATION TECHNOLOGY</span>
              <span className="block whitespace-nowrap text-[0.68rem] font-medium text-navy">Services</span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="ml-2 hidden items-center gap-1 xl:flex 2xl:ml-6" id="site-nav" aria-label="Main navigation">
            <NavDropdown label="Learn" items={LEARN_ITEMS} />
            <TopLink href="#certifications">Certifications</TopLink>
            <TopLink href="#audience">For Institutions</TopLink>
            <TopLink href="#impact">Partners</TopLink>
            <TopLink href="#about">About </TopLink>
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

const HEADER_CATS = SKILLSOFT_CATEGORIES.filter((c) => c !== 'All')

const navLinkCls =
  'inline-flex items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold ' +
  'transition-colors hover:bg-soft hover:text-teal ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'

function BrandLockup() {
  return (
    <a href="/" aria-label="Area 51 Home" className="flex shrink-0 min-w-0 items-center gap-2.5 sm:gap-3">
      <span className="h-10 w-10 shrink-0 lg:h-11 lg:w-11">
        <BrandMark />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="whitespace-nowrap font-heading text-lg font-extrabold tracking-wide text-navy">Area 51</span>
        <span className="whitespace-nowrap text-[0.65rem] font-bold tracking-[0.16em] text-teal">Information Technology</span>
      </span>
    </a>
  )
}

function ProgramsDropdown({ current }) {
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
        className={`${navLinkCls} ${current === '/program' || current === '/cse-courses' ? 'text-teal' : ''}`}
      >
        Programs
        <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <path d="M5.5 7.5 10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-[70] mt-2 w-72 rounded-xl border border-line bg-white p-3 shadow-xl">
          <p className="px-3 pb-1 pt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-muted">Curated programs</p>
          <Link to="/program" className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
            Skillsoft Programs
          </Link>
          <Link to="/cse-courses" className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
            CSE Courses
          </Link>
          <p className="mt-2 px-3 pb-1 pt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-muted">Browse by category</p>
          {HEADER_CATS.map((c) => (
            <Link
              key={c}
              to={`/skillsoft-catalog?cat=${encodeURIComponent(c)}`}
              className="flex min-h-[44px] items-center rounded-lg px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              {c}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function DrawerLink({ label, to, hash, onClose }) {
  const cls =
    'flex min-h-[52px] w-full items-center justify-between rounded-xl px-3 text-base font-semibold text-ink ' +
    'transition-colors hover:bg-soft hover:text-teal ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'
  const inner = (
    <>
      <span>{label}</span>
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal" aria-hidden="true">
        <path d="M9 6l9 12 9 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
  if (hash) {
    return (
      <SectionLink to="/" hash={hash} className={cls} onClick={onClose}>
        {inner}
      </SectionLink>
    )
  }
  return (
    <Link to={to} className={cls} onClick={onClose}>
      {inner}
    </Link>
  )
}

function DrawerGroup({ title, items, onClose }) {
  return (
    <div className="mt-1 border-t border-line pt-3">
      <p className="px-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-teal">{title}</p>
      <div className="mt-1 grid gap-0.5">
        {items.map((i) => (
          <DrawerLink key={i.label} label={i.label} to={i.to} hash={i.hash} onClose={onClose} />
        ))}
      </div>
    </div>
  )
}
function MobileDrawer({ open, onClose, openModal }) {
  return (
    <div
      id="site-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      {...(!open ? { inert: '' } : {})}
      className={`fixed inset-0 z-[80] overflow-y-auto bg-white transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'}`}
    >
      <div className="flex h-16 items-center justify-between border-b border-line px-4 sm:px-6">
        <BrandLockup />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="mt-1 px-4 sm:px-6" aria-label="Mobile navigation">
        <DrawerGroup
          title="Explore"
          onClose={onClose}
          items={[
            { label: 'Programs', to: '/program' },
            { label: 'Skillsoft Catalog', to: '/skillsoft-catalog' },
            { label: 'CSE Courses', to: '/cse-courses' }
          ]}
        />
        <DrawerGroup
          title="Learning"
          onClose={onClose}
          items={[
            { label: 'Learning Paths', hash: 'learning-areas' },
            { label: 'Certifications', hash: 'certifications' }
          ]}
        />
        <DrawerGroup
          title="Company"
          onClose={onClose}
          items={[
            { label: 'About', hash: 'about' },
            { label: 'Contact', hash: 'footer' }
          ]}
        />
        <div className="mt-1 grid gap-2.5 border-t border-line py-5">
          <button
            type="button"
            onClick={() => {
              onClose()
              openModal('login')
            }}
            className="h-12 w-full rounded-lg border border-teal bg-white px-4 text-base font-bold text-teal transition-colors hover:bg-teal/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Student Login
          </button>
          <SectionLink
            to="/cse-courses"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-lg bg-teal px-4 text-base font-bold text-white transition-colors hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            View CSE Subjects
          </SectionLink>
        </div>
      </nav>
    </div>
  )
}

function SubHeader() {
  const { openModal } = useUI()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <>
      <header className="site-header h-16 lg:h-20" id="header">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <BrandLockup />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <Link to="/" className={`${navLinkCls} ${pathname === '/' ? 'text-teal' : ''}`}>
              Home
            </Link>
            <ProgramsDropdown current={pathname} />
            <Link to="/skillsoft-catalog" className={`${navLinkCls} ${pathname === '/skillsoft-catalog' ? 'text-teal' : ''}`}>
              Skillsoft Catalog
            </Link>
            <SectionLink to="/" hash="learning-areas" className={navLinkCls}>
              Learning Paths
            </SectionLink>
            <SectionLink to="/" hash="about" className={navLinkCls}>
              About
            </SectionLink>
            <SectionLink to="/" hash="footer" className={navLinkCls}>
              Contact
            </SectionLink>
          </nav>

          <div className="hidden h-11 items-center gap-2 lg:flex">
            <SectionLink
              to="/cse-courses"
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-lg bg-teal px-4 text-sm font-bold text-white transition-colors hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              View CSE Subjects
            </SectionLink>
          </div>

          <div className="flex shrink-0 items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="site-nav"
              aria-label="Toggle navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:bg-soft hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} openModal={openModal} />
    </>
  )
}
export default function Header() {
  const { pathname } = useLocation()
  return pathname === '/' ? <HomeHeader /> : <SubHeader />
}