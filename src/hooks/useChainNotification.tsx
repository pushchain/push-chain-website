// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React and other libraries
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiX } from 'react-icons/bi';
import { toast, Toaster } from 'sonner';
import styled from 'styled-components';

// Internal Components
import { Button, Image } from '../../src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

type NotificationProps = {
  image?: ReactNode;
  /* Title of the notification */
  title?: string;
  /* Description of the notification */
  description?: string;
  /* Optional onClose action for the notification */
  onClose?: () => void;
  /* Custom React component to be passed as the image. */
  overlay?: ReactNode;
  /* Optional onClick event for the notification */
  onClick?: () => void;
  /* Position of the notification */
  position?: 'bottom-right' | 'bottom-left' | 'top-center';
  /* Optional duration of the notification component */
  duration?: number;
  /* Translation function */
  t?: (key: string) => string;
};

// Custom Hook
export const useChainNotification = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const { t } = useTranslation();

  const showNotification = () => {
    const toastId = toast.custom(
      () => (
        <NotificationItem
          title={t('notifications.chain-notification.title')}
          description={t('notifications.chain-notification.description')}
          position='bottom-left'
          onClick={() => {
            localStorage.setItem('testnetNotificationShown', 'true');
            window.open(
              'https://dorahacks.io/hackathon/pushchain-gud?utm_source=website&utm_medium=referral&utm_campaign=project_gud',
              '_blank'
            );
            toast.dismiss(toastId);
          }}
          onClose={() => {
            localStorage.setItem('testnetNotificationShown', 'true');
            toast.dismiss(toastId);
          }}
          t={t}
        />
      ),
      {
        duration: Infinity,
        position: 'bottom-left',
      }
    );
  };

  // useEffect(() => {
  //   // Ensure this code only runs in the browser
  //   if (typeof window !== 'undefined') {
  //     const notificationAlreadyShown =
  //       localStorage.getItem('testnetNotificationShown') === 'true';

  //     if (!notificationAlreadyShown && !hasMounted) {
  //       showNotification();
  //       setHasMounted(true);
  //     } else {
  //       toast.dismiss();
  //       setHasMounted(false);
  //     }
  //   }
  // }, []);
};

export const Notification = () => {
  return <StyledToaster offset={0} visibleToasts={5} />;
};

// Notification Item Component
const NotificationItem: FC<NotificationProps> = ({
  title,
  description,
  onClick,
  onClose,
  t,
}) => {
  const handleNotificationClick = () => onClick?.();
  const handleNotificationClose = () => {
    onClose?.();
    toast.dismiss();
  };

  return (
    <NotificationContainer
      onClick={handleNotificationClick}
      role='alert'
      aria-label={t?.('notifications.chain-notification.container-aria-label')}
      aria-describedby='chain-notification-content'
      aria-live='assertive'
    >
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          handleNotificationClose();
        }}
        title={t?.('notifications.chain-notification.close-button-title')}
        aria-label={t?.(
          'notifications.chain-notification.close-button-aria-label'
        )}
      >
        <BiX size={20} color='var(--ifm-color-white)' />
      </CloseButton>
      <TextContainer id='chain-notification-content'>
        <PushLogoBlackContainer>
          <Image
            src={
              require(
                `@site/static/assets/website/notifications/testnet-donut-img.png`
              ).default
            }
            srcSet={`${require(`@site/static/assets/website/notifications/testnet-donut@2x.webp`).default} 2x, ${require(`@site/static/assets/website/notifications/testnet-donut@3x.webp`).default} 3x`}
            alt={t?.('notifications.chain-notification.image-alt')}
            loading='lazy'
          />
        </PushLogoBlackContainer>
        {title && <NotificationTitle>{title}</NotificationTitle>}
        {description && (
          <NotificationDescription>{description}</NotificationDescription>
        )}
        <Button
          background='transparent'
          margin='0 auto'
          border='1.5px solid var(--ifm-color-white)'
          hoverBorder='1.5px solid var(--ifm-color-white)'
          fontFamily='DM Sans'
          width='100%'
          title={t?.('notifications.chain-notification.button-title')}
          aria-label={t?.('notifications.chain-notification.button-aria-label')}
        >
          {t?.('notifications.chain-notification.button-text')}
        </Button>
      </TextContainer>
    </NotificationContainer>
  );
};

// Notification Container
const NotificationContainer = styled.div`
  position: relative;
  background-color: var(--ifm-color-blue);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: auto;
  width: 320px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: DM Sans !important;

  overflow: hidden;

  @media ${device.tablet} {
    display: none;
  }

  img {
    width: 209px;
    height: 132px;
    margin: 0 auto;
  }
`;

const StyledToaster = styled(Toaster)`
  width: 397px;

  @media ${device.mobileL} {
    width: -webkit-fill-available;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  flex: 1;
  box-sizing: border-box;
  gap: 16px;
`;

const NotificationTitle = styled.span`
  color: var(--ifm-color-white);
  text-align: center;
  font-family: DM Sans !important;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.72px;
  width: 100%;
`;

const NotificationDescription = styled.span`
  color: var(--ifm-color-white);
  text-align: center;
  font-family: DM Sans !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
  overflow: hidden;
`;

const CloseButton = styled.div`
  background-color: transparent;
  cursor: pointer;
  color: var(--ifm-color-white);
  padding: 0px;
  position: absolute;
  right: 8px;
  top: 8px;
`;

const PushLogoBlackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
