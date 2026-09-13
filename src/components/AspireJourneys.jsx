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

const ASPIRE_JOURNEYS = [
  {
    title: 'Technology & Developer',
    journeys: [
      ['Security Analyst to Security Architect'],
      ['Programmer to Secure Agile Programmer'],
      ['Network Security Specialist to CloudOps Security Architect'],
      ['Penetration Tester to SecOps Engineer'],
      ['Data Analyst to Data Scientist'],
      ['ML Programmer to ML Architect'],
      ['AI Apprentice to AI Architect'],
      ['Enterprise Dev to Full Stack Dev'],
      ['Enterprise Dev to DevOps Engineer'],
      ['Software Tester to DevOps Automated Tester'],
      ['DevOps Engineer to CloudOps Architect'],
      ['Software Project Analyst to Sr. Software Project Manager'],
      ['Software Project Lead to Advanced Scrum Master'],
      ['App Developer to Blockchain Solutions Architect'],
      ['Python Novice to Pythonista'],
      ['Web Programmer to Apprentice Programmer'],
      ['Apprentice Programmer to Journeyman Developer'],
      ['Journeyman Developer to Master Developer']
    ]
  },
  {
    title: 'Leadership Development',
    journeys: [
      ['Leadership Development Core'],
      ['Virtual Work in the New Normal'],
      ['First-time Manager Journey'],
      ['Mid-level Leader Journey'],
      ['Leader of Leaders Journey'],
      ['Digital Mindset: Digital Visionary Mindset Journey'],
      ['Innovation Mindset Journey']
    ]
  }
]

export default function AspireJourneys() {
  let imageIndex = 0

  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-12" id="aspire-journeys" aria-labelledby="aspire-journeys-h">
      <p className="text-teal font-extrabold tracking-widest uppercase text-xs mb-1.5">Aspire journeys</p>
      <h2 id="aspire-journeys-h" className="section-title">Role-based Skillsoft learning paths</h2>
      <p className="text-muted max-w-[46rem]">
        Visual journey cards collected from the attached Aspire screenshots and grouped by their source catalog section.
      </p>

      <div className="grid gap-8 mt-6">
        {ASPIRE_JOURNEYS.map((group) => (
          <div key={group.title}>
            <h3 className="font-heading text-navy text-xl font-bold mb-4">Aspire Journeys - {group.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.journeys.map(([title]) => {
                const image = COURSE_IMAGES[imageIndex % COURSE_IMAGES.length]
                imageIndex += 1

                return (
                  <article key={title} className="bg-white border border-line rounded-xl overflow-hidden shadow-sm hover:border-teal hover:shadow-md transition">
                    <img className="w-full aspect-[16/10] object-cover bg-soft" src={image} alt="" loading="lazy" />
                    <div className="p-4">
                      <h4 className="font-heading text-navy text-sm leading-snug font-bold">{title}</h4>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
