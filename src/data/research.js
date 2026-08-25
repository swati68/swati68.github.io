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
    title: 'Clinical Risk Prediction + Social Determinants of Health',
    question:
      'How does neighborhood context affect prediction of healthcare utilization?',
    data: 'Insurance claims + neighborhood-level SDoH',
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
    title: 'Neighborhood Environment + Cardiovascular Disease',
    question:
      'How do neighborhood factors influence cardiovascular disease, and how might individual socioeconomic and behavioral factors mediate that relationship?',
    cohorts: ['MESA', 'Jackson Heart Study'],
    methods: ['Statistical modeling', 'Mediation analysis', 'SDoH'],
  },
  {
    id: 'clinical-risk-sdoh-additional',
    number: '03',
    status: 'In Progress',
    title: 'Clinical Risk Prediction + Social Determinants of Health',
    question:
      'How does neighborhood context affect prediction of healthcare utilization?',
    data: 'Insurance claims + neighborhood-level SDoH',
    methods: [
      'XGBoost',
      'SHAP',
      'Statistical modeling',
      'Calibration / model evaluation',
    ],
    outcomes: ['ER utilization', 'Primary-care utilization'],
  },
]
