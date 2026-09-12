const FEATURES = [
  {
    title: 'Global Leader',
    text: 'A global leader in digital learning and workforce development.',
    icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'
  },
  {
    title: 'High-Quality Content',
    text: 'Thousands of expert-led courses across technology, business and leadership.',
    icon: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z'
  },
  {
    title: 'Industry Recognition',
    text: 'Certifications valued by employers worldwide.',
    icon: 'M12 2l8 3v6c0 5-3.5 8-8 11-4.5-3-8-6-8-11V5l8-3zM9 12l2 2 4-4'
  },
  {
    title: 'Trusted by Millions',
    text: 'Used by organizations and learners in over 160 countries.',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'
  },
  {
    title: 'Career Impact',
    text: 'Learn in-demand skills and achieve your career goals faster.',
    icon: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6'
  }
]

export default function TrustBar() {
  return (
    <section className="bg-soft" aria-label="Key highlights of Skillsoft partnership">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 pb-14 lg:pb-16">
        {/* One unified horizontal strip — 5 equal cells with hairline separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x lg:divide-y-0 divide-line/60 bg-white border border-line/70 rounded-2xl shadow-[0_20px_50px_-30px_rgba(7,23,53,0.25)] overflow-hidden">
          {FEATURES.map((f) => (
            <div key={f.title} className="px-6 py-9 flex flex-col items-center text-center gap-4">
              <span
                className="w-14 h-14 rounded-full bg-navy/[0.05] text-navy grid place-items-center [&_svg]:w-6 [&_svg]:h-6"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path d={f.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1.5">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}