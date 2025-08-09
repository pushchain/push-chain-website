// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { FC } from 'react';
import styled from 'styled-components';

// External Components
import { useTranslation } from 'react-i18next';
import { BsArrowRight, BsDiscord } from 'react-icons/bs';

// Import Assets

// Internal Components
import Accordion from '@site/src/components/Accordion';
import { A, H2, ItemH, ItemV, Span } from '../../css/SharedStyling';
import useMediaQuery from '../../hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';
import { getShortFAQsList } from '@site/src/config/ShortFAQsList';

const ShortFAQs: FC = () => {
  // Internationalization
  const { t } = useTranslation();

  const isMobile = useMediaQuery(device.mobileL);
  const isLaptop = useMediaQuery(device.laptop);
  const faqsList = getShortFAQsList();

  return (
    <ItemH
      flexDirection={isLaptop && 'column'}
      alignItems='flex-start'
      justifyContent='space-between'
      gap={isLaptop ? '24px' : '120px'}
    >
      <ItemV
        flexDirection={isLaptop ? 'row' : 'column'}
        alignItems='flex-start'
        justifyContent={isLaptop ? 'space-between' : 'flex-start'}
        flex='0 0 auto'
        gap='24px'
      >
        <H2
          color='#FFF'
          fontSize={isMobile ? '2.5rem' : '3rem'}
          fontFamily='DM Sans, sans-serif'
          fontWeight='600'
          lineHeight='120%'
          whiteSpace='break-spaces'
          role='heading'
          aria-level='2'
          aria-label={t('components.short-faq-snippet.title-aria-label')}
        >
          {t('components.short-faq-snippet.title')}
        </H2>

        <FaqLink
          href='https://discord.com/invite/pushchain'
          target='_blank'
          title={t('components.short-faq-snippet.discord-link-title')}
          aria-label={t('components.short-faq-snippet.discord-link-aria-label')}
          rel='noopener noreferrer'
        >
          <BsDiscord size={28} aria-hidden='true' />
          <p>{t('components.short-faq-snippet.discord-link-text')}</p>
          <BsArrowRight
            size={24}
            className='anchorSvgLink'
            aria-hidden='true'
          />
        </FaqLink>
      </ItemV>

      <ItemV
        alignItems='flex-start'
        justifyContent='flex-start'
        flex='1'
        margin={isLaptop ? '48px 0 0 0' : '-20px 0 0 0'}
      >
        <AccordionGrid
          role='region'
          aria-label={t('components.short-faq-snippet.accordion-aria-label')}
        >
          <Accordion items={faqsList} />
        </AccordionGrid>

        <SlideLink
          href={useBaseUrl('/knowledge/faq')}
          title={t('components.short-faq-snippet.explore-more-title')}
          aria-label={t('components.short-faq-snippet.explore-more-aria-label')}
          target='_blank'
          className='button'
          margin={isMobile ? '24px auto 0px 0px' : '24px 0px 0px auto'}
          hoverBackground='transparent'
          hover='transparent'
          background='transparent'
          filter='none'
          color='#E163FF'
          borderRadius='0'
          padding='0px 0px'
        >
          <SpanLink>
            {t('components.short-faq-snippet.explore-more-text')}
          </SpanLink>
          <BsArrowRight className='anchorSVGlink' aria-hidden='true' />
        </SlideLink>
      </ItemV>
    </ItemH>
  );
};

// Styled Components
const FaqLink = styled(A)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 16px;
  background: #5865f2;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(88, 101, 242, 0.3);
  }

  p {
    margin: 0;
    font-weight: 500;
    color: inherit;
  }
`;

const AccordionGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SpanLink = styled(Span)`
  position: relative;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.36px;
  line-height: 142%;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #e163ff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const SlideLink = styled(A)`
  overflow: inherit;
  .anchorSVGlink {
    color: #e163ff;
    top: 3px;
    margin-left: 8px;
  }

  &:hover {
    .anchorSVGlink {
      color: #e163ff;
    }
  }
`;

export default ShortFAQs;
