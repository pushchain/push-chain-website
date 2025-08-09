// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
import Link from '@docusaurus/Link';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { ItemH, Span } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

// Function to generate FAQ list with translations
export const getShortFAQsList = () => {
  const { t } = useTranslation();

  return [
    {
      question: t(
        'components.short-faq-snippet.faqs.what-is-push-chain.question'
      ),
      section: 'General',
      renderAnswer: () => (
        <Answer role='region' aria-label='Answer about what Push Chain is'>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.what-is-push-chain.answer-1'
              components={{
                1: <strong />,
                3: <strong />,
              }}
            />
          </Span>
          <Span role='text'>
            {t('components.short-faq-snippet.faqs.what-is-push-chain.answer-2')}
          </Span>
        </Answer>
      ),
    },
    {
      question: t(
        'components.short-faq-snippet.faqs.how-does-push-chain-work.question'
      ),
      section: 'General',
      renderAnswer: () => (
        <Answer role='region' aria-label='Answer about how Push Chain works'>
          <Span role='text'>
            {t(
              'components.short-faq-snippet.faqs.how-does-push-chain-work.answer-1'
            )}
          </Span>
          <Span role='text'>
            {t(
              'components.short-faq-snippet.faqs.how-does-push-chain-work.answer-2'
            )}
          </Span>
          <Span role='text'>
            {t(
              'components.short-faq-snippet.faqs.how-does-push-chain-work.answer-3'
            )}
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.how-does-push-chain-work.answer-4'
              components={{ 1: <strong /> }}
            />
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.how-does-push-chain-work.answer-5'
              components={{ 1: <strong /> }}
            />
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.how-does-push-chain-work.answer-6'
              components={{ 1: <strong /> }}
            />
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.how-does-push-chain-work.answer-7'
              components={{ 1: <strong /> }}
            />
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.how-does-push-chain-work.answer-8'
              components={{ 1: <strong /> }}
            />
          </Span>
          <Span role='text'>
            {t(
              'components.short-faq-snippet.faqs.how-does-push-chain-work.answer-9'
            )}
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.how-does-push-chain-work.answer-10'
              components={{
                1: <strong />,
                3: <strong />,
              }}
            />
          </Span>
        </Answer>
      ),
    },
    {
      question: t(
        'components.short-faq-snippet.faqs.why-is-push-chain-unique.question'
      ),
      section: 'General',
      renderAnswer: () => (
        <Answer
          role='region'
          aria-label='Answer about why Push Chain is unique'
        >
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.why-is-push-chain-unique.answer-1'
              components={{ 1: <strong /> }}
            />
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.why-is-push-chain-unique.answer-2'
              components={{ 1: <strong /> }}
            />
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.why-is-push-chain-unique.answer-3'
              components={{
                1: <strong />,
                3: <strong />,
                5: <strong />,
              }}
            />
          </Span>
        </Answer>
      ),
    },
    {
      question: t(
        'components.short-faq-snippet.faqs.push-chain-grants.question'
      ),
      section: 'General',
      renderAnswer: () => (
        <Answer role='region' aria-label='Answer about Push Chain grants'>
          <Span role='text'>
            {t('components.short-faq-snippet.faqs.push-chain-grants.answer-1')}
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.push-chain-grants.answer-2'
              components={{
                1: (
                  <Link
                    href='mailto:team@push.org'
                    aria-label='Send email to Push Chain team'
                  />
                ),
                3: <strong />,
                5: (
                  <Link
                    href='https://x.com/PushChain'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Follow Push Chain on X (Twitter)'
                  />
                ),
              }}
            />
          </Span>
        </Answer>
      ),
    },
    {
      question: t(
        'components.short-faq-snippet.faqs.push-protocol-future.question'
      ),
      section: 'General',
      renderAnswer: () => (
        <Answer role='region' aria-label='Answer about Push Protocol future'>
          <Span role='text'>
            {t(
              'components.short-faq-snippet.faqs.push-protocol-future.answer-1'
            )}
          </Span>
          <Span role='text'>
            {t(
              'components.short-faq-snippet.faqs.push-protocol-future.answer-2'
            )}
          </Span>
        </Answer>
      ),
    },
    {
      question: t('components.short-faq-snippet.faqs.learn-more.question'),
      section: 'General',
      renderAnswer: () => (
        <Answer role='region' aria-label='Answer about learning more'>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.learn-more.answer-1'
              components={{
                1: (
                  <Link
                    href='/knowledge'
                    target='_self'
                    aria-label='Visit Push Chain Knowledge Base'
                  />
                ),
              }}
            />
          </Span>
          <Span role='text'>
            <Trans
              i18nKey='components.short-faq-snippet.faqs.learn-more.answer-2'
              components={{
                1: (
                  <Link
                    href='/blog/faq-push-chain/'
                    target='_self'
                    aria-label='Visit detailed FAQ page'
                  />
                ),
              }}
            />
          </Span>
        </Answer>
      ),
    },
  ];
};

// Note: ShortFAQsList is now dynamically generated via getShortFAQsList()
// and should be called within React components to access translation context
const Answer = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;
  margin: 0px;
  padding: 0 0 24px 0;

  & ${Span} {
    color: #bbbcd0;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }

  & Span:not(:first-child) {
    margin-top: 24px;
  }

  & a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & b {
    color: #fff;
    font-weight: 600;
  }
`;
