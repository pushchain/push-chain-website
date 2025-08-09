// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// External Components
import useBaseUrl from '@docusaurus/useBaseUrl';
import Lottie from 'lottie-react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

// Internal Components
import { LiquidGlass } from '@site/src/components/LiquidGlass/LiquidGlass';
import {
  A,
  Button,
  H2,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import WhiteArrow from '@site/static/assets/website/brb/others/white-arrow.svg';
import { BsArrowRight } from 'react-icons/bs';

// Internal Configs
import { device, size } from '@site/src/config/globals';
import { isSafari } from '@site/src/utils/isSafari';

const Glassy = ({ item }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  // Internationalization
  const { t, i18n } = useTranslation();

  const [hovered, setHovered] = useState(false);

  const { config, header, body, footer, after } = item;
  const {
    id,
    height,
    padding,
    mobilepadding,
    bg,
    bgvideosrc,
    bgtitle,
    link,
    hidehovereffect,
    containerFlexDirection,
  } = config || '';

  const {
    title,
    tags,
    illustration,
    align,
    icon,
    theme,
    highlight,
    subheader,
    iconalt,
    icontitle,
  } = header || '';

  const { text } = footer || '';
  const { message, alignment } = after || '';

  // decide video format for bg and header illustration
  const disableVideoAt = size.tablet;
  const bgVideoFormat = (() => {
    if (item.config && item.config.bgvideowebm) {
      if (isSafari()) {
        try {
          require(
            `@site/static/assets/website/home/${item.config.bgvideosrc}.mp4`
          );
          return 'mp4';
        } catch {
          return 'webm';
        }
      }
      return 'webm';
    }
    return 'mp4';
  })();

  const headerIllustrationFormat = (() => {
    if (item.header && item.header.illustrationvideowebm) {
      if (isSafari()) {
        try {
          require(
            `@site/static/assets/website/home/${item.header.illustrationvideosrc}.mp4`
          );
          return 'mp4';
        } catch {
          return 'webm';
        }
      }
      return 'webm';
    }
    return 'mp4';
  })();

  const Tag = ({ item }) => {
    const { background, border, color, title, fontSize } = item || '';
    return (
      <TagItem
        background={background}
        border={border}
        order={tags?.length === 4 ? true : false}
        color={color}
        fontSize={fontSize}
      >
        {t(title)}
      </TagItem>
    );
  };

  // handle mouse entry
  const handleMouseEnter = (e) => {
    setHovered(true);
  };

  // handle mouse leave
  const handleMouseLeave = (e) => {
    setHovered(false);

    // reset transform
    const container = document.getElementById(id);
    container.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  // handle mouse position
  const handleMouseMove = (e) => {
    const container = document.getElementById(id);
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const x = rect.width - offsetX;
    const y = offsetY;

    // Calculate the center of the container
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the difference between the mouse position and the center of the container
    const diffX = offsetX - centerX;
    const diffY = offsetY - centerY;

    // Normalize the difference (so the values are between -1 and 1)
    const normX = diffX / centerX;
    const normY = diffY / centerY;

    // Convert the normalized values to degrees (for a subtle effect, we limit the rotation to 5 degrees)
    const degX = normY * 5;
    const degY = -normX * 5;

    if (
      !item.config.hide3deffect &&
      typeof window !== 'undefined' &&
      window.innerWidth > size.tablet
    ) {
      // Calculate the distance for the Z translation (for a subtle effect, we limit the translation to 20px)
      const distZ = Math.sqrt(diffX * diffX + diffY * diffY) / 10;
      const transZ = Math.min(distZ, 20);

      // Apply the rotation and translation to the container
      container.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg) translateZ(${transZ}px)`;
    }

    // // Apply glow
    const glowwys = document.querySelectorAll(`.${id} > .glowwy`);
    glowwys.forEach((glowwy) => {
      glowwy.style.top = `${y}px`;
      glowwy.style.right = `${x}px`;
    });
  };

  return (
    <Container
      id={id}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      height={height}
      fluid={item.config.fluid}
      hide={item.config.hide ? item.config.hide : null}
      hideEffect={hidehovereffect}
      containerFlexDirection={containerFlexDirection}
      className={`${hovered ? 'active' : ''} ${id}`}
    >
      {/* <GlowwyBorder
        className={`${hovered ? 'active' : ''} glowwy`}
        hideEffect={hidehovereffect}
      />

      <Glowwy
        className={`${hovered ? 'active' : ''} glowwy`}
        hideEffect={hidehovereffect}
      /> */}

      <Subcontainer
        id={id}
        padding={padding}
        mobilepadding={mobilepadding}
        bg={
          hovered && window.innerWidth > disableVideoAt && bgvideosrc
            ? null
            : bg
        }
        title={t(bgtitle)}
        bgsize={item.config.bgsize}
      >
        {/* If bgvideosrc is present, then play video on hover */}
        {bgvideosrc && (
          <ReactPlayer
            url={
              require(
                `@site/static/assets/website/home/${bgvideosrc}.${bgVideoFormat}`
              ).default
            }
            playing={
              hovered &&
              typeof window !== 'undefined' &&
              window.innerWidth > size.tablet
                ? true
                : false
            }
            loop={false}
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
              bottom: 0,
              right: 0,
              left: 0,
              visibility:
                hovered && window.innerWidth > disableVideoAt && bgvideosrc
                  ? 'visible'
                  : 'hidden',
            }}
          />
        )}

        {header && (
          <Header highlight={highlight} id={id}>
            <Subheader
              highlight={highlight}
              id={id}
              illustration={illustration}
            >
              <ItemH
                flex='1'
                alignSelf={illustration ? 'center' : 'flex-start'}
                gap={icon && '8px'}
              >
                {icon && (
                  <GridImage
                    src={
                      require(`@site/static/assets/website/home/${icon}.webp`)
                        .default
                    }
                    srcSet={`${require(`@site/static/assets/website/home/${icon}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/home/${icon}@3x.webp`).default} 3x`}
                    alt={t(iconalt)}
                    title={t(icontitle)}
                    width='16px'
                    height='16px'
                  />
                )}
                <Title
                  align={align}
                  highlight={highlight}
                  subheader={subheader}
                >
                  <H2
                    fontSize={isTablet ? '9px' : '11px'}
                    color='#D98AEC'
                    fontWeight='bold'
                    fontFamily='DM Sans'
                  >
                    {t(subheader)}
                  </H2>

                  <H2Text fontFamily='DM Sans' theme={theme}>
                    {t(title)}
                  </H2Text>
                </Title>

                {highlight && <Tag item={highlight} />}
              </ItemH>

              {illustration && (
                <HeaderImageWrapper>
                  {item.header.illustrationvideo &&
                    typeof window !== 'undefined' &&
                    window.innerWidth > size.tablet && (
                      <ReactPlayer
                        url={
                          require(
                            `@site/static/assets/website/home/${item.header.illustrationvideo}.${headerIllustrationFormat}`
                          ).default
                        }
                        config={{
                          file: {
                            attributes: {
                              controlsList: 'nofullscreen',
                              muted: true,
                              playsInline: true,
                              playsinline: true,
                            },
                          },
                        }}
                        playing={hovered ? true : false}
                        loop={true}
                        muted={true}
                        width='100%'
                        height='100%'
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          visibility:
                            hovered &&
                            window.innerWidth > disableVideoAt &&
                            item.header.illustrationvideo
                              ? 'visible'
                              : 'hidden',
                        }}
                      />
                    )}

                  <GridImage
                    src={
                      require(
                        `@site/static/assets/website/home/${illustration}.webp`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/home/${illustration}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/home/${illustration}@3x.webp`).default} 3x`}
                    alt={t(iconalt)}
                    title={t(icontitle)}
                    width={isTablet ? '27px' : 'auto'}
                    height={isTablet ? 'auto' : '37px'}
                    style={{
                      visibility:
                        hovered &&
                        window.innerWidth > disableVideoAt &&
                        item.header.illustrationvideo
                          ? 'hidden'
                          : 'visible',
                    }}
                  />
                </HeaderImageWrapper>
              )}
            </Subheader>

            {/* tags */}
            {tags && (
              <TagItems
                flexDirection='row'
                alignItems='flex-start'
                justifyContent='flex-start'
                gap='12px'
                margin='14px 0 0 0'
              >
                {tags?.map((item) => (
                  <Tag item={item} />
                ))}
              </TagItems>
            )}
          </Header>
        )}

        {item.body && (
          <Body>
            <BodyInner
              bodyjustifycontent={
                item.config.bodyjustifycontent === 'top'
                  ? 'flex-start'
                  : item.config.bodyjustifycontent === 'bottom'
                    ? 'flex-end'
                    : 'center'
              }
            >
              {/* Loop through and emit all body item based on types */}

              {item.body.map((object) => {
                // Render type "image"
                if (object.type === 'image') {
                  const videoFormat = (() => {
                    if (object.videowebm) {
                      if (isSafari()) {
                        try {
                          require(
                            `@site/static/assets/website/home/${object.videosrc}.mp4`
                          );
                          return 'mp4';
                        } catch {
                          return 'webm';
                        }
                      }
                      return 'webm';
                    }
                    return 'mp4';
                  })();
                  return (
                    <BodyImageWrapper
                      imagewidth={object.imagewidth}
                      imageheight={object.imageheight}
                      imagemargin={object.imagemargin}
                    >
                      {object.videosrc && (
                        <ReactPlayer
                          url={
                            require(
                              `@site/static/assets/website/home/${object.videosrc}.${videoFormat}`
                            ).default
                          }
                          config={{
                            file: {
                              attributes: {
                                controlsList: 'nofullscreen',
                              },
                            },
                          }}
                          playing={hovered ? true : false}
                          loop={true}
                          muted={true}
                          width='100%'
                          height='100%'
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            visibility:
                              hovered &&
                              window.innerWidth > disableVideoAt &&
                              object.videosrc
                                ? 'visible'
                                : 'hidden',
                          }}
                        />
                      )}
                      {object.lottiesrc && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            visibility:
                              hovered &&
                              window.innerWidth > disableVideoAt &&
                              object.lottiesrc
                                ? 'visible'
                                : 'hidden',
                          }}
                        >
                          <Lottie
                            animationData={require(
                              `@site/static/assets/website/home/${object.lottiesrc}.json`
                            )}
                            loop={true}
                            autoplay={true}
                            play={hovered}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </div>
                      )}
                      <BodyImage
                        src={
                          require(
                            `@site/static/assets/website/home/${object.imagesrc}.webp`
                          ).default
                        }
                        srcSet={`${require(`@site/static/assets/website/home/${object.imagesrc}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/home/${object.imagesrc}@3x.webp`).default} 3x`}
                        alt={t(object.imagealt)}
                        title={t(object.imagetitle)}
                        style={{
                          visibility:
                            hovered &&
                            window.innerWidth > disableVideoAt &&
                            (object.videosrc || object.lottiesrc)
                              ? 'hidden'
                              : 'visible',
                        }}
                        type={object.type}
                      />
                    </BodyImageWrapper>
                  );
                }

                // Render type "tag"
                // if (object.type === 'text') {
                //   return (

                //   );
                // }

                // Render type "title"
                if (object.type === 'title') {
                  return (
                    <ItemV
                      padding='0px 0px 0px 0px'
                      flex='initial'
                      alignSelf={
                        object.align === 'left'
                          ? 'flex-start'
                          : object.align === 'right'
                            ? 'flex-end'
                            : 'center'
                      }
                    >
                      <SubscribeText>{t(object.titletext)}</SubscribeText>
                    </ItemV>
                  );
                }

                // Render type "regular text"
                if (object.type === 'text') {
                  return (
                    <BodyTextItem
                      bodytextwidth={object.bodytextwidth}
                      mobilebodytextwidth={object.mobilebodytextwidth}
                      padding='0px 0px 0px 0px'
                      flex='initial'
                      alignSelf={
                        object.align === 'left'
                          ? 'flex-start'
                          : object.align === 'right'
                            ? 'flex-end'
                            : 'center'
                      }
                    >
                      {object.tagText && (
                        <TagText>
                          <span>{t(object.tagText)}</span>

                          {object.tags?.map((item) => (
                            <Tag item={item} />
                          ))}
                        </TagText>
                      )}

                      <div className='text-content'>
                        {object.texttitle && (
                          <div className='text-title'>
                            {t(object.texttitle)}
                          </div>
                        )}
                        <BodyText
                          size={object.bodytextsize}
                          mobilesize={object.mobilebodytextsize}
                          color={object.bodytextcolor}
                          weight={object.bodytextweight}
                          uppercase={object.uppercase}
                          margin={object.margin}
                        >
                          {t(object.bodytext)}
                        </BodyText>
                      </div>
                    </BodyTextItem>
                  );
                }

                // Render type "styled link"
                if (object.type === 'styled-link') {
                  return (
                    <SlideLink
                      href={useBaseUrl(object.href)}
                      title={'new'}
                      target='_blank'
                      padding='0px 0px'
                      className='button'
                      background='transparent'
                      alignItems='center'
                      margin={object.margin}
                      alignSelf={
                        object.align === 'left'
                          ? 'flex-start'
                          : object.align === 'right'
                            ? 'flex-end'
                            : 'center'
                      }
                    >
                      <SpanLink>{t(object.hrefText)}</SpanLink>
                      <BsArrowRight className='anchorSVGlink' />
                    </SlideLink>
                  );
                }

                // Render type "button"
                if (object.type === 'button') {
                  return (
                    <ItemV padding='0px 0px 0px 0px' flex='initial'>
                      <ButtonItem
                        background='#E64DE9'
                        padding={!isTablet ? '14px 22px' : '10px 11px'}
                        margin='0px auto'
                        fontWeight='500'
                        fontSize='16px'
                        fontFamily='DM Sans, san-serif'
                        href={useBaseUrl(object.buttonlink)}
                        title={t(object.buttontitle)}
                      >
                        {t(object.buttontext)}
                        <WhiteArrow />
                      </ButtonItem>
                    </ItemV>
                  );
                }

                return null;
              })}
            </BodyInner>
          </Body>
        )}

        {footer && (
          <Footer>
            {text && (
              <H2Text fontFamily='DM Sans, san-serif' id={id}>
                {t(text)}
              </H2Text>
            )}
          </Footer>
        )}
      </Subcontainer>

      {after && (
        <AfterItem alignment={alignment}>
          <H2
            fontSize='12px'
            color='#FFF'
            fontFamily='DM Sans, san-serif'
            lineHeight='130%'
          >
            {t(message)}
          </H2>
        </AfterItem>
      )}
    </Container>
  );
};

const Container = styled.div`
  flex: ${(props) =>
    props.fluid && props.fluid.desktop ? '1 0 auto' : 'initial'};
  align-self: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${(props) => props.height || '100%'};
  max-height: ${(props) => props.height || '100%'};
  border-radius: 24px;
  box-sizing: border-box;
  overflow: hidden !important;
  display: flex;
  flex-direction: ${(props) => props.containerFlexDirection || 'column'};
  justify-content: space-between;

  // for glassy effect
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;

  &:hover {
    border-radius: 16px;
    border: 1px solid rgba(112, 70, 248, 0.4);
    background: rgba(0, 0, 0, 0.1);
    box-shadow:
      2.788px 2.598px 12px 0 rgba(255, 255, 255, 0.15) inset,
      1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
    /* backdrop-filter: blur(10px); */
    background-blend-mode: plus-lighten;
  }

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   border-radius: inherit; /* Inherit border-radius from parent container */
  //   z-index: -10; /* Put the pseudo-element behind the container content */
  // }

  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 1px;
  //   left: 1px;
  //   bottom: 1px;
  //   right: 1px;
  //   border-radius: inherit;
  //   background: ${(props) => (props.hideEffect ? 'transparent' : '#0d0d0f')};
  //   z-index: -8; /* Glowwy comes as -9 */
  // }

  @media ${device.laptopM} {
    flex: ${(props) =>
      props.fluid && props.fluid.laptop ? '1 0 auto' : 'initial'};
    display: ${(props) => props.hide && props.hide.laptop && 'none'};
  }

  @media ${device.tablet} {
    flex: ${(props) =>
      props.fluid && props.fluid.tablet ? '1 0 auto' : 'initial'};
    width: ${(props) => (props.fluid && props.fluid.tablet ? 'auto' : '100%')};
    pointer-events: none;
    touch-action: none;
  }

  @media ${device.mobileL} {
    flex: ${(props) => (props.fluid && props.fluid.mobile ? '1' : 'initial')};
    width: ${(props) => (props.fluid && props.fluid.mobile ? 'auto' : '100%')};
    display: ${(props) => props.hide && props.hide.mobile && 'none'};
    pointer-events: none;
    touch-action: none;
    min-height: 100%;
    max-height: 100%;
  }
`;

// TODO: comment out glow
const GlowwyBorder = styled.div`
  width: 0px;
  height: 0px;
  border-radius: 50%;
  box-shadow:
    0 0 49px 19px rgb(202, 55, 237),
    0 0 80px 40px #ca37ed,
    0 0 100px 50px rgb(202, 55, 237);
  position: absolute;
  z-index: -9;
  display: none;

  &.active {
    // display: block;
    display: ${(props) => (props.hideEffect ? 'none' : 'block')};
  }
`;

const Glowwy = styled(GlowwyBorder)`
  box-shadow: 0 0 100px 100px rgba(135, 34, 158, 0.15);
  z-index: 1;

  display: ${(props) => props.hideEffect && 'none'};
`;

const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
  padding: ${(props) => props.padding || '24px'};
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.bgsize || 'contain'};
  overflow: hidden;
  border-radius: inherit;
  position: relative;
  margin: 1px;

  @media ${device.laptop} {
    padding: ${(props) => props.mobilepadding || '24px'};
  }
`;

const TagItem = styled.div`
  width: fit-content;
  border-radius: 12px;
  border: ${(props) => props.border};
  background: ${(props) => props.background || 'transparent'};
  padding: ${(props) => (props.fontSize ? '4px 8px' : '4px 12px')};
  color: ${(props) => props.color};
  text-align: center;
  font-size: ${(props) => props.fontSize || '12px'};
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  &:nth-child(1) {
    order: ${(props) => (props.order ? 0 : -1)};
  }
`;

const TagItems = styled(ItemV)`
  gap: 6px;
  &:before {
    content: '';
    flex-basis: 100%;
  }
`;

const H2Text = styled(H2)`
  font-size: 2rem;
  color: #fff;
  line-height: 120%;
  white-space: pre;
  font-weight: 500;

  @media ${device.laptop} {
    white-space: normal;
  }

  @media ${device.mobileL} {
    white-space: normal;
    margin-top: ${({ id }) => (id == 'snap' ? '24px' : '0')};
  }

  background: ${(props) =>
    props.theme === 'hue' &&
    'linear-gradient(270deg, #D162EC 4.53%, #D162EC 63.29%, #EAB7F6 99.72%)'};
  -webkit-background-clip: ${(props) => props.theme === 'hue' && 'text'};
  -webkit-text-fill-color: ${(props) => props.theme === 'hue' && 'transparent'};
`;

const SubscribeText = styled.h2`
  font-size: 72px;
  background: linear-gradient(
    270deg,
    #d162ec 4.53%,
    #d162ec 63.29%,
    #eab7f6 99.72%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 auto;

  @media ${device.laptopM} {
    line-height: 100%;
  }

  @media ${device.laptop} {
    line-height: 64px;
    font-size: 64px;
  }
`;

const BodyText = styled.div`
  // color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-transform: ${(props) => props.uppercase && 'uppercase'};
  margin: ${(props) => props.margin};
  // text-align: center;
  letter-spacing: normal;
  // margin: 0 auto;
  line-height: 150%;
  font-family: 'DM Sans', sans-serif;

  background: linear-gradient(90deg, #b1b1b9 0%, #635d65 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${device.laptop} {
    font-size: ${(props) => props.mobilesize};
  }
`;

const ButtonItem = styled(A)`
  display: flex;
  font-size: 16px;
  font-style: normal;
  align-items: center;
  align-self: center;
  gap: 8px;
  letter-spacing: -0.03em;
  border-radius: 16px;
  &:hover:after {
    opacity: 0;
  }
  &:active:after {
    opacity: 0;
  }
  @media ${device.mobileL} {
    width: 178px;
    margin-top: 10px;
  }
`;

const GridImage = styled(Image)`
  margin: ${(props) => props.margin || 'initial'};
  object-fit: contain !important;

  @media ${device.mobileL} {
    width: inherit;
    margin: ${(props) => props.type == 'image' && '0 auto'};
  }
`;

const Header = styled(ItemV)`
  justify-content: ${({ highlight, tags }) =>
    highlight ? 'flex-start' : tags ? 'center' : 'center'};
  flex: initial;
`;

const Subheader = styled(ItemH)`
  flex: 1;
  align-items: ${(props) => props.illustration && 'center'};
  align-self: ${(props) => props.highlight && 'flex-start'};
`;

const Title = styled(ItemV)`
  align-items: ${({ align }) =>
    align === 'left'
      ? 'flex-start'
      : align === 'right'
        ? 'flex-end'
        : 'center'};
  flex: ${({ highlight }) => highlight && '0'};
  gap: ${({ subheader }) => subheader && '8px'};
`;

const HeaderImageWrapper = styled.div`
  display: block;
  position: relative;
`;

const Body = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const BodyInner = styled(ItemV)`
  gap: 16px;
  align-self: normal;
  flex-wrap: nowrap;

  justify-content: ${(props) =>
    props.bodyjustifycontent ? props.bodyjustifycontent : 'center'};
  height: 100%;
  box-sizing: border-box;
`;
const BodyTextItem = styled(ItemV)`
  padding: 0;
  margin: 0;
  height: fit-content;
  line-height: normal;
  max-width: ${(props) => props.bodytextwidth};

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
  }

  .text-title {
    color: #FFF;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.64px;

    @media (min-width: 471px) and (max-width: 1200px) {
      font-size: 1.5rem;
    }
`;

const BodyImageWrapper = styled.div`
  display: block;
  width: ${(props) => props.imagewidth || '100%'};
  height: ${(props) => props.imageheight || 'auto'};
  margin: ${(props) => props.imagemargin || 'auto'};

  position: relative;

  @media ${device.laptop} {
    overflow: hidden;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const BodyImage = styled(Image)`
  margin: ${(props) => props.margin || 'initial'};
  object-fit: contain !important;

  @media ${device.mobileL} {
  }
`;

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => (props.bg ? '#0D0D10' : 'transparent')};
  flex: 1;
  box-sizing: border-box;
  padding: ${(props) => props.id == 'hyperscalable' && '24px'};
  border-radius: ${(props) => props.id == 'hyperscalable' && '24px'};

  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 85% 85%;
`;

const Footer = styled.div``;

const CodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const AfterItem = styled.div`
  background-color: #252527;
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  justify-content: ${(props) =>
    props.alignment == 'left'
      ? 'flex-start'
      : props.alignment == 'right'
        ? 'flex-end'
        : 'center'};

  ::after,
  ::before {
    content: '';
    position: absolute;
    top: -29px;
    width: 0;
    height: 0;
  }

  ::before {
    left: 0;
    width: 29px;
    height: 29px;
    background: radial-gradient(
      circle at top right,
      transparent 70%,
      #252527 71%
    );
  }

  ::after {
    right: 0;
    width: 29px;
    height: 29px;
    background: radial-gradient(
      circle at top left,
      transparent 70%,
      #252527 71%
    );
  }
`;

const TagText = styled.div`
  color: #cca4f0;
  font-family: 'DM Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 0 0 4px 0;
`;

const SlideLink = styled.a`
  gap: 12px;
  background: none;
  border: none;
  overflow: inherit;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto 0 0;
  padding: 0px;

  .anchorSVGlink {
    color: #fff;
    top: 3px;
  }

  span {
    background: transparent;
    color: #fff;
  }

  &:hover {
    background: transparent;
    text-decoration: none;
    background: none;

    .anchorSVGlink {
      color: #e163ff;
    }

    span {
      background: transparent;
      color: #e163ff;
    }
  }
`;

const SpanLink = styled(Span)`
  position: relative;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 142%;

  // &:after {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   transform: scaleX(0);
  //   height: 2px;
  //   bottom: 0;
  //   left: 0;
  //   background-color: #fff;
  //   transform-origin: bottom right;
  //   transition: transform 0.25s ease-out;
  // }
  // &:hover:after {
  //   transform: scaleX(1);
  //   transform-origin: bottom left;
  // }
`;

export default Glassy;
