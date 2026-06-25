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
          url: '#',
          target: '_blank',
        },
        {
          slug: 'audit-report-2',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.reports.items.audit-report-2',
          url: '#',
          target: '_blank',
        },
        {
          slug: 'audit-report-3',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.reports.items.audit-report-3',
          url: '#',
          target: '_blank',
        },
        {
          slug: 'audit-report-4',
          valueKey:
            'pages.knowledge.audit.explainer-section.blocks.sections.reports.items.audit-report-4',
          url: '#',
          target: '_blank',
        },
      ],
    },
  ],
};
