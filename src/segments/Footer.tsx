// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import { useLocation } from '@docusaurus/router';
import React from 'react';
import { useHistory } from 'react-router-dom';

// External Components
import { BsTwitterX } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
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
import { ChainEmailSignup } from '@site/src/components/Chain/ChainEmailSignup';

// Internal Configs
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useSiteBaseUrl } from '../hooks/useSiteBaseUrl';
import { device } from '@site/src/config/globals';
import { ChainFooterList } from '../components/Chain/config/ChainFooterList';

const tosPrivacyLinks = [
  { href: '/privacy', text: 'Privacy Policy' },
  { href: '/tos', text: 'Terms of service' },
];

function Footer() {
  // Internationalization
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const baseURL = useSiteBaseUrl() || '';

  // for navigation
  const history = useHistory();
  const location = useLocation();

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

  // Determine if the pathname starts with '/docs' or Blog
  // const isDocsOrBlogsPage =
  //   location?.pathname.startsWith(baseURL + '/docs') ||
  //   location?.pathname.startsWith(baseURL + '/blog');

  return (
    <ChainFooterContainer>
      <StyledFooter>
        <EmailSection id='featured'>
          <EmailContent>
            <EmailDiv>
              <H2
                color='#FFF'
                fontWeight='400'
                letterSpacing='-0.56px'
                fontSize={isMobile ? '1.rem' : '1.75rem'}
                lineHeight='140%'
              >
                Want to receive Push Chain airdrops, <br /> news, and updates?
              </H2>

              <ChainEmailSignup
                inputWidth={isMobile ? '100%' : '300px'}
                showButton={true}
                background={'rgba(0, 0, 0, 0.10)'}
                borderColor={'rgba(112, 90, 208, 0.40)'}
                textColor={'#494E54'}
                buttonBg={'#D548EC'}
                buttonBorder={'1px solid rgba(255, 255, 255, 0.30)'}
                arrowColor={'#fff'}
                loaderColor={'#fff'}
                blendMode='lighten'
                boxShadow='2.788px 2.598px 12px rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px rgba(255, 255, 255, 0.15) inset'
                backdrop='blur(10px)'
              />
            </EmailDiv>
          </EmailContent>
        </EmailSection>

        <FooterSection id='footer'>
          <Content alignSelf='center'>
            <TopLogoSection>
              <FooterLinkItem>
                <LinkTo
                  className='pushLogo'
                  to={useBaseUrl('/')}
                  title='Push'
                  onClick={scrollToTop}
                  justifyContent={isMobile ? 'center' : 'flex-start'}
                  padding='0px 0px'
                >
                  <Image
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
                      <Image
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
                  {['resources', 'community', 'developers', 'product'].map(
                    (key) => (
                      <FooterColumn key={key}>
                        <FooterLinks>
                          <Span
                            fontWeight='700'
                            fontSize='1.125rem'
                            lineHeight='140%'
                            letterSpacing='1.8px'
                            textTransform='uppercase'
                            margin='0 0 8px 0'
                          >
                            {key}
                          </Span>
                          {ChainFooterList[key]?.map((item) => {
                            const fullHref = item.href
                              ? item.href.includes('http')
                                ? item.href
                                : `${baseURL}${item.href}`
                              : item.id
                                ? `/#${item.id}`
                                : '#'; // fallback

                            return (
                              <FooterAnchorSecondary
                                key={item.title}
                                href={fullHref}
                                target={
                                  item.target ||
                                  (item.href ? '_blank' : '_self')
                                }
                                rel='noopener noreferrer'
                                onClick={(e) => {
                                  if (!item.href && item.id) {
                                    e.preventDefault(); // prevent default <a> behavior
                                    const scrollTarget =
                                      document.getElementById(item.id);

                                    if (location?.pathname !== `${baseURL}/`) {
                                      history.push(`${baseURL}/`);
                                      setTimeout(() => {
                                        scrollTarget?.scrollIntoView({
                                          behavior: 'smooth',
                                        });
                                      }, 300);
                                    } else {
                                      scrollTarget?.scrollIntoView({
                                        behavior: 'smooth',
                                      });
                                    }
                                  }
                                }}
                              >
                                {item.title}
                              </FooterAnchorSecondary>
                            );
                          })}
                        </FooterLinks>
                      </FooterColumn>
                    )
                  )}
                </FooterColumns>
              </FooterContainer>
            </ItemH>

            {/* Social Icon Links */}
            <SocialLinks>
              <ItemV
                flexDirection={isTablet ? 'column' : 'row'}
                gap={isMobile ? '24px' : '16px'}
                justifyContent='flex-start'
              >
                <ItemH flex='0' gap='16px' className='pushLinks'>
                  <FooterAnchorIcon
                    href='https://x.com/PushChain'
                    title='Push Twitter'
                    target='_blank'
                  >
                    <BsTwitterX size={30} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href='https://github.com/push-protocol/'
                    title='Push Github'
                    target='_blank'
                  >
                    <GithubSVG width={30} height={30} />
                  </FooterAnchorIcon>

                  <FooterAnchorIcon
                    href='https://discord.gg/pushprotocol'
                    title='Push Discord'
                    target='_blank'
                  >
                    <DiscordSVG width={30} height={30} />
                  </FooterAnchorIcon>
                </ItemH>
              </ItemV>

              <ItemH justifyContent='flex-end' className='pushLinks' gap='32px'>
                {tosPrivacyLinks.map(({ href, text }) => (
                  <FooterIconSecondary
                    as={LinkTo}
                    key={href}
                    to={useBaseUrl(href)}
                    onClick={() => document.documentElement.scrollTo(0, 0)}
                  >
                    {text}
                  </FooterIconSecondary>
                ))}
              </ItemH>
            </SocialLinks>
          </Content>
        </FooterSection>

        <FooterImage>
          <Image
            src={
              require(`@site/static/assets/website/footer/PushFooterImg.webp`)
                .default
            }
            srcSet={`${require(`@site/static/assets/website/footer/PushFooterImg@2x.webp`).default} 2x, ${require(`@site/static/assets/website/footer/PushFooterImg@3x.webp`).default} 3x`}
            alt={`Push Chain`}
            loading='lazy'
            width='100%'
            height='auto'
          />
        </FooterImage>
      </StyledFooter>
    </ChainFooterContainer>
  );
}

const ChainFooterContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

const StyledFooter = styled.footer`
  font-family:
    DM Sans,
    sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #000;
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

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  @media ${device.tablet} {
    .logo {
      display: none;
    }
  }
`;

const FooterImage = styled.div`
  width: 95%;
  margin: 200px auto;

  @media ${device.tablet} {
    margin: 100px auto;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #ffffff;

  flex-direction: column;

  align-items: center;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const EmailSection = styled(Section)``;

const EmailContent = styled(Content)`
  padding-bottom: 0px;
`;

const FooterColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px;

  @media ${device.laptop} {
    gap: 40px;
  }

  @media ${device.tablet} {
    gap: 20px;
    margin: 48px 0 0 0;
  }

  @media ${device.mobileL} {
    gap: 20px;
    justify-content: space-between;

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
  color: #94a3b6 !important;
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
    color: #fff !important;
    background: transparent !important;
  }

  &:before {
    background: transparent;
  }
`;

const FooterIconSecondary = styled(A)`
  padding: 0px;
  color: #fff !important;
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
    color: #fff !important;
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
