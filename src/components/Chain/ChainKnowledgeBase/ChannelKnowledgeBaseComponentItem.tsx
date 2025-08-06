/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from 'react';
import styled from 'styled-components';

import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { useSiteBaseUrl } from '../../../hooks/useSiteBaseUrl';

import { H3, Image, ItemH, P, Span } from '../../../css/SharedStyling';

const ChannelKnowledgeBaseComponentItem: FC = ({
  item,
  index,
  mode = 'grid',
}) => {
  // for navigation
  const isMobile = useMediaQuery(device.mobileL);
  const baseURL = useSiteBaseUrl() || '';

  const getHref = (item: any) => {
    if (!item?.url && !item?.slug) return '#';

    if (item.url?.startsWith('https://') || item.url?.startsWith('http://')) {
      return item.url;
    } else if (item.url?.startsWith('/')) {
      return `${baseURL}${item.url}`;
    } else if (item.parentSlug) {
      return `${baseURL}/knowledge/${item.parentSlug}/${item.slug}`;
    } else {
      return `${baseURL}/knowledge/${item.url || item.slug}`;
    }
  };

  return (
    <Card
      key={index}
      padding='24px'
      alignItems='flex-start'
      borderRadius='32px'
      justifyContent='space-between'
      bgImage={mode === 'grid' ? item.gridBG : ''}
      href={getHref(item)}
      rel='noopener noreferrer'
      target={item?.target ? item?.target : '_self'}
      mode={mode}
      background={mode === 'grid' ? item.gridBG : '#101010'}
    >
      {mode === 'grid' && (
        <GridImage customWidth={item.customWidth}>
          <Image
            src={item.image}
            srcSet={`${item.image2x} 2x, ${item.image3x} 3x`}
            alt={`Image for ${item.title}`}
            loading='lazy'
            className='pulse-logo'
          />
        </GridImage>
      )}

      {item?.image && mode === 'playlist' && (
        <KnowledgeImage
          src={
            require(
              `@site/static/assets/website/chain/knowledge/${item?.image}.webp`
            ).default
          }
          alt={item?.title}
          title={item?.title}
          mode={mode}
        />
      )}

      {item?.imageDirectory && mode === 'playlist' && (
        <KnowledgeImage
          src={item.imageDirectory}
          alt={item?.title}
          title={item?.title}
          mode={mode}
        />
      )}

      {!item?.image && !item?.imageDirectory && mode === 'grid' && (
        <div
          style={{
            height: 'auto',
            width: '100%',
            backgroundColor: '#D9D9D9',
            borderRadius: '24px',
            aspectRatio: '16/9',
          }}
        ></div>
      )}

      <ItemH
        flex={mode === 'playlist' ? '1' : '0'}
        justifyContent='flex-start'
        alignItems='center'
        margin={mode === 'grid' ? 'auto 0 0 0' : '0'}
      >
        <TitleH3
          mode={mode}
          fontSize='1.8rem'
          fontWeight='500'
          lineHeight={isMobile ? '100%' : '150%'}
          letterSpacing='-0.64px'
          flex='1'
        >
          {item?.title}
        </TitleH3>
      </ItemH>

      {mode === 'playlist' && (
        <PlaylistLinkArrow flex='0' alignItems='center' justifyContent='center'>
          <TbArrowUpRight color='#D548EC' size={24} />
        </PlaylistLinkArrow>
      )}

      {mode === 'grid' && (
        <>
          <ItemH
            alignItems='flex-start'
            alignSelf='flex-start'
            flex={mode === 'playlist' ? '1' : '0'}
          >
            <P
              fontSize='1.125rem'
              fontWeight='400'
              lineHeight='133%'
              letterSpacing='-0.64px'
              color={mode === 'grid' ? '#FFF' : '#757D8D'}
              fontFamily='DM Sans'
              margin='0'
            >
              {item?.subtitle}
            </P>
          </ItemH>

          <LinkContainer
            alignItems='center'
            justifyContent='space-between'
            margin='28px 0 0 0'
            cursor='pointer'
            flex='0'
            className='hover-link'
          >
            <Span
              fontSize='1.125rem'
              fontWeight='500'
              lineHeight={isMobile ? '100%' : '140%'}
              letterSpacing='-0.64px'
              color='#fff'
            >
              {item?.ctatitle ? item?.ctatitle : 'Read More'}
            </Span>
            <TbArrowUpRight color='#fff' size={24} />
          </LinkContainer>
        </>
      )}
    </Card>
  );
};

const Card = styled.a`
  cursor: pointer;
  padding: ${(props) => (props.mode === 'playlist' ? '16px' : '24px')};
  border-radius: ${(props) => (props.mode === 'playlist' ? '24px' : '32px')};
  background: ${(props) => props.background};
  display: flex;
  flex-direction: ${(props) => (props.mode === 'playlist' ? 'row' : 'column')};
  gap: ${(props) => (props.mode === 'playlist' ? '24px' : '0px')};
  align-items: ${(props) =>
    props.mode === 'playlist' ? 'center' : 'flex-start'};

  min-height: ${(props) => (props.mode === 'playlist' ? 'auto' : '420px')};
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  justify-content: ${(props) => (props.mode === 'grid' ? 'space-between' : '')};

  @media ${device.mobileL} {
    flex-direction: ${(props) =>
      props.mode === 'playlist' ? 'column' : 'column'};
    gap: ${(props) => (props.mode === 'playlist' ? '16px' : '0px')};
    align-items: ${(props) =>
      props.mode === 'playlist' ? 'flex-start' : 'flex-start'};
  }

  &:focus,
  &:active {
    outline: none;
    background: #fff;
    color: inherit;
  }

  user-select: none;
  * {
    user-select: none;
  }
`;

const GridImage = styled.div`
  padding: 16px;
  border-radius: var(--radius-lg, 32px);
  border: 1px solid rgb(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.05);
  background-blend-mode: lighten;
  box-shadow:
    2.788px 2.598px 12px 0px rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0px rgba(255, 255, 255, 0.15) inset;
  backdrop-filter: blur(4px);
  width: 148px;
  height: 148px;
  display: flex;
  justify-content: center;
  align-items: center;

  .pulse-logo {
    height: auto;
    width: ${({ customWidth }) => customWidth || '90px'};
    z-index: 99999;
  }
`;

const KnowledgeImage = styled(Image)`
  width: ${(props) => (props.mode === 'playlist' ? 'auto' : '100%')};
  min-height: ${(props) => (props.mode === 'playlist' ? '78px' : 'auto')};
  max-height: ${(props) => (props.mode === 'playlist' ? '78px' : '100%')};
  aspect-ratio: 16/9;
  border-radius: ${(props) => (props.mode === 'playlist' ? '12px' : '24px')};

  @media ${device.mobileL} {
    width: ${(props) => (props.mode === 'playlist' ? '100%' : '100%')};
    max-height: ${(props) => (props.mode === 'playlist' ? 'none' : '100%')};
  }
`;

const TitleH3 = styled(H3)`
  color: ${(props) => (props.mode === 'playlist' ? '#FFF' : '#FFF')};

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const PlaylistLinkArrow = styled(ItemH)`
  @media ${device.mobileL} {
    display: none;
  }
`;

const LinkContainer = styled(ItemH)`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  margin-top: 0;

  ${Card}:hover & {
    max-height: 50px;
    opacity: 1;
    transform: translateY(0);
    margin-top: 28px;
  }
`;

export default ChannelKnowledgeBaseComponentItem;
