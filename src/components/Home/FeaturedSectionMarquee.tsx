// import { useTranslation } from 'react-i18next';
import Link from '@docusaurus/Link';

import styled, { keyframes } from 'styled-components';
import { MediaList } from '@site/src/config/HomeMediaList';
import { Image } from '@site/src/css/SharedStyling';
import { device } from '@site/src/config/globals';

export const FeaturedSectionMarquee = () => {
  // Internationalization
  // const { t, i18n } = useTranslation();

  const createBlankCard = (key) => (
    <BlankMarqueeCard key={`blank-${key}`}></BlankMarqueeCard>
  );

  const createLeftContent = () => {
    const result = [];
    MediaList.forEach((item, idx) => {
      result.push(
        <MarqueeCard key={idx} href={item.url} target='_blank' rel='noreferrer'>
          <p>
            We saw a driven, innovative builder who was deeply committed to
            Ethereum's growth and success.
          </p>
          <Image
            src={
              require(`@site/static/assets/website/coverage/coindesk.png`)
                .default
            }
            srcSet={`${require(`@site/static/assets/website/coverage/coindesk@2x.png`).default} 2x, ${require(`@site/static/assets/website/coverage/coindesk@3x.png`).default} 3x`}
            alt={`Media coverage ${idx + 1}`}
            loading='lazy'
          />
        </MarqueeCard>
      );
      result.push(createBlankCard(`left-${idx}`));
    });
    return result;
  };

  const createRightContent = () => {
    const result = [];
    MediaList.forEach((item, idx) => {
      result.push(
        <MarqueeCard key={idx} href={item.url} target='_blank' rel='noreferrer'>
          <p>
            We saw a driven, innovative builder who was deeply committed to
            Ethereum's growth and success.
          </p>
          <Image
            src={
              require(`@site/static/assets/website/coverage/coindesk.png`)
                .default
            }
            srcSet={`${require(`@site/static/assets/website/coverage/coindesk@2x.png`).default} 2x, ${require(`@site/static/assets/website/coverage/coindesk@3x.png`).default} 3x`}
            alt={`Media coverage ${idx + 1}`}
            loading='lazy'
          />
        </MarqueeCard>
      );

      if ((idx + 1) % 2 === 0) {
        result.push(createBlankCard(`right-${idx}`));
      }
    });
    return result;
  };

  return (
    <Wrapper>
      <MarqueeWrapper>
        <Marquee>
          {createLeftContent()}
          {createLeftContent()}
        </Marquee>
      </MarqueeWrapper>

      <MarqueeWrapper reverse>
        <Marquee reverse>
          {createRightContent()}
          {createRightContent()}
        </Marquee>
      </MarqueeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  overflow: hidden;
`;

const MarqueeWrapper = styled.div<{ reverse?: boolean }>`
  max-height: 100%;
  flex: 1;

  ${(props) =>
    props.reverse &&
    `
    @media ${device.laptopM} {
      display: none;
    }
  `}
`;

const VerticalScroll = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const Marquee = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${VerticalScroll} 30s linear infinite;
  animation-direction: ${(props) => (props.reverse ? 'reverse' : 'normal')};
  will-change: transform;

  ${(props) =>
    props.reverse &&
    `
    @media ${device.laptopM} {
      display: none;
    }
  `}
`;

const MarqueeCard = styled(Link)`
  display: flex;
  width: 400px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 32px;
  border: 1.5px solid #d548ec;
  background: #fff;
  gap: 24px;

  @media ${device.mobileL} {
    width: 100%;
    padding: 16px;
  }

  img {
    width: auto;
    height: 35px;
    margin: 0 auto;
  }

  p {
    color: #020202;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-family:
      DM Sans,
      sans-serif;
  }
`;

const BlankMarqueeCard = styled.div`
  display: flex;
  width: 400px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 32px;
  border: none;
  background: #f2b9f6;
  gap: 24px;
  min-height: 200px;

  @media ${device.mobileL} {
    width: 100%;
    padding: 16px;
  }

  div {
    color: #fff;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-family:
      DM Sans,
      sans-serif;
  }
`;
