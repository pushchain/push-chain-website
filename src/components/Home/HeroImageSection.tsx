// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
import { device } from '@site/src/config/globals';
import { A, H2, Span } from '@site/src/css/SharedStyling';
import { TbArrowRight } from 'react-icons/tb';
import styled from 'styled-components';

export const HeroImageSection = () => {
  const UniversalText = () => (
    <>
      <H2>A True</H2>
      <H2 className='gradient-bg'>Universal</H2>
      <H2>Chain</H2>
    </>
  );

  const BottomSection = () => (
    <>
      <Span>Deploy Once,</Span>
      <Span>Reach Everywhere</Span>

      <LearnMoreLink
        href='https://portal.push.org/'
        target='_blank'
        border='none'
        fontSize='1.125rem'
        fontWeight='600'
        letterSpacing='-0.03em'
        lineHeight='140%'
        width='100%'
        color='#E163FF'
      >
        Learn More
        <TbArrowRight className='start-svg' />
      </LearnMoreLink>
    </>
  );

  return (
    <HeroWrapper>
      <HeroBG>
        <MobileContent>
          <MobileTopText>
            <UniversalText />
          </MobileTopText>

          <MobileImage
            src={
              require('@site/static/assets/website/hero/hero-image@3x.webp')
                .default
            }
            alt='Push Chain'
          />

          <MobileBottomText>
            <BottomSection />
          </MobileBottomText>
        </MobileContent>

        <TopLeftText>
          <UniversalText />
        </TopLeftText>

        <BottomRightText>
          <BottomSection />
        </BottomRightText>
      </HeroBG>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  height: 680px;
  width: 100%;

  @media ${device.laptop} {
    height: 550px;
  }

  @media ${device.tablet} {
    height: auto;
  }
`;

const HeroBG = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${require('@site/static/assets/website/hero/hero-image@3x.webp')
    .default});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: calc(50% + 30px) center;

  @media ${device.tablet} {
    background: none;
  }
`;

const TopLeftText = styled.div`
  position: absolute;
  top: 1rem;
  left: 4rem;

  h2 {
    color: #fff;
    font-family:
      DM Sans,
      sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.96px;
  }

  .gradient-bg {
    color: #d548ec;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const BottomRightText = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 10rem;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    bottom: 0;
    right: 5rem;
  }

  span {
    color: #ffff;
    font-family: DM Sans;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.4px;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const MobileContent = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  padding: 1rem;

  @media ${device.tablet} {
    display: flex;
  }
`;

const MobileTopText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    color: #fff;
    font-family:
      DM Sans,
      sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.96px;
    margin: 0;
  }

  .gradient-bg {
    color: #d548ec;
  }
`;

const MobileBottomText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  align-self: flex-end;

  span {
    color: #ffff;
    font-family: DM Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.4px;
  }
`;

const MobileImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 1rem;
`;

const LearnMoreLink = styled(A)`
  padding: 0px;
  font-family:
    DM Sans,
    sans-serif;
  height: auto;
  box-sizing: border-box;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin: 16px 0 0 0;
  background: transparent;

  &:hover {
    text-decoration: underline;
  }

  .start-svg {
    color: #e163ff;
    margin: 0;
  }

  @media ${device.laptopM} {
    align-self: stretch;
  }
`;
