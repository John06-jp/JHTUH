import { useState } from 'react'
import Reveal from './Home/Reveal'

const COURSE_IMAGES = [
  '/course-images/IMG1.jpg',
  '/course-images/IMG2.jpg',
  '/course-images/IMG3.jpg',
  '/course-images/IMG4.jpg',
  '/course-images/IMG5.jpg',
  '/course-images/IMG6.jpg',
  '/course-images/IMG7.jpg',
  '/course-images/IMG8.jpg',
  '/course-images/IMG9.jpg',
  '/course-images/IMG10.jpg',
  '/course-images/IMG11.jpg',
  '/course-images/IMG12.jpg',
  '/course-images/IMG13.jpg',
  '/course-images/IMG14.jpg',
  '/course-images/IMG15.jpg',
  '/course-images/IMG16.jpg',
  '/course-images/IMG17.jpg',
  '/course-images/IMG18.jpg',
  '/course-images/IMG19.jpg',
  '/course-images/IMG20.jpg',
  '/course-images/IMG21.jpg',
  '/course-images/IMG22.jpg',
  '/course-images/IMG23.jpg',
  '/course-images/IMG24.jpg'
]

// Category filtering is best-effort mapped from the path titles below.
const CATEGORIES = ['All', 'Technology & Development', 'Leadership Development', 'Data & Analytics', 'Cybersecurity']

const RAW_PATHS = [
  // ---- Technology & Developer ----
  { title: 'Security Analyst to Security Architect', category: 'Cybersecurity', desc: 'Grow from security operations into architecture leadership.' },
  { title: 'Programmer to Secure Agile Programmer', category: 'Cybersecurity', desc: 'Build secure coding skills within agile delivery teams.' },
  { title: 'Network Security Specialist to CloudOps Security Architect', category: 'Cybersecurity', desc: 'Advance from network defense into cloud security architecture.' },
  { title: 'Penetration Tester to SecOps Engineer', category: 'Cybersecurity', desc: 'Move from offensive testing into security operations.' },
  { title: 'Data Analyst to Data Scientist', category: 'Data & Analytics', desc: 'Elevate from analysis into advanced data science.' },
  { title: 'ML Programmer to ML Architect', category: 'Data & Analytics', desc: 'Progress from building models to architecting ML systems.' },
  { title: 'AI Apprentice to AI Architect', category: 'Data & Analytics', desc: 'Develop from AI foundations into solution architecture.' },
  { title: 'Enterprise Dev to Full Stack Dev', category: 'Technology & Development', desc: 'Broaden your skills across front and back end.' },
  { title: 'Enterprise Dev to DevOps Engineer', category: 'Technology & Development', desc: 'Transition from development into delivery automation.' },
  { title: 'Software Tester to DevOps Automated Tester', category: 'Technology & Development', desc: 'Learn automation within modern delivery pipelines.' },
  { title: 'DevOps Engineer to CloudOps Architect', category: 'Technology & Development', desc: 'Move from operations into cloud architecture.' },
  { title: 'Software Project Analyst to Sr. Software Project Manager', category: 'Technology & Development', desc: 'Lead larger software delivery teams effectively.' },
  { title: 'Software Project Lead to Advanced Scrum Master', category: 'Technology & Development', desc: 'Master advanced, scaled agile facilitation.' },
  { title: 'App Developer to Blockchain Solutions Architect', category: 'Technology & Development', desc: 'Apply blockchain to real-world application design.' },
  { title: 'Python Novice to Pythonista', category: 'Technology & Development', desc: 'Become fluent in the Python programming language.' },
  { title: 'Web Programmer to Apprentice Programmer', category: 'Technology & Development', desc: 'Strengthen core programming fundamentals.' },
  { title: 'Apprentice Programmer to Journeyman Developer', category: 'Technology & Development', desc: 'Hone professional software craftsmanship.' },
  { title: 'Journeyman Developer to Master Developer', category: 'Technology & Development', desc: 'Reach mastery in software engineering.' },
  // ---- Leadership Development ----
  { title: 'Leadership Development Core', category: 'Leadership Development', desc: 'Build core leadership and people skills.' },
  { title: 'Virtual Work in the New Normal', category: 'Leadership Development', desc: 'Lead productive, remote-first teams.' },
  { title: 'First-time Manager Journey', category: 'Leadership Development', desc: 'Make your first confident move into management.' },
  { title: 'Mid-level Leader Journey', category: 'Leadership Development', desc: 'Scale your impact as a growing leader.' },
  { title: 'Leader of Leaders Journey', category: 'Leadership Development', desc: 'Lead other leaders across the organization.' },
  { title: 'Digital Mindset: Digital Visionary Mindset Journey', category: 'Leadership Development', desc: 'Drive digital transformation with clear vision.' },
  { title: 'Innovation Mindset Journey', category: 'Leadership Development', desc: 'Cultivate creative, innovative team cultures.' }
]

const PATHS = RAW_PATHS.map((p, i) => ({ ...p, image: COURSE_IMAGES[i % COURSE_IMAGES.length] }))

const INITIAL_VISIBLE = 8

function FilterChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 min-h-[44px] rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
        active
          ? 'border-teal bg-teal text-white shadow-sm'
          : 'border-line bg-white text-navy hover:border-teal/70 hover:bg-teal/5'
      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal`}
    >
      {children}
    </button>
  )
}

export default function AspireJourneys() {
  const [activeCat, setActiveCat] = useState('All')
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(INITIAL_VISIBLE)

  const q = query.trim().toLowerCase()
  const filtered = PATHS.filter((p) => {
    const inCat = activeCat === 'All' || p.category === activeCat
    const inSearch = !q || p.title.toLowerCase().includes(q)
    return inCat && inSearch
  })

  const selectCat = (cat) => {
    setActiveCat(cat)
    setVisible(INITIAL_VISIBLE)
  }

  const changeQuery = (value) => {
    setQuery(value)
    setVisible(INITIAL_VISIBLE)
  }

  const shown = filtered.slice(0, visible)
  const hasMore = filtered.length > visible

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" id="aspire-journeys" aria-labelledby="aspire-journeys-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-teal font-extrabold tracking-widest uppercase text-xs mb-1.5">Aspire journeys</p>
          <h2 id="aspire-journeys-h" className="font-heading text-navy font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl">
            Role-based Skillsoft learning paths
          </h2>
          <p className="text-muted mt-2 leading-relaxed">
            Follow practical, role-based pathways designed to support workplace skills and certification preparation.
          </p>
        </div>

        {/* Search + filters */}
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <label className="relative flex-1 lg:max-w-[26rem]">
            <span className="sr-only">Search learning paths</span>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden="true">
              <path d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => changeQuery(e.target.value)}
              placeholder="Search learning paths…"
              className="w-full min-h-[44px] rounded-xl border border-line bg-white pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/25"
            />
          </label>

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar lg:flex-wrap lg:justify-end lg:overflow-visible" role="group" aria-label="Filter learning paths by category">
            {CATEGORIES.map((c) => (
              <FilterChip key={c} active={activeCat === c} onClick={() => selectCat(c)}>
                {c}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Cards */}
        {shown.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {shown.map((p, i) => (
                <Reveal key={p.title} delay={(i % 4) * 70} className="h-full">
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-lg"
                  >
                    <div className="overflow-hidden aspect-[16/9] bg-soft">
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                      <span className="mb-2 inline-flex w-fit rounded-full bg-teal/[0.08] px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-teal">
                        {p.category}
                      </span>
                      <h3 className="font-heading text-sm sm:text-base font-bold leading-snug text-navy">{p.title}</h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setVisible(filtered.length)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-teal bg-white px-6 py-3 text-sm font-bold text-teal transition-all duration-200 hover:bg-teal hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  View All Learning Paths
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-line bg-soft p-10 text-center text-muted">
            No learning paths match your search or filter.
          </div>
        )}
      </div>
    </section>
  )
}
