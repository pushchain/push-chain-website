// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from '@docusaurus/router';

// External Components
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Alert } from '@site/src/components/Alert';
import {
  A,
  Button,
  Content,
  H2,
  H3,
  Image,
  ItemH,
  ItemV,
  LinkTo,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

// Internal Configs
import { SupportedLanguagesList } from '@site/src/config/SupportedLanguagesList';
import GLOBALS, { device, structure } from '@site/src/config/globals';
import { HeaderList } from '../config/HeaderList';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useSiteBaseUrl } from '../hooks/useSiteBaseUrl';

import AccountContext from '../context/accountContext';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let lastScrollY = 0;
const SCROLL_DELTA = 5;

if (typeof window !== 'undefined') {
  lastScrollY = window.scrollY;
}

const defaultMobileMenuState = {
  0: false,
  1: false,
  2: false,
  3: false,
  // add next [index]: false for new main Nav menu item
};

function Header() {
  const isMobile = useMediaQuery(device.laptopM);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isAlertBarVisible, setIsAlertBarVisible] = useState(true);

  const location = useLocation();
  const baseURL = useSiteBaseUrl() || '';
  // const [isAlertVisible, setIsAlertVisible] = useState(true);

  // for navigation
  const history = useHistory();

  // Internationalization
  const { t, i18n } = useTranslation();
  const { showAlertBar, setShowAlertBar, delayedShowAlertBar } =
    useContext(AccountContext);

  const showMobileMenu = isMobile && isMobileMenuOpen;

  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };

  const onMobileHeaderMenuClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuIndex: number
  ) => {
    e.preventDefault();

    // if (isMobile) {
    setMobileMenuMap((oldMap) => {
      return {
        ...defaultMobileMenuState,
        [menuIndex]: !oldMap[menuIndex],
      };
    });
  };

  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      // Cleanup: Reset overflow when the component unmounts
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isMobile]);

  // Use Effect
  useEffect(() => {
    const updateScrollDirection = () => {
      let scrollY = 0;

      if (typeof window !== 'undefined') {
        scrollY = window.scrollY;
      }

      let direction = scrollY > lastScrollY ? 'scrollDown' : 'scrollUp';

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > SCROLL_DELTA ||
          scrollY - lastScrollY < -SCROLL_DELTA)
      ) {
        // check if isMobileMenuOpen then override
        if (isMobileMenuOpen) {
          direction = 'scrollUp';
        }

        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // add event listener
    // window.addEventListener('scroll', updateScrollDirection, { passive: true });

    return () => {
      // window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, []);

  useEffect(() => {
    const checkAlertBarVisibility = () => {
      if (!showAlertBar) {
        setIsAlertBarVisible(false);
        return;
      }

      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      setIsAlertBarVisible(scrollY < 60);
    };

    checkAlertBarVisibility();

    window.addEventListener('scroll', checkAlertBarVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', checkAlertBarVisibility);
    };
  }, [showAlertBar]);

  const HeaderSpace = ({ item, index }) => {
    const openLink = async (e, href, id, target) => {
      e.stopPropagation();

      if (href) {
        if (target && target !== '_blank') {
          if (target === '_self') {
            // check if url is external
            if (href.includes('http')) {
              window.location.href = href;
            } else {
              history.push(baseURL + href);
            }
          }
        } else {
          // check if url is internal and if so append the base url
          if (href.includes('http')) {
            window.open(href, target);
          } else {
            window.open(`${window.location.origin}${baseURL + href}`, target);
          }
        }
      } else if (id) {
        if (showMobileMenu) toggleMobileMenu();

        if (location?.pathname !== baseURL + '/' && id) {
          history.push(baseURL + '/');
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }

        if (location?.pathname === baseURL + '/') {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      } else return;
    };

    return (
      <HeaderItem
        onClick={(e) => openLink(e, item.href, item.id, item.target)}
        className='header-item'
      >
        {item.srcrefoff && (
          <HeaderImage
            key={index}
            src={
              require(
                `@site/static/assets/website/header/${item.srcrefoff}.png`
              ).default
            }
            srcSet={`${require(`@site/static/assets/website/header/${item.srcrefoff}@2x.png`).default} 2x, ${require(`@site/static/assets/website/header/${item.srcrefoff}@3x.png`).default} 3x`}
            alt={`${t(item.title)}`}
            height={24}
            width={24}
          />
        )}

        <ItemH
          flexDirection='column'
          alignItems='flex-start'
          gap='0px'
          flex='1'
        >
          <H2
            fontSize='1rem'
            color='#FFF'
            lineHeight='130%'
            letterSpacing='normal'
            fontWeight='600'
          >
            {t(item.title)}

            {item.tagitem && (
              <TagItem style={{ marginLeft: '10px' }}>
                {item.tagitem.text}
              </TagItem>
            )}
          </H2>

          <H3
            fontSize='0.875rem'
            color='#FFF'
            lineHeight='130%'
            letterSpacing='normal'
            fontWeight='400'
          >
            {t(item.subtitle)}
          </H3>
        </ItemH>
      </HeaderItem>
    );
  };

  const textIds = ['text0', 'text1', 'text2', 'text3', 'text4'];

  const handleMouseEnter = (e, activeId) => {
    textIds.forEach((id) => {
      if (id !== activeId) {
        const element = document.getElementById(id);
        if (element) {
          element.style.color = '#6C6C6C';
          element.style.transitionDuration = '1s';
        }
      }
    });
  };

  const handleMouseLeave = (e) => {
    textIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.color = '#fff';
        element.style.transitionDuration = '1s';
      }
    });
  };

  return (
    <StyledHeader
      showMobileMenu={showMobileMenu}
      className={`header ${headerClass}`}
    >
      {/* ALERT SECTION */}
      <Alert />

      {/* GLOW CIRCLE */}
      {/* <GlowCircle /> */}

      {/* INVISIBLE WALL TO CLOSE */}
      <InvisibleWall />

      {/* HEADER SECTION */}
      <Section onClick={(e) => e.stopPropagation()}>
        <Content
          className='vertfluid'
          overflow='visible'
          padding={isMobile && '0 16px'}
        >
          {/* Header Content Begins */}
          <HeaderItemH
            alignSelf='stretch'
            padding={GLOBALS.ADJUSTMENTS.PADDING.SMALL}
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
            showAlertBar={delayedShowAlertBar && isAlertBarVisible}
          >
            <MenuTop
              flex='initial'
              showMobileMenu={showMobileMenu}
              showAlertBar={delayedShowAlertBar && isAlertBarVisible}
            >
              <PushLogoBlackContainer className='headerlogo' flex='initial'>
                <LinkTo to={useBaseUrl('/')} aria-label='Push'>
                  <Image
                    src={
                      require(
                        `@site/static/assets/website/segments/PushLogoTextWhite.webp`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/segments/PushLogoTextWhite@2x.webp`).default} 2x, ${require(`@site/static/assets/website/segments/PushLogoTextWhite@3x.webp`).default} 3x`}
                    alt={`Push Logo`}
                    width='auto'
                    height='auto'
                  />
                </LinkTo>
              </PushLogoBlackContainer>
              <PushLogoWhiteContainer className='headerlogo' flex='initial'>
                <LinkTo
                  to={useBaseUrl('/')}
                  aria-label='Push'
                  hoverBackground='transparent'
                  padding='0'
                >
                  <Image
                    src={
                      require(
                        `@site/static/assets/website/segments/PushLogoTextWhite.webp`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/segments/PushLogoTextWhite@2x.webp`).default} 2x, ${require(`@site/static/assets/website/segments/PushLogoTextWhite@3x.webp`).default} 3x`}
                    alt={`Push Logo`}
                    width='auto'
                    height='auto'
                  />
                </LinkTo>
              </PushLogoWhiteContainer>

              <MobileMenuToggleIcon>
                {isMobileMenuOpen ? (
                  <AiOutlineClose size={28} onClick={toggleMobileMenu} />
                ) : (
                  <ItemH gap='24px'>
                    <PortalLauncher
                      showMobileMenu={showMobileMenu}
                      href='https://portal.push.org/'
                      target='_blank'
                      title={t('header.app-button.alt-title')}
                      background='#D548EC'
                      borderRadius='16px'
                      border='1px solid rgba(255, 255, 255, 0.30)'
                      fontSize='1.125rem'
                      fontWeight='600'
                      letterSpacing='-0.03em'
                      lineHeight='1rem'
                      width='100%'
                    >
                      {t('header.app-button.title')}
                    </PortalLauncher>

                    <Image
                      src={
                        require(`@site/static/assets/website/header/bars.png`)
                          .default
                      }
                      srcSet={`${require(`@site/static/assets/website/header/bars@2x.png`).default} 2x, ${require(`@site/static/assets/website/header/bars@3x.png`).default} 3x`}
                      alt={`Bars Icon`}
                      width='auto'
                      height='28px'
                      onClick={toggleMobileMenu}
                    />
                  </ItemH>
                )}
              </MobileMenuToggleIcon>
            </MenuTop>

            <HeaderWrapper>
              <HeaderNavItemV showMobileMenu={isMobileMenuOpen}>
                <NavigationMenu
                  role='menu'
                  className='navigationMenu'
                  showMobileMenu={isMobileMenuOpen}
                >
                  <NavigationMenuItem>
                    <NavigationMenuHeader
                      onClick={(e) => onMobileHeaderMenuClick(e, 0)}
                      expanded={mobileMenuMap[0]}
                      onMouseEnter={(e) => handleMouseEnter(e, 'text0')}
                      onMouseLeave={(e) => handleMouseLeave(e)}
                      id='text0'
                    >
                      <ItemH justifyContent='flex-start' gap='4px'>
                        <Image
                          src={
                            require(
                              `@site/static/assets/website/header/donut-icon.webp`
                            ).default
                          }
                          alt={`Push Chain Testnet Donut`}
                          width='20px'
                          height='auto'
                        />
                        <Span
                          fontSize='1rem'
                          fontWeight='500'
                          letterSpacing='-0.03em'
                          lineHeight='142%'
                          padding='16px'
                          color='inherit'
                        >
                          {t('header.testnet.title')}
                        </Span>
                      </ItemH>
                      <BsChevronDown size={12} className='chevronIcon' />
                    </NavigationMenuHeader>
                    <NavigationMenuContent
                      className='menuContent'
                      expanded={mobileMenuMap[0]}
                    >
                      {HeaderList.testnet.map((item, index) => (
                        <HeaderSpace item={item} index={index} />
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuHeader
                      onClick={(e) => onMobileHeaderMenuClick(e, 1)}
                      expanded={mobileMenuMap[1]}
                      onMouseEnter={(e) => handleMouseEnter(e, 'text1')}
                      onMouseLeave={(e) => handleMouseLeave(e)}
                      id='text1'
                    >
                      <Span
                        fontSize='18px'
                        fontWeight='500'
                        letterSpacing='-0.03em'
                        lineHeight='142%'
                        padding='16px'
                        color='inherit'
                      >
                        {t('header.developers.title')}
                      </Span>

                      <BsChevronDown size={12} className='chevronIcon' />
                    </NavigationMenuHeader>

                    <NavigationMenuContent
                      className='menuContent'
                      expanded={mobileMenuMap[1]}
                    >
                      <HeaderDiv>
                        <HeaderSection>
                          {HeaderList.developers
                            .slice(0, 4)
                            .map((item, index) => (
                              <HeaderSpace item={item} index={index} />
                            ))}
                        </HeaderSection>
                      </HeaderDiv>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuHeader
                      onClick={(e) => onMobileHeaderMenuClick(e, 2)}
                      expanded={mobileMenuMap[2]}
                      onMouseEnter={(e) => handleMouseEnter(e, 'text2')}
                      onMouseLeave={(e) => handleMouseLeave(e)}
                      id='text2'
                    >
                      <Span
                        fontSize='18px'
                        fontWeight='500'
                        letterSpacing='-0.03em'
                        lineHeight='142%'
                        padding='16px'
                        color='inherit'
                      >
                        {t('header.community.title')}
                      </Span>
                      <BsChevronDown size={12} className='chevronIcon' />
                    </NavigationMenuHeader>

                    <NavigationMenuContent
                      className='menuContent'
                      expanded={mobileMenuMap[2]}
                      onMouseEnter={(e) => handleMouseEnter(e, 'text1')}
                      onMouseLeave={(e) => handleMouseLeave(e)}
                    >
                      {HeaderList.community.map((item, index) => (
                        <HeaderSpace item={item} index={index} />
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuHeader
                      onClick={(e) => onMobileHeaderMenuClick(e, 3)}
                      expanded={mobileMenuMap[3]}
                      onMouseEnter={(e) => handleMouseEnter(e, 'text3')}
                      onMouseLeave={(e) => handleMouseLeave(e)}
                      id='text3'
                    >
                      <Span
                        fontSize='18px'
                        fontWeight='500'
                        letterSpacing='-0.03em'
                        lineHeight='142%'
                        padding='16px'
                      >
                        {t('header.resources.title')}
                      </Span>

                      <BsChevronDown size={12} className='chevronIcon' />
                    </NavigationMenuHeader>

                    <NavigationMenuContent
                      className='menuContent'
                      expanded={mobileMenuMap[3]}
                    >
                      {HeaderList.resources.map((item, index) => (
                        <HeaderSpace item={item} index={index} />
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>
              </HeaderNavItemV>

              <HeaderFocusItems flex='initial'>
                <LanguageItem showMobileMenu={showMobileMenu}>
                  <LanguageMenuItem>
                    <LanguageMenuHeader
                      onClick={(e) => onMobileHeaderMenuClick(e, 4)}
                      expanded={mobileMenuMap[4]}
                      onMouseEnter={(e) => handleMouseEnter(e, 'text4')}
                      onMouseLeave={(e) => handleMouseLeave(e)}
                      id='text4'
                    >
                      <H2
                        fontSize='16px'
                        lineHeight='130%'
                        letterSpacing='normal'
                        fontWeight='500'
                      >
                        {isMobile &&
                          i18n &&
                          SupportedLanguagesList.filter(
                            (item) => item.id === i18n.language
                          ).map((item, index) => <div>{item?.language}</div>)}
                      </H2>

                      <Span
                        fontSize='18px'
                        fontWeight='500'
                        letterSpacing='-0.03em'
                        lineHeight='142%'
                        padding='16px 0px'
                      >
                        <Image
                          src={
                            require(
                              `@site/static/assets/website/languages/eng.png`
                            ).default
                          }
                          srcSet={`${require(`@site/static/assets/website/languages/eng@2x.png`).default} 2x, ${require(`@site/static/assets/website/languages/eng@3x.png`).default} 3x`}
                          alt={'Language Header Icon'}
                          height={24}
                          width={24}
                          borderRadius='100%'
                        />
                      </Span>
                      <BsChevronDown size={12} className='chevronIcon' />
                    </LanguageMenuHeader>

                    <LanguageMenuContent
                      className='menuContent'
                      expanded={mobileMenuMap[4]}
                    >
                      {SupportedLanguagesList.map((item, index) => {
                        return (
                          <LanguageButton
                            key={index}
                            href='#'
                            title={t(item.translatedtitle)}
                            background='transparent'
                            hoverbackground='#fff'
                            color='#fff'
                            padding='8px 14px'
                            display='flex'
                            borderRadius='0'
                            justifyContent='flex-start'
                            onClick={() => i18n.changeLanguage(item.id)}
                          >
                            <ItemH
                              justifyContent='flex-start'
                              flexWrap='nowrap'
                              padding='0px'
                            >
                              <Image
                                key={index}
                                src={
                                  require(
                                    `@site/static/assets/website/languages/${item.srcref}.png`
                                  ).default
                                }
                                srcSet={`${require(`@site/static/assets/website/languages/${item.srcref}@2x.png`).default} 2x, ${require(`@site/static/assets/website/languages/${item.srcref}@3x.png`).default} 3x`}
                                alt={`${item?.alt}`}
                                height={24}
                                width={24}
                                borderRadius='100%'
                              />
                              <H3
                                fontSize='14px'
                                fontWeight='500'
                                lineHeight='130%'
                                letterSpacing='normal'
                                alignSelf='flex-start'
                                padding='8px 30px 8px 10px !important'
                                color='#FFF !important'
                              >
                                {t(item.translatedtitle)}
                              </H3>
                            </ItemH>
                          </LanguageButton>
                        );
                      })}
                    </LanguageMenuContent>
                  </LanguageMenuItem>
                </LanguageItem>

                <DappLauncher
                  showMobileMenu={showMobileMenu}
                  href='https://portal.push.org/'
                  target='_blank'
                  title={t('header.app-button.alt-title')}
                  background='#D548EC'
                  borderRadius='16px'
                  border='1px solid rgba(255, 255, 255, 0.30)'
                  fontSize='1.125rem'
                  fontWeight='600'
                  letterSpacing='-0.03em'
                  lineHeight='1rem'
                  width='100%'
                >
                  {t('header.app-button.title')}
                </DappLauncher>
              </HeaderFocusItems>
            </HeaderWrapper>
          </HeaderItemH>
        </Content>
      </Section>
    </StyledHeader>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: transparent;

  @media ${device.laptopM} {
    flex-direction: column;
  }
`;

const LanguageItem = styled.div`
  list-style: none;
  margin: 0px 16px 0px 0px;

  @media ${device.laptopM} {
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
    margin: 0px;
    flex: 1;
    width: 100%;
  }
`;

const HeaderItemH = styled(ItemH)`
  border-radius: 24px;
  border: 1px solid rgba(171, 70, 248, 0.4);
  background: rgba(0, 0, 0, 0.5);
  box-shadow:
    2.788px 2.598px 12px 0 rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: -1;
    border-radius: 24px;
  }

  margin: ${({ showAlertBar }) =>
    `${showAlertBar ? 80 : GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.TOP}px ${
      GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.RIGHT
    }px ${GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.BOTTOM}px ${
      GLOBALS.HEADER.OUTER_MARGIN.DESKTOP.LEFT
    }px`};
  color: ${GLOBALS.COLORS.FONT_LIGHT};
  height: ${GLOBALS.HEADER.HEIGHT}px;
  padding: ${`${GLOBALS.HEADER.OUTER_PADDING.DESKTOP.TOP}px ${GLOBALS.HEADER.OUTER_PADDING.DESKTOP.RIGHT}px ${GLOBALS.HEADER.OUTER_PADDING.DESKTOP.BOTTOM}px ${GLOBALS.HEADER.OUTER_PADDING.DESKTOP.LEFT}px`};
  flex-direction: row;
  flex-wrap: nowrap;
  transition: margin 0.1s ease-out;

  @media ${device.laptopM} {
    margin: ${({ showAlertBar }) =>
      `${showAlertBar ? 74 : GLOBALS.HEADER.OUTER_MARGIN.TABLET.TOP}px ${
        GLOBALS.HEADER.OUTER_MARGIN.TABLET.RIGHT
      }px ${GLOBALS.HEADER.OUTER_MARGIN.TABLET.BOTTOM}px ${
        GLOBALS.HEADER.OUTER_MARGIN.TABLET.LEFT
      }px`};
    flex-direction: column;
    padding: ${`${GLOBALS.HEADER.OUTER_PADDING.TABLET.TOP}px ${GLOBALS.HEADER.OUTER_PADDING.TABLET.RIGHT}px ${GLOBALS.HEADER.OUTER_PADDING.TABLET.BOTTOM}px ${GLOBALS.HEADER.OUTER_PADDING.TABLET.LEFT}px`};
    height: fit-content;
  }

  @media ${device.mobileL} {
    margin: ${({ showAlertBar }) =>
      `${showAlertBar ? 74 : GLOBALS.HEADER.OUTER_MARGIN.MOBILE.TOP}px ${
        GLOBALS.HEADER.OUTER_MARGIN.MOBILE.RIGHT
      }px ${GLOBALS.HEADER.OUTER_MARGIN.MOBILE.BOTTOM}px ${
        GLOBALS.HEADER.OUTER_MARGIN.MOBILE.LEFT
      }px`};
    flex-direction: column;
    padding: ${`${GLOBALS.HEADER.OUTER_PADDING.MOBILE.TOP}px ${GLOBALS.HEADER.OUTER_PADDING.MOBILE.RIGHT}px ${GLOBALS.HEADER.OUTER_PADDING.MOBILE.BOTTOM}px ${GLOBALS.HEADER.OUTER_PADDING.MOBILE.LEFT}px`};
    box-sizing: border-box;
  }

  &.light {
    color: ${GLOBALS.COLORS.FONT_DARK};
    background: ${GLOBALS.COLORS.HEADER_BG_LIGHT};
  }
`;

const HeaderNavItemV = styled(ItemV)`
  margin: 0 ${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0
    ${GLOBALS.ADJUSTMENTS.PADDING.SMALL};

  @media ${device.laptopM} {
    margin: ${(props) =>
      props.showMobileMenu
        ? `${GLOBALS.HEADER.OUTER_PADDING.TABLET.TOP + GLOBALS.HEADER.OUTER_PADDING.TABLET.BOTTOM + 20}px 0 20px 0`
        : '0'};
  }

  @media ${device.laptopM} {
    margin: ${(props) =>
      props.showMobileMenu
        ? `${GLOBALS.HEADER.OUTER_PADDING.MOBILE.TOP + GLOBALS.HEADER.OUTER_PADDING.MOBILE.BOTTOM + 20}px 0 20px 0`
        : '0'};
  }
`;

const PushLogoWhiteContainer = styled(ItemV)`
  display: flex;
  max-width: 190px;
  &.light {
    display: none;
  }
`;

const PushLogoBlackContainer = styled(ItemV)`
  display: none;
  &.light {
    display: flex;
  }
`;

const StyledHeader = styled.header`
  font-family: 'Strawford';

  /* padding: 0px 160px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  opacity: 1;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  transition: top 0.3s ease-in-out;

  &.hide {
    top: -100%;
  }

  &.light {
    & span {
      color: #121315;
    }

    & svg.chevronIcon {
      fill: #121315;

      & path {
        stroke: #121315;
      }
    }
  }

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptopM} {
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    flex-direction: column;

    &.hide {
      top: -100%;
    }

    /* WebKit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 3px !important;
    }

    &::-webkit-scrollbar-thumb {
      background: #cb3faa;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-button {
      display: none !important;
    }

    /* Firefox */
    scrollbar-color: #cb3faa #f1f1f1;
    scrollbar-width: thin;
  }
`;

const InvisibleWall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MobileMenuToggleIcon = styled.span`
  display: none;
  padding: 0 16px;

  @media ${device.laptopM} {
    display: flex;
    cursor: pointer;
  }
`;

const ADJUST_FOR_BLUR = 8;
const MenuTop = styled(ItemV)`
  display: flex;
  z-index: 9999;
  height: ${GLOBALS.HEADER.HEIGHT}px;

  & svg {
    cursor: pointer;
  }

  @media ${device.laptopM} {
    position: ${(props) => (props.showMobileMenu ? 'fixed' : 'relative')};
    height: auto;
    top: ${(props) => (props.showMobileMenu ? `12px` : 0)};
    left: 0;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavigationMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;

  column-gap: 32px;

  z-index: 999;

  @media ${device.laptopM} {
    flex-direction: column;
    flex: 0 0 75%;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

/**
 * HOVER happens on this element
 */
const NavigationMenuItem = styled.li`
  position: relative;
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  & span {
    padding: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: normal;
    color: #6c6c6c;
  }

  // & .chevronIcon {
  //   color: #6C6C6C;
  // }

  &:hover {
    & span {
      color: #fff;
    }

    & .chevronIcon {
      transform: rotate(180deg);
      // color: #fff;
    }

    & .menuContent {
      display: block;
    }
  }
`;

const LanguageMenuItem = styled.li`
  position: relative;
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    display: block;
  }

  .flag-icon-drop {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: block;
  }

  padding-left: 16px;

  & span {
    padding: 4px;
    font-weight: 500;
    font-size: 18px;
    line-height: 142%;
  }

  // &:hover {
  // & span {
  //   color: ${(props) => (props.expanded ? '#dd44b9' : '')};
  // }

  & .chevronIcon {
    color: #6c6c6c;
  }

  // & .menuContent {
  //   display: ${(props) => (props.expanded ? 'block' : 'none')};
  // }
  // }

  &:hover {
    & span {
      color: #dd44b9;
    }

    & .chevronIcon {
      transform: rotate(180deg);
      color: #fff;
    }

    & .menuContent {
      display: block;
    }
  }

  @media ${device.laptopM} {
    padding-left: 0px;
    flex: 1;
  }
`;

const NavigationMenuHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & span {
    color: inherit !important;
    padding: 12px 6px;
  }

  &:hover {
    cursor: pointer;
  }

  & .chevronIcon {
    transition-duration: 0.4s;
    transition-property: transform;
    color: inherit !important;
  }

  @media ${device.laptopM} {
    justify-content: space-between;
    margin: 24px 0 0px 0;

    & span {
      padding: 0px;
    }

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${(props) =>
        props.expanded ? 'rotate(180deg)' : 'none  !important'};
    }
  }
`;

const LanguageMenuHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h2 {
    color: inherit !important;
  }

  & span {
    padding: 12px 6px;
  }

  &:hover {
    cursor: pointer;
  }

  & .chevronIcon {
    transition-duration: 0.4s;
    transition-property: transform;
    color: inherit !important;
  }

  @media ${device.laptopM} {
    justify-content: flex-end;

    & span {
      padding: 0px 8px;
    }

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${(props) =>
        props.expanded ? 'rotate(180deg)' : 'none  !important'};
    }
  }

  @media ${device.laptopM} {
    width: 100%;

    h2 {
      margin: 0 auto 0 0;
      padding: 4px;
    }
  }
`;

const NavigationMenuContent = styled.ul`
  list-style: none;
  .header-item {
    &:not(:nth-of-type(1)) {
      margin-top: 16px;
    }
  }

  font-family: 'Strawford', 'Manrope', sans-serif;
  display: none;
  position: absolute;

  // logic - this should touch the parent li for enough hover surface area.
  top: 50px;
  left: 50%;
  transform: translateX(-10%);
  z-index: 1;
  border-radius: 24px;
  padding: 12px;

  border: 1px solid rgba(171, 70, 248, 0.4);
  background: rgba(0, 0, 0, 0.5);
  box-shadow:
    2.788px 2.598px 12px 0 rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
  overflow: hidden;
  backdrop-filter: blur(5px);

  min-width: 390px;

  @media ${device.mobileL} {
    min-width: 100%;
  }

  @media ${device.laptopM} {
    width: 100%;
    position: relative;
    top: 0px;
    left: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    margin: 8px 0 0 0;
    padding: 0px;
    max-height: initial;
    min-height: initial;

    position: relative;
    clip-path: inset(0 round 24px);

    display: ${(props) => (props.expanded ? 'flex' : 'none !important')};
    & a {
      justify-content: flex-start;
    }
  }

  @media ${device.tablet} {
    max-height: initial;
    min-height: initial;
  }
`;

const HeaderFocusItems = styled(ItemH)`
  align-self: center;
  flex-wrap: nowrap;

  @media ${device.laptopM} {
    flex-direction: column;
    width: 100%;
    flex: 1;
  }
`;

const LanguageMenuContent = styled.div`
  list-style: none;

  display: none;
  position: absolute;

  // logic - this should touch the parent li for enough hover surface area.
  top: 50px;
  left: 50%;
  transform: translateX(-85%);
  z-index: 1;
  padding: 12px;
  border-radius: 24px;

  border: 1px solid rgba(171, 70, 248, 0.4);
  background: rgba(0, 0, 0, 0.8);
  box-shadow:
    2.788px 2.598px 12px 0 rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(0, 0, 0, 0.5);
    filter: blur(10px);
    z-index: -1;
    border-radius: 24px;
  }

  & button {
    min-width: 182px;
  }

  @media ${device.laptopM} {
    min-width: 100%;

    position: relative;
    top: 0px;
    left: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    padding: 12px;

    display: ${(props) => (props.expanded ? 'flex' : 'none !important')};

    & a {
      justify-content: flex-start;
    }
  }
`;

const LanguageButton = styled(Button)`
  border: 1px solid transparent;

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  &:hover {
    border-radius: var(--radius-xs, 12px);
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(0, 0, 0, 0.5);

    h3 {
      color: red;
    }
  }

  @media ${device.laptopM} {
    width: 100%;
    flex: 1;
    margin: 8px 0;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 8px 12px;
  gap: 6px;
  cursor: pointer;
  border: 1px solid transparent;

  @media (min-width: 1025px) {
    width: auto;
  }

  &:hover {
    border-radius: var(--radius-xs, 12px);
    border: 1px solid rgba(255, 255, 255, 0.35) !important;
    background: rgba(0, 0, 0, 0.5);

    h2 {
      color: #d548ec;
    }
    & ${Image} {
      filter: brightness(0) saturate(100%) invert(83%) sepia(53%)
        saturate(5899%) hue-rotate(225deg) brightness(107%) contrast(85%);
    }
  }

  @media ${device.laptopM} {
    max-width: 100%;
    margin: 6px 0 0 0;
  }
`;

const HeaderImage = styled(Image)`
  margin: 10px;

  @media ${device.laptopM} {
    margin: 10px 10px 10px 0;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DappLauncher = styled(A)`
  padding: 16px 32px;
  font-family:
    DM Sans,
    sans-serif;
  height: auto;
  min-width: 140px;
  box-sizing: border-box;

  @media ${device.laptopM} {
    align-self: stretch;
    flex: 0 1 100%;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
    margin-top: ${(props) => props.showMobileMenu && '32px'};
  }

  @media ${device.mobileL} {
  }
`;

const PortalLauncher = styled(A)`
  padding: 16px 32px;
  font-family:
    DM Sans,
    sans-serif;
  height: auto;
  min-width: 140px;
  box-sizing: border-box;

  @media ${device.laptop} {
    display: block;
  }

  @media (max-width: 522px) {
    display: none;
  }

  @media (max-width: 522px) {
    display: none;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

const TagItem = styled.b`
  width: fit-content;
  border-radius: 12px;
  border: 1px solid #d98aec;
  background: transparent;
  padding: 2px 5px;
  color: #d98aec;
  // text-align: center;
  font-size: 9px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
`;

export default Header;
