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
  (action) => ['github', 'linkedin'].includes(action.id) && action.href,
)

export const hero = {
  eyebrow: 'PROFILE',
  title: "Hi, I'm Swati Singh.",
  statement: 'Software Engineer, graduate student, and AI/ML researcher.',
  description:
    "I spent three years building production backend systems in fintech before moving to New York for my M.S. in Computer Science at NYU. Today, my work spans software systems, machine learning, and healthcare research.",
  status: 'Open to Spring 2027 opportunities',
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
  heading: 'About Me',
  paragraphs: [
    "I'm usually the quieter person in the room, but give me a problem and I can disappear into it for hours.",
    'I started my career building backend systems at Bajaj Finserv. After three years in industry, I moved to New York for graduate school and gradually found myself working across software engineering, machine learning, and healthcare research.',
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
  eyebrow: 'CONTACT DETAILS',
  heading: 'Want to Talk?',
  paragraphs: [
    "I'm currently exploring Spring 2027 Software Engineering and AI/ML opportunities.",
    "If you're building something interesting, I'd love to hear about it.",
  ],
}

export const footer = {
  copyright: 'Swati Singh © 2026',
  stack: 'Built with React + Vite',
  hosting: 'Hosted on GitHub Pages',
}
