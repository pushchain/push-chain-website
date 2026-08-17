export const PaidStatsList = {
  meta: {
    eyebrow: 'pages.home.paid-stats.eyebrow',
    title: 'pages.home.paid-stats.title',
    titleGradient: 'pages.home.paid-stats.titleGradient',
    paragraph: 'pages.home.paid-stats.paragraph',
  },
  stats: [
    {
      type: 'text',
      id: 'verdict-per-job',
      titleKey: 'pages.home.paid-stats.stat1.title',
      valueKey: 'pages.home.paid-stats.stat1.value',
    },
    {
      type: 'text',
      id: 'quorum-to-finalize',
      titleKey: 'pages.home.paid-stats.stat2.title',
      valueKey: 'pages.home.paid-stats.stat2.value',
    },
    {
      type: 'text',
      id: 'settlement-execution',
      titleKey: 'pages.home.paid-stats.stat3.title',
      valueKey: 'pages.home.paid-stats.stat3.value',
    },
    {
      type: 'chains',
      id: 'supported-chains',
      titleKey: 'pages.home.paid-stats.stat4.title',
      chains: [
        {
          icon: 'ethereum',
          altKey: 'pages.home.paid-stats.stat4.chain1-alt',
        },
        {
          icon: 'solana',
          altKey: 'pages.home.paid-stats.stat4.chain2-alt',
        },
        {
          icon: 'bnb-chain',
          altKey: 'pages.home.paid-stats.stat4.chain3-alt',
        },
        {
          icon: 'arbitrum',
          altKey: 'pages.home.paid-stats.stat4.chain4-alt',
        },
        {
          icon: 'base',
          altKey: 'pages.home.paid-stats.stat4.chain5-alt',
        },
      ],
      badgeTextKey: 'pages.home.paid-stats.stat4.more-chains-badge',
    },
  ],
};
