// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React and other libraries
import { FC, ReactNode, useEffect, useState } from 'react';
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

// Custom Hook
export const useChainNotification = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const showNotification = () => {
    const toastId = toast.custom(
      () => (
        <NotificationItem
          position='bottom-left'
          onClick={() => {
            localStorage.setItem('pushHackenNotification', 'true');
            window.open('/knowledge/audit', '_blank');
            toast.dismiss(toastId);
          }}
          onClose={() => {
            localStorage.setItem('pushHackenNotification', 'true');
            toast.dismiss(toastId);
          }}
        />
      ),
      {
        duration: Infinity,
        position: 'bottom-left',
      }
    );
  };

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      const notificationAlreadyShown =
        localStorage.getItem('pushHackenNotification') === 'true';

      if (!notificationAlreadyShown && !hasMounted) {
        showNotification();
        setHasMounted(true);
      } else {
        toast.dismiss();
        setHasMounted(false);
      }
    }
  }, []);
};

export const Notification = () => {
  return <StyledToaster offset={0} visibleToasts={5} />;
};

// Notification Item Component
const NotificationItem: FC<NotificationProps> = ({ onClick, onClose }) => {
  const { t } = useTranslation();
  const title = t('notifications.chain-notification.title');
  const description = t('notifications.chain-notification.description');

  const handleNotificationClick = () => onClick?.();
  const handleNotificationClose = () => {
    onClose?.();
    toast.dismiss();
  };

  return (
    <NotificationContainer
      onClick={handleNotificationClick}
      role='alert'
      aria-label={t('notifications.chain-notification.container-aria-label')}
      aria-describedby='chain-notification-content'
      aria-live='assertive'
    >
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          handleNotificationClose();
        }}
        title={t('notifications.chain-notification.close-button-title')}
        aria-label={t(
          'notifications.chain-notification.close-button-aria-label'
        )}
      >
        <BiX size={20} color='var(--ifm-color-white)' />
      </CloseButton>
      <TextContainer id='chain-notification-content'>
        <PushLogoBlackContainer>
          <Image
            className='img'
            src={
              require(
                `@site/static/assets/website/notifications/push-hacken.webp`
              ).default
            }
            alt={t('notifications.chain-notification.image-alt')}
            loading='lazy'
            // height={300}
            // width={'auto'}
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
          padding={`16px 16px`}
          title={t('notifications.chain-notification.button-title')}
          aria-label={t('notifications.chain-notification.button-aria-label')}
        >
          {t('notifications.chain-notification.button-text')}
        </Button>
      </TextContainer>
    </NotificationContainer>
  );
};

// Notification Container
const NotificationContainer = styled.div`
  position: relative;
  background: linear-gradient(180deg, #ed45f3 0%, #00989c 100%);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  // min-height: 300px;
  height: 100%;
  width: 275px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: DM Sans !important;

  overflow: hidden;

  @media ${device.tablet} {
    display: none;
  }

  .img {
    width: 100%;
    height: 130px;
    margin: 0 auto;
  }
`;

const StyledToaster = styled(Toaster)`
  width: 397px;

  @media ${device.mobileL} {
    width: -webkit-fill-available;
  }

  &[data-sonner-toaster] {
    transition: none !important;
    transform: none !important;
  }

  [data-sonner-toast][data-mounted='true'][data-expanded='true'] {
    --y: translateY(0) !important;
    height: var(--initial-height) !important;
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
  margin: 0px auto;
`;
