import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { TbArrowRight } from 'react-icons/tb';

import { Button, H2 } from '@site/src/css/SharedStyling';
import WhiteStarIcon from '@site/static/assets/website/illustrations/whiteStarIcon.svg';
import { device } from '@site/src/config/globals';
import AccountContext from '@site/src/context/accountContext';

type InfoBarProps = {
  text: string;
  url: string;
};

const InfoBar = ({ text, url }: InfoBarProps) => {
  const { showAlertBar, setShowAlertBar } = useContext(AccountContext);
  const [isHydrated, setIsHydrated] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('showAlertBar');
      setShouldShow(showAlertBar && stored !== 'false');
    } else {
      setShouldShow(showAlertBar);
    }
  }, [showAlertBar]);

  if (!isHydrated) return null;
  if (!shouldShow) return null;

  const handleDismiss = () => {
    setShowAlertBar(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('showAlertBar', 'false');
    }
  };

  return (
    <BarContainer>
      <HeroButton
        onClick={() => {
          if (url) window.open(url, '_blank');
          setShowAlertBar(false);
          if (typeof window !== 'undefined') {
            localStorage.setItem('showAlertBar', 'false');
          }
        }}
      >
        <WhiteStarIcon className='star-icon' />
        <H2>{text}</H2>
        <span>Learn More</span>
        <TbArrowRight size={24} className='arrow-icon' />
      </HeroButton>
      <DismissBtn onClick={handleDismiss}>✕</DismissBtn>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  z-index: 9999999;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  height: 58px;
  cursor: pointer;

  background: linear-gradient(90deg, #3524ed 0%, #d548ec 50%, #3524ed 100%);
  /* backdrop-filter: blur(calc(var(--blur-md, 24px) / 2)); */

  @media ${device.tablet} {
    padding: 0 8px;
  }

  @media ${device.mobileL} {
    justify-content: space-between;
  }
`;

const HeroButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: transparent;

  &:after {
    background: none;
  }

  &:hover:after {
    opacity: 1 !important;
  }

  &:hover span {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    transition: all 0.2s ease-in-out;
  }

  @media ${device.mobileL} {
    width: 80%;
    gap: 4px;
  }

  span,
  .star-icon {
    @media ${device.mobileL} {
      display: none;
    }
  }

  .arrow-icon {
    @media ${device.mobileL} {
      min-width: 24px;
      min-height: 24px;
      flex-shrink: 0;
    }
  }

  span {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 142%;
    margin-left: 24px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  @media ${device.tablet} {
    padding: 0px 0px;

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    span,
    .star-icon {
      display: none;
    }
  }

  h2 {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 142%;

    @media ${device.mobileL} {
      font-size: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  @media ${device.mobileL} {
    padding: 0;
    margin-left: 0;
  }
`;

const DismissBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  height: 48px;
`;

export default InfoBar;
