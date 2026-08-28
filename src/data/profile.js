export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
]

export const profileLinks = {
  github: 'https://github.com/swati68',
  linkedin: 'https://www.linkedin.com/in/swati-6-singh',
  email: 'ss20478@nyu.edu',
  resume: '/resume/Singh_Swati_Resume.pdf',
}

export const contactActions = [
  {
    id: 'github',
    label: 'GitHub',
    href: profileLinks.github,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profileLinks.linkedin,
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: profileLinks.email ? `mailto:${profileLinks.email}` : '',
  },
]

export const heroActions = [
  {
    id: 'projects',
    label: 'View Projects',
    href: '#projects',
    icon: 'projects',
  },
  {
    id: 'resume',
    label: 'Resume',
    href: profileLinks.resume,
    icon: 'resume',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: profileLinks.github,
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profileLinks.linkedin,
    icon: 'linkedin',
  },
]

export const hero = {
  title: "Hi, I'm Swati Singh.",
  statement: 'Graduate Student @ NYU, AI/ML Researcher and Software Engineer.',
  description:
    'Before grad school, I spent three years building backend and production systems in fintech. These days, I work across software engineering, machine learning, and research.',
  status: 'Open to Spring 2027 internships and New Grad 2027 full-time opportunities',
}

export const about = {
  label: '01 / ABOUT',
  heading: 'About Me',
  paragraphs: [
    'I started out as a backend engineer, working mostly with Java and production systems at Bajaj Finserv. After a few years in industry, I wanted to explore machine learning and research more seriously, which brought me to NYU for graduate school.',
    'My work now ranges from healthcare research and machine learning to the occasional side project that lets me experiment with a completely different problem.',
  ],
  focusCards: [
    {
      title: 'Software Engineering',
      detail: 'Backend systems, REST APIs, microservices, and production reliability.',
    },
    {
      title: 'AI / ML',
      detail: 'Model pipelines, NLP workflows, LLM APIs, and GPU-backed inference.',
    },
    {
      title: 'Research Engineering',
      detail: 'Healthcare AI, clinical data, social determinants of health, and evaluation.',
    },
  ],
  metadata: [
    { label: 'LOCATION', value: 'New York City' },
    { label: 'CURRENT', value: 'M.S. Computer Science @ NYU' },
    { label: 'PREVIOUS', value: 'Senior Software Engineer @ Bajaj Finserv' },
    { label: 'FOCUS', value: 'ML Systems · AI · Backend' },
  ],
}

export const contact = {
  label: '06 / CONTACT',
  heading: 'Contact',
  paragraphs: [
    "I'm currently exploring Spring 2027 Software Engineering and AI/ML Internships and New Grad 2027 Full Time Opportunities.",
    "If you're building something interesting, I'd love to hear about it.",
  ],
  formSubject: 'Portfolio inquiry',
}

export const footer = {
  copyright: 'Swati Singh © 2026',
  stack: 'Built with React + Vite',
}
