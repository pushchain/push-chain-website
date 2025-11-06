import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { AnimatedEmoji, EmojiType } from '../AnimatedEmoji';
import { device } from '@site/src/config/globals';

// Animation keyframes
const rollInFromLeft = keyframes`
  0% {
    transform: translateX(-120vw) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(360deg);
    opacity: 1;
  }
`;

const rollInFromRight = keyframes`
  0% {
    transform: translateX(120vw) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(-360deg);
    opacity: 1;
  }
`;

const rollOutToLeft = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(-120vw) rotate(-360deg);
    opacity: 0;
  }
`;

const rollOutToRight = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(120vw) rotate(360deg);
    opacity: 0;
  }
`;

const stayVisible = keyframes`
  0%, 100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
`;

// Styled components
const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
`;

const FloatingEmojiWrapper = styled.div<{
  $top: number;
  $fromSide: 'left' | 'right';
  $animationState:
    | 'roll-in-left'
    | 'roll-in-right'
    | 'stay'
    | 'roll-out-left'
    | 'roll-out-right';
  $size: number;
}>`
  position: absolute;
  top: ${(props) => props.$top}dvh;
  pointer-events: none;

  /* Responsive horizontal positioning accounting for emoji width */
  /* Default: 10% from side (much further from center) */
  left: ${(props) => (props.$fromSide === 'left' ? '10%' : '90%')};
  transform: ${(props) =>
    props.$fromSide === 'left' ? 'translateX(0)' : 'translateX(-100%)'};

  /* DesktopL: 15% from side */
  @media ${device.desktopL} {
    left: ${(props) => (props.$fromSide === 'left' ? '15%' : '85%')};
    transform: ${(props) =>
      props.$fromSide === 'left' ? 'translateX(0)' : 'translateX(-100%)'};
  }

  /* Tablet: 8% from side */
  @media ${device.tablet} {
    left: ${(props) => (props.$fromSide === 'left' ? '8%' : '92%')};
    transform: ${(props) =>
      props.$fromSide === 'left' ? 'translateX(0)' : 'translateX(-100%)'};
  }

  /* MobileL: 3% from side */
  @media ${device.mobileL} {
    left: ${(props) => (props.$fromSide === 'left' ? '3%' : '97%')};
    transform: ${(props) =>
      props.$fromSide === 'left' ? 'translateX(0)' : 'translateX(-100%)'};
  }

  /* Size constraint - max 20vh */
  width: ${(props) => Math.min(props.$size, 20)}dvh;
  height: ${(props) => Math.min(props.$size, 20)}dvh;

  /* Animation based on state */
  ${(props) => {
    switch (props.$animationState) {
      case 'roll-in-left':
        return css`
          animation: ${rollInFromLeft} 2s ease-out forwards;
        `;
      case 'roll-in-right':
        return css`
          animation: ${rollInFromRight} 2s ease-out forwards;
        `;
      case 'stay':
        return css`
          animation: ${stayVisible} 3s ease-in-out forwards;
        `;
      case 'roll-out-left':
        return css`
          animation: ${rollOutToLeft} 2s ease-in forwards;
        `;
      case 'roll-out-right':
        return css`
          animation: ${rollOutToRight} 2s ease-in forwards;
        `;
      default:
        return css`
          animation: none;
        `;
    }
  }}

  /* Responsive scaling - laptopL and lower */
  /* LaptopL (1440px) and lower: 0.75x scale */
  @media (max-width: 1440px) {
    transform: ${(props) =>
      props.$fromSide === 'left'
        ? 'translateX(0) scale(0.75)'
        : 'translateX(-100%) scale(0.75)'};
  }

  /* Tablet (768px) and lower: 0.5x scale */
  @media ${device.tablet} {
    transform: ${(props) =>
      props.$fromSide === 'left'
        ? 'translateX(0) scale(0.5)'
        : 'translateX(-100%) scale(0.5)'};
  }

  /* MobileL (525px) and lower: 0.25x scale */
  @media ${device.mobileL} {
    transform: ${(props) =>
      props.$fromSide === 'left'
        ? 'translateX(0) scale(0.25)'
        : 'translateX(-100%) scale(0.25)'};
  }
`;

// Interface for floating emoji state
interface FloatingEmojiState {
  id: string;
  type: EmojiType;
  top: number;
  size: number;
  fromSide: 'left' | 'right';
  animationState:
    | 'roll-in-left'
    | 'roll-in-right'
    | 'stay'
    | 'roll-out-left'
    | 'roll-out-right';
}

// Props interface
interface FloatingEmojiProps {
  interval?: number; // Time between emoji appearances (ms)
  stayDuration?: number; // How long emoji stays visible (ms)
  minSize?: number; // Minimum emoji size (vh)
  maxSize?: number; // Maximum emoji size (vh, capped at 20vh)
  enabled?: boolean; // Whether to show floating emojis
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interval = 8000, // 8 seconds between emojis
  stayDuration = 3000, // 3 seconds stay duration
  minSize = 8, // 8vh minimum
  maxSize = 20, // 20vh maximum (will be capped at 20vh anyway)
  enabled = true,
}) => {
  const [activeEmojis, setActiveEmojis] = useState<FloatingEmojiState[]>([]);
  const [confettiSequenceComplete, setConfettiSequenceComplete] =
    useState(false);
  const [confettiLaunched, setConfettiLaunched] = useState(false);

  const emojiTypes: EmojiType[] = ['love', 'haha', 'yay', 'wow']; // Removed confetti from random selection

  // Generate confetti emoji for initial sequence
  const generateConfettiEmoji = useCallback(
    (fromSide: 'left' | 'right'): FloatingEmojiState => {
      const size = Math.random() * (Math.min(maxSize, 20) - minSize) + minSize;

      // Check if we're on laptopL or smaller (1440px and below)
      const isLaptopLOrSmaller = window.innerWidth <= 1440;

      // Position confetti: same as regular emojis on laptopL and smaller, otherwise bottom 70%
      const maxTop = 100 - size; // Ensure emoji doesn't go below viewport
      const minTop = isLaptopLOrSmaller ? 70 : 30; // Follow emoji rules on smaller screens
      const top = Math.random() * (maxTop - minTop) + minTop;

      return {
        id: `confetti-${fromSide}-${Date.now()}-${Math.random()}`,
        type: 'confetti',
        fromSide,
        top,
        size,
        animationState: fromSide === 'left' ? 'roll-in-left' : 'roll-in-right',
      };
    },
    [minSize, maxSize]
  );

  // Generate random emoji (non-confetti)
  const generateRandomEmoji = useCallback((): FloatingEmojiState => {
    const type = emojiTypes[Math.floor(Math.random() * emojiTypes.length)];
    const fromSide = Math.random() > 0.5 ? 'left' : 'right';
    const size = Math.random() * (Math.min(maxSize, 20) - minSize) + minSize;

    // Position regular emoji in bottom 30% (70vh to 100vh), ensure no cutoff
    const maxTop = 100 - size; // Ensure emoji doesn't go below viewport
    const minTop = 70;
    const top = Math.random() * (maxTop - minTop) + minTop;

    return {
      id: `emoji-${Date.now()}-${Math.random()}`,
      type,
      fromSide,
      top,
      size,
      animationState: fromSide === 'left' ? 'roll-in-left' : 'roll-in-right',
    };
  }, [minSize, maxSize]);

  // Update emoji animation state
  const updateEmojiState = useCallback(
    (id: string, newState: FloatingEmojiState['animationState']) => {
      setActiveEmojis((prev) =>
        prev.map((emoji) =>
          emoji.id === id ? { ...emoji, animationState: newState } : emoji
        )
      );
    },
    []
  );

  // Remove emoji
  const removeEmoji = useCallback((id: string) => {
    setActiveEmojis((prev) => prev.filter((emoji) => emoji.id !== id));
  }, []);

  // Add regular emoji (only after confetti sequence is complete)
  const addRegularEmoji = useCallback(() => {
    if (!enabled || !confettiSequenceComplete) return;

    const newEmoji = generateRandomEmoji();
    setActiveEmojis((prev) => [...prev, newEmoji]);

    // Schedule state transitions
    setTimeout(() => {
      updateEmojiState(newEmoji.id, 'stay');
    }, 2000); // After roll-in animation (2s)

    setTimeout(() => {
      // Exit from the same side as entry
      updateEmojiState(
        newEmoji.id,
        newEmoji.fromSide === 'left' ? 'roll-out-left' : 'roll-out-right'
      );
    }, 2000 + stayDuration); // After roll-in + stay duration

    setTimeout(
      () => {
        removeEmoji(newEmoji.id);
      },
      2000 + stayDuration + 2000
    ); // After complete cycle
  }, [
    enabled,
    confettiSequenceComplete,
    generateRandomEmoji,
    updateEmojiState,
    removeEmoji,
    stayDuration,
  ]);

  // Set up confetti sequence and regular emoji intervals
  useEffect(() => {
    if (!enabled) {
      setActiveEmojis([]);
      setConfettiSequenceComplete(false);
      setConfettiLaunched(false);
      return;
    }

    // Add single confetti from random side after 1 second
    const confettiTimeout = setTimeout(() => {
      if (confettiLaunched) return;

      // Randomly choose left or right
      const randomSide = Math.random() > 0.5 ? 'left' : 'right';
      const confetti = generateConfettiEmoji(randomSide);
      setActiveEmojis((prev) => [...prev, confetti]);
      setConfettiLaunched(true);

      // Schedule confetti animation state transitions
      setTimeout(() => {
        updateEmojiState(confetti.id, 'stay');
      }, 2000); // After roll-in animation (2s)

      setTimeout(() => {
        // Exit from the same side as entry
        updateEmojiState(
          confetti.id,
          confetti.fromSide === 'left' ? 'roll-out-left' : 'roll-out-right'
        );
      }, 2000 + stayDuration); // After roll-in + stay duration

      setTimeout(
        () => {
          removeEmoji(confetti.id);
        },
        2000 + stayDuration + 2000
      ); // After complete cycle
    }, 1000);

    // Mark confetti sequence as complete after confetti is launched and has time to finish
    const completeTimeout = setTimeout(() => {
      setConfettiSequenceComplete(true);
    }, 7000); // 7 seconds should be enough for single confetti to complete its cycle

    return () => {
      clearTimeout(confettiTimeout);
      clearTimeout(completeTimeout);
    };
  }, [enabled]);

  // Set up regular emoji interval (only after confetti sequence)
  useEffect(() => {
    if (!enabled || !confettiSequenceComplete) {
      return;
    }

    // Start regular emoji sequence after confetti is complete (random 6-12s delay)
    const firstDelay = Math.random() * (12000 - 6000) + 6000; // 6000-12000ms
    const firstRegularTimeout = setTimeout(() => {
      addRegularEmoji();

      // Set up recurring intervals with random timing (12-18s)
      const scheduleNext = () => {
        const nextDelay = Math.random() * (18000 - 12000) + 12000; // 12000-18000ms
        setTimeout(() => {
          addRegularEmoji();
          scheduleNext(); // Schedule the next one
        }, nextDelay);
      };

      scheduleNext();
    }, firstDelay);

    return () => {
      clearTimeout(firstRegularTimeout);
    };
  }, [enabled, confettiSequenceComplete, addRegularEmoji]);

  if (!enabled) return null;

  return (
    <FloatingContainer>
      {activeEmojis.map((emoji) => (
        <FloatingEmojiWrapper
          key={emoji.id}
          $top={emoji.top}
          $fromSide={emoji.fromSide}
          $animationState={emoji.animationState}
          $size={emoji.size}
        >
          <AnimatedEmoji
            type={emoji.type}
            size={Math.min(emoji.size * 10, 200)} // Convert vh to px (approximate)
            flip={emoji.type === 'confetti' && emoji.fromSide === 'right'}
          />
        </FloatingEmojiWrapper>
      ))}
    </FloatingContainer>
  );
};

export default FloatingEmoji;
