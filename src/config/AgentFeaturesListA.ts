// Illustrations live in static/ and are referenced by URL: this project's
// webpack turns `.svg` imports into React components, not paths.
export const AgentFeaturesListA = {
  meta: {
    title: 'pages.home.feature-grid-a.title',
  },
  rowOne: [
    {
      id: 'evaluation-by-quorum',
      cardStyle: 'bordered',
      image: '/assets/website/home/agentic-scale/evaluation-by-quorum.svg',
      titleKey: 'pages.home.feature-grid-a.card1.title',
      descriptionKey: 'pages.home.feature-grid-a.card1.description',
    },
    {
      id: 'pay-on-verdict',
      cardStyle: 'bordered',
      image: '/assets/website/home/agentic-scale/pay-on-verdict.svg',
      titleKey: 'pages.home.feature-grid-a.card2.title',
      descriptionKey: 'pages.home.feature-grid-a.card2.description',
    },
    {
      id: 'unbreakable-rules',
      cardStyle: 'bordered',
      image: '/assets/website/home/agentic-scale/unbreakable-rules.svg',
      titleKey: 'pages.home.feature-grid-a.card3.title',
      descriptionKey: 'pages.home.feature-grid-a.card3.description',
    },
  ],
  rowTwo: [
    {
      id: 'agentic-wallet',
      cardStyle: 'bordered',
      image: '/assets/website/home/agentic-scale/agentic-wallet.svg',
      imageWide: true,
      titleKey: 'pages.home.feature-grid-a.card4.title',
      descriptionKey: 'pages.home.feature-grid-a.card4.description',
    },
    {
      id: 'identity-and-reputation',
      cardStyle: 'bordered',
      image: '/assets/website/home/agentic-scale/identity-and-reputation.svg',
      imageWide: true,
      titleKey: 'pages.home.feature-grid-a.card5.title',
      descriptionKey: 'pages.home.feature-grid-a.card5.description',
    },
  ],
};
