import { Link } from 'react-router-dom'

const catalogCourses = [
  {
    title: 'AI for Data Analytics & BI',
    duration: '30 hours, 42 minutes',
    page: 'https://degreeplus.in/skillsoft_latest_new/ai-for-data-analytics-bi/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=1',
    overview: 'Introduces AI and generative AI for data analytics and business intelligence, including foundational AI concepts, ethical considerations, prompt engineering, data manipulation, and visualization.',
    outcomes: [
      'Understand machine learning, deep learning, neural networks, generative AI, and GPT models.',
      'Apply responsible and ethical AI practices.',
      'Create prompts for manipulating and analyzing data.',
      'Filter, group, combine, and visualize data effectively.',
      'Use AI-powered features in Power BI and train ML models for business insights.',
      'Build interactive visualizations with tools such as D3.js and generative AI.'
    ]
  },
  {
    title: 'AI for Data Science',
    duration: '45 hours, 53 minutes, 22 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/ai-for-data-science/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=2',
    overview: 'Covers generative AI, deep learning, large language models, natural language processing, and responsible AI for real-world applications.',
    outcomes: [
      'Build a foundation in generative AI, deep learning, and LLMs.',
      'Implement, fine-tune, and evaluate AI and NLP models with tools such as Hugging Face.',
      'Understand ethical considerations and the environmental impact of AI.',
      'Apply AI to content creation, data generation, customer engagement, and other business functions.'
    ]
  },
  {
    title: 'AI for DevOps',
    duration: '30 hours, 23 minutes, 35 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/ai-for-devops/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=3',
    overview: 'Introduces AI and generative AI concepts for DevOps, IT automation, and responsible technology adoption.',
    outcomes: [
      'Understand AI and generative AI technologies.',
      'Apply prompt engineering, IT automation, and AI-powered DevOps techniques.',
      'Use AI responsibly in IT and DevOps.',
      'Apply AI solutions through case studies and simulators.',
      'Identify emerging AI and DevOps trends and tools.'
    ]
  },
  {
    title: 'AI for Programmers',
    duration: '30 hours, 26 minutes, 41 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/ai-for-programmers/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=4',
    overview: 'An introductory AI and generative AI journey for programmers, covering AI concepts, ethical considerations, and programming-oriented applications.',
    outcomes: [
      'Understand the practical use of AI in coding workflows.',
      'Apply AI concepts and prompt engineering for software tasks.',
      'Improve productivity using AI-assisted development processes.',
      'Leverage responsible AI practices in programming.'
    ]
  },
  {
    title: 'AI for Software Engineers',
    duration: '30 hours, 33 minutes, 13 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/ai-for-software-engineers/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=5',
    overview: 'Develops software-engineering skills in generative AI, NLP, LLMs, transformers, prompt engineering, and responsible AI.',
    outcomes: [
      'Explore GPT models, deep learning, and transformers.',
      'Use prompt engineering and LLMs productively.',
      'Work with Hugging Face and PyTorch.',
      'Understand fine-tuning, RAG systems, and responsible AI practices.'
    ]
  },
  {
    title: 'Banking and Finance',
    duration: '30 hours, 17 minutes, 28 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/banking-and-finance/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=6',
    overview: 'Combines finance fundamentals with AI, blockchain, automation, communication, time management, and leadership for a technology-driven financial sector.',
    outcomes: [
      'Build finance basics and decision-making skills.',
      'Use Excel, dashboards, and data basics in finance contexts.',
      'Understand banking, insurance, risk management, and financial statements.',
      'Learn how AI, automation, blockchain, and infrastructure affect finance.'
    ]
  },
  {
    title: 'Business Skills',
    duration: '29 hours, 21 minutes, 51 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/business-skills/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=7',
    overview: 'Builds practical communication, problem-solving, time-management, decision-making, leadership, teamwork, and productivity skills for professional environments.',
    outcomes: [
      'Strengthen communication and teamwork.',
      'Use analytics, design thinking, and problem-solving frameworks.',
      'Improve time management and project execution.',
      'Develop leadership, productivity, and digital work skills.'
    ]
  },
  {
    title: 'C Programming Proficiency',
    duration: '29 hours, 22 minutes, 33 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/c-programming-proficiency/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=8',
    overview: 'Combines operating-system fundamentals with a structured C programming journey, hands-on labs, real-world examples, and a final exam.',
    outcomes: [
      'Understand OS concepts such as processes, threads, and memory management.',
      'Develop structured C programming skills with practical examples.',
      'Learn pointers, memory handling, and file operations.',
      'Write efficient and professional-quality C programs.'
    ]
  },
  {
    title: 'Cyber Security',
    duration: '30 hours, 35 minutes, 25 seconds',
    page: 'https://degreeplus.in/skillsoft_latest/cyber_security/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=9',
    overview: 'Provides foundational networking and Windows knowledge together with cybersecurity concepts, threats, risk management, and ethical hacking.',
    outcomes: [
      'Understand networking, routing, and security protocols.',
      'Get hands-on knowledge of Windows environments and digital security.',
      'Recognize cyber threats and perform risk management.',
      'Explore ethical hacking and personal cybersecurity practices.'
    ]
  },
  {
    title: 'Data Analysis with R',
    duration: '30 hours, 57 minutes, 15 seconds',
    page: 'https://degreeplus.in/skillsoft_latest_new/data-analysis-with-r/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=10',
    overview: 'Teaches R programming for statistical analysis, data manipulation, dataset exploration, modeling, and data mining.',
    outcomes: [
      'Learn R programming structures and workflows.',
      'Work with datasets and perform statistical analysis.',
      'Use R for data mining and modeling tasks.',
      'Apply practical analysis techniques to real-world data.'
    ]
  },
  {
    title: 'Design Thinking',
    duration: '31 hours, 16 minutes, 46 seconds',
    page: 'https://degreeplus.in/skillsoft_latest_new/design-thinking/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=11',
    overview: 'Teaches a human-centered, iterative approach to problem-solving and innovation, from user research through prototyping and testing.',
    outcomes: [
      'Apply design-thinking principles to solve real-world problems.',
      'Engage stakeholders and create user-centric solutions.',
      'Create prototypes and test with users.',
      'Develop innovation, customer experience, and creative leadership skills.'
    ]
  },
  {
    title: 'FinTech',
    duration: '29 hours, 21 minutes, 51 seconds',
    page: 'https://degreeplus.in/skillsoft_latest_new/fintech/',
    apply: 'https://degreeplus.in/SPPU-Online/skillsoft/?courseId=12',
    overview: 'Explores blockchain, cryptocurrency, Ethereum, Hyperledger Fabric, smart contracts, Python, DevOps, AI/ML, and automation in financial technology.',
    outcomes: [
      'Learn blockchain and cryptocurrency fundamentals.',
      'Understand smart contracts, Ethereum, and security models.',
      'Explore digital finance tools and fintech transformation.',
      'Connect AI/ML, DevOps, and automation to financial technology.'
    ]
  }
]

export default function SkillsoftCatalogPage() {
  const tags = ['AI', 'Data', 'Cybersecurity', 'Finance', 'DevOps', 'Programming']

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
              {tags.map((tag) => (
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
              {catalogCourses.length} courses
            </span>
          </div>

          <div className="grid gap-5">
            {catalogCourses.map((course, index) => (
              <article
                key={course.title}
                className="group overflow-hidden rounded-[26px] border border-line bg-white p-5 shadow-[0_12px_30px_rgba(17,24,39,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-[0_24px_48px_rgba(0,91,92,0.12)]"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-bg text-sm font-extrabold text-teal">
                        {index + 1}
                      </span>
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-teal">Course {index + 1}</p>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-navy leading-snug">{course.title}</h3>

                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                      <span className="rounded-full border border-line bg-soft px-2.5 py-1.5 font-medium">{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                    <a
                      href={course.page}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-teal bg-white px-4 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal-bg"
                    >
                      Details
                    </a>
                    <a
                      href={course.apply}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-teal px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-teal-dark"
                    >
                      Apply now
                    </a>
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
        </section>
      </div>
    </main>
  )
}
