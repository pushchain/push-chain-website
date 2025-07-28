export const deepDivesContent = {
  title: 'Deep Dives',
  content: [
    {
      type: 'indexlist',
      value: [
        {
          type: 'text',
          hidden: true,
          value: `## Curated Reads 👇`,
        },
      ],
    },

    {
      title: 'Deep Dives',
      type: 'list',
      mode: 'playlist',
      items: [
        {
          slug: 'understand-proof-of-stake-and-push-chain',
          image: 'understand-proof-of-stake',
          title: 'Understand Proof of Stake (POS) and Push Chain PoS',
          subtitle:
            'In a globally distributed computing environment, achieving collective agreement on the true state of the system has always been a complex challenge. Fortunately, there are algorithms (specialized instructions) that assist in preserving this ‘single-truth-state’ while...',
          url: '/blog/understand-proof-of-stake-and-push-chain/',
          target: '_self',
        },
        {
          slug: 'interop-spectrum',
          image: 'interop-spectrum',
          title: 'Interop as a Spectrum',
          subtitle:
            'Understand how Push Chain flips the script on the Interop Trilemma but turning it into a Design Choice Spectrum for Universal App developers.',
          url: '/blog/interop-spectrum',
          target: '_self',
        },
        {
          slug: 'parallel-validators-and-dynamic-sharding',
          image: 'benchmarking-push-chain-nodes',
          title: 'Benchmark of Push Chain',
          subtitle:
            'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain...',
          url: '/blog/parallel-validators-and-dynamic-sharding',
          target: '_self',
        },
      ],
    },
  ],
};
