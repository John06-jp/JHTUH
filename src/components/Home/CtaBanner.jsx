export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-teal to-navy" aria-labelledby="cta-title">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid gap-6 items-center text-center lg:grid-cols-[auto_1fr_auto] lg:text-left">
        <div aria-hidden="true" className="hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-20 h-20">
            <rect x="15" y="25" width="70" height="50" rx="6" fill="#007D79" opacity="0.15" />
            <rect x="22" y="32" width="56" height="36" rx="4" fill="#007D79" opacity="0.25" />
            <path d="M50 15 L70 30 L70 55 C70 70 50 82 50 82 C50 82 30 70 30 55 L30 30 Z" fill="#007D79" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <h2 id="cta-title" className="text-white font-heading text-2xl md:text-4xl mb-2 font-bold">Empowering Futures Through Skillsoft</h2>
          <p className="text-teal-light/90 max-w-[32rem] mx-auto lg:mx-0">
            Skillsoft opens doors to new skills, certifications and career opportunities.
          </p>
        </div>
        <div>
          <a href="#learning-areas" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold bg-gold text-navy hover:bg-yellow-500 transition">
            Start Learning with Skillsoft
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}