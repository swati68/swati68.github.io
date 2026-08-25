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
    id: 'linkedin',
    label: 'LinkedIn',
    href: profileLinks.linkedin,
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: profileLinks.github,
    icon: 'github',
  },
]

export const hero = {
  title: "Hi, I'm Swati Singh.",
  statement: 'Software Engineer, graduate student, and AI/ML researcher.',
  description:
    "I spent three years building production backend systems in fintech before moving to New York for my M.S. in Computer Science at NYU. Today, my work spans software systems, machine learning, and healthcare research.",
  status: 'Open to Spring 2027 Internship/ New Grad 2027 Opportunities',
}

export const about = {
  label: '01 / ABOUT',
  heading: 'About Me',
  paragraphs: [
    'I started in backend engineering, where I learned how much good systems work depends on clear interfaces, careful tradeoffs, and calm debugging under production pressure.',
    'After three years at Bajaj Finserv, I moved to New York for graduate school at NYU. My work now sits across software systems, machine learning, and healthcare research, with a focus on building things that are technically solid and genuinely useful.',
  ],
  focusCards: [
    {
      title: 'Software Engineering',
      detail: 'Backend systems, REST APIs, microservices, and production reliability.',
      meta: 'Java · Systems · APIs',
    },
    {
      title: 'AI / ML',
      detail: 'Model pipelines, NLP workflows, LLM APIs, and GPU-backed inference.',
      meta: 'ML · NLP · Inference',
    },
    {
      title: 'Research Engineering',
      detail: 'Healthcare AI, clinical data, social determinants of health, and evaluation.',
      meta: 'Healthcare · SDoH · Evaluation',
    },
  ],
  metadata: [
    { label: 'LOCATION', value: 'New York' },
    { label: 'CURRENT', value: 'M.S. Computer Science @ NYU' },
    { label: 'PREVIOUS', value: 'Bajaj Finserv' },
    { label: 'INTERESTS', value: 'ML Systems · AI · Backend' },
    { label: 'WORK STYLE', value: 'Deep Work' },
  ],
}

export const contact = {
  label: '06 / CONTACT',
  heading: 'Contact',
  paragraphs: [
    "I'm currently exploring Spring 2027 Software Engineering and AI/ML opportunities.",
    "If you're building something interesting, I'd love to hear about it.",
  ],
  formSubject: 'Portfolio inquiry',
}

export const footer = {
  copyright: 'Swati Singh © 2026',
  stack: 'Built with React + Vite',
  hosting: 'Hosted on GitHub Pages',
}
