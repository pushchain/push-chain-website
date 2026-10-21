import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { TbArrowRight } from 'react-icons/tb';

import { device } from '@site/src/config/globals';
import AccountContext from '@site/src/context/accountContext';
import { Button, H2 } from '@site/src/css/SharedStyling';
import WhiteStarIcon from '@site/static/assets/website/illustrations/whiteStarIcon.svg';

type InfoBarProps = {
  translatedTextKey: string;
  url: string;
};

const InfoBar = ({ translatedTextKey, url }: InfoBarProps) => {
  const { setShowAlertBar, isHydrated, shouldShowAlertBar } =
    useContext(AccountContext);
  const { t } = useTranslation();

  // Prevent rendering during SSR and before hydration
  if (typeof window === 'undefined') return null;
  if (!isHydrated) return null;
  if (!shouldShowAlertBar) return null;

  const handleDismiss = () => {
    setShowAlertBar(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('showAlertBar', 'false');
    }
  };

  return (
    <BarContainer
      role='alert'
      aria-label={t('notifications.info-bar.container-aria-label')}
      aria-live='assertive'
    >
      <HeroButton
        onClick={() => {
          if (url) window.open(url, '_blank', 'noopener');
          setShowAlertBar(false);
          if (typeof window !== 'undefined') {
            localStorage.setItem('showAlertBar', 'false');
          }
        }}
        title={t('notifications.info-bar.learn-more-title')}
      >
        <WhiteStarIcon
          className='star-icon'
          aria-hidden='true'
          role='img'
          title={t('notifications.info-bar.star-icon-alt')}
        />
        <H2>{t(translatedTextKey)}</H2>
        <span>{t('notifications.info-bar.learn-more-text')}</span>
        <TbArrowRight
          size={24}
          className='arrow-icon'
          aria-hidden='true'
          role='img'
        />
      </HeroButton>
      <DismissBtn
        onClick={handleDismiss}
        title={t('notifications.info-bar.dismiss-button-title')}
        aria-label={t('notifications.info-bar.dismiss-button-aria-label')}
      >
        ✕
      </DismissBtn>
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
  padding: 16px;
  box-sizing: border-box;
  height: 56px;
  cursor: pointer;

  background: linear-gradient(
    90deg,
    #f898f0 0%,
    #e670ee 25%,
    var(--ifm-color-custom-pink) 50%,
    #e670ee 75%,
    #f898f0 100%
  );
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
    color: var(--ifm-color-white);
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 142%;
    margin-left: 12px;
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
    color: var(--ifm-color-white);
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
  color: var(--ifm-color-white);
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default InfoBar;
