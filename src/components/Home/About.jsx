const BENEFITS = [
  'Access to 22,000+ expert-led courses',
  'Learning in multiple formats \u2013 video, audio, books, labs and practice tests',
  'Hands-on labs and real-world projects',
  'Role-based learning paths for career growth',
  'Industry-recognized certifications',
  'Personalized learning and skill assessments',
  'Available anytime, anywhere on any device'
]

export default function About() {
  return (
    <section className="bg-white" id="about" aria-labelledby="about-heading">
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-teal font-extrabold tracking-widest uppercase text-xs mb-2">Partnership</p>
          <h2 id="about-heading" className="font-heading font-bold text-navy tracking-tight text-3xl md:text-4xl mb-3">About Skillsoft</h2>
          <div className="grid gap-4 text-muted leading-relaxed mb-6">
            <p>
              Skillsoft is a leading global provider of digital learning, offering a comprehensive portfolio of learning content, skills assessments and performance support resources. With a legacy of more than 25 years, Skillsoft empowers learners and organizations to build essential skills, drive performance and achieve business outcomes.
            </p>
            <p>
              Through our partnership, JNTUH Education Foundation brings Skillsoft’s premium learning library to students, faculty and professionals—helping them stay relevant, competitive and future-ready.
            </p>
          </div>
          <a href="#learning-areas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-teal text-white hover:bg-teal-dark transition">
            Explore Skillsoft Courses
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </a>
        </div>

        <div id="certifications">
          <div className="bg-navy text-white rounded-2xl p-7 md:p-8 shadow-xl">
            <h2 className="font-heading text-white text-xl md:text-2xl font-bold mb-5">What You Get with Skillsoft</h2>
            <ul className="grid gap-3 text-[0.95rem] text-slate-200">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-teal text-white grid place-items-center text-sm font-bold" aria-hidden="true">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}