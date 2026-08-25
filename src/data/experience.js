export const experienceSection = {
  label: '02 / EXPERIENCE',
  heading: "where i've worked.",
  intro: [
    'My path started in production backend systems at Bajaj Finserv and now extends into healthcare AI research at NYU.',
    'I joined Bajaj as an intern, left as a Senior Software Engineer, and carried that systems mindset into graduate research.',
  ],
}

export const experienceTimeline = [
  {
    period: '2022',
    role: 'Software Engineering Intern',
    organization: 'Bajaj Finserv',
    summary:
      'Worked on Core Java to Spring Boot modernization and Partner Integration REST APIs.',
    highlights: [
      {
        value: '~6 mo → ~1 mo',
        label: 'partner onboarding improvement',
      },
    ],
    tags: ['Core Java', 'Spring Boot', 'Partner Integration REST APIs'],
  },
  {
    period: '2022 — 2024',
    role: 'Software Engineer',
    organization: 'Bajaj Finserv',
    summary:
      'Built a multithreaded Java scheduler handling millions of transaction documents for a Document Management System.',
    highlights: [],
    tags: ['Microservices', 'Concurrency', 'DMS', 'Java'],
  },
  {
    period: '2024 — 2025',
    role: 'Senior Software Engineer',
    organization: 'Bajaj Finserv',
    summary:
      'Worked on real-time authorization APIs and rule-processing workflows for production fintech systems.',
    highlights: [
      {
        value: '< 2ms',
        label: 'authorization API response time',
      },
      {
        value: '+20%',
        label: 'approval-rate contribution',
      },
    ],
    tags: ['Java', 'REST APIs', 'Rule Engines'],
  },
  {
    period: '2026 — PRESENT',
    role: 'Research Assistant',
    organization: 'NYU School of Global Public Health',
    summary:
      'Healthcare AI research across clinical risk prediction, statistical modeling, and social determinants of health.',
    highlights: [],
    tags: [
      'Healthcare AI',
      'Clinical risk prediction',
      'Statistical modeling',
      'Social determinants of health',
    ],
  },
]

export const caseStudies = [
  {
    title: 'Authorization Engine',
    filename: 'authorization-engine.java',
    context: 'Bajaj Finserv',
    system: 'Real-time authorization APIs and rule-processing workflows.',
    problemContext:
      'Bajaj Finserv authorization flows needed production-ready rule-processing for real-time authorization decisions.',
    whatBuilt:
      'Worked on real-time authorization APIs and business-rule workflows supporting EMI Card authorization decisions.',
    constraints:
      'Latency-sensitive production authorization decisions with response-time expectations measured in milliseconds.',
    engineeringApproach:
      'Used Java, REST APIs, and Actico Modeler to support business-rule enhancements while keeping the authorization path efficient.',
    impact:
      'Delivered sub-2ms response times. Business-rule enhancements contributed to a 20% increase in EMI Card approval rates.',
    technologies: ['Java', 'REST APIs', 'Actico Modeler'],
  },
  {
    title: 'DMS Scheduler',
    filename: 'dms-scheduler.java',
    context: 'Bajaj Finserv',
    system:
      'A multithreaded scalable Java scheduler ingesting millions of transaction documents into a Document Management System.',
    problemContext:
      'Millions of transaction documents needed to move into a Document Management System through a reliable ingestion workflow.',
    whatBuilt:
      'Built a multithreaded Java scheduler for transaction-document ingestion into the DMS.',
    constraints:
      'The workflow had to handle high document volume without reducing ingestion to a single sequential bottleneck.',
    engineeringApproach:
      'Used concurrency and parallel processing to split ingestion work across scheduler workers while keeping reliability and scalability central to the design.',
    impact:
      'Created a scalable ingestion path for transaction documents entering the Document Management System.',
    technologies: ['Java', 'Concurrency', 'Parallel processing', 'Reliability', 'Scalability'],
    architectureDiagram: true,
  },
  {
    title: 'HRMS Service',
    filename: 'hrms-service.java',
    context: 'Bajaj Finserv',
    system:
      'Microservice-based HRMS portal with maker-checker workflow and validated Excel-based master data management supporting candidate offer-generation APIs.',
    problemContext:
      'HRMS workflows needed structured candidate-offer operations with validation and controlled review steps.',
    whatBuilt:
      'Worked on a microservice-based HRMS portal with maker-checker workflow and validated Excel-based master data management.',
    constraints:
      'Offer-generation APIs depended on accurate master data and controlled changes before downstream use.',
    engineeringApproach:
      'Built around maker-checker validation and Excel-based master data management to support candidate offer-generation APIs.',
    impact:
      'Supported a more controlled HRMS workflow for offer-generation operations.',
    technologies: [
      'Microservices',
      'Maker-checker workflow',
      'Excel-based master data management',
      'Candidate offer-generation APIs',
    ],
  },
  {
    title: 'Spring Modernization',
    filename: 'spring-modernization.java',
    context: 'Bajaj Finserv',
    system: 'Modernized legacy Core Java codebases to Spring Boot.',
    problemContext:
      'Legacy Core Java services needed modernization, and partner integrations needed a faster onboarding path.',
    whatBuilt:
      'Modernized legacy Core Java codebases to Spring Boot and collaborated on Partner Integration REST APIs.',
    constraints:
      'The work had to move existing systems forward while preserving production integration behavior.',
    engineeringApproach:
      'Migrated legacy Core Java patterns toward Spring Boot service structure and worked with partner integration API flows.',
    impact:
      'Contributed to reducing partner onboarding time from roughly six months to one month.',
    technologies: ['Core Java', 'Spring Boot', 'REST APIs'],
  },
]
