import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const STREAMS = [
  {
    title: 'Computer Science Engineering',
    desc: 'View CSE professional electives, semester filters and additional learning subjects.',
    to: '/cse-courses',
    icon: 'M2 3h20v14H2zM8 21h8M12 17v4M7 8l3 3-3 3M13 14h4'
  },
  {
    title: 'Computer Science (AI/ML)',
    desc: 'View AI/ML electives: testing, mobile, cloud, scripting and cloud security.',
    to: '/program?p=aiml',
    icon: 'M18 20V10M12 20V4M6 20v-6'
  },
  {
    title: 'Computer Science (Data Science)',
    desc: 'View Data Science electives: AI, DevOps, visualisation, NLP, cloud and blockchain.',
    to: '/program?p=ds',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4'
  },
  {
    title: 'Computer Science (CyberSecurity)',
    desc: 'View Cyber Security electives: ethical hacking, ML, blockchain and cloud security.',
    to: '/program?p=cs',
    icon: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z'
  },
  {
    title: 'Information Technology',
    desc: 'View IT electives: analytics, operating systems, full stack, AI and security.',
    to: '/program?p=it',
    icon: 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'
  },
  {
    title: 'Electronics and Communication',
    desc: 'View ECE electives: operating systems, networking, AI and machine learning.',
    to: '/program?p=ece',
    icon: 'M2 7h20v14H2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2'
  },
  {
    title: 'Electronics and Electrical',
    desc: 'View EEE additional learning: systems, networks, AI, data and business skills.',
    to: '/program?p=eee',
    icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'
  },
  {
    title: 'Mechanical Engineering',
    desc: 'View Mechanical additional learning: tools, data, AI and DevOps skills.',
    to: '/program?p=mech',
    icon: 'M4 4h16v16H4zM9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3'
  },
  {
    title: 'Civil Engineering',
    desc: 'View Civil additional learning: storytelling, data, tools and business skills.',
    to: '/program?p=civil',
    icon: 'M3 21h18M5 21V9l7-4 7 4v12M8 12h2M14 12h2M8 16h2M14 16h2'
  }
]

export default function LearningAreas() {
  return (
    <section className="bg-soft border-y border-line" id="learning-areas" aria-labelledby="learning-heading">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="text-center mb-8">
          <p className="text-teal font-extrabold tracking-widest uppercase text-xs mb-2">Programs</p>
          <h2 id="learning-heading" className="font-heading font-bold text-navy tracking-tight text-3xl md:text-4xl mb-2">Skillsoft Course Streams</h2>
          <p className="text-muted max-w-[44rem] mx-auto">Every stream now opens an internal course page with electives, semester filters and apply actions.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STREAMS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 60}>
              <Link to={s.to} className="group bg-white border border-line rounded-2xl p-6 flex flex-col gap-2.5 hover:border-teal hover:shadow-lg transition block">
                <div className="w-12 h-12 rounded-xl bg-teal-bg text-teal grid place-items-center [&_svg]:w-6 [&_svg]:h-6" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d={s.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <span className="font-heading font-bold text-navy">{s.title}</span>
                <span className="text-sm text-muted leading-relaxed">{s.desc}</span>
                <span className="text-sm font-bold text-teal group-hover:underline">View Courses →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}