// Footer configuration matching the structure in footer.json
// URL mappings for footer links
export const FooterUrls = {
  'knowledge-base': {
    href: '/knowledge',
    target: '_self' as const,
  },
  blog: {
    href: '/blog',
    target: '_self' as const,
  },
  litepaper: {
    href: 'https://push.org/litepaper.pdf',
    target: '_blank' as const,
  },
  'brand-kit': {
    href: 'https://pushprotocol.notion.site/push-chain-brand-kit',
    target: '_blank' as const,
  },
  'push-scan': {
    href: 'https://donut.push.network',
    target: '_blank' as const,
  },
  faucet: {
    href: 'https://faucet.push.org',
    target: '_blank' as const,
  },
  'get-started': {
    href: '/docs/chain',
    target: '_self' as const,
  },
  docs: {
    href: '/docs',
    target: '_self' as const,
  },
  'quick-start': {
    href: '/docs',
    target: '_self' as const,
  },
  github: {
    href: 'https://github.com/pushchain',
    target: '_blank' as const,
  },
  'push-portal': {
    href: 'https://portal.push.org/',
    target: '_blank' as const,
  },
  twitter: {
    href: 'https://x.com/PushChain',
    target: '_blank' as const,
  },
  discord: {
    href: 'https://discord.com/invite/pushchain',
    target: '_blank' as const,
  },
  reddit: {
    href: 'https://www.reddit.com/r/pushprotocol/',
    target: '_blank' as const,
  },
  telegram: {
    href: 'https://t.me/epnsproject',
    target: '_blank' as const,
  },
  support: {
    href: '/support',
    target: '_self' as const,
  },
  status: {
    href: 'https://donut.push.network/stats',
    target: '_blank' as const,
  },
  security: {
    href: '/support#open-support-ticket',
    target: '_self' as const,
  },
  'contact-us': {
    href: '/contact',
    target: '_self' as const,
  },
  careers: {
    href: '/contact/#open-contact-form',
    target: '_self' as const,
  },
  llms: {
    href: '/llms.txt',
    target: '_blank' as const,
  },
};

// Footer structure matching footer.json columns
// Column order and contents follow the Push Core footer (Figma 49113:492).
export const FooterList = {
  resources: ['knowledge-base', 'blog', 'litepaper', 'brand-kit'],
  developers: ['get-started', 'quick-start', 'github'],
  community: ['push-portal', 'twitter', 'discord', 'reddit', 'telegram'],
  products: ['push-scan', 'faucet'],
};
