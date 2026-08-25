export const projectLibraryHeader = {
  label: '04 / PROJECTS',
  heading: "Things I've Built",
  intro:
    "I've accumulated quite a few projects over the years. These are a few I'm particularly fond of.",
  outro: 'More projects live on GitHub as the broader archive.',
}

export const projects = [
  {
    id: 'foreign-whispers',
    slug: 'foreign-whispers',
    number: 'Project 01',
    name: 'Foreign Whispers',
    year: null,
    shortDescription: 'AI video dubbing platform handling multilingual media workflows.',
    longDescription:
      'AI video dubbing platform handling transcription, translation, voice generation, subtitle alignment, and video stitching.',
    category: ['ai-ml', 'backend', 'systems', 'full-stack'],
    domain: 'AI Systems',
    technologies: [
      'FastAPI',
      'Next.js',
      'Docker',
      'Whisper',
      'Chatterbox TTS',
      'GPU inference',
    ],
    featured: true,
    visual: 'pipeline',
    githubUrl: null,
    demoUrl: null,
    status: null,
    problem:
      'Create a practical workflow for taking source video through translated, voiced, subtitle-aligned output.',
    architecture:
      'A full-stack media pipeline coordinates transcription, translation, TTS, subtitle alignment, GPU inference, and final video assembly.',
    decisions: [
      'Keep each media-processing stage independently understandable and debuggable.',
      'Use containerized services to make model and media dependencies easier to reproduce.',
    ],
    challenges: [
      'Coordinating GPU-backed inference with long-running video processing jobs.',
      'Preserving timing alignment across translated speech, subtitles, and stitched output.',
    ],
    results: [
      'End-to-end project flow covers transcription, translation, voice generation, subtitle alignment, and video stitching.',
    ],
  },
  {
    id: 'cinemamatch-nyc',
    slug: 'cinemamatch-nyc',
    number: 'Project 02',
    name: 'CinemaMatch NYC',
    year: null,
    shortDescription:
      'AI platform for film metadata analysis and hyper-local NYC audience recommendations.',
    longDescription:
      'Uses film metadata, demographic signals, cultural context, and neighborhood data to support NYC audience targeting, geographic heatmaps, and campaign recommendations.',
    category: ['ai-ml', 'backend', 'full-stack'],
    domain: 'AI Product',
    technologies: [
      'React',
      'Python',
      'Node.js',
      'Gemini Vision',
      'NYC Open Data',
      'Google Cloud',
    ],
    featured: true,
    visual: 'map',
    githubUrl: null,
    demoUrl: null,
    status: null,
    problem:
      'Connect film-level analysis with neighborhood-level audience context for more local recommendation workflows.',
    architecture:
      'A React product surface works with Python and Node.js services, Gemini Vision analysis, NYC Open Data, and Google Cloud resources.',
    decisions: [
      'Make recommendations inspectable through geographic heatmaps and campaign-oriented outputs.',
      'Use public NYC data as part of the audience-context layer.',
    ],
    challenges: [
      'Combining film metadata with demographic, cultural, and neighborhood signals in a usable product flow.',
    ],
    results: [
      'Project includes hyper-local audience recommendations, geographic heatmaps, and campaign recommendations.',
    ],
  },
  {
    id: 'heart-disease-hybrid-model',
    slug: 'heart-disease-hybrid-model',
    number: 'Project 03',
    name: 'Heart Disease Prediction',
    year: null,
    shortDescription:
      'Parallel ML project combining Decision Trees and Genetic Algorithms.',
    longDescription:
      'A two-level hybrid model for heart disease prediction using Decision Trees, Genetic Algorithms, and parallel computing.',
    category: ['ai-ml', 'systems', 'research'],
    domain: 'HPC / ML',
    technologies: ['C++', 'OpenMP/MPI', 'MLPack'],
    featured: true,
    visual: 'tree',
    githubUrl: null,
    demoUrl: null,
    status: null,
    problem:
      'Explore a hybrid machine-learning approach for heart disease prediction with parallel execution.',
    architecture:
      'Decision Trees and Genetic Algorithms are combined in a C++ implementation using OpenMP/MPI and MLPack.',
    decisions: [
      'Use parallel computing techniques around the model workflow.',
      'Keep the implementation close to systems-level performance constraints through C++.',
    ],
    challenges: [
      'Balancing model experimentation with parallel implementation details.',
    ],
    results: [
      'Implemented a two-level hybrid approach using Decision Trees, Genetic Algorithms, and parallel computing.',
    ],
  },
  {
    id: 'urban-sound-classification',
    slug: 'urban-sound-classification',
    number: 'Project 04',
    name: 'Urban Sound Classification',
    year: null,
    shortDescription:
      'CNN-based audio classification using UrbanSound8K preprocessing features.',
    longDescription:
      'Audio preprocessing with MFCC and spectral features, followed by CNN classification using the UrbanSound8K dataset.',
    category: ['ai-ml'],
    domain: 'Audio ML',
    technologies: ['Python', 'CNNs', 'Librosa', 'Scikit-learn'],
    featured: false,
    visual: 'waveform',
    githubUrl: null,
    demoUrl: null,
    status: null,
    problem:
      'Classify urban environmental sounds from extracted audio features.',
    architecture:
      'A Python audio pipeline extracts MFCC and spectral features before CNN-based classification.',
    decisions: [
      'Use Librosa for audio feature extraction.',
      'Use CNNs for classification over processed UrbanSound8K examples.',
    ],
    challenges: ['Preparing audio features suitable for classification.'],
    results: [
      'Built an audio classification workflow using MFCC/spectral preprocessing and CNN modeling.',
    ],
  },
]
