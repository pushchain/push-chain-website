// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { useContext, useState } from 'react';
import styled from 'styled-components';

// External Components
import { useTranslation } from 'react-i18next';
import { BsArrowRight, BsDiscord } from 'react-icons/bs';

// Internal Components
import Accordion from '@site/src/components/Accordion';
import Glassy from '@site/src/components/Glassy/Glassy';
import RecentBlogPosts from '@site/src/components/Home/RecentBlogPosts';
import ShortFAQs from '@site/src/components/ShortFAQs/ShortFAQs';
import { ShortFAQsList } from '@site/src/config/ShortFAQsList';
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
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import Marquee from 'react-fast-marquee';

// Import Assets
import StarSolidIcon from '@site/static/assets/website/illustrations/starSolidIcon.svg';
import HeroBGMobile from '../../static/assets/website/hero/hero-bg-img.webp';
import HeroBG from '../../static/assets/website/hero/hero-bg.webp';
import FinalBgImage from '../../static/assets/website/home/others/push-chain-final.webm';

// Internal Configs
import { FeaturesList } from '@site/src/config/HomeFeaturesList';
import { InvList } from '@site/src/config/HomeInvestorList';
import GLOBALS, { device, structure } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';
import { FeaturedSection } from '../components/Home/FeaturedSection';
import { StatsSection } from '../components/Home/StatsSection';
import { WhatIsSection } from '../components/Home/WhatIsSection';
import AccountContext from '../context/accountContext';
import CustomReactPlayer from '../utils/CustomReactPlayer';

export default function Home() {
  // Internationalization
  const { t, i18n } = useTranslation();
  const { isHydrated, shouldShowAlertBar } = useContext(AccountContext);

  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptop);

  const isSafari = () => {
    if (typeof window === 'undefined') return false;
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  };

  return (
    <Layout
      title={PageMeta.HOME.pageTitle}
      description={PageMeta.HOME.pageDescription}
      showNavbar='chain'
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Home | Push Chain: True Universal Blockchain'
        />
        <meta
          name='og:description'
          content='Push Chain is a shared state L1 blockchain for Universal Apps. Capable of doing transactions from any chain, unifying L1s & L2s and enabling apps from any chain to be accessed by the users of any chain.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta
          name='twitter:title'
          content='Home | Push Chain: True Universal Blockchain'
        />
        <meta
          name='twitter:description'
          content='Push Chain is a shared state L1 blockchain for Universal Apps. Capable of doing transactions from any chain, unifying L1s & L2s and enabling apps from any chain to be accessed by the users of any chain.'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Chain',
            description: 'Any Chain. Any Wallet. Any App',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-chain',
            ],
          })}
        </script>
      </Head>

      <HomeWrapper showAlertBar={isHydrated ? shouldShowAlertBar : false}>
        {/* GLOW CIRCLE */}
        <GlowCircle />

        {/* HERO SECTION */}
        <HeroSection id='hero' width='100%' className='darkBackground'>
          <HeroContent alignSelf='center' overflow='visible'>
            <HeroPrimary flex='initial' justifyContent='flex-start'>
              <HeroItem alignItems='center'>
                <HeroBody>
                  <H1
                    zIndex='2'
                    fontSize={isMobile ? '2.5rem' : '3.625rem'}
                    margin='0 0 12px 0'
                    fontWeight='600'
                    lineHeight='126%'
                    letterSpacing='normal'
                    color='#FFF'
                  >
                    {t('home.hero-section.title')}
                  </H1>

                  <Span
                    color='#FFF'
                    zIndex='2'
                    fontSize={isMobile ? '1.125rem' : '1.25rem'}
                    fontWeight='400'
                    lineHeight='150%'
                    letterSpacing='normal'
                  >
                    {t('home.hero-section.description')}
                  </Span>

                  <HeroCTA gap='18px' flex='0'>
                    <A
                      href={useBaseUrl('/docs')}
                      title={t('home.hero-section.primary-button-title')}
                      background='#D548EC'
                      borderRadius='16px'
                      border='1px solid rgba(255, 255, 255, 0.30)'
                      fontSize='1.125rem'
                      fontWeight='600'
                      letterSpacing='-0.03em'
                      lineHeight='1rem'
                      padding='16px 32px'
                      zIndex='2'
                    >
                      {t('home.hero-section.primary-button')}
                      <BsArrowRight className='start-svg' />
                    </A>

                    <PortalA
                      href='/knowledge'
                      target='_self'
                      title={t('home.hero-section.secondary-button-title')}
                      fontSize='1.125rem'
                      fontWeight='600'
                      letterSpacing='-0.03em'
                      lineHeight='1rem'
                      padding='16px 32px'
                      zIndex='2'
                    >
                      {t('home.hero-section.secondary-button')}
                    </PortalA>
                  </HeroCTA>
                </HeroBody>
              </HeroItem>
            </HeroPrimary>
          </HeroContent>
        </HeroSection>

        {/* HERO IMG SECTION */}
        <Section id='what-is-push-chain'>
          <Content alignSelf='center'>
            <WhatIsSection />
          </Content>
        </Section>

        {/* GLASSY SECTION */}
        <Section id='innovations-of-push-chain'>
          <Content>
            <FeaturesTopSection maxWidth={'840px'} margin='0px auto'>
              <H2
                color='#DDD8D8'
                fontSize={isMobile ? '24px' : '30px'}
                textAlign={isMobile ? 'left' : 'center'}
                lineHeight='normal'
                fontWeight='400'
                letterSpacing='normal'
                fontFamily='DM Sans, san-serif'
              >
                <B color='#fff'>{t(FeaturesList?.meta.title)}</B>{' '}
                {t(FeaturesList?.meta.subtitle)}
              </H2>
            </FeaturesTopSection>

            <ItemV alignSelf='center' flexWrap='nowrap' gap='24px'>
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
                    color='#FFF'
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
                  background='#D548EC'
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
            </ItemV>
          </Content>
        </Section>

        {/* SHOWCASE SECTION */}
        {/* <ShowcaseSection id='ecosystem'>
          <Content alignSelf='center'>
            <ShowcasePartners />
          </Content>
        </ShowcaseSection> */}

        {/* USEFUL STATS SECTION */}
        <Section id='useful-stats'>
          <StatsContent>
            <StatsSection />
          </StatsContent>
        </Section>

        {/* PUSH CHAIN BLOG */}
        <BlogSection
          id='blog'
          role='region'
          aria-label={t('home.blog-section.section-aria-label')}
        >
          <Content alignSelf='center'>
            <ItemH>
              <ItemH justifyContent='flex-start' alignItems='center' gap='8px'>
                <StarSolidIcon color='#D98AEC' aria-hidden='true' />
                <H2
                  color='#CCA4F0'
                  fontSize={'0.75rem'}
                  fontWeight='500'
                  letterSpacing='0.6px'
                  lineHeight='120%'
                  role='text'
                  aria-label={t('home.blog-section.subtitle-aria-label')}
                >
                  {t('home.blog-section.subtitle')}
                </H2>
              </ItemH>

              {!isMobile && (
                <ItemH justifyContent='flex-end'>
                  <SlideLink
                    href='https://push.org/blog'
                    title={t('home.blog-section.explore-link-title')}
                    aria-label={t('home.blog-section.explore-link-aria-label')}
                    hoverBackground='transparent'
                    hover='transparent'
                    background='transparent'
                    filter='none'
                    color='#E163FF'
                    borderRadius='0'
                    padding='0px 0px'
                    target='_blank'
                  >
                    <SpanLink>
                      {t('home.blog-section.explore-link-text')}
                    </SpanLink>
                    <BsArrowRight
                      className='anchorSVGlink'
                      aria-hidden='true'
                    />
                  </SlideLink>
                </ItemH>
              )}
            </ItemH>

            <H2
              fontSize='3rem'
              color='#fff'
              margin='8px 0 0 0'
              fontWeight='500'
              lineHeight='120%'
              letterSpacing='0.6px'
              role='heading'
              aria-level='2'
              aria-label={t('home.blog-section.title-aria-label')}
            >
              {t('home.blog-section.title')}
            </H2>

            <RecentBlogPosts />
          </Content>
        </BlogSection>

        {/* FAQ SECTION */}
        <FAQSection id='faq'>
          <Content>
            <ShortFAQs />
          </Content>
        </FAQSection>

        {/* BACKED BY SECTION */}
        <BackedBySection id='investors'>
          <BackedByContent padding='0px 0px' alignSelf='center'>
            <FeaturedGlowCircle />

            <InvestorItem alignItems='stretch'>
              <InvestorHeader
                color='#FFFFFF'
                fontWeight='500'
                letterSpacing='-0.02em'
                fontSize={isMobile ? '24px' : '2rem'}
                lineHeight='130%'
                textAlign='center'
              >
                {t('home.investors-section.title')}
              </InvestorHeader>
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
                        alt={`${item?.alt}`}
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
                        alt={`${item?.alt}`}
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

            <FeaturedSection />
          </BackedByContent>
        </BackedBySection>

        <BottomSection>
          <Content className='content'>
            <ItemV>
              <FinalSection>
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
                  color='#fff'
                  fontWeight='600'
                  lineHeight='120%'
                  textAlign='center'
                >
                  Build {isMobile && <br />} Universal {isMobile && <br />}{' '}
                  Apps.
                </H2>
              </FinalSection>
              <Span
                fontSize='1.25rem'
                color='#fff'
                fontWeight='400'
                lineHeight='125%'
                textAlign='center'
              >
                Break the silos. Build once, scale on every blockchain.
              </Span>

              <FaqLink
                href='/docs'
                target='_blank'
                title='Explore Push Chain Docs'
                background='#D548EC'
                borderRadius='16px'
                border='1px solid rgba(255, 255, 255, 0.30)'
                fontSize='1.125rem'
                fontWeight='600'
                letterSpacing='-0.03em'
                lineHeight='1rem'
                padding='16px 32px'
                zIndex='2'
                margin='48px 0 0 0'
              >
                <p>LFG Push Chain</p>
                <BsArrowRight className='svg' size={23} />
              </FaqLink>
            </ItemV>
          </Content>
        </BottomSection>
      </HomeWrapper>
    </Layout>
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
  left: 40%;
  top: 159px;

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
  background: #000;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
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
  min-height: 100vh;
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
  background-image: url(${HeroBG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 1440px;
  height: 850px;
  z-index: 99;

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
  margin: auto 0px;
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
    color: #fff;
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

const StatsContent = styled(Content)``;

const FeaturedInSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogSection = styled(Section)``;

const BackedBySection = styled(Section)`
  padding: 100px 0;

  @media ${device.mobileL} {
    padding: 125px 0;
  }
`;

const BackedByContent = styled(Content)`
  width: 100%;
  max-width: 100%;
  padding: 0px;
`;

const InvestorHeader = styled(H2)`
  width: 720px;
  margin: 0 auto 0px auto;
  @media ${device.tablet} {
    width: auto;
  }
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
  color: #09090b;
`;

const InvestorSubtitle = styled(Span)`
  font-weight: 500;
  font-size: 9px;
  line-height: 160%;
  letter-spacing: 0.11em;
  color: #303c5e;
  text-transform: uppercase;
`;

const FeaturesTopSection = styled(ItemV)`
  margin-bottom: 75px;
`;

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

  background: linear-gradient(90deg, #f5f1ff -3.12%, #aa48ec 109.09%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesBottomSection = styled(ItemH)`
  margin-top: 75px;
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
  border: 1px solid #d98aec;
  background: transparent;
  padding: 2px 5px;
  color: #d98aec;
  font-size: 9px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
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

const FaqLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: inherit;
  gap: 12px;

  p {
    margin: 0;
  }

  .anchorSVGlink {
    color: #fff;
    top: 0px;
  }

  @media ${device.mobileL} {
    width: 100%;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #fff;
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
    background-color: #e163ff;
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

const FinalSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 600px;
  pointer-events: none;
  touch-action: none;

  h2 {
    margin-top: auto;

    @media ${device.mobileL} {
      margin-bottom: 0.5rem;
    }
  }

  @media ${device.tablet} {
    width: 500px;
    height: 400px;
  }

  @media ${device.mobileL} {
    width: 350px;
    height: 500px;
  }
`;
