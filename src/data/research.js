export const researchHeader = {
  label: '03 / RESEARCH',
  heading: 'Research',
  file: 'research.ipynb',
  intro:
    "Grad school pulled me into research, particularly questions around healthcare, neighborhoods, and what machine learning can and can't tell us.",
}

export const researchStudies = [
  {
    id: 'clinical-risk-sdoh',
    number: '01',
    status: 'Under Review',
    title: 'Role of Neighborhood Social Determinants of Health in Clinical Risk Prediction',
    question:
      'How does neighborhood context affect prediction of healthcare utilization?',
    data: 'Insurance Claims + Neighborhood-Level SDoH',
    methods: [
      'XGBoost',
      'SHAP',
      'Statistical modeling',
      'Calibration / model evaluation',
    ],
    outcomes: ['ER utilization', 'Primary-care utilization'],
  },
  {
    id: 'neighborhood-cvd',
    number: '02',
    status: 'Under Review',
    title: 'Effect Of Neighborhood Environment On Cardiovascular Disease Incidence',
    question:
      'How do neighborhood factors influence cardiovascular disease, and how might individual socioeconomic and behavioral factors mediate that relationship?',
    data: 'The Multi-Ethnic Study of Atherosclerosis and the Jackson Heart Study',
    methods: ['Cox Modeling', 'G-Computation', 'Inverse Probability Weighting'],
    outcomes: ['CVD incidence in 10 years'],
  },
  {
    id: 'digital-determinants-rpm',
    number: '03',
    status: 'In Progress',
    title: 'Digital Determinants of Remote Patient Monitoring',
    question:
      'Can clinical notes reveal digital-access factors that influence pregnant patients\' engagement with remote patient monitoring?',
    data: 'NYU Langone Unstructured Clinical Notes',
    methods: [
      'Clinical NLP',
      'LLM Evaluation',
      'Text Analysis',
      'Human Annotation',
    ],
    outcomes: ['Framework to identify digital determinant in RPM usage'],
  },
]
