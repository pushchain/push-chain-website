// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import { TbArrowUpRight } from 'react-icons/tb';
import styled from 'styled-components';

import { device } from '@site/src/config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import Accordion from '@site/src/components/Accordion';
import DiscordSVG from '@site/static/assets/website/shared/discord.svg';
import { A, H2, ItemH, ItemV } from '../../css/SharedStyling';
import { General } from './config/ChainFAQconfig';

type ChainBottomComponentProps = {
  showFaq?: boolean;
};

const ChainBottomComponent: FC<ChainBottomComponentProps> = ({ showFaq }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  return (
    <ChainBottomComponentWrapper showFaq={showFaq} id='faq'>
      {/* faq section */}
      {showFaq && (
        <ItemH
          flexDirection={isTablet && 'column'}
          alignItems='flex-start'
          justifyContent='space-between'
          gap={!isMobile && '70px'}
        >
          <FAQHeader
            alignItems='flex-start'
            justifyContent='flex-start'
            padding={!isMobile && '23px 0 0 0'}
          >
            <H2
              color='#FFF'
              fontSize={isMobile ? '2.5rem' : '3rem'}
              fontFamily='DM Sans, sans-serif'
              fontWeight='600'
              lineHeight='120%'
            >
              Frequently Asked Questions
            </H2>

            <FaqLink
              href='https://discord.gg/pushprotocol'
              target='_blank'
              title='Discord'
              fontSize='16px'
              background='#5865F2'
              color='#FFF'
              fontFamily='DM Sans, sans-serif'
              border='1px solid rgba(255, 255, 255, 0.30)'
              borderRadius='12px'
              gap='12px'
            >
              <DiscordSVG width={24} />
              <p>Ask us on Discord</p>
              <TbArrowUpRight className='anchorSVGlink' />
            </FaqLink>
          </FAQHeader>

          <ItemV alignItems='flex-start' justifyContent='flex-start'>
            <AccordionGrid>
              <Accordion items={General} />
            </AccordionGrid>
          </ItemV>
        </ItemH>
      )}
    </ChainBottomComponentWrapper>
  );
};

export default ChainBottomComponent;

const ChainBottomComponentWrapper = styled.div`
  margin: ${(props) => (props.showFaq ? '213px auto' : '0 auto')};

  @media ${device.desktopL} {
    width: 1400px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 24px;
  }

  @media ${device.tablet} {
    padding: 0 24px;
  }

  @media ${device.mobileL} {
    margin: ${(props) => (props.showFaq ? '153px auto 0 auto' : ' 0 auto')};
    padding: 0 16px;
  }
`;

const FaqLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: inherit;
  gap: 12px;
  margin: 24px 0 0 0;

  @media ${device.tablet} {
    margin: 24px auto 0 auto;
  }

  p {
    margin: 0px !important;
  }
  .anchorSVGlink {
    color: #fff;
    top: 0px;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #fff;
    }
  }
`;

const AccordionGrid = styled.div`
  max-width: 800px;
  min-width: 800px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }

  @media ${device.mobileL} {
    margin-top: 24px;
  }
`;

const FAQHeader = styled(ItemV)`
  @media ${device.tablet} {
    text-align: center;
    margin: 0 auto;
  }
`;
