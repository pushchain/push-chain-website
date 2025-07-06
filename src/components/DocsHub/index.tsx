/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

// React + Web3 Essentials + External Components
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styled, { keyframes } from 'styled-components';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { Button } from '../../css/SharedStyling';

// Internal Components
import {
  A,
  Content,
  H1,
  H2,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import Footer from '../../segments/Footer';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';

// Internal Configs
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  QuickstartItems,
  TechDocumentationItems,
  TutorialDocumentationItems,
} from '@site/src/config/DocsHubList';
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from '@site/src/config/pageMeta';

import { Grid } from './Grid';
import './styles.css';

export const TechnicalGrid = ({ item }) => {
  const { title, content, href } = item;

  return (
    <TechnicalGridWrapper href={href} target='_blank' rel='noopener noreferrer'>
      <LinkTo>
        <H2>{title}</H2>
        <BsArrowUpRight className='svg' />
      </LinkTo>

      <Span>{content}</Span>
    </TechnicalGridWrapper>
  );
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <Layout
      title={PageMeta.DOCS.pageTitle}
      description={PageMeta.DOCS.pageDescription}
      showNavbar={false}
    >
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/docs' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push | Documentation Hub' />
        <meta
          property='og:description'
          content='Explore our comprehensive cheat sheet, packed with quick references, tips, and key information to master the subject. Get a handy resource to boost your knowledge and productivity instantly.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/docspreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta name='twitter:title' content='Push | Documentation Hub' />
        <meta
          name='twitter:description'
          content='Explore our comprehensive cheat sheet, packed with quick references, tips, and key information to master the subject. Get a handy resource to boost your knowledge and productivity instantly.'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/docspreview.png').default,
            { absolute: true }
          )}
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Push Chain',
            description: 'The Communication Protocol of Web3',
            url: 'https://push.org',
            logo: '/assets/website/favicon.ico',
            sameAs: [
              'https://x.com/PushChain',
              'https://www.linkedin.com/company/push-protocol/mycompany/',
            ],
          })}
        </script>
      </Head>

      {/* DOCS HERO SECTION */}
      <DocsHeroSection>
        <Content padding='0px'>
          <HeroHeader>
            <ItemV zIndex='1'>
              <H1
                color='var(--ifm-color-title-text-color)'
                margin='0 !important'
              >
                Documentation Hub
              </H1>
              <Span
                color='var(--ifm-playground-header-terminalcolor)'
                padding='0'
                textAlign='center'
                fontSize='1.25rem'
                fontWeight='400'
              >
                Get started with building shared state apps for any chain.
              </Span>
            </ItemV>

            <ItemV
              position='absolute'
              top='0'
              left='0'
              right='0'
              height='50%'
              padding='10rem 0'
            >
              <Pulse>
                <Image
                  src={
                    require(
                      `@site/static/assets/website/docshub/NewPushLogo.png`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/docshub/NewPushLogo@2x.png`).default} 2x, ${require(`@site/static/assets/website/docshub/NewPushLogo@3x.png`).default} 3x`}
                  alt={`Image showing BRB Chat is powered by Push Chat`}
                  loading='lazy'
                  className='pulse-logo'
                />
                <Pulsate stagger={0}></Pulsate>
                <Pulsate stagger={1}></Pulsate>
                <Pulsate stagger={2}></Pulsate>
                <Pulsate stagger={3}></Pulsate>
                <Pulsate stagger={4}></Pulsate>
                <Pulsate stagger={5}></Pulsate>
                <Pulsate stagger={6}></Pulsate>
              </Pulse>
            </ItemV>
          </HeroHeader>
        </Content>
      </DocsHeroSection>

      {/* Grid Section */}
      <Section>
        <Content>
          <Grid />
        </Content>
      </Section>

      {/* QUICKSTART SECTION */}
      <HomepageSection>
        <Content margin='0 auto' width='100%'>
          <HomepageSubHeader id='quickstart'>
            <ItemV justifyContent='flex-start' alignItems='flex-start'>
              <H2>Quickstart</H2>
              <Span>
                Everything you will need to get up and running in 2 minutes or
                less!
              </Span>
            </ItemV>

            <FaqLink
              href='https://discord.gg/pushprotocol'
              target='_blank'
              title='Discord'
            >
              <p>Explore Quickstart</p>
              <BsArrowRight className='svg' size={23} />
            </FaqLink>
          </HomepageSubHeader>

          <PopularQuickiesList>
            {QuickstartItems.map((item, idx) => {
              return (
                <PopularQuickiesCard key={idx}>
                  <PopularQuickiesHeader>
                    <PopularQuickiesTitle>{`${item.title}`}</PopularQuickiesTitle>
                  </PopularQuickiesHeader>

                  <PopularQuickiesContent>
                    <PopularQuickiesCodeBlock
                      language='jsx'
                      showLineNumbers={false}
                    >
                      {item.codeblock}
                    </PopularQuickiesCodeBlock>
                  </PopularQuickiesContent>
                </PopularQuickiesCard>
              );
            })}
          </PopularQuickiesList>
        </Content>
      </HomepageSection>

      <Section>
        <Content>
          <HomepageSubHeader id='quickstart'>
            <ItemV justifyContent='flex-start' alignItems='flex-start'>
              <H2>Technical Documentation</H2>
              <Span>
                Everything you will need to get up and running in 2 minutes or
                less!
              </Span>
            </ItemV>

            <FaqLink
              href='https://discord.gg/pushprotocol'
              target='_blank'
              title='Discord'
            >
              <p>Explore Tooling</p>
              <BsArrowRight className='svg' size={23} />
            </FaqLink>
          </HomepageSubHeader>

          <TechnicalGridSection>
            {TechDocumentationItems.map((item, idx) => (
              <TechnicalGrid key={idx} item={item} />
            ))}
          </TechnicalGridSection>
        </Content>
      </Section>

      <Section>
        <Content>
          <HomepageSubHeader id='quickstart'>
            <ItemV justifyContent='flex-start' alignItems='flex-start'>
              <H2>Tutorials</H2>
              <Span>
                Tutorials to enable you to build your first Universal
                Application.
              </Span>
            </ItemV>

            <FaqLink
              href='https://discord.gg/pushprotocol'
              target='_blank'
              title='Discord'
            >
              <p>Explore Tutorials</p>
              <BsArrowRight className='svg' size={23} />
            </FaqLink>
          </HomepageSubHeader>

          <TechnicalGridSection>
            {TutorialDocumentationItems.map((item, idx) => (
              <TechnicalGrid key={idx} item={item} />
            ))}
          </TechnicalGridSection>
        </Content>
      </Section>

      <Section>
        <Content>
          <ItemV>
            <H2
              fontSize='3rem'
              color='var(--ifm-playground-buttontextcolor)'
              fontWeight='600'
              lineHeight='125%'
            >
              Want to dive deeper?
            </H2>
            <Span
              fontSize='1.25rem'
              color='var(--ifm-playground-header-text)'
              fontWeight='400'
              lineHeight='125%'
            >
              Explore the full docs to get started.
            </Span>

            <Button
              margin='24px 0 0 0'
              background='#D548EC'
              fontSize='14px'
              fontWeight='600'
              lineHeight='normal'
              padding='13px'
            >
              Explore Docs
            </Button>
          </ItemV>
        </Content>
      </Section>

      <Footer showPattern={false} />
    </Layout>
  );
}

const DocsHeroSection = styled(Section)`
  padding: 0px;
  padding-bottom: 0px;
`;

const HeroHeader = styled(ItemV)`
  padding: 15rem 0 0 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  & ${H1} {
    font-size: 3rem;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: -0.96px;
  }
`;

const Pulse = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(213, 72, 236, 0.4);
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .pulse-logo {
    width: 50px;
    height: auto;
    z-index: 99999;
  }
`;

const pulsateAnim = keyframes`
  100% {
    opacity: 0;
    transform: scale(8);
  }
`;

const Pulsate = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  opacity: 0.8;
  animation: ${pulsateAnim} 6s ease-out infinite;
  animation-delay: calc(1s * ${(props) => (props.stagger ? props.stagger : 1)});
  z-index: 0;
`;

const HomepageSection = styled(Section)`
  margin-top: 70px;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const HomepageSubHeader = styled.div`
  align-items: start;
  margin-bottom: 30px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  h2 {
    color: var(--ifm-playground-buttontextcolor);
    font-weight: 600;
    font-size: 36px;
  }

  span {
    color: var(--ifm-playground-header-text);
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const FaqLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: inherit;
  gap: 12px;
  padding: 0;
  flex: 0;
  width: fit-content;
  background: transparent;

  p {
    margin: 0px !important;
    color: #e163ff;
    background: transparent;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.36px;
    white-space: nowrap;
  }

  .svg {
    color: #e163ff;
    top: 0px;
  }

  @media ${device.tablet} {
    margin: 16px 0 0 auto;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #fff;
    }
  }
`;

const LinkTo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  color: var(--ifm-table-header-textcolor);

  h2 {
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 115.385%;
    letter-spacing: -0.78px;
    color: var(--ifm-table-header-textcolor);
  }
`;

const PopularQuickiesList = styled(ItemH)`
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  position: relative;
`;

const PopularQuickiesCard = styled(ItemV)`
  margin: 0px;
  align-self: flex-start;
  flex: 1;
  overflow: auto;
  width: 100%;
  min-width: 400px;

  /* WebKit browsers (Chrome, Safari) */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-thumb {
    background: #cb3faa;
    border-radius: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-button {
    display: none !important;
  }

  /* Firefox */
  * {
    scrollbar-color: #cb3faa #f1f1f1;
    scrollbar-width: thin;
  }

  box-sizing: border-box;

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`;

const PopularQuickiesHeader = styled(ItemH)`
  align-items: center;
  font-size: 20px;
  background: var(--ifm-navbar-search-bg);
  justify-content: flex-start;
  padding: 10px 20px 14px 80px;
  margin-bottom: -8px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  position: relative;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    height: 0.6em;
    width: 0.6em;
    margin: 0.3em;
    left: 0.5em;
    border-radius: 100%;
    background: var(--ifm-header-caret-color);
    box-shadow:
      1em 0em var(--ifm-header-caret-color),
      2em 0em var(--ifm-header-caret-color);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    background: rgba(255, 0, 0, 0.8);
    box-shadow:
      1em 0em rgba(255, 255, 0, 0.8),
      2em 0em rgba(0, 255, 0, 0.8);
  }
`;

const TechnicalGridSection = styled(ItemV)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TechnicalGridWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 24px;
  border: var(--ifm-playground-button-border);
  background: transparent;
  gap: 8px;

  span {
    color: var(--ifm-table-body-textcolor);
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 133.333%;
  }

  svg {
    color: var(--ifm-header-caret-color);
  }

  &:hover {
    cursor: pointer;
    h2 {
      color: var(--ifm-sidebar-activetext-color) !important;
    }

    svg {
      color: var(--ifm-sidebar-activetext-color) !important;
    }
  }
`;

const PopularQuickiesTitle = styled(Span)`
  color: var(--ifm-playground-header-text);
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const PopularQuickiesContent = styled(ItemV)`
  align-items: stretch;
  width: 100%;
`;

const PopularQuickiesCodeBlock = styled(CodeBlock)`
  margin: 0px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  overflow: hidden;
  width: inherit;
`;
