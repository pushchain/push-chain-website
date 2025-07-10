// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React and other libraries
import React, { useEffect, useState, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { toast, Toaster } from 'sonner';
import { BiX } from 'react-icons/bi';

// Internal Components
import { Button, Image } from '../../src/css/SharedStyling';

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

// Custom Hook
export const useChainNotification = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const showNotification = () => {
    const toastId = toast.custom(
      () => (
        <NotificationItem
          // title='Devnet Drop S2 is Live!'
          description='Get a sneak peek into Testnet, Donut, build universal apps and win prizes!'
          position='bottom-left'
          onClick={() => {
            localStorage.setItem('testnetNotificationShown', 'true');
            window.open('https://t.me/+dHOCilvxNR9jZjM9', '_blank');
            toast.dismiss(toastId);
          }}
          onClose={() => {
            localStorage.setItem('testnetNotificationShown', 'true');
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
        localStorage.getItem('testnetNotificationShown') === 'true';

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
const NotificationItem: FC<NotificationProps> = ({
  title,
  description,
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
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          handleNotificationClose();
        }}
      >
        <BiX size={20} color='#FFF' />
      </CloseButton>
      <TextContainer>
        <PushLogoBlackContainer>
          <Image
            src={
              require(
                `@site/static/assets/website/notifications/testnet-donut.webp`
              ).default
            }
            srcSet={`${require(`@site/static/assets/website/notifications/testnet-donut@2x.webp`).default} 2x, ${require(`@site/static/assets/website/notifications/testnet-donut@3x.webp`).default} 3x`}
            alt='Push Testnet'
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
          border='1.5px solid #fff'
          hoverBorder='1.5px solid #fff'
          fontFamily='N27'
          width='100%'
        >
          Claim Closed Beta Pass
        </Button>
      </TextContainer>
    </NotificationContainer>
  );
};

// Notification Container
const NotificationContainer = styled.div`
  position: relative;
  background-color: #1b43c8;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: auto;
  width: 320px;
  cursor: pointer;
  box-sizing: border-box;
  font-family: N27;
  overflow: hidden;

  @media (max-width: 425px) {
    width: -webkit-fill-available;
  }

  img {
    width: 230px;
    height: auto;
    margin: 0 auto;
  }
`;

const StyledToaster = styled(Toaster)`
  width: 397px;

  @media (max-width: 425px) {
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
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 39.6px */
  letter-spacing: -0.72px;
  width: 100%;
`;

const NotificationDescription = styled.span`
  color: #fff;
  text-align: center;
  font-family: N27;
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
  color: #fff;
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
