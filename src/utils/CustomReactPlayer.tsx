/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { isSafari } from './isSafari';

type CustomReactPlayerProps = {
  url: string;
  playing?: boolean;
  width?: string;
  height?: string;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  playContinuously?: boolean; // New prop to control continuous play
};

const CustomReactPlayer: React.FC<CustomReactPlayerProps> = ({
  url,
  width = '100%',
  height = '100%',
  loop = true,
  muted = true,
  className,
  playContinuously = false,
}) => {
  const videoUrl = useMemo(() => {
    if (isSafari() && url.endsWith('.webm')) {
      try {
        const mp4Url = url.replace('.webm', '.mp4');
        require(mp4Url);
        return mp4Url;
      } catch {
        return url;
      }
    }
    return url;
  }, [url]);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleMouseEnter = () => {
    if (!playContinuously) setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    if (!playContinuously) {
      setIsPlaying(false);
      playerRef.current?.seekTo(0);
    }
  };

  return (
    <VideoWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playContinuously || isPlaying}
        loop={loop}
        muted={muted}
        width={width}
        height={height}
        className={className}
        config={{
          file: {
            attributes: {
              controlsList: 'nofullscreen',
            },
          },
        }}
      />
    </VideoWrapper>
  );
};

export default CustomReactPlayer;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;
