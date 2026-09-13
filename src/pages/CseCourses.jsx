import { Link } from 'react-router-dom'
import SectionLink from '../components/SectionLink'
import {
  SectionHero,
  QuickHighlights,
  SubjectsGrid,
  FeaturedGrid,
  Catalog,
  DetailTable,
  useProgramMeta
} from './ProgramPage'
import AspireJourneys from '../components/AspireJourneys'

// Reconstructed CSE catalog (Computer Science Engineering). Mirrors the
// original static page: 6 professional-elective groups + additional learning.
const CSE = {
  name: 'Computer Science Engineering',
  short: 'CSE',
  tagline: 'AI, data, software development, cyber security, cloud, mobile and emerging technologies across Year 3 and Year 4.',
  detailTitle: 'Professional Elective 3 Courses',
  detailNote: 'Year 3 Semester 2 detail with duration, credits and course code.',
  featured: [
    'AI for Data Analytics & BI|Data / PE-1',
    'AI for Data Science|Data / Analytics',
    'AI for DevOps|DevOps / AI',
    'AI for Programmers|AI / Coding',
    'AI for Software Engineers|AI / Engineering',
    'Banking and Finance|Business',
    'Business Skills|Professional Skills',
    'C Programming Proficiency|Programming',
    'Cyber Security|Security / PE-4',
    'Data Analysis with R|Data / Additional',
    'Design Thinking|Innovation',
    'FinTech|Business Technology',
    'Generative AI and Prompt Engineering Essentials|GenAI / LLMs',
    'JavaScript Novice to Professional|Web / JavaScript',
    'Learn C#|Programming',
    'Learn Java|Programming',
    'Machine Learning|AI / ML',
    'Mastering Power BI|BI / Visualization',
    'Mobile Development with Android|Mobile / PE-3',
    'NLP & LLMs|AI / Language',
    'Prompt Engineering|GenAI',
    'Python Novice to Python Apprentice|Programming',
    'Software Testing and Software Testing Automation|QA / PE-3',
    'Virtual Reality|Emerging Technology'
  ],  detailRows: [
    ['Full Stack Development', '51 hours 01 minutes', '3 Credits', 'CS631PE'],
    ['Scripting Languages', '53 hours 23 minutes', '3 Credits', 'CS633PE'],
    ['Mobile Development', '48 hours 59 minutes', '3 Credits', 'CS634PE'],
    ['Android Development with Kotlin', '56 hours 47 minutes', '3 Credits', 'CS634PE'],
    ['iOS Development with Swift', '53 hours 23 minutes', '3 Credits', 'CS634PE'],
    ['Software Testing and Automation', '54 hours 17 minutes', '3 Credits', 'CS635PE']
  ],
  courses: [
    ['Artificial Intelligence', 'PE-1', 'Year 3 Semester 1', '45h 14m', '3 Credits', 'CS611PE'],
    ['AI for Data Analytics & BI', 'PE-1', 'Year 3 Semester 1', '45h 42m', '3 Credits', 'CS612PE'],
    ['AI for Data Science', 'PE-2', 'Year 3 Semester 1', '48h 15m', '3 Credits', 'CS621PE'],
    ['AI for DevOps', 'PE-2', 'Year 3 Semester 1', '49h 01m', '3 Credits', 'CS622PE'],
    ['Full Stack Development', 'PE-3', 'Year 3 Semester 2', '51h 01m', '3 Credits', 'CS631PE'],
    ['Scripting Languages', 'PE-3', 'Year 3 Semester 2', '53h 23m', '3 Credits', 'CS633PE'],
    ['Mobile Development', 'PE-3', 'Year 3 Semester 2', '48h 59m', '3 Credits', 'CS634PE'],
    ['Android Development with Kotlin', 'PE-3', 'Year 3 Semester 2', '56h 47m', '3 Credits', 'CS634PE'],
    ['iOS Development with Swift', 'PE-3', 'Year 3 Semester 2', '53h 23m', '3 Credits', 'CS634PE'],
    ['Software Testing and Automation', 'PE-3', 'Year 3 Semester 2', '54h 17m', '3 Credits', 'CS635PE'],
    ['Cyber Security', 'PE-4', 'Year 4 Semester 1', '52h 10m', '3 Credits', 'CS641PE'],
    ['Cloud Computing', 'PE-4', 'Year 4 Semester 1', '45h 18m', '3 Credits', 'CS642PE'],
    ['Machine Learning', 'PE-5', 'Year 4 Semester 1', '50h 20m', '3 Credits', 'CS651PE'],
    ['Cloud Security', 'PE-5', 'Year 4 Semester 1', '48h 50m', '3 Credits', 'CS652PE'],
    ['AI for Programmers', 'PE-6', 'Year 4 Semester 2', '49h 30m', '3 Credits', 'CS661PE'],
    ['AI for Software Engineers', 'PE-6', 'Year 4 Semester 2', '48h 33m', '3 Credits', 'CS662PE'],
    ['Generative AI and Prompt Engineering Essentials', 'Additional', 'Any Semester', '46h 40m', 'Optional Learning', ''],
    ['Learn Java', 'Additional', 'Any Semester', '47h 55m', 'Optional Learning', ''],
    ['Mastering Power BI', 'Additional', 'Any Semester', '45h 00m', 'Optional Learning', ''],
    ['Python Novice to Python Apprentice', 'Additional', 'Any Semester', '44h 30m', 'Optional Learning', ''],
    ['NLP & LLMs', 'Additional', 'Any Semester', '48h 12m', 'Optional Learning', ''],
    ['Data Analysis with R', 'Additional', 'Any Semester', '50h 38m', 'Optional Learning', ''],
    ['JavaScript Novice to Professional', 'Additional', 'Any Semester', '48h 21m', 'Optional Learning', '']
  ]
}

const CSE_FEATURED_IMAGES = [
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
  '/course-images/IMG12.jpg'
]

CSE.featured = CSE.featured.map((item, index) => (
  CSE_FEATURED_IMAGES[index] ? `${item}|${CSE_FEATURED_IMAGES[index]}` : item
))

export default function CseCourses() {
  const meta = useProgramMeta(CSE)

  return (
    <main>
      <div className="max-w-[1200px] mx-auto px-6 pt-4 text-sm text-muted" aria-label="Breadcrumb">
        <Link className="text-teal font-semibold hover:underline" to="/">Home</Link>
        <span> › </span>
        <SectionLink to="/" hash="learning-areas" className="text-teal font-semibold hover:underline">Skillsoft Streams</SectionLink>
        <span> › </span>
        <span>Computer Science Engineering</span>
      </div>

      <SectionHero P={CSE} />
      <QuickHighlights peCount={meta.peCount} hasAdditional={meta.hasAdditional} semLabel={meta.semLabel} />
      <AspireJourneys />
      <SubjectsGrid P={CSE} />
      <FeaturedGrid P={CSE} />
      <Catalog P={CSE} />
      <DetailTable P={CSE} />
      <div style={{ height: '1rem' }}></div>
    </main>
  )
}
