import {
  TechnologyIcon,
  DataIcon,
  SecurityIcon,
  CloudIcon,
  LeadershipIcon,
  BusinessIcon,
  DevOpsIcon,
  AIIcon
} from './learningLogos'

export const LEARNING_AREAS = [
  {
    key: 'technology',
    tag: 'Technology',
    label: 'Technology & Development',
    Icon: TechnologyIcon,
    href: '/program?p=it',
    desc: 'Build modern technical skills across software, web, and application development.',
    topics: ['Software Development', 'Web Development', 'Programming', 'Application Development']
  },
  {
    key: 'data',
    tag: 'Data',
    label: 'Data & Analytics',
    Icon: DataIcon,
    href: '/program?p=ds',
    desc: 'Turn raw information into insight with analytics, visualisation, and data science.',
    topics: ['Data Science', 'Data Analysis with R', 'Machine Learning', 'Mastering Power BI', 'Data Storytelling']
  },
  {
    key: 'security',
    tag: 'Security',
    label: 'Cybersecurity',
    Icon: SecurityIcon,
    href: '/program?p=cs',
    desc: 'Protect systems, data, and networks with industry-recognised security skills.',
    topics: ['Ethical Hacking', 'Cyber Security', 'Cloud Security', 'Security+ Prep']
  },
  {
    key: 'cloud',
    tag: 'Cloud',
    label: 'Cloud Computing',
    Icon: CloudIcon,
    href: '/program?p=aiml',
    desc: 'Design, deploy, and manage modern cloud infrastructure and services.',
    topics: ['Cloud Computing', 'AWS', 'Azure', 'Cloud Security']
  },
  {
    key: 'leadership',
    tag: 'Leadership',
    label: 'Leadership & Management',
    Icon: LeadershipIcon,
    href: '/cse-courses',
    desc: 'Grow your people and process skills to lead teams and projects effectively.',
    topics: ['Project Management', 'Business Skills', 'Leadership', 'Communication']
  },
  {
    key: 'business',
    tag: 'Business',
    label: 'Business Skills',
    Icon: BusinessIcon,
    href: '/cse-courses',
    desc: 'Develop the professional, analytical, and communication skills workplaces need.',
    topics: ['Business Skills', 'Data Storytelling', 'Professional Development', 'Communication']
  },
  {
    key: 'devops',
    tag: 'DevOps',
    label: 'IT Operations & DevOps',
    Icon: DevOpsIcon,
    href: '/program?p=ds',
    desc: 'Automate, deploy, and operate reliable infrastructure and delivery pipelines.',
    topics: ['DevOps', 'Operating Systems', 'Computer Networking', 'Automation']
  },
  {
    key: 'ai',
    tag: 'AI',
    label: 'AI & Emerging Technologies',
    Icon: AIIcon,
    href: '/program?p=aiml',
    desc: 'Explore artificial intelligence, machine learning, and emerging technologies.',
    topics: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'NLP & LLMs', 'Deep Learning']
  }
]