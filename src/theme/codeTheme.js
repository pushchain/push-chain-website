const baseTheme = require('prism-react-renderer').themes.dracula;

const lightCodeTheme = {
  ...baseTheme,
  plain: {
    ...baseTheme.plain,
    backgroundColor: '#ffffff',
    color: '#2B2B30',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['keyword'],
      style: {
        color: '#824FCA',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#D14FE2',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#8e8e8e',
      },
    },
    {
      types: ['comment', 'plain-text'],
      style: {
        color: '#AAAAB0',
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
        color: '#33A168',
      },
    },
  ],
};

const darkCodeTheme = {
  ...baseTheme,
  plain: {
    ...baseTheme.plain,
    backgroundColor: '#ffffff',
    color: '#F0F0F0',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['keyword'],
      style: {
        color: '#B389F0',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#D982E4',
      },
    },
    {
      types: ['comment', 'plain-text'],
      style: {
        color: '#44444E',
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
        color: '#61DC9C',
      },
    },
  ],
};

module.exports = {
  lightCodeTheme,
  darkCodeTheme,
};
