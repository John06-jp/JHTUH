import { Link, useLocation } from 'react-router-dom'
import { useUI } from '../context/UIContext'

function HomeFooter() {
  const { showToast } = useUI()
  return (
    <footer className="bg-navyDark text-slate-300" id="footer">
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <a className="flex items-center gap-3" href="/" aria-label="JNTUH Education Foundation Home">
              <div className="w-11 h-11 shrink-0">
                <svg viewBox="0 0 100 100" className="w-11 h-11" aria-hidden="true">
                  <circle cx="50" cy="50" r="46" fill="#005B5C" stroke="#D4AF37" strokeWidth="4" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3,3" />
                  <path d="M30 46 C35 42, 45 42, 50 47 C55 42, 65 42, 70 46 L70 68 C65 64, 55 64, 50 69 C45 64, 35 64, 30 68 Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block font-heading font-bold text-white text-sm tracking-wide">JNTUH EDUCATION FOUNDATION</span>
                <span className="block text-xs text-slate-400">An Initiative of JNTU Hyderabad</span>
              </div>
            </a>
            <div className="flex gap-2.5 mt-5" id="social-links">
              <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-teal hover:text-white text-xs font-bold">FB</a>
              <a href="#" aria-label="X / Twitter" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-teal hover:text-white text-xs font-bold">X</a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-teal hover:text-white text-xs font-bold">in</a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-teal hover:text-white text-xs font-bold">YT</a>
            </div>
          </div>

          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3" id="footer-links">
            <div>
              <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-3">Learn</h4>
              <ul className="grid gap-2 text-sm">
                <li><a className="hover:text-teal-light" href="#learning-areas">All Courses</a></li>
                <li><a className="hover:text-teal-light" href="#learning-areas">Learning Paths</a></li>
                <li><a className="hover:text-teal-light" href="#learning-areas">New Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-3">Certifications</h4>
              <ul className="grid gap-2 text-sm">
                <li><a className="hover:text-teal-light" href="#certifications">Skillsoft Certs</a></li>
                <li><a className="hover:text-teal-light" href="#certifications">Exam Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-3">Support</h4>
              <ul className="grid gap-2 text-sm">
                <li><a className="hover:text-teal-light" href="#footer">Help Center</a></li>
                <li><a className="hover:text-teal-light" href="#footer">Contact Us</a></li>
                <li><a className="hover:text-teal-light" href="#footer">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div id="footer-newsletter">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-3">Stay Connected</h4>
            <p className="text-sm text-slate-400 mb-3">Subscribe for updates and new courses.</p>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault()
                showToast('Thank you for subscribing! Please check your inbox.')
              }}
            >
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl p-1.5 pl-4">
                <input type="email" required placeholder="Enter your email" aria-label="Enter your email for newsletter" className="flex-1 min-w-0 bg-transparent outline-none text-sm text-white placeholder:text-slate-500" />
                <button type="submit" aria-label="Subscribe" className="w-10 h-10 shrink-0 grid place-items-center rounded-lg bg-teal text-white hover:bg-teal-dark">→</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center gap-3 md:justify-between text-xs text-slate-400">
          <p>© 2025 JNTUH Education Foundation. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <a className="hover:text-teal-light" href="#">Privacy Policy</a>
            <span>|</span>
            <a className="hover:text-teal-light" href="#">Terms of Use</a>
            <span>|</span>
            <a className="hover:text-teal-light" href="#">Security</a>
          </div>
          <div className="inline-flex items-center gap-1.5 font-semibold text-teal-light">
            <span>✓</span>
            <span>Trusted &amp; Secure</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SubFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2.5rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div>
          <h4 style={{ marginBottom: '.6rem', color: '#fff' }}>JNTUH Education Foundation</h4>
          <p style={{ color: '#9FB2C8', fontSize: '.9rem', maxWidth: '22rem' }}>CSE Skillsoft guide — PE-1 to PE-6 plus additional learning.</p>
          <p style={{ marginTop: '.8rem' }}><Link to="/" style={{ color: '#36D1C4', fontWeight: 700 }}>Back to Skillsoft home</Link></p>
        </div>
        <div>
          <h4 style={{ marginBottom: '.6rem', color: '#fff' }}>On this page</h4>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '.35rem', fontSize: '.9rem', color: '#CBD8E6' }}>
            <li><a href="#subjects">Subjects for CSE</a></li>
            <li><a href="#featured">Featured courses</a></li>
            <li><a href="#catalog">Semester catalog</a></li>
            <li><a href="#pe3">PE-3 details</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2025 JNTUH Education Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  const { pathname } = useLocation()
  return pathname === '/' ? <HomeFooter /> : <SubFooter />
}