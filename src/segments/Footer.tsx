// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';
import { useTranslation } from 'react-i18next';

// External Components
import { BsTwitterX } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import { MailingSignup } from '@site/src/components/MailingSignup/MailingSignup';
import {
  A,
  Content,
  H2,
  Image,
  ItemH,
  ItemV,
  LinkTo,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import DiscordSVG from '@site/static/assets/website/shared/discord.svg';
import GithubSVG from '@site/static/assets/website/shared/github.svg';

// Internal Configs
import useBaseUrl from '@docusaurus/useBaseUrl';
import { device } from '@site/src/config/globals';
import { FooterList, FooterUrls } from '../config/FooterList';
import { useSiteBaseUrl } from '../hooks/useSiteBaseUrl';

function Footer() {
  // Internationalization
  const { t } = useTranslation();
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const baseURL = useSiteBaseUrl() || '';

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

  const trackSocialClick = (platform) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'social_link_click', {
        event_category: 'footer',
        event_label: platform,
        value: 1,
      });
    }
  };

  const trackFooterLinkClick = (linkName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'footer_link_click', {
        event_category: 'navigation',
        event_label: linkName,
        value: 1,
      });
    }
  };

  return (
    <ChainFooterContainer>
      <StyledFooter>
        <EmailSection
          id='featured'
          aria-label={t('footer.email-section.section-aria-label')}
        >
          <EmailContent>
            <EmailDiv>
              <H2
                color='var(--ifm-color-white)'
                fontFamily="'IBM Plex Mono', monospace"
                fontWeight='400'
                letterSpacing='-0.56px'
                fontSize={isMobile ? '1.25rem' : '1.75rem'}
                lineHeight='140%'
                aria-label={t('footer.email-section.title-aria-label')}
              >
                {t('footer.email-section.title')}
                <DesktopSpan>
                  {t('footer.email-section.title-secondary')}
                </DesktopSpan>
              </H2>

              <MailingSignup
                inputWidth={isMobile || isTablet ? '100%' : '515px'}
                showButton={true}
                background={'var(--ifm-color-footer-mailing-bg)'}
                borderColor={'var(--ifm-color-footer-mailing-border)'}
                textColor={'var(--ifm-color-white)'}
                placeholderColor={'var(--ifm-color-knowledge-placeholder)'}
                buttonBg={'var(--ifm-color-custom-pink)'}
                buttonBorder={
                  '1px solid var(--ifm-color-footer-mailing-button-border)'
                }
                arrowColor={'var(--ifm-color-white)'}
                loaderColor={'var(--ifm-color-white)'}
                blendMode='lighten'
                boxShadow='2.788px 2.598px 12px rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px rgba(255, 255, 255, 0.15) inset'
                backdrop='blur(10px)'
              />
            </EmailDiv>
          </EmailContent>
        </EmailSection>

        <FooterSection
          id='footer'
          aria-label={t('footer.main-section.section-aria-label')}
        >
          <Content alignSelf='center'>
            <TopLogoSection>
              <FooterLinkItem>
                <LinkTo
                  className='pushLogo'
                  to={useBaseUrl('/')}
                  title={t('footer.main-section.logo-link-title')}
                  aria-label={t('footer.main-section.logo-link-aria-label')}
                  onClick={scrollToTop}
                  justifyContent={isMobile ? 'center' : 'flex-start'}
                  padding='0px 0px'
                >
                  <LogoImage
                    src={
                      require(
                        `@site/static/assets/website/footer/PushLogoOnly.png`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/footer/PushLogoOnly@2x.png`).default} 2x, ${require(`@site/static/assets/website/footer/PushLogoOnly@3x.png`).default} 3x`}
                    alt={t('footer.main-section.logo-alt')}
                    title={t('footer.main-section.logo-link-title')}
                    loading='lazy'
                    width='90px'
                    height='auto'
                  />
                </LinkTo>
              </FooterLinkItem>
            </TopLogoSection>

            {/* footer links */}
            <ItemH flex='1' margin='0px 0 0 0'>
              <FooterContainer>
                <FooterColumn className='logo'>
                  <FooterLinkItem>
                    <LinkTo
                      className='pushLogo'
                      to={useBaseUrl('/')}
                      title='Push'
                      onClick={scrollToTop}
                      justifyContent={isMobile ? 'center' : 'flex-start'}
                      padding='0px 0px'
                    >
                      <LogoImage
                        src={
                          require(
                            `@site/static/assets/website/footer/PushLogoOnly.png`
                          ).default
                        }
                        srcSet={`${require(`@site/static/assets/website/footer/PushLogoOnly@2x.png`).default} 2x, ${require(`@site/static/assets/website/footer/PushLogoOnly@3x.png`).default} 3x`}
                        alt={`Push Chain`}
                        loading='lazy'
                        width='90px'
                        height='auto'
                      />
                    </LinkTo>
                  </FooterLinkItem>
                </FooterColumn>

                <FooterColumns>
                  {Object.entries(FooterList).map(([columnKey, linkKeys]) => (
                    <FooterColumn key={columnKey}>
                      <FooterLinks>
                        <Span
                          fontWeight='600'
                          fontSize='1rem'
                          lineHeight='140%'
                          letterSpacing='1.6px'
                          textTransform='uppercase'
                          margin='0 0 8px 0'
                          aria-label={t(
                            `footer.columns.${columnKey}.title-aria-label`
                          )}
                        >
                          {t(`footer.columns.${columnKey}.title`)}
                        </Span>
                        {linkKeys.map((linkKey) => {
                          const urlConfig = FooterUrls[linkKey];
                          if (!urlConfig) return null;

                          const fullHref = urlConfig.href.includes('http')
                            ? urlConfig.href
                            : `${baseURL}${urlConfig.href}`;

                          return (
                            <FooterAnchorSecondary
                              key={linkKey}
                              href={fullHref}
                              target={urlConfig.target}
                              rel='noopener'
                              title={t(`footer.links.${linkKey}-title`)}
                              onClick={() => trackFooterLinkClick(linkKey)}
                            >
                              {t(`footer.links.${linkKey}`)}
                            </FooterAnchorSecondary>
                          );
                        })}
                      </FooterLinks>
                    </FooterColumn>
                  ))}
                </FooterColumns>
              </FooterContainer>
            </ItemH>

            {/* Social Icon Links */}
            <SocialLinks
              aria-label={t('footer.social-section.section-aria-label')}
            >
              <ItemV
                flexDirection={isTablet ? 'column' : 'row'}
                gap={isMobile ? '24px' : '16px'}
                justifyContent='flex-start'
              >
                <ItemH flex='0' gap='24px' className='pushLinks'>
                  <FooterAnchorIcon
                    href='https://x.com/PushChain'
                    title={t('footer.social-section.twitter-icon-title')}
                    aria-label={t(
                      'footer.social-section.twitter-icon-aria-label'
                    )}
                    target='_blank'
                    onClick={() => trackSocialClick('twitter')}
                  >
                    <BsTwitterX size={38} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href='https://github.com/pushchain/'
                    title={t('footer.social-section.github-icon-title')}
                    aria-label={t(
                      'footer.social-section.github-icon-aria-label'
                    )}
                    target='_blank'
                    onClick={() => trackSocialClick('github')}
                  >
                    <GithubSVG width={48} height={48} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href='https://discord.com/invite/pushchain'
                    title={t('footer.social-section.discord-icon-title')}
                    aria-label={t(
                      'footer.social-section.discord-icon-aria-label'
                    )}
                    target='_blank'
                    onClick={() => trackSocialClick('discord')}
                  >
                    <DiscordSVG width={54} height={41} />
                  </FooterAnchorIcon>
                </ItemH>
              </ItemV>

              <ItemH justifyContent='flex-end' className='pushLinks' gap='32px'>
                <FooterIconSecondary
                  as={LinkTo}
                  to={useBaseUrl('/privacy')}
                  title={t('footer.legal.privacy-policy-title')}
                  aria-label={t('footer.legal.privacy-policy-aria-label')}
                  onClick={() => {
                    trackFooterLinkClick('privacy');
                    document.documentElement.scrollTo(0, 0);
                  }}
                >
                  {t('footer.legal.privacy-policy')}
                </FooterIconSecondary>
                <FooterIconSecondary
                  as={LinkTo}
                  to={useBaseUrl('/tos')}
                  title={t('footer.legal.terms-of-service-title')}
                  aria-label={t('footer.legal.terms-of-service-aria-label')}
                  onClick={() => {
                    trackFooterLinkClick('terms-of-service');
                    document.documentElement.scrollTo(0, 0);
                  }}
                >
                  {t('footer.legal.terms-of-service')}
                </FooterIconSecondary>
              </ItemH>
            </SocialLinks>
          </Content>
        </FooterSection>

      </StyledFooter>
    </ChainFooterContainer>
  );
}

const ChainFooterContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  width: -moz-available;
`;

const StyledFooter = styled.footer`
  font-family:
    DM Sans,
    sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--ifm-color-black);
  width: 100%;
  margin: -4px auto;
`;

const FooterSection = styled(Section)``;

const TopLogoSection = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    margin: 0 auto;
  }
`;

const EmailDiv = styled(ItemH)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  @media ${device.tablet} {
    gap: 30px;
  }
`;

const DesktopSpan = styled.span`
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 48px;
  flex-grow: 1;

  @media ${device.tablet} {
    .logo {
      display: none;
    }
  }
`;


const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: var(--ifm-color-white);
  flex-grow: 1;

  flex-direction: column;

  align-items: center;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const LogoImage = styled(Image)`
  border-radius: 0px !important;
`;

const EmailSection = styled(Section)``;

const EmailContent = styled(Content)`
  padding-bottom: 0px;
  overflow: visible;
`;

const FooterColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px;
  flex-grow: 1;
  min-width: 200px;

  @media ${device.laptop} {
    gap: 40px;
  }

  @media ${device.tablet} {
    gap: 40px;
    margin: 48px 0 0 0;
  }

  @media ${device.mobileL} {
    gap: 20px;
    justify-content: space-between;
    min-width: auto;

    /* Ensure two items per row */
    & > * {
      flex-basis: calc(50% - 10px);
      max-width: calc(50% - 10px);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 154px;
  gap: 16px;

  @media ${device.mobileL} {
    min-width: 100%;
    margin-top: 32px;
  }
`;

const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  svg {
    width: 106px;
    height: 100px;
  }
  @media ${device.mobileL} {
    flex-direction: row;
    align-items: center;
    // min-width: 100%;
    gap: 24px;
  }
`;

const SocialLinks = styled(ItemH)`
  margin: 64px 0 0px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;

    & .pushLinks {
      justify-content: center;

      & a.pushLogo {
        flex: 0 0 100%;
      }
    }

    & .pushPlatformLinks {
      justify-content: center;
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`;

const FooterAnchorSecondary = styled(A)`
  padding: 0px;
  color: var(--ifm-color-footer-anchor-secondary) !important;
  font-family:
    DM Sans,
    sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.36px;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

  &:hover {
    color: var(--ifm-color-white) !important;
    background: transparent !important;
  }

  &:before {
    background: transparent;
  }
`;

const FooterIconSecondary = styled(A)`
  padding: 0px;
  color: var(--ifm-color-white) !important;
  font-family:
    DM Sans,
    sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.36px;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

  &:hover {
    color: var(--ifm-color-white) !important;
    background: transparent !important;
  }

  &:before {
    background: transparent;
  }
`;

const FooterAnchorIcon = styled(A)`
  border-radius: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  opacity: 1;
  background: transparent;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: transform 0.25s ease-out;
  }
`;

export default Footer;
