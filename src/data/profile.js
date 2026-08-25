export const navItems = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'research', label: 'research' },
  { id: 'projects', label: 'projects' },
  { id: 'toolkit', label: 'toolkit' },
  { id: 'contact', label: 'contact' },
]

export const profileLinks = {
  github: 'https://github.com/swati68',
  linkedin: 'https://www.linkedin.com/in/swati-6-singh',
  email: 'ss20478@nyu.edu',
  resume: '/resume/Singh_Swati_Resume.pdf',
}

export const contactActions = [
  {
    id: 'email',
    label: 'Email',
    href: profileLinks.email ? `mailto:${profileLinks.email}` : '',
    copyValue: profileLinks.email,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profileLinks.linkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: profileLinks.github,
    external: true,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: profileLinks.resume,
    download: true,
  },
]

export const footerLinks = contactActions.filter(
  (action) => ['github', 'linkedin', 'resume'].includes(action.id) && action.href,
)

export const hero = {
  prompt: 'swati@portfolio:~$ whoami',
  greeting: "hey, i'm swati.",
  name: 'Swati Singh',
  statement:
    'I build software systems across backend engineering, AI/ML, and healthcare research.',
  description:
    "I spent three years building backend systems at Bajaj Finserv. Now I'm pursuing my M.S. in Computer Science at NYU and working on healthcare AI research.",
  status: 'OPEN TO SPRING 2027 OPPORTUNITIES',
  focus: ['Software Engineering', 'AI/ML', 'Research Engineering'],
}

export const currently = [
  'New York',
  'M.S. CS @ NYU',
  'Healthcare AI Research',
  'Open to Spring 2027',
]

export const about = {
  label: '01 / ABOUT',
  heading: 'a little about me.',
  paragraphs: [
    "I'm usually the quieter person in the room, but give me a problem and I can disappear into it for hours.",
    'I started my career building backend systems at Bajaj Finserv. After three years in industry, I moved to New York for graduate school and gradually found myself working across software engineering, machine learning, and healthcare research.',
  ],
  metadata: [
    { label: 'LOCATION', value: 'New York' },
    { label: 'CURRENT', value: 'M.S. Computer Science @ NYU' },
    { label: 'PREVIOUS', value: 'Bajaj Finserv' },
    { label: 'INTERESTS', value: 'ML systems / AI / backend' },
    { label: 'WORK STYLE', value: 'Deep work' },
  ],
}

export const contact = {
  label: '06 / CONTACT',
  prompt: '> ./say-hello',
  heading: 'want to talk?',
  paragraphs: [
    "I'm currently exploring Spring 2027 Software Engineering and AI/ML opportunities.",
    "If you're building something interesting, I'd love to hear about it.",
  ],
}

export const footer = {
  copyright: 'Swati Singh © 2026',
  stack: 'built with React + Vite',
  hosting: 'hosted on GitHub Pages',
  end: '> EOF',
}
