// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// External Components
import { Trans, useTranslation } from 'react-i18next';
import { Tweet } from 'react-tweet';

// Import components
import { FloatingEmoji } from '@site/src/components/FloatingEmoji';
import {
  Content,
  H1,
  H2,
  MultiContent,
  Section,
  Span,
} from '@site/src/css/SharedStyling';

// Import device breakpoints
import { device } from '@site/src/config/globals';

// Import tweet data
import { LFPushTweetsList } from '@site/src/config/LFPushTweetsList';

export default function LFPushComp() {
  // Internationalization
  const { t } = useTranslation();

  // Pagination state
  const [displayedTweets, setDisplayedTweets] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const TWEETS_PER_PAGE = 10;

  // Masonry layout function
  const applyMasonryLayout = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = Array.from(grid.children) as HTMLElement[];
    if (items.length === 0) return;

    // Check if all items have proper heights (not collapsed)
    const hasValidHeights = items.every((item) => item.offsetHeight > 50);
    if (!hasValidHeights) {
      // Retry after a short delay if items don't have proper heights yet
      setTimeout(() => applyMasonryLayout(), 200);
      return;
    }

    // Get responsive column count
    const getColumnCount = () => {
      const width = window.innerWidth;
      if (width <= 525) return 1; // mobileL
      if (width <= 768) return 2; // tablet
      if (width <= 1024) return 2; // laptop
      return 3; // desktop
    };

    const columnCount = getColumnCount();
    const gap =
      window.innerWidth <= 525
        ? 20
        : window.innerWidth <= 768
          ? 20
          : window.innerWidth <= 1024
            ? 24
            : 32;
    const columnWidth =
      (grid.offsetWidth - gap * (columnCount - 1)) / columnCount;

    // Initialize column heights
    const columnHeights = new Array(columnCount).fill(0);

    // Position each item
    items.forEach((item) => {
      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );

      // Calculate position
      const x = shortestColumnIndex * (columnWidth + gap);
      const y = columnHeights[shortestColumnIndex];

      // Apply positioning
      item.style.position = 'absolute';
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      item.style.width = `${columnWidth}px`;

      // Update column height
      columnHeights[shortestColumnIndex] += item.offsetHeight + gap;
    });

    // Set container height
    const maxHeight = Math.max(...columnHeights) - gap;
    grid.style.height = `${maxHeight}px`;
  }, []);

  // Load more tweets function
  const loadMoreTweets = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setDisplayedTweets((prev) => {
      // Use previous state length to calculate the correct start index
      const startIndex = prev.length;
      const endIndex = startIndex + TWEETS_PER_PAGE;
      const newTweets = LFPushTweetsList.slice(startIndex, endIndex);

      if (newTweets.length === 0) {
        setHasMore(false);
        setIsLoading(false);
        return prev; // Return previous state unchanged
      } else {
        setIsLoading(false);
        return [...prev, ...newTweets];
      }
    });
  }, [isLoading, hasMore]);

  // Initial load
  useEffect(() => {
    if (displayedTweets.length === 0) {
      loadMoreTweets();
    }
  }, [loadMoreTweets, displayedTweets.length]);

  // Apply masonry layout when tweets change or window resizes
  useEffect(() => {
    const timer = setTimeout(() => {
      applyMasonryLayout();
    }, 500); // Longer delay to ensure tweet components are loaded

    return () => clearTimeout(timer);
  }, [displayedTweets, applyMasonryLayout]);

  // MutationObserver to detect when tweet content loads
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new MutationObserver(() => {
      // Debounce the layout application
      setTimeout(() => {
        applyMasonryLayout();
      }, 300);
    });

    observer.observe(grid, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    return () => observer.disconnect();
  }, [applyMasonryLayout]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      applyMasonryLayout();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [applyMasonryLayout]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observerElement = observerRef.current;

    if (!observerElement || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreTweets();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(observerElement);

    return () => {
      observer.unobserve(observerElement);
    };
  }, [loadMoreTweets, hasMore, isLoading]);

  return (
    <>
      {/* Floating Emoji Animation */}
      <FloatingEmoji
        interval={12000}
        stayDuration={3000}
        minSize={8}
        maxSize={20}
        enabled={true}
      />

      {/* Heading + Tweets Section */}
      <Section>
        {/* Heading Content */}
        <Content className='skeletonsmall'>
          {/* Heading Content */}
          <MultiContent className='large'>
            <H1>{t('pages.lfpush.hero-section.title')}</H1>
            <Span color='var(--ifm-color-primary-unified-text)'>
              <Trans
                i18nKey='pages.lfpush.hero-section.description'
                components={{
                  hashtag: (
                    <Span color='var(--ifm-link-color)' fontWeight='800'>
                      <b>#LFPush</b>
                    </Span>
                  ),
                  mention: (
                    <Span color='var(--ifm-link-color)' fontWeight='800'>
                      <b>@PushChain</b>
                    </Span>
                  ),
                }}
              />
            </Span>
          </MultiContent>
          {/* Tweets Content */}
          <MultiContent className='xsmall'>
            <H2 color='var(--ifm-color-primary-unified-text)' textAlign='end'>
              {t('pages.lfpush.tweets-section.tweets-counter', {
                count: LFPushTweetsList.length,
              })}
            </H2>
          </MultiContent>
          <MultiContent className='xsmall'>
            <TweetsGrid ref={gridRef}>
              {displayedTweets.map((tweetUrl, index) => (
                <TweetCard key={index} tweetUrl={tweetUrl} />
              ))}
            </TweetsGrid>

            {/* Loading indicator */}
            {isLoading && (
              <LoadingIndicator>
                <LoadingSpinner />
                <LoadingText>
                  {t('pages.lfpush.tweets-section.loading')}
                </LoadingText>
              </LoadingIndicator>
            )}

            {/* Infinite scroll observer */}
            {hasMore && <div ref={observerRef} style={{ height: '20px' }} />}

            {/* End message */}
            {!hasMore && displayedTweets.length > 0 && (
              <EndMessage>
                {t('pages.lfpush.tweets-section.end-message')}
              </EndMessage>
            )}
          </MultiContent>
        </Content>
      </Section>
    </>
  );
}

// Tweet Card Component
const TweetCard: React.FC<{ tweetUrl: string }> = ({ tweetUrl }) => {
  // Extract tweet ID and username from URL
  const tweetId = tweetUrl.split('/').pop() || '';
  const username = tweetUrl.split('/')[3] || 'user';

  // Create skeleton content for fallback
  const skeletonFallback = (
    <SkeletonContent>
      <SkeletonHeader>
        <SkeletonAvatar
          src='/assets/website/brand/logo-512.png'
          alt='Push Protocol'
        />
        <SkeletonInfo>
          <SkeletonName>
            @{username}
            <VerifiedBadge>✓</VerifiedBadge>
          </SkeletonName>
          <SkeletonUsername>Loading tweet...</SkeletonUsername>
        </SkeletonInfo>
        <SkeletonTimestamp></SkeletonTimestamp>
      </SkeletonHeader>

      <SkeletonText>
        <SkeletonLine width='90%' />
        <SkeletonLine width='75%' />
        <SkeletonLine width='60%' />
      </SkeletonText>

      <SkeletonActions>
        <SkeletonAction />
        <SkeletonAction />
        <SkeletonAction />
      </SkeletonActions>
    </SkeletonContent>
  );

  return (
    <TweetWrapper>
      <div className='dark'>
        <Tweet id={tweetId} fallback={skeletonFallback} />
      </div>
    </TweetWrapper>
  );
};

// Styled Components
const TweetsGrid = styled.div`
  /* Container for JS masonry layout */
  position: relative;
  width: 100%;

  /* Fallback for when JS hasn't loaded yet */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: start;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TweetWrapper = styled.div`
  background: var(--ifm-color-gray-900);
  border: 1px solid var(--ifm-color-tweet-border);
  color: var(--ifm-color-primary-unified-text);
  border-radius: 12px;
  padding: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  min-height: 200px;

  /* Fix SVG icons in react-tweet */
  svg {
    display: inline-block;
    fill: currentColor;
    width: 1.25em;
    height: 1.25em;
    vertical-align: text-bottom;
  }

  /* Specific fixes for tweet icons */
  .verified_node_modules-react-tweet-dist-twitter-theme-icons-icons-module {
    fill: var(--ifm-color-tweet-icon);
    width: 20px;
    height: 20px;
  }

  .twitterIcon_node_modules-react-tweet-dist-twitter-theme-tweet-header-module {
    fill: var(--ifm-color-tweet-icon);
    width: 20px;
    height: 20px;
  }

  .likeIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module {
    fill: var(--ifm-color-tweet-like);
    width: 20px;
    height: 20px;
  }

  .replyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module {
    fill: var(--ifm-color-tweet-icon);
    width: 20px;
    height: 20px;
  }

  .copyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module {
    fill: var(--ifm-color-tweet-icon);
    width: 20px;
    height: 20px;
  }

  .infoIcon_node_modules-react-tweet-dist-twitter-theme-tweet-info-module {
    fill: var(--ifm-color-tweet-icon);
    width: 16px;
    height: 16px;
  }

  /* Additional Div Fixes */
  .reply_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module {
    display: none;
  }

  .info_node_modules-react-tweet-dist-twitter-theme-tweet-info-module {
    font-size: 0.75em;
  }

  .actions_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module {
    margin-top: 10px;
    border-top: 1px solid #ffffff33;
    justify-content: end;
  }

  .copy_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module {
    margin-right: 0px;
  }

  .link_node_modules-react-tweet-dist-twitter-theme-tweet-replies-module {
    border: 1px solid #ffffff33;

    &:hover {
      border-color: var(--ifm-link-color);
    }
  }

  /* Quoted tweet card nested inside a tweet.
     .article_bYSq is react-tweet's generated class; the nested-article
     selector is the version-proof fallback if that hash ever changes. */
  .article_bYSq,
  article article {
    border: 1px solid #425364;
    border-radius: 16px;
    margin-top: 20px;
    overflow: hidden;
  }

  &:hover {
    border-color: var(--ifm-link-color);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(170, 57, 188, 0.15);
  }

  @media ${device.mobileL} {
    margin-bottom: 20px;
  }
`;

// Skeleton Loading Components
const SkeletonContent = styled.div`
  padding: 16px;
  background: var(--ifm-color-gray-900);
`;

const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const SkeletonAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  border: 2px solid var(--ifm-color-tweet-spinner-primary);
`;

const SkeletonInfo = styled.div`
  flex: 1;
`;

const SkeletonName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: var(--ifm-color-white);
  font-size: 15px;
`;

const VerifiedBadge = styled.span`
  color: var(--ifm-color-tweet-verified);
  margin-left: 4px;
  font-size: 14px;
`;

const SkeletonUsername = styled.div`
  color: var(--ifm-color-tweet-username);
  font-size: 14px;
  margin-top: 2px;
`;

const SkeletonTimestamp = styled.div`
  width: 60px;
  height: 14px;
  background: linear-gradient(
    90deg,
    var(--ifm-color-tweet-skeleton-dark) 25%,
    var(--ifm-color-tweet-skeleton-light) 50%,
    var(--ifm-color-tweet-skeleton-dark) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
`;

const SkeletonText = styled.div`
  margin-bottom: 16px;
`;

const SkeletonLine = styled.div<{ width: string }>`
  height: 16px;
  background: linear-gradient(
    90deg,
    var(--ifm-color-tweet-skeleton-dark) 25%,
    var(--ifm-color-tweet-skeleton-light) 50%,
    var(--ifm-color-tweet-skeleton-dark) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 8px;
  width: ${(props) => props.width};
`;

const SkeletonActions = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  padding-top: 12px;
  border-top: 1px solid var(--ifm-color-tweet-skeleton-border);
`;

const SkeletonAction = styled.div`
  width: 60px;
  height: 20px;
  background: linear-gradient(
    90deg,
    var(--ifm-color-tweet-skeleton-dark) 25%,
    var(--ifm-color-tweet-skeleton-light) 50%,
    var(--ifm-color-tweet-skeleton-dark) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 10px;
`;

// Shimmer animation
const shimmerKeyframes = `
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

// Loading and pagination styled components
const LoadingIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 16px;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--ifm-color-tweet-skeleton-dark);
  border-top: 3px solid var(--ifm-color-tweet-spinner-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  color: var(--ifm-color-white);
  font-size: 16px;
  font-weight: 500;
`;

const EndMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--ifm-color-tweet-end-message);
  font-size: 18px;
  font-weight: 500;
`;

// Add shimmer styles to document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerKeyframes;
  document.head.appendChild(style);
}
