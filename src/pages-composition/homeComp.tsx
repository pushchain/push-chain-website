// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useContext } from 'react';
import styled from 'styled-components';

// External Components
import { useTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';

// Internal Components
import RecentBlogPosts from '@site/src/components/Home/RecentBlogPosts';
import ShowcasePartners from '@site/src/components/Home/ShowcasePartners';
import {
  A,
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
import useSmoothScroll from '@site/src/hooks/useSmoothScroll';

import QnA from '@site/src/components/QnA/QnA';
import { getHomeAgentFAQsList } from '@site/src/config/HomeAgentFAQsList';

// Import Assets
import StarSolidIcon from '@site/static/assets/website/illustrations/starSolidIcon.svg';

// Internal Configs
import { AgentFeaturesListB } from '@site/src/config/AgentFeaturesListB';
import GLOBALS, { device, structure } from '@site/src/config/globals';

import AgenticScaleSection from '@site/src/components/Home/AgenticScaleSection';
import ClosingCTA from '@site/src/components/Home/ClosingCTA';
import FeatureCard from '@site/src/components/Home/FeatureCard';
import HeroTopography from '@site/src/components/Home/HeroTopography';
import PaidStatsRow from '@site/src/components/Home/PaidStatsRow';
import UniversalStatCallout from '@site/src/components/Home/UniversalStatCallout';
import ProblemNarrative from '@site/src/components/Home/ProblemNarrative';
import SolutionPanel from '@site/src/components/Home/SolutionPanel';

import AccountContext from '@site/src/context/accountContext';

const FONT_MONO = "'IBM Plex Mono', monospace";

export default function HomeComp() {
  // Internationalization
  const { t, i18n } = useTranslation();
  const { isHydrated, shouldShowAlertBar } = useContext(AccountContext);

  const isMobile = useMediaQuery(device.mobileL);

  // Inertial scrolling for this page, wired into ScrollTrigger so the
  // problem-narrative stack stays in step with it.
  useSmoothScroll();

  return (
    <HomeWrapper showAlertBar={isHydrated ? shouldShowAlertBar : false}>
      {/* HERO SECTION */}
      <HeroSection
        id='hero'
        width='100%'
        className='darkBackground'
        aria-level='2'
        aria-label={t('pages.home.hero-section.section-aria-label')}
      >
        <HeroTopography />

        <HeroContent alignSelf='center' overflow='visible'>
          <HeroPrimary flex='initial' justifyContent='flex-start'>
            <HeroItem alignItems='center'>
              <HeroBody>
                <H1
                  zIndex='2'
                  fontSize={isMobile ? '2.5rem' : '4rem'}
                  margin='0 0 24px 0'
                  fontWeight='500'
                  lineHeight='100%'
                  letterSpacing='-0.06em'
                  fontFamily={FONT_MONO}
                  color='var(--ifm-color-white)'
                  maxWidth='970px'
                >
                  {/* Two fixed lines per Figma (node 49113:88). Left to wrap
                      naturally this re-breaks as the window widens. */}
                  <span>{t('pages.home.hero-section.title-line1')}</span>
                  <br />
                  <span>{t('pages.home.hero-section.title-line2')}</span>
                </H1>

                <Span
                  color='var(--ifm-color-white)'
                  zIndex='2'
                  fontSize={isMobile ? '1.125rem' : '1.25rem'}
                  fontWeight='400'
                  lineHeight='150%'
                  letterSpacing='0.4px'
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

      {/* PROBLEM NARRATIVE SECTION */}
      <ProblemNarrative />

      {/* SOLUTION PANEL SECTION */}
      <SolutionPanel />

      {/* BUILT TO SCALE + FEATURE GRID A — one gradient plate, per Figma */}
      <AgenticScaleSection />

      {/* FEATURE GRID B SECTION */}
      <Section
        id='universal-network'
        aria-level='2'
        aria-label={t('pages.home.feature-grid-b.section-aria-label')}
      >
        <Content>
          <MultiContent>
            <GridBHeader flexDirection={isMobile ? 'column' : 'row'}>
              <H2
                fontFamily={FONT_MONO}
                fontSize={isMobile ? '1.75rem' : '3rem'}
                fontWeight='500'
                letterSpacing='-0.06em'
                lineHeight='120%'
                color='var(--ifm-color-white)'
              >
                {/* Three lines per Figma: "Everything runs on a" /
                    "network that reaches" / "every other chain." */}
                {t(AgentFeaturesListB.meta.title)}
                {'\n'}
                <GradientWord>{t(AgentFeaturesListB.meta.titleGradient)}</GradientWord>
              </H2>
              <Span
                fontSize='1.25rem'
                lineHeight='150%'
                letterSpacing='0.4px'
                color='var(--ifm-color-white)'
              >
                {t(AgentFeaturesListB.meta.subtitle)}
              </Span>
            </GridBHeader>
          </MultiContent>
          <MultiContent>
            <FeatureGridRow flexDirection={isMobile ? 'column' : 'row'}>
              {AgentFeaturesListB.cards.map((item) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </FeatureGridRow>
          </MultiContent>
          <MultiContent>
            <UniversalStatCallout />
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

      {/* GET P.A.I.D SECTION */}
      <PaidStatsRow />

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
                  href='/blog'
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
                  target='_self'
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
            fontFamily={FONT_MONO}
            color='var(--ifm-color-white)'
            margin='8px 0 0 0'
            fontWeight='500'
            lineHeight='120%'
            letterSpacing='-0.06em'
            role='heading'
            aria-level='2'
            aria-label={t('pages.home.blog-section.title-aria-label')}
          >
            {t('pages.home.blog-section.title')}
          </H2>

          <RecentBlogPosts count={4} />
        </Content>
      </Section>

      {/* FAQ SECTION */}
      <Section
        id='faq'
        aria-level='2'
        aria-label={t('components.home-agent-faq.section-aria-label')}
      >
        <Content>
          <QnA
            variant='pushCore'
            titleKey='components.home-agent-faq.title'
            titleAriaLabelKey='components.home-agent-faq.title-aria-label'
            discordLinkTitleKey='components.home-agent-faq.discord-link-title'
            discordLinkAriaLabelKey='components.home-agent-faq.discord-link-aria-label'
            discordLinkTextKey='components.home-agent-faq.discord-link-text'
            accordionAriaLabelKey='components.home-agent-faq.accordion-aria-label'
            exploreMoreTitleKey='components.home-agent-faq.explore-more-title'
            exploreMoreAriaLabelKey='components.home-agent-faq.explore-more-aria-label'
            exploreMoreTextKey='components.home-agent-faq.explore-more-text'
            discordUrl='https://discord.com/invite/pushchain'
            exploreMoreUrl='/knowledge/faq'
            getQnAsFunction={getHomeAgentFAQsList}
            titleFontFamily={FONT_MONO}
            titleFontWeight='500'
          />
        </Content>
      </Section>

      {/* CLOSING CTA */}
      <ClosingCTA />
    </HomeWrapper>
  );
}

const HomeWrapper = styled(ItemV)`
  background: var(--ifm-color-black);
  margin: 0;
  padding: 0;
  overflow-x: clip !important;
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
  /* Positioning context for the topography canvas. */
  position: relative;
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
  /* Sized so the next section lands where Figma puts it (49233:16511, page
     y=1095) rather than on the old illustrated hero's arbitrary 850/650:
       1095 - 125 (next section padding-top)
            - 125 (hero content padding-bottom)
            - 125 (hero content padding-top)
            -  98 (hero content margin-top)
            -  56 (hero top) = 566
     The 850px value left a 681px gap below the CTAs at 1512px wide. */
  height: 566px;
  z-index: 99;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.laptopL} {
    width: 100%;
    height: 566px;
  }

  @media ${device.mobileL} {
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
  text-align: left;
  align-self: center;
  position: relative;

  /* Figma 49898:9883 — a blurred #090909 plate that settles the topography
     behind the copy so the glyphs never fight the text. Sits above the canvas
     but below the text, which carries z-index 2. */
  &::before {
    content: '';
    position: absolute;
    inset: -56px 0 -37px 0;
    background: #090909;
    filter: blur(100px);
    z-index: 1;
    pointer-events: none;
  }

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

const FeatureGridRow = styled(ItemH)`
  gap: 24px;
  align-items: stretch;
  width: 100%;

  &:not(:first-child) {
    margin-top: 24px;
  }

  /* Three dividers side by side stop being readable well before mobile. */
  @media ${device.laptop} {
    flex-direction: column;
    gap: 32px;
  }
`;

const GridBHeader = styled(ItemV)`
  /* Figma node 49243:16611 — 115px gap, baseline-aligned via items-end. */
  gap: 115px;
  align-items: flex-end;
  justify-content: space-between;

  h2 {
    flex: 1;
    max-width: 620px;
    /* Title carries its own line breaks, matching the design's wrap points. */
    white-space: pre-line;
  }

  span {
    flex: 0 0 auto;
    max-width: 492px;
  }

  /* 115px between two columns needs real width; stack below the laptop
     breakpoint rather than crushing the heading. */
  @media ${device.laptop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    h2,
    span {
      max-width: 100%;
    }
  }

  @media ${device.mobileL} {
    h2,
    span {
      max-width: 100%;
    }
  }
`;

const GradientWord = styled.span`
  color: var(--ifm-color-custom-pink);
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

const AccordionGrid = styled.div`
  max-width: 877px;
  min-width: 877px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }
`;
