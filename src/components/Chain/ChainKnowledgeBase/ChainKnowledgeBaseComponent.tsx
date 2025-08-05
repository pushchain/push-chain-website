// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useModal from '../hooks/useModal';

import ImageHolder from '../../../../src/components/ImageHolder';
import { H2, H3, ItemH, ItemV } from '../../../css/SharedStyling';
import ChainElevateModal from '../ChainElevateModal';
import { ChainKnowledgeBaseHeader } from '../config/ChainKnowledgeBaseHeader';

const ChainKnowledgeBaseComponent = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const { isOpen, open, close } = useModal();

  return (
    <ChainKnowledgeBaseComponentWrapper>
      <ItemH gap='32px' flexDirection={isMobile && 'column'}>
        <ItemV alignItems={isMobile ? 'center' : 'flex-start'}>
          <H2
            fontSize={isMobile ? '2.5rem' : '3rem'}
            fontWeight='600'
            lineHeight='157%'
            letterSpacing='-1.098px'
            textAlign={isMobile ? 'center' : 'left'}
            color='#FFF'
          >
            {ChainKnowledgeBaseHeader?.title}
          </H2>

          <H3
            fontSize={isMobile ? '1rem' : '1.125rem'}
            fontWeight='400'
            lineHeight='155%'
            textAlign={isMobile ? 'center' : 'left'}
          >
            {ChainKnowledgeBaseHeader?.description()}
          </H3>
        </ItemV>

        <IFrameItem>
          <IFrameImage
            background={ChainKnowledgeBaseHeader?.image && '#F2C2FE'}
            borderRadius='32px'
          >
            {ChainKnowledgeBaseHeader?.video && (
              <iframe
                width={isMobile ? '100%' : '560px'}
                height={isMobile ? '100%' : '325px'}
                src={ChainKnowledgeBaseHeader.video.src}
                title={ChainKnowledgeBaseHeader.video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            )}

            {ChainKnowledgeBaseHeader?.image && (
              <ImageHolder
                src={
                  require(
                    `@site/static/assets/website/chain/${ChainKnowledgeBaseHeader?.image}.webp`
                  ).default
                }
                srcSet={`${require(`@site/static/assets/website/chain/${ChainKnowledgeBaseHeader?.image}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/${ChainKnowledgeBaseHeader?.image}@3x.webp`).default} 3x`}
                alt={'alt'}
                title={'title'}
              />
            )}
          </IFrameImage>

          <IframeContent>
            <H3
              fontSize={isMobile ? '0.875rem' : '0.938rem'}
              fontWeight='400'
              lineHeight={isMobile ? '100%' : '132%'}
              letterSpacing='-0.64px'
              color='#BBBCD0'
              flex='1'
            >
              Craft seamless, user-friendly experiences for you app on any
              blockchain with Push Chain.
            </H3>
            <ButtonLink to='' onClick={open}>
              Get Notified about Testnet
            </ButtonLink>
          </IframeContent>
        </IFrameItem>
      </ItemH>

      {/* modal */}
      <ChainElevateModal isOpen={isOpen} onClose={close} />
    </ChainKnowledgeBaseComponentWrapper>
  );
};

export default ChainKnowledgeBaseComponent;

const ChainKnowledgeBaseComponentWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;

const IFrameImage = styled(ItemH)`
  aspect-ratio: 16/9;
`;

const IFrameItem = styled.div`
  padding: 16px;
  background: #101010;
  display: flex;
  border-radius: 40px;
  flex-direction: column;
  max-width: 592px;
  justify-content: center;

  iframe {
    border-radius: 24px;
  }
`;

const IframeContent = styled.div`
  display: grid;
  margin: 16px 0 0 0;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const ButtonLink = styled.a`
  font-family:
    DM Sans,
    sans-serif;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 16px;

  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: #d548ec;
  line-height: 180.513%;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
