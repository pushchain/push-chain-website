const baseTheme = require('prism-react-renderer').themes.dracula;

const lightCodeTheme = {
  ...baseTheme,
  plain: {
    ...baseTheme.plain,
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['keyword'],
      style: {
        color: '#8C59D6',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#BF2DD2',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#8e8e8e',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#B1B3BB',
      },
    },
    {
      types: [
        'method',
        'function',
        'maybe-class-name',
        'property-access',
        'tag',
        'attr-name',
      ],
      style: {
        color: '#ff9900',
      },
    },
  ],
};

const darkCodeTheme = {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,
    {
      types: ['string'],
      style: {
        color: '#BF2DD2',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#424346',
      },
    },
    {
      types: [
        'method',
        'function',
        'maybe-class-name',
        'property-access',
        'tag',
        'attr-name',
      ],
      style: {
        color: '#50FA7B',
      },
    },
  ],
};

module.exports = {
  lightCodeTheme,
  darkCodeTheme,
};
