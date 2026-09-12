import { Link, useLocation } from 'react-router-dom'
import { useUI } from '../context/UIContext'

function HomeFooter() {
  const { showToast } = useUI()

  return (
    <footer className="bg-[#0a1d2d] text-slate-200" id="footer">
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1.2fr] xl:gap-16">
          <div>
            <div className="text-[2rem] font-black leading-none tracking-tight text-white md:text-[2.6rem]">
              Degree<span className="text-[#f7b64a]">+</span>
            </div>
            <p className="mt-6 max-w-[18rem] text-xl leading-relaxed text-slate-200">
              We provide 21st Century job skills.
            </p>

            <div className="mt-8 flex gap-4" id="social-links">
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0a1d2d] text-base font-bold shadow-sm transition hover:opacity-90">f</a>
              <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0a1d2d] text-base font-bold shadow-sm transition hover:opacity-90">in</a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0a1d2d] text-base font-bold shadow-sm transition hover:opacity-90">◎</a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-[2rem] font-bold text-white">Useful links</h4>
            <ul className="space-y-4 text-xl text-slate-300">
              <li><a className="hover:text-[#7fe7db]" href="#">Home</a></li>
              <li><a className="hover:text-[#7fe7db]" href="#about">About Us</a></li>
              <li><a className="hover:text-[#7fe7db]" href="#learning-areas">Our Courses</a></li>
              <li><a className="hover:text-[#7fe7db]" href="#footer">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[2rem] font-bold text-white">More</h4>
            <ul className="space-y-4 text-xl text-slate-300">
              <li><a className="hover:text-[#7fe7db]" href="#">Terms &amp; Conditions</a></li>
              <li><a className="hover:text-[#7fe7db]" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#7fe7db]" href="#">Help</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[2rem] font-bold text-white">Contact Us</h4>
            <div className="space-y-5 text-xl text-slate-200">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f7b64a] text-sm font-bold text-[#0a1d2d]">●</span>
                <p className="leading-relaxed">
                  <span className="block font-bold text-white">SPPU EDUTECH FOUNDATION</span>
                  <span className="block">Savitribai Phule Pune University</span>
                  <span className="block">Campus,</span>
                  <span className="block">Ganeshkhind, Pune, Maharashtra</span>
                  <span className="block">411007</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f7b64a] text-sm font-bold text-[#0a1d2d]">☎</span>
                <a href="tel:+918956327294" className="hover:text-[#7fe7db]">+91 - 8956327294</a>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f7b64a] text-sm font-bold text-[#0a1d2d]">✉</span>
                <a href="mailto:info@degreeplus.in" className="hover:text-[#7fe7db]">info@degreeplus.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-5 text-sm text-slate-300">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© 2025 JNTUH Education Foundation. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="hover:text-[#7fe7db]">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#7fe7db]">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-[#7fe7db]">Security</a>
            </div>
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
            <li><Link to="/skillsoft-catalog">Skillsoft Catalog</Link></li>
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