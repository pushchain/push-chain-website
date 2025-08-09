/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React and other libraries
import React, { useEffect, useState, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { toast, Toaster } from 'sonner';
import { useLocation } from 'react-router-dom';

// Internal Components
import { Image } from '../../src/css/SharedStyling';
import CrossSVG from '../../static/assets/website/illustrations/Cross.svg';
import { useSiteBaseUrl } from './useSiteBaseUrl';

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
};

// Notification Container
const NotificationContainer = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 111px;
  width: 397px;
  cursor: pointer;
  box-sizing: border-box;
  font-family:
    DM Sans,
    san-serif;
  overflow: hidden;

  @media (max-width: 425px) {
    width: -webkit-fill-available;
  }
`;

const StyledToaster = styled(Toaster)`
  width: 397px;
  margin-right: 50px;

  @media (max-width: 425px) {
    width: -webkit-fill-available;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  flex: 1;
  box-sizing: border-box;
`;

const NotificationTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  color: #17181b;
`;

const NotificationDescription = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #8c93a0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const IconContainer = styled.div``;

const CloseButton = styled.div`
  background-color: transparent;
  cursor: pointer;
  color: #202124;
  padding: 0px;
  position: absolute;
  right: 8px;
  top: 8px;
`;

// Custom Hook
export const useRewardsNotification = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const location = useLocation();
  const baseURL = useSiteBaseUrl();
  const pathname = baseURL + '/';

  const isHomePage = location?.pathname === pathname;

  const showNotification = () => {
    const toastId = toast.custom(
      () => (
        <NotificationItem
          title='Donut Testnet Closed beta is Live!'
          description='Get a sneak peek into Testnet, Donut, build universal apps and win prizes!'
          image={
            <Image
              src={
                require(
                  `@site/static/assets/website/notifications/testnet-notif.webp`
                ).default
              }
              srcSet={`${require(`@site/static/assets/website/notifications/testnet-notif@2x.webp`).default} 2x, ${require(`@site/static/assets/website/notifications/testnet-notif@3x.webp`).default} 3x`}
              alt='Push Testnet'
              loading='lazy'
            />
          }
          position='bottom-left'
          onClick={() => {
            localStorage.setItem('notificationShown', 'true');
            window.open('https://t.me/+dHOCilvxNR9jZjM9', '_blank');
            toast.dismiss(toastId);
          }}
          onClose={() => {
            localStorage.setItem('notificationShown', 'true');
            toast.dismiss(toastId);
          }}
        />
      ),
      {
        duration: Infinity,
        position: 'bottom-right',
      }
    );
  };

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      const notificationAlreadyShown =
        localStorage.getItem('notificationShown') === 'true';

      if (!notificationAlreadyShown && isHomePage && !hasMounted) {
        showNotification();
        setHasMounted(true);
      } else {
        toast.dismiss();
        setHasMounted(false);
      }
    }
  }, [isHomePage]);
};

export const Notification = () => {
  return <StyledToaster offset={0} visibleToasts={5} />;
};

// Notification Item Component
const NotificationItem: FC<NotificationProps> = ({
  title,
  description,
  image,
  onClick,
  onClose,
}) => {
  const handleNotificationClick = () => onClick?.();
  const handleNotificationClose = () => {
    onClose?.();
    toast.dismiss();
  };

  return (
    <NotificationContainer onClick={handleNotificationClick}>
      {image && <IconContainer>{image}</IconContainer>}
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          handleNotificationClose();
        }}
      >
        <CrossSVG width={16} height={16} />
      </CloseButton>
      <TextContainer>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationDescription>{description}</NotificationDescription>
      </TextContainer>
    </NotificationContainer>
  );
};
