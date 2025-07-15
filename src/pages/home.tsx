// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

// External Components
import Spline from '@splinetool/react-spline';
import { useTranslation } from 'react-i18next';
import {
  BsArrowRight,
  BsArrowUpRight,
  BsDiscord,
  BsFileX,
} from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import FeaturedList from '@site/src/components/Featured/FeaturedList';
import Glassy from '@site/src/components/Glassy/Glassy';
// import AnalyticsStats from '@site/src/components/Home/AnalyticsStats';
import RecentBlogPosts from '@site/src/components/Home/RecentBlogPosts';
import ShowcasePartners from '@site/src/components/Home/ShowcasePartners';
import ImageHolder from '@site/src/components/ImageHolder';
import { MailingSignup } from '@site/src/components/MailingSignup/MailingSignup';
import NewMarqueeAnimation from '@site/src/components/NewMarqueeAnimation';
import Accordion from '@site/src/components/Accordion';
import InfoBar from '@site/src/components/InfoBar';
import { General, Notifs } from '@site/src/config/HomepageFAQ';
import {
  A,
  B,
  Button,
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
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Import Assets
import StarColoredIcon from '@site/static/assets/website/illustrations/starColoredIcon.svg';
import StarIcon from '@site/static/assets/website/illustrations/starIcon.svg';
import StarSolidIcon from '@site/static/assets/website/illustrations/starSolidIcon.svg';
import BgImage from '@site/static/assets/website/home/faq/footerbg@3x.png';

// Internal Configs
import { NotifFeaturesList } from '@site/src/config/HomeNotifFeaturesList';
import { OthersFeaturesList } from '@site/src/config/HomeOthersFeaturesList';
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';
import { HeroImageSection } from '../components/Home/HeroImageSection';
import { StatsSection } from '../components/Home/StatsSection';
import { InvList } from '@site/src/config/HomeInvestorList';
import { FeaturedSection } from '../components/Home/FeaturedSection';

export default function Home() {
  // Internationalization
  const { t, i18n } = useTranslation();

  const [showMoreTeamMembers, setShowMoreTeamMembers] = useState(false);
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptop);

  const onClickViewMoreTeamMembers = (e) => {
    e.preventDefault();
    setShowMoreTeamMembers(!showMoreTeamMembers);
  };

  const noNavbar = false;
  const alertLink = `https://portal.push.org/rewards`;

  return (
    <Layout
      title={PageMeta.HOME.pageTitle}
      description={PageMeta.HOME.pageDescription}
      showNavbar='chain'
    >
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Push (Previously EPNS) | Communication Protocol of Web3</title>
        <meta
          name='description'
          content='Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://comms.push.org' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push Protocol (Previously EPNS)' />
        <meta
          property='og:description'
          content='Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta name='twitter:title' content='Push Protocol (Previously EPNS)' />
        <meta
          name='twitter:description'
          content='Push is the missing piece of Web3 | Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.'
        />
        <meta
          property='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/homepreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Protocol',
            description: 'The Communication Protocol of Web3',
            url: 'https://comms.push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      <HomeWrapper>
        {/* GLOW CIRCLE */}
        <GlowCircle />

        {/* HERO SECTION */}
        <HeroSection
          id='hero'
          // minHeight='100vh'
          width='100%'
          className='darkBackground'
        >
          <HeroContent alignSelf='center' overflow='visible'>
            <HeroPrimary flex='initial' justifyContent='flex-start'>
              <HeroItem alignItems='center'>
                {/* <InfoBar
                  text='Push Chain Devnet Drop S2 is Live!'
                  url={alertLink}
                /> */}

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
                    {t('home.hero.title')}
                  </H1>

                  <Span
                    color='#FFF'
                    zIndex='2'
                    fontSize={isMobile ? '1.125rem' : '1.25rem'}
                    fontWeight='400'
                    lineHeight='150%'
                    letterSpacing='normal'
                  >
                    {t('home.hero.description')}
                  </Span>

                  <HeroCTA gap='18px'>
                    <A
                      href={useBaseUrl('/docs')}
                      title={t('home.hero.alt-start-button')}
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
                      {t('home.hero.start-button')}
                      <BsArrowRight className='start-svg' />
                    </A>

                    <PortalA
                      href='https://portal.push.org'
                      target='_blank'
                      title={t('home.hero.alt-start-button')}
                      borderRadius='16px'
                      fontSize='1.125rem'
                      fontWeight='600'
                      letterSpacing='-0.03em'
                      lineHeight='1rem'
                      padding='16px 32px'
                      zIndex='2'
                    >
                      {t('home.hero.explore-push-portal')}
                    </PortalA>
                  </HeroCTA>
                </HeroBody>
              </HeroItem>
            </HeroPrimary>
          </HeroContent>
        </HeroSection>

        {/* HERO IMG SECTION */}
        <Section id='hero-image'>
          <Content alignSelf='center'>
            <HeroImageSection />
          </Content>
        </Section>

        {/* NOTIF SECTION */}
        <GridSection id='notification'>
          {/* Fix grid */}
          <GridContent alignSelf='center'>
            <GridFeatures>
              {NotifFeaturesList?.first?.map((item) => (
                <GridFeatureItem>
                  <Glassy item={item} />
                </GridFeatureItem>
              ))}
            </GridFeatures>

            <SecondGridFeatures>
              {NotifFeaturesList?.second?.map((item) => (
                <GridFeatureItem>
                  <Glassy item={item} />
                </GridFeatureItem>
              ))}
            </SecondGridFeatures>

            <TabletGridFeatures>
              {NotifFeaturesList?.tabletOnly?.map((item) => (
                <GridFeatureItem>
                  <Glassy item={item} />
                </GridFeatureItem>
              ))}
            </TabletGridFeatures>

            <ThirdGridFeatures>
              {NotifFeaturesList?.third?.map((item) => (
                <GridFeatureItem>
                  <Glassy item={item} />
                </GridFeatureItem>
              ))}
            </ThirdGridFeatures>

            <GridBottomSection
              flexDirection={isMobile ? 'column' : 'row'}
              justifyContent='space-between'
              alignItems='center'
              gap={isTablet && '24px'}
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
                  your apps user base by going universal {!isTablet && <br />}
                  with zero effort!
                </Span>
              </ItemH>

              <A
                href={useBaseUrl('/docs')}
                title={t('home.hero.alt-start-button')}
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
                {t('home.hero.start-button')}
                <BsArrowRight className='start-svg' />
              </A>
            </GridBottomSection>
          </GridContent>
        </GridSection>

        {/* SHOWCASE SECTION */}
        <ShowcaseSection id='showcase'>
          <Content alignSelf='center'>
            <ShowcasePartners />
          </Content>
        </ShowcaseSection>

        <Section>
          <StatsContent>
            <StatsSection />
          </StatsContent>
        </Section>

        {/* WHY PUSH AND BLOG */}
        <BlogSection id='blog'>
          <Content alignSelf='center'>
            {/* BLOG SECTION */}
            <ItemH>
              <ItemH justifyContent='flex-start' alignItems='center' gap='8px'>
                <StarSolidIcon color='#D98AEC' />
                <H2
                  color='#CCA4F0'
                  fontSize={'0.75rem'}
                  fontWeight='500'
                  letterSpacing='0.6px'
                  lineHeight='120%'
                >
                  NEWS, DEVLOGS & IDEAS
                </H2>
              </ItemH>

              {!isMobile && (
                <ItemH justifyContent='flex-end'>
                  <SlideLink
                    href='https://push.org/blog'
                    title='Explore all articles'
                    hoverBackground='transparent'
                    hover='transparent'
                    background='transparent'
                    filter='none'
                    color='#E163FF'
                    borderRadius='0'
                    padding='0px 0px'
                  >
                    <SpanLink>Explore More Articles</SpanLink>
                    <BsArrowRight className='anchorSVGlink' />
                  </SlideLink>
                </ItemH>
              )}
            </ItemH>

            <H2
              fontSize={isMobile ? '24px' : '3rem'}
              color='#fff'
              margin='8px 0 0 0'
              fontWeight='500'
              lineHeight='120%'
              letterSpacing='0.6px'
            >
              Your Pulse of Push Chain
            </H2>

            <RecentBlogPosts />
          </Content>
        </BlogSection>

        {/* MEDIA COVERAGE SECTION */}
        {/* <FeaturedInSection id='featured'>
          <Content className='fluid'>
            <ItemH justifyContent='center'>
              <H2
                color='#FFFFFF'
                fontWeight='500'
                letterSpacing='normal'
                fontSize={isMobile ? '24px' : '36px'}
                fontFamily='DM Sans, san-serif'
                lineHeight='130%'
                textAlign='center'
              >
                {t('home.featured-section.title')}
              </H2>
            </ItemH>

            <FeaturedList />
          </Content>
        </FeaturedInSection> */}

        <FAQSection>
          <Content>
            <ItemH
              flexDirection={isLaptop && 'column'}
              alignItems='flex-start'
              justifyContent='space-between'
            >
              <ItemV
                flexDirection={isLaptop ? 'row' : 'column'}
                alignItems='flex-start'
                justifyContent={isLaptop ? 'space-between' : 'flex-start'}
              >
                <H2
                  color='#FFF'
                  fontSize={isMobile ? '2.5rem' : '3rem'}
                  fontFamily='DM Sans, sans-serif'
                  fontWeight='600'
                  lineHeight='120%'
                >
                  Frequently <br /> Asked <br /> Questions
                </H2>

                <FaqLink
                  href='https://discord.gg/pushprotocol'
                  target='_blank'
                  title='Discord'
                  fontSize='16px'
                  margin={
                    isMobile ? '24px 0 0 0' : isLaptop ? '0' : '24px 0 0 0'
                  }
                  background='#5865F2'
                  color={GLOBALS.COLORS.FONT_LIGHT}
                  fontFamily='DM Sans, sans-serif'
                  border='1px solid rgba(255, 255, 255, 0.30)'
                  borderRadius='12px'
                  gap='12px'
                >
                  <BsDiscord size={28} />
                  <p>Ask us on Discord</p>
                  <BsArrowRight size={24} className='anchorSvgLink' />
                </FaqLink>
              </ItemV>

              <ItemV
                alignItems='flex-start'
                justifyContent='flex-start'
                margin={isLaptop ? '48px 0 0 0' : '-20px 0 0 0'}
              >
                <AccordionGrid>
                  <Accordion items={General} />
                </AccordionGrid>

                <AccordionGrid>
                  <Accordion items={Notifs.slice(0, 2)} firstOpen={false} />
                </AccordionGrid>

                <SlideLink
                  href={useBaseUrl('/faq')}
                  title={'new'}
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
                  <SpanLink>Explore More FAQs</SpanLink>
                  <BsArrowRight className='anchorSVGlink' />
                </SlideLink>
              </ItemV>
            </ItemH>
          </Content>
        </FAQSection>

        {/* BACKED BY SECTION */}
        <BackedBySection padding='0px 0px' id='investors'>
          <BackedByContent padding='0px 0px' alignSelf='center'>
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

            <FeaturedGlowCircle />

            <MarqueeAnimationContainer
              margin={isMobile ? '24px 0 2.625rem 0' : '64px 0 2.625rem 0'}
              flex='1'
              alignItems='stretch'
            >
              <NewMarqueeAnimation
                speed={2}
                gradientWidth={8}
                gap={24}
                fixedWidth={'250px'}
                direction='ltr'
              >
                {InvList.top.map((item) => {
                  return (
                    <SplideSlide>
                      <InvestorCard key={item.id}>
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
                              <InvestorSubtitle>
                                {item.subtitle}
                              </InvestorSubtitle>
                            )}
                          </InvestorDetails>
                        )}
                      </InvestorCard>
                    </SplideSlide>
                  );
                })}
              </NewMarqueeAnimation>
            </MarqueeAnimationContainer>

            <MarqueeAnimationContainer flex='1' alignItems='stretch'>
              <NewMarqueeAnimation
                speed={-2}
                gradientWidth={8}
                gap={24}
                fixedWidth={'250px'}
                direction='ltr'
              >
                {InvList.bottom.map((item, i) => {
                  return (
                    <SplideSlide>
                      <InvestorCard
                        key={item.id}
                        flexDirection={item.title ? 'true' : 'false'}
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
                              <InvestorSubtitle>
                                {item.subtitle}
                              </InvestorSubtitle>
                            )}
                          </InvestorDetails>
                        )}
                      </InvestorCard>
                    </SplideSlide>
                  );
                })}
              </NewMarqueeAnimation>
            </MarqueeAnimationContainer>

            <FeaturedSection />
          </BackedByContent>
        </BackedBySection>

        <BottomSection>
          <Content>
            <ItemV>
              <H2
                fontSize={isMobile ? '2rem' : '4rem'}
                color='#fff'
                fontWeight='600'
                lineHeight='120%'
                textAlign='center'
              >
                Build Universal Apps.
              </H2>
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
  z-index: 999999;

  width: 543px;
  height: 538px;
  left: 446px;
  top: 29px;

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

  width: 543px;
  height: 538px;
  left: 446px;
  top: 0px;

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

  @media ${device.laptop} {
    min-height: initial;
  }
`;

const HeroContent = styled(Content)`
  align-self: stretch;
  // padding-top: 250px;
  // padding-bottom: 250px;

  @media ${device.laptop} {
    padding-top: 200px;
    padding-bottom: 40px;
  }

  @media ${device.mobileL} {
    padding-top: 112px;
    padding-bottom: 40px;
  }
`;

const HeroPrimary = styled(ItemH)``;

const HeroItem = styled(ItemV)`
  z-index: 2;
  max-width: 970px;
  margin: 0 auto;

  @media ${device.laptop} {
    max-width: initial;
    align-items: center;
    margin: 0 15%;
  }

  @media ${device.tablet} {
    margin: 0 auto;
  }
`;

const HeroBody = styled(ItemV)`
  margin: 114px 0px;
  text-align: left;

  h1,
  span {
    white-space: pre-line;
    text-align: center;
  }

  @media ${device.laptop} {
    margin: 14px 0px;
    text-align: center;

    & > Span {
      text-align: center;
    }
  }

  @media ${device.mobileL} {
    margin: 69px 0px;
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

const HeroAnalytics = styled(ItemH)`
  &:before {
    content: '';
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 40%;
    border-radius: 0 0 150px 150px;
    background-color: #c336e4;
    opacity: 0.35;
    filter: blur(80px);
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    height: 1px;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(202, 55, 237, 0) 18%,
      #ca37ed 50%,
      rgba(202, 55, 237, 0) 82%
    );
  }

  margin: 0 auto;

  @media ${device.laptop} {
    margin: 40px 0 0px 0;
    flex: initial;
    position: relative;
    bottom: auto;
  }
`;

const PortalA = styled(A)`
  background: rgba(0, 0, 0, 0.1);
  background-blend-mode: lighten;
  box-shadow:
    2.788px 2.598px 12px 0px rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0px rgba(255, 255, 255, 0.15) inset;
  backdrop-filter: blur(100px);
  border: 1px solid rgba(112, 90, 208, 0.4);
`;

/* Home Page Sections */

const ShowcaseSection = styled(Section)``;

const GridSection = styled(Section)``;

const GridContent = styled(Content)`
  gap: 24px;
`;

const ChatSection = styled(Section)``;

const OtherFeaturesSection = styled(Section)``;

const TokenomicsSection = styled(Section)``;

const BottomSection = styled(Section)`
  padding: 200px 0;
`;

const FAQSection = styled(Section)``;

const StatsContent = styled(Content)``;

const BgSection = styled(Section)`
  &:after {
    content: '';
    position: absolute;
    height: 500px;
    width: 500px;
    top: 25px;
    background: radial-gradient(
      98.72% 98.72% at 50% 1.28%,
      rgba(206, 56, 231, 0.43) 0%,
      rgba(45, 20, 148, 0.26) 51.5%
    );
    filter: blur(95.11041259765625px);
    border-radius: 531.848px;
    margin: auto auto;

    @media ${device.mobileL} {
      height: 300px;
      width: 300px;
    }
  }
`;

const TokenItem = styled.div`
  width: 100%;
  padding: 24px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  color: #fff;
  font-family: 'DM Sans, san-serif';
  font-size: 19px;
  font-weight: 400;
  line-height: 130%;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: normal;

  @media ${device.mobileL} {
    font-size: 17px;
  }
`;

const TokenImage = styled(Image)`
  object-fit: contain;

  @media ${device.mobileL} {
    margin-top: 32px;
  }
`;

const FeaturedInSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogSection = styled(Section)``;

const BackedBySection = styled(Section)``;

const BackedByContent = styled(Content)`
  // background: red;
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

const InvestorCard = styled(ItemV)`
  background: rgba(0, 0, 0, 0.1);
  background-blend-mode: plus-lighter;
  box-shadow:
    2.788px 2.598px 12px 0px rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0px rgba(255, 255, 255, 0.15) inset;
  backdrop-filter: blur(10px);

  border: 1px solid rgba(112, 90, 208, 0.4);
  border-radius: 16px;
  padding: 8px;
  min-width: 242px;
  min-height: 96px;
  max-height: 96px;
  flex: 0;
`;

const InvestorIcon = styled(Image)`
  margin: auto auto;
  // fix filters
  // filter: grayscale(100%);
  // filter: invert(77%) sepia(7%) saturate(211%) hue-rotate(182deg) brightness(95%) contrast(81%);
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

const GridFeatures = styled(ItemH)`
  font-family:
    DM Sans,
    san-serif;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
  align-items: stretch;
  flex-wrap: nowrap;

  & > div:first-child {
    max-width: 400px;
  }

  @media ${device.laptop} {
    width: 100%;
    flex: 1;

    & > div:first-child {
      max-width: 300px;
    }

    & > div:nth-child(3) {
      display: none;
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
    max-width: 300px;
  }

  & > div:nth-child(3) {
    max-width: 300px;
  }

  @media ${device.laptop} {
    width: 100%;

    & > div:first-child {
      max-width: 450px;
    }

    & > div:nth-child(3) {
      display: none !important;
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
  }
`;

const TabletGridFeatures = styled(ItemH)`
  display: none;

  @media ${device.laptop} {
    font-family:
      DM Sans,
      san-serif;
    gap: 24px;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    align-items: stretch;
    flex-wrap: nowrap;
    display: flex;

    & > div:first-child {
      max-width: 250px;
    }

    & > div:nth-child(3) {
      display: none !important;
    }
  }

  @media ${device.mobileL} {
    display: none !important;
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
    min-width: 450px;
  }

  @media ${device.laptopM} {
    width: 100%;

    & > div:first-child {
      display: none !important;
    }

    & > div:nth-child(3) {
      max-width: 450px;
    }
  }

  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > div:first-child {
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

const GridBottomSection = styled(ItemH)`
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

const GridFeatureItem = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0px;
  // gap: 24px;

  // @media ${device.laptopM} {
  // }

  // @media ${device.mobileL} {
  // }
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

const MarqueeAnimationContainer = styled(ItemV)``;

const AccordionGrid = styled.div`
  max-width: 877px;
  min-width: 877px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }
`;

const ImageBackgroundDiv = styled.div`
  width: 100%;
  min-height: 400px;
  background-image: url(${BgImage});
  background-size: auto 400px;
  background-repeat: no-repeat;
  background-position: top center;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 100%;
    background-size: contain;
    background-position: top center;
    min-height: 330px;
  }

  @media ${device.tablet} {
    width: 100%;
    background-size: contain;
    background-position: top center;
    min-height: 400px;
  }
`;
