import { Link } from 'react-router-dom'

// Soft atmospheric navy -> transparent dissolve (100% -> 80% -> 50% -> 25% -> 0%)
const DISSOLVE = 'linear-gradient(to right, #071735 0%, #071735 48%, rgba(7,23,53,0.8) 52%, rgba(7,23,53,0.5) 55%, rgba(7,23,53,0.25) 57.5%, rgba(7,23,53,0) 60%)'

// Readability overlay for small screens (image sits behind as a tinted backdrop)
const MOBILE = 'linear-gradient(to top, rgba(7,23,53,0.96) 0%, rgba(7,23,53,0.82) 45%, rgba(7,23,53,0.62) 100%)'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      aria-labelledby="hero-title"
    >
      {/* Full-bleed background photograph - continues underneath the navy */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_laptop.png"
          alt="Modern laptop on a desk with a professional learning platform on screen"
          className="h-full w-full object-cover object-center"
          loading="eager"
          sizes="100vw"
        />
      </div>

      {/* Desktop: dark navy on the left fades to transparent over the image (no hard edge) */}
      <div
        className="absolute inset-0 z-[1] hidden lg:block"
        style={{ backgroundImage: DISSOLVE }}
        aria-hidden="true"
      />

      {/* Mobile: subtle vertical navy overlay keeps the text readable */}
      <div
        className="absolute inset-0 z-[1] lg:hidden"
        style={{ backgroundImage: MOBILE }}
        aria-hidden="true"
      />

      {/* Content - left column, kept on the opaque part of the navy */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-xl">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-slate-400">›</span>
            <a href="#" className="hover:text-white transition-colors">Our Partners</a>
            <span className="text-slate-400">›</span>
            <span className="text-white font-semibold">Skillsoft</span>
          </nav>

          <p className="inline-flex items-center gap-2 text-teal-light font-semibold text-xs tracking-[0.22em] uppercase mb-5">
            <span className="block w-8 h-px bg-teal-light" aria-hidden="true" />
            Our Learning Partner
          </p>

          <h1 id="hero-title" className="font-heading text-white text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">
            Learn. Certify.
            <br />
            Build Your Career.
          </h1>

          <p className="font-heading text-white text-xl md:text-2xl font-semibold leading-snug mb-3">
            Global learning content. Industry-recognized certifications.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-[36rem] mb-8">
            JNTUH Education Foundation has partnered with Skillsoft to bring world-class
            digital learning content and professional development resources to students,
            faculty and professionals.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#learning-areas"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold bg-teal text-white hover:bg-teal-dark transition-colors shadow-[0_10px_30px_-8px_rgba(0,125,121,0.7)]"
            >
              Explore Skillsoft Courses
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <Link to="/cse-courses" className="text-sm font-semibold text-slate-200 hover:text-white transition-colors inline-flex items-center gap-1.5">
              Browse streams
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}