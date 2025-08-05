export const deepDivesContent = {
  title: 'Deep Dives',
  content: [
    {
      type: 'indexlist',
      topGap: false,
      bottomGap: false,
      value: [
        {
          type: 'text',
          value: `## Architecture Deep Dives
          
          Learn about the intricacies of Push Chain's architecture and how it works - One module at a time.
          
          `,
        },
        {
          type: 'text',
          hidden: true,
          value: `## Curated Reads 👇`,
        },
      ],
    },

    {
      title: 'Learn what makes Push Chain tick!',
      type: 'list',
      topGap: true,
      bottomGap: true,
      mode: 'playlist',
      items: [
        {
          slug: 'interop-spectrum',
          image: 'interop-spectrum',
          title: 'Interop as a Spectrum',
          url: '/blog/interop-spectrum',
          target: '_blank',
        },
        {
          slug: 'understand-proof-of-stake-part-1',
          image: 'understand-proof-of-stake',
          title: 'Understanding Proof of Stake (POS) - Part 1',
          url: '/blog/understand-proof-of-stake',
          target: '_blank',
        },
      ],
    },
  ],
};
