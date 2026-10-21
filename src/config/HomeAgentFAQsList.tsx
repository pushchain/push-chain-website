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
            2: <Lead />,
            3: <AnswerList />,
            4: <AnswerListItem />,
            5: (
              <AnswerLink
                href='https://donut.push.network/'
                target='_blank'
                rel='noopener noreferrer'
              />
            ),
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
  flex-direction: column;
  gap: 16px;
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

// Some answers carry a short bold lead-in, a bulleted breakdown, or a link out
// to the testnet, so the accordion renders a little more than one paragraph.
const Lead = styled.strong`
  color: var(--ifm-color-white);
  font-weight: 600;
`;

const AnswerList = styled.ul`
  /* Left as a block rather than a flex column: markers are laid out by the
     list-item box, and flex children lose them. Spacing comes from the items. */
  margin: 0;
  padding: 0 0 0 22px;
`;

const AnswerListItem = styled.li`
  /* Docusaurus zeroes list-style on li globally, so it is set here rather than
     on the ul, where it would be inherited and then overridden. */
  list-style: disc outside;
  color: var(--ifm-color-neutral-300);

  & + & {
    margin-top: 12px;
  }

  font-size: 1.25rem;
  font-weight: 400;
  line-height: 150%;

  &::marker {
    color: var(--ifm-color-pink-400);
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const AnswerLink = styled.a`
  color: var(--ifm-color-pink-400);
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: var(--ifm-color-pink-400);
  }
`;
