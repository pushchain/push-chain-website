/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';
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
      background='#FFF'
      padding='24px'
      alignItems='flex-start'
      borderRadius='32px'
      justifyContent='space-between'
      href={getHref(item)}
      rel='noopener noreferrer'
      target={item?.target ? item?.target : '_self'}
      mode={mode}
    >
      {item?.image && (
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

      {item?.imageDirectory && (
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

      <ItemH flex='1' justifyContent='flex-start' alignItems='center'>
        <TitleH3
          margin={mode === 'playlist' ? '0 0 0 0' : '24px 0 0 0'}
          fontSize='2rem'
          fontWeight='500'
          fontFamily='N27'
          lineHeight={isMobile ? '100%' : '140%'}
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
            margin='0 0 auto 0'
            alignItems='flex-start'
            alignSelf='flex-start'
          >
            <P
              margin='8px 0 0 0'
              fontSize='1.125rem'
              fontWeight='400'
              fontFamily='N27'
              lineHeight='140%'
              letterSpacing='-0.64px'
              color='#757D8D'
            >
              {item?.subtitle}
            </P>
          </ItemH>

          <ItemH
            alignItems='center'
            justifyContent='space-between'
            margin='32px 0 0 0'
            cursor='pointer'
            flex='0'
          >
            <Span
              fontSize='1.125rem'
              fontWeight='500'
              fontFamily='N27'
              lineHeight={isMobile ? '100%' : '140%'}
              letterSpacing='-0.64px'
              color='#D548EC'
            >
              {item?.ctatitle ? item?.ctatitle : 'Read More'}
            </Span>
            <TbArrowUpRight color='#D548EC' size={24} />
          </ItemH>
        </>
      )}
    </Card>
  );
};

const Card = styled.a`
  cursor: pointer;
  background: #fff;
  padding: 24px;
  border-radius: 32px;
  display: flex;
  flex-direction: ${(props) => (props.mode === 'playlist' ? 'row' : 'column')};
  gap: ${(props) => (props.mode === 'playlist' ? '24px' : '0px')};
  align-items: ${(props) =>
    props.mode === 'playlist' ? 'center' : 'flex-start'};

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

  &:hover {
    H3 {
      color: var(--ifm-primary-color);
    }
  }

  user-select: none;
  * {
    user-select: none;
  }
`;

const KnowledgeImage = styled(Image)`
  width: ${(props) => (props.mode === 'playlist' ? 'auto' : '100%')};
  max-height: ${(props) => (props.mode === 'playlist' ? '64px' : '100%')};
  aspect-ratio: 16/9;
  border-radius: ${(props) => (props.mode === 'playlist' ? '16px' : '24px')};

  @media ${device.mobileL} {
    width: ${(props) => (props.mode === 'playlist' ? '100%' : '100%')};
    max-height: ${(props) => (props.mode === 'playlist' ? 'none' : '100%')};
  }
`;

const TitleH3 = styled(H3)`
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const PlaylistLinkArrow = styled(ItemH)`
  @media ${device.mobileL} {
    display: none;
  }
`;

export default ChannelKnowledgeBaseComponentItem;
