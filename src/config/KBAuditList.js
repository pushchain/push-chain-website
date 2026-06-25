export const KBAuditList = {
  title: 'pages.knowledge.audit.explainer-section.blocks.title',
  content: [
    {
      type: 'indexlist',
      topGap: false,
      bottomGap: false,
      value: [
        {
          type: 'text',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.audit-reports.items.intro',
        },
        {
          type: 'text',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.audit-reports.items.curated-reads',
          hidden: true,
        },
      ],
    },

    {
      type: 'list',
      topGap: false,
      bottomGap: true,
      variant: 'row',
      items: [
        {
          slug: 'audit-report-1',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.reports.items.audit-report-1',
          url: 'https://github.com/pushchain/push-chain-node/tree/audit-fixes/audits',
          target: '_blank',
        },
        {
          slug: 'audit-report-2',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.reports.items.audit-report-2',
          url: 'https://github.com/pushchain/push-chain-core-contracts/tree/audit-main-fixes/audits',
          target: '_blank',
        },
        {
          slug: 'audit-report-3',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.reports.items.audit-report-3',
          url: 'https://github.com/pushchain/push-chain-gateway-contracts/tree/audit-main-fixes/contracts/evm-gateway/audits',
          target: '_blank',
        },
        {
          slug: 'audit-report-4',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.reports.items.audit-report-4',
          url: 'https://github.com/pushchain/push-chain-gateway-contracts/tree/audit-main-fixes/contracts/svm-gateway/audits',
          target: '_blank',
        },
      ],
    },
  ],
};
