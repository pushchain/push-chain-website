export const StatsList = [
  {
    title: 'Supported Chains',
    image: require('@site/static/assets/website/chain/SupportedChain.png')
      .default,
    srcSet: `
      ${require('@site/static/assets/website/chain/SupportedChain@2x.png').default} 2x,
      ${require('@site/static/assets/website/chain/SupportedChain@3x.png').default} 3x
    `,
  },
  {
    title: 'TPS',
    description: '4.2k',
  },
  {
    title: 'NATIVE FINALITY',
    description: 'Instant',
  },
  {
    title: 'NATIVE BLOCK TIME',
    description: '1s',
  },
];
