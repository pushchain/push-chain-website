// React + Web3 Essentials
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Internal Components
import { Button, H2, Image, ItemH, Span } from '@site/src/css/SharedStyling';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';
import useFetchRecentBlogs from './hooks/useFetchRecentBlogs';

import {
  Date,
  ReadingTime,
  Spacer,
} from '@site/src/components/reusables/date.tsx';

const RecentBlogPosts = () => {
  const { recentBlogs } = useFetchRecentBlogs();
  const { t } = useTranslation();

  // Handle loading and error states
  if (!recentBlogs) {
    return (
      <BlogPostList>
        <LoadingMessage role='status' aria-live='polite'>
          {t('home.blog-section.loading-text')}
        </LoadingMessage>
      </BlogPostList>
    );
  }

  if (recentBlogs.length === 0) {
    return (
      <BlogPostList>
        <ErrorMessage role='status' aria-live='polite'>
          {t('home.blog-section.no-posts-text')}
        </ErrorMessage>
      </BlogPostList>
    );
  }

  return (
    <BlogPostList
      role='list'
      aria-label={t('home.blog-section.blog-posts-list-aria-label')}
    >
      {recentBlogs?.slice(0, 3).map((postItem, index) => {
        const blogPostAriaLabel = t('home.blog-section.blog-post-aria-label', {
          title: postItem?.title,
        });
        const blogPostTitle = `${t(
          'home.blog-section.blog-post-title-prefix'
        )}${postItem?.title}`;

        return (
          <BlogPostCardPrimary
            key={index}
            role='listitem'
            tabIndex={0}
            onClick={() => {
              window.open(`${postItem?.link}`, '_blank');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(`${postItem?.link}`, '_blank');
              }
            }}
            title={blogPostTitle}
            aria-label={blogPostAriaLabel}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={postItem?.imageUrl}
              width='100%'
              loading='lazy'
              alt={`Featured image for ${postItem?.title}`}
              role='img'
            />

            <BodyItem>
              <ItemH
                alignItems='flex-start'
                alignSelf='flex-start'
                flex='0'
                color='#fff'
                justifyContent='space-between'
                className='date'
                role='group'
                aria-label='Post metadata'
              >
                <Date
                  date={postItem?.pubDate}
                  formattedDate={postItem?.pubDate}
                  mr={'3px'}
                />
                {typeof postItem?.readingTime !== 'undefined' && (
                  <>
                    <Spacer />
                    <ReadingTime readingTime={postItem?.readingTime} />
                  </>
                )}
              </ItemH>

              <H2
                textAlign='left'
                color='#fff'
                lineHeight='135%'
                letterSpacing='normal'
                role='heading'
                aria-level='3'
              >
                {postItem?.title}
              </H2>

              <TextSpan role='text'>{postItem?.description}</TextSpan>
            </BodyItem>
          </BlogPostCardPrimary>
        );
      })}
    </BlogPostList>
  );
};

const BlogPostList = styled.div`
  display: flex;
  gap: 25px;
  margin: 72px 0 0 0;

  @media ${device.mobileL} {
    flex-direction: column;
    gap: 64px;
  }
`;

const BlogPostCardPrimary = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  color: ${GLOBALS.COLORS.FONT_DARK};
  padding: 0px;
  // gap: 24px;
  width: 32%;
  background: transparent;

  & img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    object-fit: cover;
    aspect-ratio: 16 / 9;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
    line-height: 135%;
  }

  @media ${device.laptop} {
    width: 100%;
  }

  @media ${device.mobileL} {
    gap: 0px;
  }
`;

const BodyItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;

  .date {
    color: #bbbcd0;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: normal;
  }

  h2 {
    margin: 8px 0 auto 0;
    width: 100%;
    letter-spacing: normal;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 140%;
  }

  @media ${device.mobileL} {
    padding: 24px;

    h2 {
      margin: 8px 0 0 0;
    }
  }
`;

const TextSpan = styled(Span)`
  color: #bbbcd0;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: normal;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 16px 0 0 0;
  text-align: start;
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: #bbbcd0;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: center;
  min-height: 200px;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: #bbbcd0;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: center;
  min-height: 200px;
`;

export default RecentBlogPosts;
