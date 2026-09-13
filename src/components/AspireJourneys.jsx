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
      ['Security Analyst to Security Architect', '/aspire-journeys/security-analyst-to-security-architect.png'],
      ['Programmer to Secure Agile Programmer', '/aspire-journeys/programmer-to-secure-agile-programmer.png'],
      ['Network Security Specialist to CloudOps Security Architect', '/aspire-journeys/network-security-specialist-to-cloudops-security-architect.png'],
      ['Penetration Tester to SecOps Engineer', '/aspire-journeys/penetration-tester-to-secops-engineer.png'],
      ['Data Analyst to Data Scientist', '/aspire-journeys/data-analyst-to-data-scientist.png'],
      ['ML Programmer to ML Architect', '/aspire-journeys/ml-programmer-to-ml-architect.png'],
      ['AI Apprentice to AI Architect', '/aspire-journeys/ai-apprentice-to-ai-architect.png'],
      ['Enterprise Dev to Full Stack Dev', '/aspire-journeys/enterprise-dev-to-full-stack-dev.png'],
      ['Enterprise Dev to DevOps Engineer', '/aspire-journeys/enterprise-dev-to-devops-engineer.png'],
      ['Software Tester to DevOps Automated Tester', '/aspire-journeys/software-tester-to-devops-automated-tester.png'],
      ['DevOps Engineer to CloudOps Architect', '/aspire-journeys/devops-engineer-to-cloudops-architect.png'],
      ['Software Project Analyst to Sr. Software Project Manager', '/aspire-journeys/software-project-analyst-to-sr-software-project-manager.png'],
      ['Software Project Lead to Advanced Scrum Master', '/aspire-journeys/software-project-lead-to-advanced-scrum-master.png'],
      ['App Developer to Blockchain Solutions Architect', '/aspire-journeys/app-developer-to-blockchain-solutions-architect.png'],
      ['Python Novice to Pythonista', '/aspire-journeys/python-novice-to-pythonista.png'],
      ['Web Programmer to Apprentice Programmer', '/aspire-journeys/web-programmer-to-apprentice-programmer.png'],
      ['Apprentice Programmer to Journeyman Developer', '/aspire-journeys/apprentice-programmer-to-journeyman-developer.png'],
      ['Journeyman Developer to Master Developer', '/aspire-journeys/journeyman-developer-to-master-developer.png']
    ]
  },
  {
    title: 'Leadership Development',
    journeys: [
      ['Leadership Development Core', '/aspire-journeys/leadership-development-core.png'],
      ['Virtual Work in the New Normal', '/aspire-journeys/virtual-work-in-the-new-normal.png'],
      ['First-time Manager Journey', '/aspire-journeys/first-time-manager-journey.png'],
      ['Mid-level Leader Journey', '/aspire-journeys/mid-level-leader-journey.png'],
      ['Leader of Leaders Journey', '/aspire-journeys/leader-of-leaders-journey.png'],
      ['Digital Mindset: Digital Visionary Mindset Journey', '/aspire-journeys/digital-mindset-digital-visionary-mindset-journey.png'],
      ['Innovation Mindset Journey', '/aspire-journeys/innovation-mindset-journey.png']
    ]
  }
]

export default function AspireJourneys() {
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
              {group.journeys.map(([title, fallbackImage], index) => {
                const image = COURSE_IMAGES[index] || fallbackImage
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
                )
              })}
            </div>
    </section>
  )
}
