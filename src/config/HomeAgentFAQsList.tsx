// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { ItemH, Span } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

// Function to generate the homepage's agent-focused FAQ list with translations
export const getHomeAgentFAQsList = () => {
  const { t } = useTranslation();

  const qnaKeys = ['qna1', 'qna2', 'qna3', 'qna4', 'qna5', 'qna6'];

  return qnaKeys.map((qnaKey) => ({
    question: t(`components.home-agent-faq.qnas.${qnaKey}.question`),
    section: 'General',
    renderAnswer: () => (
      <Answer
        role='region'
        aria-label={`${t('components.home-agent-faq.answer-aria-label')}${t(`components.home-agent-faq.qnas.${qnaKey}.question`)}`}
      >
        <Trans
          i18nKey={`components.home-agent-faq.qnas.${qnaKey}.answer`}
          components={{
            1: <Span role='text' />,
          }}
        />
      </Answer>
    ),
  }));
};

const Answer = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;
  margin: 0px;
  padding: 0 0 24px 0;

  & ${Span} {
    color: var(--ifm-color-neutral-300);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    width: 100%;

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }
`;
