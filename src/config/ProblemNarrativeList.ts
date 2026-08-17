export const ProblemNarrativeList = {
  meta: {
    titleLine1: 'pages.home.problem-narrative.title-line1',
    titleLine2: 'pages.home.problem-narrative.title-line2',
    titleGradient: 'pages.home.problem-narrative.titleGradient',
    subtitle: 'pages.home.problem-narrative.subtitle',
  },
  vignettes: [
    {
      id: 'alice-budget-agent',
      align: 'right',
      cardBg: '#1c1c1d',
      story: 'pages.home.problem-narrative.vignette1.story',
      consequences: [
        { text: 'pages.home.problem-narrative.vignette1.consequence1' },
        { text: 'pages.home.problem-narrative.vignette1.consequence2' },
      ],
    },
    {
      id: 'chad-twitter-agent',
      align: 'left',
      cardBg: '#303135',
      story: 'pages.home.problem-narrative.vignette2.story',
      consequences: [
        { text: 'pages.home.problem-narrative.vignette2.consequence1' },
        { text: 'pages.home.problem-narrative.vignette2.consequence2' },
      ],
    },
  ],
};
