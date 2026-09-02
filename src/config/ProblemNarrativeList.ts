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
      // Figma 49511:29441 — the chat sits left of the copy on this card.
      image: '/assets/website/home/problem-narrative/alice-agent-chat.webp',
      imageSide: 'left',
      imageAlt: 'pages.home.problem-narrative.vignette1.image-alt',
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
      // Figma 49510:29119 — mirrored, chat to the right of the copy.
      image: '/assets/website/home/problem-narrative/chad-agent-chat.webp',
      imageSide: 'right',
      imageAlt: 'pages.home.problem-narrative.vignette2.image-alt',
      story: 'pages.home.problem-narrative.vignette2.story',
      consequences: [
        { text: 'pages.home.problem-narrative.vignette2.consequence1' },
        { text: 'pages.home.problem-narrative.vignette2.consequence2' },
      ],
    },
  ],
};
