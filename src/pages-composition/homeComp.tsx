// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

// External Components
import { useTranslation } from 'react-i18next';
import { BsArrowRight, BsDiscord } from 'react-icons/bs';

// Internal Components
import Accordion from '@site/src/components/Accordion';
import Glassy from '@site/src/components/Glassy/Glassy';
import RecentBlogPosts from '@site/src/components/Home/RecentBlogPosts';
import ShowcasePartners from '@site/src/components/Home/ShowcasePartners';
import {
  A,
  B,
  Content,
  H1,
  H2,
  H3,
  Image,
  ItemH,
  ItemV,
  MultiContent,
  PrimaryA,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import Marquee from 'react-fast-marquee';

import QnA from '@site/src/components/QnA/QnA';
import { getShortFAQsList } from '@site/src/config/ShortFAQsList';

// Import Assets
import HeroBGMobile from '@site/static/assets/website/hero/hero-bg-img.webp';
import FinalBgImage from '@site/static/assets/website/home/others/push-chain-final.webm';
import StarSolidIcon from '@site/static/assets/website/illustrations/starSolidIcon.svg';

// Internal Configs
import { FeaturesList } from '@site/src/config/HomeFeaturesList';
import { InvList } from '@site/src/config/HomeInvestorList';
import GLOBALS, { device, structure } from '@site/src/config/globals';

import { FeaturedSection } from '@site/src/components/Home/FeaturedSection';
import { StatsSection } from '@site/src/components/Home/StatsSection';
import { WhatIsSection } from '@site/src/components/Home/WhatIsSection';

import AccountContext from '@site/src/context/accountContext';
import CustomReactPlayer from '@site/src/utils/CustomReactPlayer';

export default function HomeComp() {
  // Internationalization
  const { t, i18n } = useTranslation();
  const { isHydrated, shouldShowAlertBar } = useContext(AccountContext);

  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptop);

  // Hero video hover state
  const [heroHovered, setHeroHovered] = useState(false);

  const isSafari = () => {
    if (typeof window === 'undefined') return false;
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  };

  // Hero video hover handlers
  const handleHeroMouseEnter = () => {
    setHeroHovered(true);
  };

  const handleHeroMouseLeave = () => {
    setHeroHovered(false);
  };

  return (
    <HomeWrapper showAlertBar={isHydrated ? shouldShowAlertBar : false}>
      {/* GLOW CIRCLE */}
      <GlowCircle />

      {/* HERO SECTION */}
      <HeroSection
        id='hero'
        width='100%'
        className='darkBackground'
        aria-level='2'
        aria-label={t('pages.home.hero-section.section-aria-label')}
      >
        <HeroContent alignSelf='center' overflow='visible'>
          <HeroPrimary
            flex='initial'
            justifyContent='flex-start'
            onMouseEnter={handleHeroMouseEnter}
            onMouseLeave={handleHeroMouseLeave}
            style={{
              backgroundImage: heroHovered ? 'none' : undefined,
            }}
          >
            {/* Hero Video - plays continuously */}
            {!isMobile && (
              <HeroVideo
                url={
                  require(
                    isSafari()
                      ? `@site/static/assets/website/hero/hero-hover-video.mp4`
                      : `@site/static/assets/website/hero/hero-hover-video.webm`
                  ).default
                }
                playing={true}
                loop={true}
                muted={true}
                width='100%'
                height='100%'
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nofullscreen',
                    },
                  },
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  opacity: 0.8,
                }}
              />
            )}

            <HeroItem alignItems='center'>
              <HeroBody>
                <H1
                  zIndex='2'
                  fontSize={isMobile ? '2.5rem' : '3.625rem'}
                  margin='0 0 12px 0'
                  fontWeight='600'
                  lineHeight='126%'
                  letterSpacing='normal'
                  color='var(--ifm-color-white)'
                >
                  {t('pages.home.hero-section.title')}
                </H1>

                <Span
                  color='var(--ifm-color-white)'
                  zIndex='2'
                  fontSize={isMobile ? '1.125rem' : '1.25rem'}
                  fontWeight='400'
                  lineHeight='150%'
                  letterSpacing='normal'
                >
                  {t('pages.home.hero-section.description')}
                </Span>

                <HeroCTA gap='18px' flex='0'>
                  <PrimaryA
                    href={useBaseUrl('/docs')}
                    title={t('pages.home.hero-section.primary-button-title')}
                    aria-label={t(
                      'pages.home.hero-section.primary-button-aria-label'
                    )}
                    zIndex='2'
                  >
                    {t('pages.home.hero-section.primary-button')}
                    <BsArrowRight className='start-svg' />
                  </PrimaryA>

                  <PortalA
                    href='/knowledge'
                    target='_self'
                    title={t('pages.home.hero-section.secondary-button-title')}
                    aria-label={t(
                      'pages.home.hero-section.secondary-button-aria-label'
                    )}
                    fontSize='1.125rem'
                    fontWeight='600'
                    letterSpacing='-0.03em'
                    lineHeight='1rem'
                    padding='16px 32px'
                    zIndex='2'
                  >
                    {t('pages.home.hero-section.secondary-button')}
                  </PortalA>
                </HeroCTA>
              </HeroBody>
            </HeroItem>
          </HeroPrimary>
        </HeroContent>
      </HeroSection>

      {/* WHAT IS SECTION */}
      <Section
        id='what-is-push-chain'
        aria-level='2'
        aria-label={t('pages.home.whatis-section.section-aria-label')}
      >
        <Content alignSelf='center'>
          <WhatIsSection />
        </Content>
      </Section>

      {/* INNOVATION SECTION */}
      <Section
        id='innovations-of-push-chain'
        aria-level='2'
        aria-label={t('pages.home.chain-features-section.section-aria-label')}
      >
        <Content>
          <MultiContent>
            <FeaturesTopSection maxWidth={'840px'} margin='0px auto'>
              <H2
                color='var(--ifm-color-home-subtitle)'
                fontSize={isMobile ? '24px' : '30px'}
                textAlign={isMobile ? 'left' : 'center'}
                lineHeight='normal'
                fontWeight='400'
                letterSpacing='normal'
                fontFamily='DM Sans, san-serif'
              >
                <B color='var(--ifm-color-white)'>
                  {t(FeaturesList?.meta.title)}
                </B>{' '}
                {t(FeaturesList?.meta.subtitle)}
              </H2>
            </FeaturesTopSection>
          </MultiContent>
          <MultiContent>
            <FirstGridFeatures>
              {FeaturesList?.first?.map((item) => (
                <GridFeatureItem
                  showDesktop={!item.config.hide.desktop}
                  showLaptop={!item.config.hide.laptop}
                  showTablet={!item.config.hide.tablet}
                  showMobile={!item.config.hide.mobile}
                >
                  <Glassy item={item} />
                </GridFeatureItem>
              ))}
            </FirstGridFeatures>

            <SecondGridFeatures>
              {FeaturesList?.second?.map((item) => (
                <GridFeatureItem
                  showDesktop={!item.config.hide.desktop}
                  showLaptop={!item.config.hide.laptop}
                  showTablet={!item.config.hide.tablet}
                  showMobile={!item.config.hide.mobile}
                >
                  <Glassy item={item} />
                </GridFeatureItem>
              ))}
            </SecondGridFeatures>

            <ThirdGridFeatures>
              {FeaturesList?.third?.map((item, index) => (
                <GridFeatureItem
                  key={`${item.config.id}-${index}`}
                  showDesktop={!item.config.hide.desktop}
                  showLaptop={!item.config.hide.laptop}
                  showTablet={!item.config.hide.tablet}
                  showMobile={!item.config.hide.mobile}
                >
                  <Glassy item={item} />
                </GridFeatureItem>
              ))}
            </ThirdGridFeatures>
          </MultiContent>
          <MultiContent>
            <FeaturesBottomSection
              flexDirection={isMobile ? 'column' : 'row'}
              justifyContent='space-between'
              alignItems='center'
            >
              <ItemH
                gap='24px'
                flexDirection='row'
                justifyContent='flex-start'
                flexWrap='nowrap'
              >
                <H1Text>10x</H1Text>
                <Span
                  color='var(--ifm-color-white)'
                  fontSize={isMobile ? '1.5rem' : '2rem'}
                  fontWeight='500'
                  lineHeight='140%'
                  letterSpacing='-0.64px'
                  gap='24px'
                >
                  {t(FeaturesList.meta.footer.title)}
                  <FeaturesBottomOptionalText>
                    <br />
                    {t(FeaturesList.meta.footer.secondary)}
                  </FeaturesBottomOptionalText>
                </Span>
              </ItemH>

              <A
                href={useBaseUrl('/docs')}
                title={t(FeaturesList.meta.footer.ctaTitle)}
                background='var(--ifm-color-custom-pink)'
                borderRadius='16px'
                border='1px solid rgba(255, 255, 255, 0.30)'
                fontSize='1.125rem'
                fontWeight='600'
                letterSpacing='-0.03em'
                lineHeight='1rem'
                padding='16px 32px'
                zIndex='2'
              >
                {t(FeaturesList.meta.footer.ctaText)}
                <BsArrowRight className='start-svg' />
              </A>
            </FeaturesBottomSection>
          </MultiContent>
        </Content>
      </Section>

      {/* PARTNERS SECTION */}
      {/* <ShowcaseSection
          id='ecosystem'
          aria-label={t('pages.home.partners-section.section-aria-label')}
        >
          <Content alignSelf='center'>
            <ShowcasePartners />
          </Content>
        </ShowcaseSection> */}

      {/* USEFUL STATS SECTION */}
      <Section
        id='useful-stats'
        aria-level='2'
        aria-label={t('pages.home.stats-section.section-aria-label')}
      >
        <Content>
          <StatsSection />
        </Content>
      </Section>

      {/* PUSH CHAIN BLOG */}
      <Section
        id='blog'
        role='region'
        aria-level='2'
        aria-label={t('pages.home.blog-section.section-aria-label')}
      >
        <Content alignSelf='center'>
          <ItemH>
            <ItemH justifyContent='flex-start' alignItems='center' gap='8px'>
              <StarSolidIcon
                color='var(--ifm-color-pink-200)'
                aria-hidden='true'
              />
              <H2
                color='var(--ifm-color-pink-100)'
                fontSize={'0.75rem'}
                fontWeight='500'
                letterSpacing='0.6px'
                lineHeight='120%'
                role='text'
                aria-label={t('pages.home.blog-section.subtitle-aria-label')}
              >
                {t('pages.home.blog-section.subtitle')}
              </H2>
            </ItemH>

            {!isMobile && (
              <ItemH justifyContent='flex-end'>
                <SlideLink
                  href='https://push.org/blog'
                  title={t('pages.home.blog-section.explore-link-title')}
                  aria-label={t(
                    'pages.home.blog-section.explore-link-aria-label'
                  )}
                  hoverBackground='transparent'
                  hover='transparent'
                  background='transparent'
                  filter='none'
                  color='var(--ifm-color-pink-400)'
                  borderRadius='0'
                  padding='0px 0px'
                  target='_blank'
                >
                  <SpanLink>
                    {t('pages.home.blog-section.explore-link-text')}
                  </SpanLink>
                  <BsArrowRight className='anchorSVGlink' aria-hidden='true' />
                </SlideLink>
              </ItemH>
            )}
          </ItemH>

          <H2
            fontSize='3rem'
            color='var(--ifm-color-white)'
            margin='8px 0 0 0'
            fontWeight='500'
            lineHeight='120%'
            letterSpacing='0.6px'
            role='heading'
            aria-level='2'
            aria-label={t('pages.home.blog-section.title-aria-label')}
          >
            {t('pages.home.blog-section.title')}
          </H2>

          <RecentBlogPosts />
        </Content>
      </Section>

      {/* FAQ SECTION */}
      <Section
        id='faq'
        aria-level='2'
        aria-label={t('components.short-faq-snippet.section-aria-label')}
      >
        <Content>
          <QnA
            titleKey='components.short-faq-snippet.title'
            titleAriaLabelKey='components.short-faq-snippet.title-aria-label'
            discordLinkTitleKey='components.short-faq-snippet.discord-link-title'
            discordLinkAriaLabelKey='components.short-faq-snippet.discord-link-aria-label'
            discordLinkTextKey='components.short-faq-snippet.discord-link-text'
            accordionAriaLabelKey='components.short-faq-snippet.accordion-aria-label'
            exploreMoreTitleKey='components.short-faq-snippet.explore-more-title'
            exploreMoreAriaLabelKey='components.short-faq-snippet.explore-more-aria-label'
            exploreMoreTextKey='components.short-faq-snippet.explore-more-text'
            discordUrl='https://discord.com/invite/pushchain'
            exploreMoreUrl='/knowledge/faq'
            getQnAsFunction={getShortFAQsList}
          />
        </Content>
      </Section>

      {/* BACKED BY SECTION */}
      <Section
        id='backing'
        aria-level='2'
        aria-label={t('pages.home.trustedby-section.section-aria-label')}
      >
        <Content alignSelf='center' className='fluid'>
          <FeaturedGlowCircle />

          <InvestorItem alignItems='stretch'>
            <H2
              color='var(--ifm-color-white)'
              fontWeight='500'
              letterSpacing='-0.02em'
              fontSize={isMobile ? '24px' : '2rem'}
              lineHeight='130%'
              textAlign='center'
            >
              {t('pages.home.trustedby-section.title')}
            </H2>
          </InvestorItem>

          <MarqueeAnimationContainer
            margin={isMobile ? '24px 0 2.625rem 0' : '64px 0 2.625rem 0'}
            flex='1'
            alignItems='stretch'
          >
            <Marquee
              direction='left'
              speed={50}
              gradient={true}
              gradientColor={'transparent'}
              gradientWidth={80}
              pauseOnHover={false}
            >
              {InvList.top.map((item) => {
                return (
                  <InvestorCard key={item.id} style={{ margin: '0 12px' }}>
                    <InvestorIcon
                      width={item.title ? 64 : 'auto'}
                      src={
                        require(
                          `@site/static/assets/website/investors/${item.srcref}.webp`
                        ).default
                      }
                      srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                      alt={`${t('pages.home.trustedby-section.trusted-by-alt')}${item?.alt}}`}
                    />
                    {item.title && (
                      <InvestorDetails>
                        <InvestorTitle>{item.title}</InvestorTitle>
                        {item.subtitle && (
                          <InvestorSubtitle>{item.subtitle}</InvestorSubtitle>
                        )}
                      </InvestorDetails>
                    )}
                  </InvestorCard>
                );
              })}
            </Marquee>
          </MarqueeAnimationContainer>

          <MarqueeAnimationContainer flex='1' alignItems='stretch'>
            <Marquee
              direction='right'
              speed={50}
              gradient={true}
              gradientColor={'transparent'}
              gradientWidth={80}
              pauseOnHover={false}
            >
              {InvList.bottom.map((item, i) => {
                return (
                  <InvestorCard
                    key={item.id}
                    flexDirection={item.title ? 'true' : 'false'}
                    style={{ margin: '0 12px' }}
                  >
                    <InvestorIcon
                      width={item.title ? '64px' : 'auto'}
                      borderRadius={item.title ? '50%' : '0'}
                      src={
                        require(
                          `@site/static/assets/website/investors/${item.srcref}.webp`
                        ).default
                      }
                      srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                      alt={`${t('pages.home.trustedby-section.trusted-by-alt')}${item?.alt}}`}
                    />
                    {item.title && (
                      <InvestorDetails>
                        <InvestorTitle>{item.title}</InvestorTitle>
                        {item.subtitle && (
                          <InvestorSubtitle>{item.subtitle}</InvestorSubtitle>
                        )}
                      </InvestorDetails>
                    )}
                  </InvestorCard>
                );
              })}
            </Marquee>
          </MarqueeAnimationContainer>

          <FeaturedSection
            aria-level='2'
            aria-label={t('pages.home.featued-section.aria-label')}
          />
        </Content>
      </Section>

      {/* ENDING LETS PUSH SECTION */}
      <Section
        id='letspush'
        aria-level='2'
        aria-label={t('pages.home.ending-section.aria-label')}
      >
        <Content className='content'>
          <MultiContent className='small'>
            <VideoItemV>
              <CustomReactPlayer
                url={
                  require(
                    isSafari()
                      ? `@site/static/assets/website/home/others/push-chain-final.mp4`
                      : `@site/static/assets/website/home/others/push-chain-final.webm`
                  ).default
                }
                playing
                playContinuously
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nofullscreen',
                    },
                  },
                }}
              />
              <H2
                fontSize={isMobile ? '2.5rem' : '4rem'}
                color='var(--ifm-color-white)'
                fontWeight='600'
                lineHeight='120%'
                textAlign='center'
              >
                {t('pages.home.ending-section.section-title')}
              </H2>
              <Span
                fontSize='1.25rem'
                color='var(--ifm-color-white)'
                fontWeight='400'
                lineHeight='125%'
                textAlign='center'
              >
                {t('pages.home.ending-section.section-subtitle')}
              </Span>
            </VideoItemV>
          </MultiContent>
          <MultiContent className='small'>
            <BuildUniversalAppLink
              background='var(--ifm-color-custom-pink)'
              borderRadius='16px'
              border='1px solid rgba(255, 255, 255, 0.30)'
              fontSize='1.125rem'
              fontWeight='600'
              letterSpacing='-0.03em'
              lineHeight='1rem'
              padding='16px 32px'
              href='/docs'
              target='_blank'
              title={t('pages.home.ending-section.docs-link.title')}
              aria-label={t('pages.home.ending-section.docs-link.aria-label')}
            >
              <p>{t('pages.home.ending-section.docs-link.text')}</p>
              <BsArrowRight className='svg' size={23} />
            </BuildUniversalAppLink>
          </MultiContent>
        </Content>
      </Section>
    </HomeWrapper>
  );
}

const GlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(179, 72, 236, 0.2);
  filter: blur(125px);
  pointer-events: none;
  z-index: 2;

  width: 600px;
  height: 600px;
  left: 30%;
  top: 200px;

  @media ${device.desktopL} {
    left: 40%;
  }

  @media ${device.laptopL} {
    width: 500px;
    height: 500px;
    left: 35%;
  }

  @media ${device.tablet} {
    width: 543px;
    height: 538px;
    left: 238px;
    top: 29px;
  }

  @media ${device.mobileL} {
    width: 395px;
    height: 392px;
    left: -12px;
    top: 102px;
  }
`;

const FeaturedGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(179, 72, 236, 0.2);
  filter: blur(125px);
  pointer-events: none;
  z-index: 999999;

  width: 443px;
  height: 338px;
  left: 35%;
  top: 150px;

  @media ${device.laptopL} {
    width: 500px;
    height: 500px;
    left: 25%;
  }

  @media ${device.tablet} {
    width: 543px;
    height: 538px;
    left: 238px;
    top: 0px;
  }

  @media ${device.mobileL} {
    width: 395px;
    height: 392px;
    left: -12px;
    top: 102px;
  }
`;

const HomeWrapper = styled(ItemV)`
  background: var(--ifm-color-black);
  margin: 0;
  padding: 0;
  padding-bottom: env(safe-area-inset-bottom);
  overflow-x: hidden !important;
  min-height: 100svh;
  min-height: 100dvh;
  font-family:
    DM Sans,
    san-serif !important;

  ${({ showAlertBar }) =>
    showAlertBar &&
    `border-top-left-radius: 24px;
       border-top-right-radius: 24px;
    `}

  box-sizing: border-box;
  & #hero .contentBox {
    row-gap: 18px;
  }

  & .pushMissingSvg {
    width: 500px;
    @media ${device.laptop} {
      width: 400px;
    }
    @media ${device.tablet} {
      width: 100%;
    }
  }
  @media ${device.tablet} {
    width: 100%;

    & svg.figureSvg {
      width: 100%;
    }
  }
`;

const HeroSection = styled(Section)`
  overflow-y: visible;
  overflow-x: clip;
  min-height: 100svh;
  min-height: 100dvh;
`;

const HeroContent = styled(Content)`
  align-self: stretch;
  padding-right: 0;
  padding-left: 0;
  margin-top: ${GLOBALS.HEADER.HEIGHT +
  GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP}px;

  @media ${device.laptop} {
    padding-bottom: 40px;
    padding-right: ${structure.PADDING.TABLET.RIGHT}px;
    padding-left: ${structure.PADDING.TABLET.LEFT}px;
  }

  @media ${device.tablet} {
    margin-top: ${GLOBALS.HEADER.HEIGHT +
    GLOBALS.HEADER.OUTER_MARGIN.TABLET.TOP}px;
  }

  @media ${device.mobileL} {
    padding-top: 0px;
    padding-bottom: 40px;
    padding-right: ${structure.PADDING.MOBILE.RIGHT}px;
    padding-left: ${structure.PADDING.MOBILE.LEFT}px;
    margin-top: ${GLOBALS.HEADER.HEIGHT +
    GLOBALS.HEADER.OUTER_MARGIN.MOBILE.TOP}px;
  }
`;

const HeroPrimary = styled.div`
  width: 1440px;
  height: 850px;
  z-index: 99;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.laptopL} {
    width: 100%;
    height: 650px;
    aspect-ratio: 1 / 2;
  }

  @media ${device.mobileL} {
    background-image: url(${HeroBGMobile});
    background-size: contain;
    aspect-ratio: 1/2;
    width: 100%;
    height: 600px;
  }
`;

const HeroItem = styled(ItemV)`
  z-index: 2;
  max-width: 970px;
  margin: 0 auto;
  height: 100%;

  @media ${device.laptopL} {
  }

  @media ${device.laptop} {
    max-width: initial;
    align-items: center;
    margin: 0px 15%;
  }

  @media ${device.tablet} {
    margin: 24px auto;
  }

  @media ${device.tablet} {
    margin: 4px auto;
  }
`;

const HeroBody = styled(ItemV)`
  margin-bottom: 150px;
  text-align: left;
  align-self: center;

  h1,
  span {
    white-space: pre-line;
    text-align: center;
  }

  @media ${device.laptop} {
    text-align: center;

    & > Span {
      text-align: center;
    }
  }

  @media ${device.mobileL} {
    margin: auto 0px;

    h1,
    span {
      white-space: normal;
    }
  }
`;

const HeroCTA = styled(ItemH)`
  font-family:
    DM Sans,
    san-serif !important;
  letter-spacing: normal;
  justify-content: center;
  padding-top: 48px;

  .start-svg {
    color: var(--ifm-color-white);
    margin: 0px 0 0 8px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 58px;
    max-height: 58px;
  }

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.mobileL} {
    a {
      width: 100%;
    }
  }

  @media ${device.mobileM} {
    &.Button {
      display: none;
    }
  }
`;

const PortalA = styled(A)`
  position: relative;
  padding: 16px 32px;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1rem;
  border-radius: 16px;

  border: 1px solid rgba(171, 70, 248, 0.4);
  background: rgba(0, 0, 0, 0.1);
  background-blend-mode: lighten;
  box-shadow:
    2.788px 2.598px 12px 0px rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0px rgba(255, 255, 255, 0.15) inset;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  background-origin: border-box;
  background-clip: padding-box, border-box;

  color: white;
  z-index: 2;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    border-radius: 16px;
    border: 1px solid rgba(171, 70, 248, 0.6);
    background: rgba(0, 0, 0, 0.1);
    background-blend-mode: plus-lighter;
    box-shadow:
      2.788px 2.598px 12px 0 rgba(255, 255, 255, 0.15) inset,
      1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.55) inset;
    backdrop-filter: blur(5px);
  }
`;

/* Home Page Sections */

const ShowcaseSection = styled(Section)``;

const GridSection = styled(Section)``;

const GridContent = styled(Content)`
  gap: 24px;

  @media ${device.mobileL} {
    padding-top: 100px;
  }
`;

const BottomSection = styled(Section)`
  .content {
    padding-top: 100px;
    padding-bottom: 200px;

    @media ${device.mobileL} {
      padding-top: 125px;
      padding-bottom: 125px;
    }
  }
`;

const FAQSection = styled(Section)`
  padding: 100px 0;

  @media ${device.mobileL} {
    padding: 0;
  }
`;

const FeaturedInSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BackedByContent = styled(Content)`
  width: 100%;
  max-width: 100%;
  padding: 0px;
`;

const InvestorItem = styled(ItemV)``;

const InvestorCard = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(112, 90, 208, 0.4);
  border-radius: 16px;
  padding: 8px;
  min-width: 242px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  box-shadow:
    2.788px 2.598px 12px 0px rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0px rgba(255, 255, 255, 0.15) inset;
`;

const InvestorIcon = styled(Image)`
  margin: auto auto;
`;

const InvestorDetails = styled(ItemV)`
  align-self: stretch;
  flex: 1;
  margin-bottom: auto;
`;

const InvestorTitle = styled(Span)`
  font-weight: 500;
  font-size: 22px;
  line-height: 142%;
  color: var(--ifm-color-neutral-1200);
`;

const InvestorSubtitle = styled(Span)`
  font-weight: 500;
  font-size: 9px;
  line-height: 160%;
  letter-spacing: 0.11em;
  color: var(--ifm-color-neutral-900);
  text-transform: uppercase;
`;

const FeaturesTopSection = styled(ItemV)``;

const FirstGridFeatures = styled(ItemH)`
  font-family:
    DM Sans,
    san-serif;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
  align-items: stretch;
  flex-wrap: nowrap;

  & > div:first-child {
    flex: 1;
  }

  & > div:nth-child(2) {
    flex: 1.8;
  }

  @media ${device.laptop} {
    width: 100%;
    flex: 1;

    & > div:first-child {
      flex: 1;
    }

    & > div:nth-child(2) {
      flex: 1;
    }
  }

  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > div:first-child {
      width: 100%;
      max-width: 100%;
    }
  }
`;

const SecondGridFeatures = styled(ItemH)`
  font-family:
    DM Sans,
    san-serif;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  align-items: stretch;
  flex-wrap: nowrap;
  margin-top: 24px;

  & > div:first-child {
    flex: 1;
  }

  & > div:nth-child(2) {
    flex: 2;
  }

  & > div:nth-child(3) {
    flex: 1;
  }

  @media ${device.laptop} {
    width: 100%;

    & > div:first-child {
      flex: 1.4;
    }

    & > div:nth-child(2) {
      flex: 1;
    }
  }

  @media ${device.tablet} {
    & > div:first-child {
      flex: 1;
    }
  }

  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > div:first-child,
    & > div:nth-child(3) {
      width: 100%;
      min-width: 100%;
    }

    & > div:nth-child(3) {
      display: flex !important;
    }
  }
`;

const ThirdGridFeatures = styled(ItemH)`
  font-family:
    DM Sans,
    san-serif;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  align-items: stretch;
  flex-wrap: nowrap;
  margin-top: 24px;

  & > div:first-child {
    flex: 2;
  }

  & > div:nth-child(2) {
    flex: 1;
  }

  & > div:nth-child(3) {
    flex: 1;
  }

  @media ${device.laptop} {
    width: 100%;
    flex: 1;

    & > div:nth-child(2) {
      flex: 1;
    }

    & > div:nth-child(3) {
      flex: 1;
    }
  }

  @media ${device.tablet} {
    & > div:nth-child(2) {
      flex: 1;
    }
  }

  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > div:first-child {
      display: flex;
      width: 100%;
      min-width: 100%;
    }
  }
`;

const H1Text = styled(H1)`
  leading-trim: both;
  text-edge: cap;
  text-shadow: 0px 0px 10px rgba(198, 139, 249, 0.5);
  font-family: 'DM Sans';
  font-size: 6.5rem;
  font-style: normal;
  font-weight: 600;
  // line-height: 38.578px;
  letter-spacing: -2.067px;

  background: linear-gradient(
    90deg,
    var(--ifm-color-warning) -3.12%,
    var(--ifm-color-home-gradient-end) 109.09%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesBottomSection = styled(ItemH)`
  gap: 24px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  @media ${device.mobileL} {
    a {
      width: 100%;
    }
  }
`;

const FeaturesBottomOptionalText = styled.span`
  @media ${device.tablet} {
    display: none;
  }
`;

const GridFeatureItem = styled.div`
  display: ${(props) => (props.showDesktop ? 'flex' : 'none')};
  flex-direction: row;
  flex: 1;
  padding: 0px;

  @media ${device.laptopL} {
    display: ${(props) => (props.showLaptop ? 'flex' : 'none')};
  }

  @media ${device.tablet} {
    display: ${(props) => (props.showTablet ? 'flex' : 'none')};
  }

  @media ${device.mobileL} {
    display: ${(props) => (props.showMobile ? 'flex' : 'none')};
  }
`;

const TagItem = styled.b`
  width: fit-content;
  border-radius: 12px;
  border: 1px solid var(--ifm-color-pink-200);
  background: transparent;
  padding: 2px 5px;
  color: var(--ifm-color-pink-200);
  font-size: 9px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
`;

const SlideLink = styled(A)`
  overflow: inherit;
  .anchorSVGlink {
    color: var(--ifm-color-pink-400);
    top: 3px;
    margin-left: 8px;
  }

  &:hover {
    .anchorSVGlink {
      color: var(--ifm-color-pink-400);
    }
  }
`;

const BuildUniversalAppLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: inherit;
  align-self: center;
  gap: 12px;

  p {
    margin: 0;
  }

  .anchorSVGlink {
    color: var(--ifm-color-white);
    top: 0px;
  }

  @media ${device.mobileL} {
    width: 100%;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: var(--ifm-color-white);
    }
  }
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
    background-color: var(--ifm-color-pink-400);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const MarqueeAnimationContainer = styled(ItemV)`
  max-height: 96px;
  min-height: 96px;
`;

const AccordionGrid = styled.div`
  max-width: 877px;
  min-width: 877px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }
`;

const HeroVideo = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
`;

const VideoItemV = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  pointer-events: none;
  touch-action: none;

  h2 {
    margin-top: auto;

    @media ${device.mobileL} {
      margin-bottom: 1.5rem;
    }
  }

  @media ${device.tablet} {
    max-width: 500px;
  }

  @media ${device.mobileL} {
    max-width: 350px;
  }
`;
