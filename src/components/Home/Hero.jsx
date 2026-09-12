import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy text-white"
      aria-labelledby="hero-title"
    >
      {/* Photograph layer — right ~55% on large screens, full-bleed backdrop on mobile */}
      <div className="absolute inset-0 z-0 lg:left-[43%]">
        <img
          src="/hero_laptop.png"
          alt="Modern laptop on a desk with a professional learning platform on screen"
          className="h-full w-full object-cover object-center"
          loading="eager"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
      </div>

      {/* Soft fog that blurs the transition seam (subtle depth-of-field) */}
      <div className="absolute inset-y-0 z-[1] hidden lg:block left-[30%] w-[26%] bg-navy/45 blur-3xl" aria-hidden="true" />

      {/* Navy → transparent horizontal gradient: strongest far left, dissolving center-right */}
      <div
        className="absolute inset-0 z-[2] hidden lg:block bg-gradient-to-r from-navy from-0% via-navy/90 via-[38%] to-transparent to-[84%]"
        aria-hidden="true"
      />

      {/* Mobile readability overlay (photo sits behind navy on small screens) */}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-t from-navy via-navy/85 to-navy/70 lg:hidden"
        aria-hidden="true"
      />

      {/* Content — left column, ~45% width, kept safely on dark navy */}
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