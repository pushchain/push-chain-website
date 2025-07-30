/* eslint-disable @docusaurus/no-html-links, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Link from '@docusaurus/Link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

import { device } from '../../../config/globals';
import { H1, ItemH, ItemV, LI, Span, UL } from '../../../css/SharedStyling';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { extractTOC } from '../utils/ExtractTableOfContent';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useSiteBaseUrl } from '../../../hooks/useSiteBaseUrl';

const ChainKnowledgeBaseIndexList = ({ block, blockIndex }) => {
  const [showFullMobileTOC, setShowFullMobileTOC] = React.useState(false);
  const [activeHeadingId, setActiveHeadingId] = React.useState('');
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [isTOCTransitioning, setIsTOCTransitioning] = React.useState(false);
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const baseUrl = useSiteBaseUrl();
  const tocRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const isManualNavigationRef = React.useRef(false);

  // Robust setActiveHeadingId function
  const setActiveHeadingIdSafely = (newId) => {
    // Don't clear activeHeadingId if TOC is transitioning
    if (!newId && isTOCTransitioning) {
      return;
    }

    // Don't clear activeHeadingId if we're near the bottom
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - scrollPosition;

    if (!newId && distanceFromBottom < 300) {
      return;
    }
    setActiveHeadingId(newId);
  };

  // Scroll TOC to show active item
  const scrollTOCToActiveItem = (activeId) => {
    if (!tocRef.current || !activeId) return;

    // Don't auto-scroll if user just manually clicked a TOC item
    if (isManualNavigationRef.current) {
      console.log('Skipping TOC auto-scroll due to manual navigation');
      return;
    }

    const tocContainer = tocRef.current;
    const activeTOCItem = tocContainer.querySelector(`a[href="#${activeId}"]`);
    if (activeTOCItem) {
      // Get the TOC container and active item positions
      const tocRect = tocContainer.getBoundingClientRect();
      const itemRect = activeTOCItem.getBoundingClientRect();

      // Check if the active item is outside the visible area
      const isAbove = itemRect.top < tocRect.top;
      const isBelow = itemRect.bottom > tocRect.bottom;

      if (isAbove || isBelow) {
        // Calculate the scroll position to center the active item
        const containerHeight = tocRect.height;
        const itemHeight = itemRect.height;
        const itemOffsetTop = activeTOCItem.offsetTop;

        // Center the item in the visible area
        const targetScrollTop =
          itemOffsetTop - containerHeight / 2 + itemHeight / 2;

        // Use GSAP for smoother scrolling
        gsap.to(tocContainer, {
          scrollTop: Math.max(0, targetScrollTop),
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    }
  };

  // Handle TOC item clicks to prevent auto-scroll interference
  const handleTOCItemClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior temporarily

    console.log('TOC item clicked, setting manual navigation to true');
    // Temporarily disable auto-scroll during manual navigation
    isManualNavigationRef.current = true;

    // Scroll to the target heading
    const targetId = e.currentTarget.getAttribute('href')?.replace('#', '');
    if (targetId) {
      // Immediately set the active heading to the target
      setActiveHeadingIdSafely(targetId);

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Re-enable auto-scroll after navigation is complete
    setTimeout(() => {
      console.log('Re-enabling auto-scroll after manual navigation');
      isManualNavigationRef.current = false;
    }, 2000); // Wait 2 seconds for smooth scroll to complete
  };

  // GSAP ScrollTrigger for tracking active headings
  React.useEffect(() => {
    if (isTablet) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let scrollTriggers = [];
    let lastActiveId = '';
    let isSetup = false;

    // Wait for content to be rendered
    const setupScrollTriggers = () => {
      // Prevent duplicate setup (except for resize)
      if (isSetup) {
        return;
      }

      // Kill existing triggers first
      scrollTriggers.forEach((trigger) => trigger.kill());
      scrollTriggers = [];

      // Get all headings in the content (only h2 and h3, including hidden sections)
      const headings = document.querySelectorAll('h2, h3');

      if (headings.length === 0) {
        return;
      }

      // Filter out headings that don't have IDs
      const headingsWithIds = Array.from(headings).filter(
        (heading) => heading.id && heading.id.trim() !== ''
      );

      if (headingsWithIds.length === 0) {
        return;
      }

      // Create ScrollTrigger for each heading
      headingsWithIds.forEach((heading, index) => {
        const trigger = ScrollTrigger.create({
          trigger: heading,
          start: 'top 20%', // strict trigger point
          end: 'bottom', // Change highlight when heading is 75% down from viewport
          onEnter: () => {
            if (!isTOCTransitioning && !isManualNavigationRef.current) {
              setActiveHeadingIdSafely(heading.id);
              lastActiveId = heading.id;
              setIsAtEnd(index === headingsWithIds.length - 1);
              // Scroll TOC to show the active item (only if not manual navigation)
              console.log(
                'Calling scrollTOCToActiveItem for heading:',
                heading.id
              );
              setTimeout(() => scrollTOCToActiveItem(heading.id), 100);
            } else if (isManualNavigationRef.current) {
              console.log(
                'Skipping heading change due to manual navigation for heading:',
                heading.id
              );
            }
          },
          onEnterBack: () => {
            if (!isTOCTransitioning && !isManualNavigationRef.current) {
              setActiveHeadingIdSafely(heading.id);
              lastActiveId = heading.id;
              setIsAtEnd(index === headingsWithIds.length - 1);
              // Scroll TOC to show the active item (only if not manual navigation)
              console.log(
                'Calling scrollTOCToActiveItem for heading:',
                heading.id
              );
              setTimeout(() => scrollTOCToActiveItem(heading.id), 100);
            } else if (isManualNavigationRef.current) {
              console.log(
                'Skipping heading change due to manual navigation for heading:',
                heading.id
              );
            }
          },
          onLeave: () => {
            // Only clear if we're not at the last heading and scrolling down
            if (index < headingsWithIds.length - 1) {
              // Don't clear - let the next heading take over
            }
          },
          onLeaveBack: () => {
            // Only clear if we're not at the first heading and scrolling up
            if (index > 0) {
              // Don't clear - let the previous heading take over
            }
          },
        });
        scrollTriggers.push(trigger);
      });

      // Add a ScrollTrigger for the last heading that extends to the bottom of the page
      if (headingsWithIds.length > 0) {
        const lastHeading = headingsWithIds[headingsWithIds.length - 1];
        const lastTrigger = ScrollTrigger.create({
          trigger: lastHeading,
          start: 'top 20%',
          end: 'bottom', // Extend to the very bottom of the page
          onEnter: () => {
            if (!isTOCTransitioning && !isManualNavigationRef.current) {
              setActiveHeadingIdSafely(lastHeading.id);
              lastActiveId = lastHeading.id;
              setIsAtEnd(true);
              // Scroll TOC to show the active item (only if not manual navigation)
              setTimeout(() => scrollTOCToActiveItem(lastHeading.id), 100);
            }
          },
          onEnterBack: () => {
            if (!isTOCTransitioning && !isManualNavigationRef.current) {
              setActiveHeadingIdSafely(lastHeading.id);
              lastActiveId = lastHeading.id;
              setIsAtEnd(true);
              // Scroll TOC to show the active item (only if not manual navigation)
              setTimeout(() => scrollTOCToActiveItem(lastHeading.id), 100);
            }
          },
          onLeave: () => {
            // Never clear the last heading when scrolling down
            // Keep it active
            setIsAtEnd(true);
          },
          onLeaveBack: () => {
            // Only clear if we're scrolling up and there's a previous heading
            if (headingsWithIds.length > 1) {
              // Don't clear - let the previous heading take over
              setIsAtEnd(false);
            }
          },
        });
        scrollTriggers.push(lastTrigger);
      }

      // Add a ScrollTrigger for the content area to ensure stable detection
      if (contentRef.current) {
        const contentTrigger = ScrollTrigger.create({
          trigger: contentRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            // This ensures the heading detection remains stable even when TOC becomes sticky
            // The heading ScrollTriggers will continue to work independently
          },
        });
        scrollTriggers.push(contentTrigger);
      }

      isSetup = true;
    };

    // Handle window resize with debouncing
    let resizeTimer = null;
    const handleResize = () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }

      resizeTimer = setTimeout(() => {
        isSetup = false; // Reset setup flag to allow re-setup
        setupScrollTriggers();
      }, 250); // 250ms debounce for resize
    };

    // Use setTimeout to ensure content is rendered
    const timeoutId = setTimeout(setupScrollTriggers, 500); // Increased timeout

    // Also set up a MutationObserver as a fallback
    const observer = new MutationObserver((mutations) => {
      let shouldSetup = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.matches && node.matches('h2, h3')) {
                shouldSetup = true;
              }
              if (node.querySelectorAll) {
                const headings = node.querySelectorAll('h2, h3');
                if (headings.length > 0) {
                  shouldSetup = true;
                }
              }
            }
          });
        }
      });

      if (shouldSetup && !isSetup) {
        setTimeout(setupScrollTriggers, 100);
      }
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Add a scroll listener to prevent clearing active heading when near bottom
    const preventClearOnScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = documentHeight - scrollPosition;

      // If we're within 200px of the bottom, prevent clearing active heading
      if (distanceFromBottom < 200 && activeHeadingId) {
        // Force the active heading to stay active
        setActiveHeadingIdSafely(activeHeadingId);
        setIsAtEnd(true);
      }

      // Check if TOC is transitioning (position changes)
      if (tocRef.current) {
        const tocStyle = window.getComputedStyle(tocRef.current);
        const tocPosition = tocStyle.position;

        // If TOC position is changing, set transitioning state
        if (tocPosition === 'fixed' || tocPosition === 'relative') {
          setIsTOCTransitioning(true);
          // Clear transitioning state after a short delay
          setTimeout(() => {
            setIsTOCTransitioning(false);
          }, 100);
        }
      }
    };

    window.addEventListener('scroll', preventClearOnScroll, { passive: true });

    // Add resize event listener
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      scrollTriggers.forEach((trigger) => trigger.kill());
      isSetup = false; // Reset setup flag
    };
  }, [isTablet]); // Remove item?.content dependency

  // GSAP ScrollTrigger for DesktopTOC
  React.useEffect(() => {
    if (isTablet || !tocRef.current || !contentRef.current) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Calculate TOC height and check if it fits in viewport
    const tocHeight = tocRef.current?.offsetHeight || 0;
    const parentHeight = contentRef.current?.offsetHeight || 0;
    const viewportHeight = window.innerHeight;
    const endOffset = tocHeight; // TOC height + top offset

    // Only activate GSAP if TOC fits in viewport
    const tocFitsInViewport = tocHeight < viewportHeight - 256; // 256px for top/bottom margins

    let scrollTrigger = null;

    // if (tocFitsInViewport) {
    // Create ScrollTrigger for TOC sticky behavior
    scrollTrigger = ScrollTrigger.create({
      trigger: contentRef.current,
      start: 'top top+=24',
      end: `bottom top+=${endOffset}`,
      onUpdate: (self) => {
        const progress = self.progress;
        const direction = self.direction;

        if (progress > 0 && progress < 1) {
          // Parent is in viewport - make TOC sticky
          gsap.set(tocRef.current, {
            position: 'fixed',
            top: '24px',
            zIndex: 100,
          });
        } else if (progress >= 1 && direction === 1) {
          // Reached end of parent - return to normal position
          gsap.set(tocRef.current, {
            position: 'relative',
            top: 'auto',
            zIndex: 'auto',
          });
          gsap.set(tocRef.current.parentElement, {
            alignSelf: 'flex-end',
          });
        } else if (progress <= 0 && direction === -1) {
          // Scrolled above parent - return to normal position
          gsap.set(tocRef.current, {
            position: 'relative',
            top: 'auto',
            bottom: 'auto',
            zIndex: 'auto',
          });
          gsap.set(tocRef.current.parentElement, {
            alignSelf: 'flex-start',
          });
        }
      },
    });
    // }

    return () => {
      scrollTrigger.kill();
    };
  }, [isTablet]);

  // Cleans up markdown text by removing leading spaces from each line,
  // except for lines that contain only '---', which are preserved as-is.
  // Also trims leading and trailing whitespace from the final output.
  const cleanMarkdown = (text: string): string => {
    return text
      .split('\n')
      .map((line: string) => {
        if (line.trim() !== '---') {
          return line.replace(/^\s+/gm, '');
        }
        return line;
      })
      .join('\n')
      .trim();
  };

  // Resolve images by adding the base url to the srs provided from content file
  function resolveImageUrls(md: string): string {
    return md.replace(
      /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
      (_match, alt, src) => {
        return `![${alt}](${baseUrl}${src})`;
      }
    );
  }

  // Removes emojis, numbering and spaces from header texts
  // so it can generates an id for the header
  function generateIdFromHeadingText(text: React.ReactNode): string {
    const plain = String(text)
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '')
      .replace(/^\d+\.\s*/, '');

    return plain
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+$/, '');
  }

  const texts =
    block?.value?.filter((v) => v.type === 'text' && !v.hidden) || [];
  const rawMarkdown = texts?.map((t) => t.value).join('\n\n');
  const toc = extractTOC(block?.value || []);

  // Create hidden section placeholders
  const hiddenSections = [];
  block?.value?.forEach((v) => {
    if (v.type === 'text' && v.hidden) {
      // Extract heading from hidden content (h2 and h3 only)
      const h2Match = v.value.match(/^##\s+(.+)$/m);
      const h3Match = v.value.match(/^###\s+(.+)$/m);

      if (h2Match) {
        const headingText = h2Match[1];
        const headingId = generateIdFromHeadingText(headingText);
        hiddenSections.push({
          id: headingId,
          text: headingText,
          level: 2,
        });
      } else if (h3Match) {
        const headingText = h3Match[1];
        const headingId = generateIdFromHeadingText(headingText);
        hiddenSections.push({
          id: headingId,
          text: headingText,
          level: 3,
        });
      }
    }
  });

  return (
    <ItemH
      key={blockIndex}
      ref={contentRef}
      flexDirection={isTablet ? 'column' : 'row'}
      gap={isTablet ? '32px' : '64px'}
      alignItems='flex-start'
      margin='32px 0 32px 0'
      style={{
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <ItemV
        maxWidth={isTablet ? '100%' : '300px'}
        minWidth={isTablet ? '100%' : '300px'}
        alignItems='flex-start'
        alignSelf='flex-start'
        flexShrink={0}
        margin={!isMobile ? '12px 0 0 0' : ''}
      >
        {isTablet && toc?.length > 0 && (
          <MobileTOCWrapper>
            <UL>
              {(showFullMobileTOC ? toc : toc.slice(0, 2)).map(
                (item, index) => {
                  const highestLevel = Math.min(...toc.map((t) => t.level));
                  return (
                    <LI>
                      <ListItem
                        key={index}
                        href={`#${item.id}`}
                        level={item.level}
                        highestLevel={highestLevel}
                      >
                        {item.text}
                      </ListItem>
                    </LI>
                  );
                }
              )}

              {toc.length > 2 && (
                <ToggleIcon
                  onClick={() => setShowFullMobileTOC(!showFullMobileTOC)}
                >
                  {showFullMobileTOC ? <BsChevronUp /> : <BsChevronDown />}
                </ToggleIcon>
              )}
            </UL>
          </MobileTOCWrapper>
        )}

        {!isTablet && toc.length > 0 && (
          <DesktopTOC
            ref={tocRef}
            background='#FFF'
            padding='32px'
            borderRadius='32px'
            alignItems='flex-start'
            margin='0'
          >
            <UL>
              {toc?.map((item, index) => {
                const highestLevel = Math.min(...toc.map((t) => t.level));
                const isActive =
                  activeHeadingId === item.id ||
                  (index === 0 && activeHeadingId === '' && !isAtEnd);

                return (
                  <LI key={index}>
                    <ListItem
                      href={`#${item.id}`}
                      level={item.level}
                      highestLevel={highestLevel}
                      isActive={isActive}
                      onClick={handleTOCItemClick}
                    >
                      {item.text}
                    </ListItem>
                  </LI>
                );
              })}
            </UL>
          </DesktopTOC>
        )}
      </ItemV>

      <ItemV flex={1}>
        <TextItem>
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, rehypeRaw, rehypeSanitize]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target='_blank' rel='noopener noreferrer'>
                  {props.children}
                </a>
              ),
              ...Object.fromEntries(
                ['h2', 'h3'].map((tag) => [
                  tag,
                  ({ node, ...props }) => {
                    const id = generateIdFromHeadingText(props.children);

                    return React.createElement(
                      tag,
                      {
                        id,
                        className: `${tag}-text`,
                      },
                      props.children
                    );
                  },
                ])
              ),
              p: ({ node, ...props }) => {
                // For now, let's hide all paragraphs in hidden sections
                // This is a simplified approach - we'll hide paragraphs that come after hidden headings
                const isHidden = false; // We'll implement this logic later if needed

                return React.createElement(
                  'p',
                  {
                    style: isHidden ? { display: 'none' } : {},
                  },
                  props.children
                );
              },
            }}
          >
            {resolveImageUrls(cleanMarkdown(rawMarkdown))}
          </Markdown>

          {/* Hidden section placeholders for TOC navigation */}
          {hiddenSections.map((section, index) => {
            const HeadingTag = section.level === 2 ? 'h2' : 'h3';
            return React.createElement(HeadingTag, {
              key: `hidden-${section.id}-${index}`,
              id: section.id,
              style: {
                height: '1px',
                margin: '0',
                padding: '0',
                visibility: 'hidden',
              },
            });
          })}
        </TextItem>
      </ItemV>
    </ItemH>
  );
};

export default ChainKnowledgeBaseIndexList;

const TextItem = styled.div`
  width: inherit;
  color: #000;
  &:not(:first-of-type) {
    margin: 12px 0 0 auto;
  }

  * {
    font-size: 1.25rem;
  }

  h1 {
    color: #000;
    font-family: N27;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.8px;
    margin: 64px 0 24px 0;
  }

  h2 {
    color: #000;
    font-family: N27;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.8px;
    margin: 64px 0 24px 0;
  }

  h3 {
    color: #000;
    font-family: N27;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.64px;
    margin: 0 0 16px 0;
  }

  h4 {
    color: #000;
    font-family: N27;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.64px;
    margin: 0 0 16px 0;
  }

  h5 {
    color: #000;
    font-family: N27;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.64px;
    margin: 0 0 16px 0;
  }

  /* Apply margin-top to all h tags except the first one */
  // h1:not(:first-child),
  // h2:not(:first-child),
  // h3:not(:first-child),
  // h4:not(:first-child),
  // h5:not(:first-child),
  // h6:not(:first-child) {
  //   margin-top: 24px;
  // }

  /* Ensure the first heading has no top margin */
  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
  }

  blockquote {
    border-left: 6px solid #d548ec;
    background: #fff;
    color: #000;
    border-radius: 12px;
    padding: 15px;
    box-sizing: border-box;
    margin: 10px 0;
  }

  ol li {
    list-style-type: decimal;
  }

  ul li {
    list-style-type: disc;
  }

  p {
    line-height: 170%;
  }

  p img,
  img {
    border-radius: 32px;
    margin: 16px 0;
  }
  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const ListItem = styled.a`
  display: block;
  color: ${({ isActive }) => (isActive ? '#cf59e2' : '#757d8d')};
  font-family: N27;
  font-size: ${({ level }) =>
    level === 1 ? '1.25em' : level === 2 ? '1.125em' : '1em'};
  margin-left: ${({ level, highestLevel }) =>
    level === highestLevel ? '0' : `${(level - highestLevel) * 15}px`};
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? '600' : '500')};
  line-height: 120%;
  letter-spacing: -0.4px;
  transition:
    color 0.2s ease,
    font-weight 0.2s ease;
  &:hover {
    color: #cf59e2;
  }
`;

const MobileTOCWrapper = styled.div`
  margin-top: 16px;
  padding: 20px;
  border-radius: 24px;
  background: #f8f8f8;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

const DesktopTOC = styled(ItemV)`
  align-self: flex-start;
  position: relative;
  min-width: 300px;
  width: 300px;

  justify-content: flex-start;

  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrollbar */

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cf59e2;
    border-radius: 1px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b84ac8;
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #cf59e2 transparent;

  /* Ensure scrollbar is contained within the TOC */
  box-sizing: border-box;
  width: calc(300px - 2px); /* Subtract scrollbar width */

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%; /* Ensure content doesn't overflow */
  }
  li {
    margin: 0 !important;
  }
`;

const ToggleIcon = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin-top: 12px;
  cursor: pointer;
  color: #757d8d;
  font-weight: bold;
`;
