// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import { FC } from 'react';
import styled from 'styled-components';

// External Components
import { useTranslation } from 'react-i18next';
import { TbArrowUpRight } from 'react-icons/tb';

// Internal Component
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { useSiteBaseUrl } from '@site/src/hooks/useSiteBaseUrl';

import { H3, Image, ItemH, P, Span } from '@site/src/css/SharedStyling';

import ItemStylizing from './ItemStylizing/ItemStylizing';

// Internal Configs
import { device } from '@site/src/config/globals';

// Interfaces and Props

// Helper Functions

// Helper Component

// Main
const ExploreCard: FC = ({ item, index, variant = 'tile' }) => {
  // Internationalization
  const { t } = useTranslation();
  // for navigation
  const isMobile = useMediaQuery(device.mobileL);
  const baseURL = useSiteBaseUrl() || '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // Resolve translated content from valueKey
  const getTranslatedContent = (valueKey: string, fallback: string = '') => {
    if (valueKey) {
      const translated = t(valueKey, '');
      return translated || fallback;
    }
    return fallback;
  };

  // Get title and subtitle with translation support
  const resolvedTitle = item.valueKey
    ? getTranslatedContent(item.valueKey + '.title', item.title || '')
    : item.title || '';

  const resolvedSubtitle = item.valueKey
    ? getTranslatedContent(item.valueKey + '.subtitle', item.subtitle || '')
    : item.subtitle || '';

  // Generate accessible alt text for images
  const getImageAltText = (title: string) => {
    const prepend = t(
      'components.explore-collection.explore-card.image-prepend',
      ''
    );
    const append = t(
      'components.explore-collection.explore-card.image-append',
      ''
    );
    return `${prepend}${title}${append}`;
  };

  // Generate accessible link text
  const getLinkText = (title: string) => {
    const prepend = t(
      'components.explore-collection.explore-card.link-prepend',
      ''
    );
    const append = t(
      'components.explore-collection.explore-card.link-append',
      ''
    );
    return `${prepend}${title}${append}`;
  };

  const handleArticleClick = () => {
    // Track Knowledge Base article click in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'kb_article_click', {
        event_category: 'knowledge_base',
        event_label: resolvedTitle,
        article_title: resolvedTitle,
        article_url: getHref(item),
        article_type: variant,
      });
    }
  };

  return (
    <Card
      key={index}
      padding='24px'
      alignItems='flex-start'
      borderRadius='32px'
      justifyContent='space-between'
      bgImage={variant === 'tile' ? item.bgImage : ''}
      bgColor={variant === 'tile' ? item.bgColor : 'var(--ifm-color-card-dark)'}
      href={getHref(item)}
      rel='noopener'
      target={item?.target ? item?.target : '_self'}
      variant={variant}
      title={getLinkText(resolvedTitle)}
      aria-label={getLinkText(resolvedTitle)}
      onClick={handleArticleClick}
    >
      {variant === 'tile' && item.bgStylizing && (
        <ItemStylizing {...item.bgStylizing} />
      )}

      {variant === 'tile' && (
        <TileImage customWidth={item.customWidth}>
          <Image
            src={require(`@site/${item?.image?.substring(1)}.webp`).default}
            {...(item?.imageSrcSet && {
              srcSet: `${require(`@site/${item?.image?.substring(1)}@2x.webp`).default} 2x, ${require(`@site/${item?.image?.substring(1)}@3x.webp`).default} 3x`,
            })}
            alt={getImageAltText(resolvedTitle)}
            title={resolvedTitle}
            loading='lazy'
            className='pulse-logo'
          />
        </TileImage>
      )}

      {item?.image && variant === 'row' && (
        <KnowledgeImage
          src={require(`@site/${item?.image?.substring(1)}.webp`).default}
          {...(item?.imageSrcSet && {
            srcSet: `${require(`@site/${item?.image?.substring(1)}@2x.webp`).default} 2x, ${require(`@site/${item?.image?.substring(1)}@3x.webp`).default} 3x`,
          })}
          alt={getImageAltText(resolvedTitle)}
          title={resolvedTitle}
          variant={variant}
        />
      )}

      <ItemH
        flex={variant === 'row' ? '1' : '0'}
        justifyContent='flex-start'
        alignItems='center'
        margin={variant === 'tile' ? 'auto 0 0 0' : '0'}
      >
        <TitleH3
          variant={variant}
          fontSize='1.8rem'
          fontWeight='500'
          lineHeight={isMobile ? '100%' : '150%'}
          letterSpacing='-0.64px'
          flex='1'
        >
          {resolvedTitle}
        </TitleH3>
      </ItemH>

      {variant === 'row' && (
        <RowLinkArrow flex='0' alignItems='center' justifyContent='center'>
          <TbArrowUpRight color='var(--ifm-color-custom-pink)' size={24} />
        </RowLinkArrow>
      )}

      {variant === 'tile' && (
        <>
          <ItemH
            alignItems='flex-start'
            alignSelf='flex-start'
            flex={variant === 'row' ? '1' : '0'}
          >
            <P
              fontSize='1.125rem'
              fontWeight='400'
              lineHeight='133%'
              letterSpacing='-0.64px'
              color={
                variant === 'tile'
                  ? 'var(--ifm-color-white)'
                  : 'var(--ifm-color-toc-inactive)'
              }
              fontFamily='DM Sans'
              margin='0'
            >
              {resolvedSubtitle}
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
              color='var(--ifm-color-white)'
            >
              {item?.ctatitle
                ? item?.ctatitle
                : t('components.explore-collection.explore-card.cta-title', '')}
            </Span>
            <TbArrowUpRight color='var(--ifm-color-white)' size={24} />
          </LinkContainer>
        </>
      )}
    </Card>
  );
};

const Card = styled.a`
  cursor: pointer;
  padding: ${(props) => (props.variant === 'row' ? '16px' : '24px')};
  border-radius: ${(props) => (props.variant === 'row' ? '24px' : '32px')};
  background: ${(props) => props.bgColor || props.background};
  display: flex;
  flex-direction: ${(props) => (props.variant === 'row' ? 'row' : 'column')};
  gap: ${(props) => (props.variant === 'row' ? '24px' : '0px')};
  align-items: ${(props) =>
    props.variant === 'row' ? 'center' : 'flex-start'};

  min-height: ${(props) => (props.variant === 'row' ? 'auto' : '420px')};
  ${({ bgImage }) =>
    bgImage
      ? `background-image: url(${bgImage}); background-repeat: no-repeat; background-size: cover; background-position: center;`
      : ''}
  justify-content: ${(props) =>
    props.variant === 'tile' ? 'space-between' : ''};
  overflow: hidden;
  position: relative;

  @media ${device.mobileL} {
    flex-direction: ${(props) =>
      props.variant === 'row' ? 'column' : 'column'};
    gap: ${(props) => (props.variant === 'row' ? '16px' : '0px')};
    align-items: ${(props) =>
      props.variant === 'row' ? 'flex-start' : 'flex-start'};
  }

  &:focus,
  &:active {
    outline: none;
    background: ${(props) =>
      props.variant === 'row'
        ? 'var(--ifm-color-card-dark)'
        : props.bgColor || props.background};
    ${({ bgImage }) =>
      bgImage
        ? `background-image: url(${bgImage}); background-repeat: no-repeat; background-size: cover; background-position: center;`
        : ''}
    color: inherit;
  }

  &:hover {
    H3 {
      color: ${(props) =>
        props.variant === 'row'
          ? 'var(--ifm-link-color)'
          : 'var(--ifm-color-primary-unified-text)'};
    }
  }

  user-select: none;
  * {
    user-select: none;
  }
`;

const TileImage = styled.div`
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
  width: ${(props) => (props.variant === 'row' ? 'auto' : '100%')};
  min-height: ${(props) => (props.variant === 'row' ? '78px' : 'auto')};
  max-height: ${(props) => (props.variant === 'row' ? '78px' : '100%')};
  aspect-ratio: 16/9;
  border-radius: ${(props) => (props.variant === 'row' ? '12px' : '24px')};

  @media ${device.mobileL} {
    width: ${(props) => (props.variant === 'row' ? '100%' : '100%')};
    max-height: ${(props) => (props.variant === 'row' ? 'none' : '100%')};
  }
`;

const TitleH3 = styled(H3)`
  color: ${(props) =>
    props.variant === 'row'
      ? 'var(--ifm-color-white)'
      : 'var(--ifm-color-white)'};

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const RowLinkArrow = styled(ItemH)`
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

export default ExploreCard;
