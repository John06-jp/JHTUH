import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SKILLSOFT_CATEGORIES, SKILLSOFT_COURSES, SKILLSOFT_DOMAINS } from '../data/skillsoftCatalog'

const hasLink = (url) => url && url !== '#'


export default function SkillsoftCatalogPage() {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return SKILLSOFT_COURSES.filter((c) => {
      const inCat = activeCat === 'All' || c.category === activeCat
      if (!inCat) return false
      if (!q) return true
      const hay = [c.title, c.overview, c.category, ...(c.outcomes || [])].join(' ').toLowerCase()
      return q.split(/\s+/).every((w) => hay.includes(w))
    })
  }, [query, activeCat])

  return (
    <main className="bg-soft text-ink">
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:py-12">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link className="font-semibold text-teal hover:underline" to="/">Home</Link>
          <span>›</span>
          <span>Skillsoft Catalog</span>
        </div>

        <header className="mb-8 overflow-hidden rounded-[28px] border border-line bg-gradient-to-br from-navy via-[#0f2b45] to-[#0c4f60] p-6 text-white shadow-[0_28px_80px_rgba(15,39,57,0.18)] md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-teal-light">Degree Plus / Skillsoft</p>
              <h1 className="font-heading text-3xl font-bold tracking-tight md:text-5xl">Skillsoft Course Catalog</h1>
              <p className="mt-4 max-w-2xl text-base text-slate-200">
                Collected from the Degree Plus Skillsoft catalog and linked course detail pages on 2026-09-12.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILLSOFT_CATEGORIES.filter((t) => t !== 'All').map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-teal-light backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-300">Standard fee</p>
              <p className="mt-2 text-2xl font-extrabold text-white">INR 5,000</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-300">Offer fee</p>
              <p className="mt-2 text-2xl font-extrabold text-white">INR 550</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:col-span-1">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-300">Provider</p>
              <p className="mt-2 text-base font-semibold text-white">Degree Plus / SPPU Edutech Foundation</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-300">Contact</p>
              <p className="mt-2 text-base font-semibold text-white">+91 8956327294</p>
            </div>
          </div>
        </header>

        <section className="mb-8 mt-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-teal">Catalog</p>
              <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">Available courses</h2>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-teal/30 bg-teal-bg px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-teal">
              {filtered.length} of {SKILLSOFT_COURSES.length} courses
            </span>
          </div>

          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center">
            <label className="relative block flex-1">
              <span className="sr-only">Search Skillsoft courses</span>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden="true">
                <path d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by role, skill, or technology…"
                className="w-full min-h-[44px] rounded-xl border border-line bg-white pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/25"
              />
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar" role="group" aria-label="Filter courses by category">
              {SKILLSOFT_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCat(c)}
                  aria-pressed={activeCat === c}
                  className={`inline-flex min-h-[44px] shrink-0 items-center rounded-full border px-4 text-sm font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${activeCat === c ? 'border-teal bg-teal text-white shadow-sm' : 'border-line bg-white text-navy hover:border-teal/60 hover:text-teal'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {filtered.map((course) => (
              <article
                key={course.slug}
                id={course.slug}
                className="group scroll-mt-24 overflow-hidden rounded-[26px] border border-line bg-white p-5 shadow-[0_12px_30px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-[0_24px_48px_rgba(0,91,92,0.12)]"
              >
                <img
                  src={course.image}
                  alt={`${course.title} course illustration`}
                  loading="lazy"
                  className="mb-5 h-56 w-full rounded-2xl object-cover object-center"
                />
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-teal/[0.08] px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-teal">
                        {course.category}
                      </span>
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-teal">{course.duration}</p>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-navy leading-snug">{course.title}</h3>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                    {hasLink(course.page) && (
                      <a
                        href={course.page}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-teal bg-white px-4 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal-bg"
                      >
                        Details
                      </a>
                    )}
                    {hasLink(course.apply) && (
                      <a
                        href={course.apply}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-teal px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-teal-dark"
                      >
                        Apply now
                      </a>
                    )}
                    {!hasLink(course.page) && !hasLink(course.apply) && (
                      <span className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-dashed border-line bg-soft px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-muted">
                        Details coming soon
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-line bg-soft/60 p-4">
                  <p className="text-base leading-relaxed text-muted">{course.overview}</p>
                </div>

                <div className="mt-5">
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-navy">Learning outcomes</h4>
                  <ul className="grid gap-2.5 text-sm text-muted md:grid-cols-2">
                    {course.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 rounded-xl border border-line bg-slate-50 px-3 py-2.5">
                        <span className="mt-0.5 text-base text-teal">•</span>
                        <span className="leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-line bg-soft p-10 text-center text-muted">
              No courses match your search or filter.
            </div>
          )}

          <section className="mt-10 rounded-[26px] border border-line bg-soft/60 p-6" aria-label="Skillsoft content domains">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-teal">Content families</p>
            <h2 className="mt-2 font-heading text-xl font-bold text-navy md:text-2xl">38 mapped Skillsoft domains</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              These are the Part-A content families from the mapping workbook that sit behind the tracks above.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SKILLSOFT_DOMAINS.map((d) => (
                <li key={d} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy">
                  {d}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </main>
  )
}
