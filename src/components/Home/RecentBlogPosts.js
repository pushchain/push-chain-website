// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { Button, H2, ItemH, Span, Image } from '@site/src/css/SharedStyling';

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

  return (
    <BlogPostList>
      {recentBlogs?.slice(0, 3).map((postItem, index) => {
        return (
          <BlogPostCardPrimary
            key={index}
            onClick={() => {
              window.open(`${postItem?.link}`, '_blank');
            }}
            alt={`Read blog post - ${postItem?.title}`}
          >
            <Image src={postItem?.imageUrl} width='100%' loading='lazy' />

            <BodyItem>
              <ItemH
                alignItems='flex-start'
                alignSelf='flex-start'
                flex='0'
                color='#fff'
                justifyContent='space-between'
                className='date'
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
              >
                {postItem?.title}
              </H2>

              <TextSpan>{postItem?.description}</TextSpan>
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
`;

export default RecentBlogPosts;
