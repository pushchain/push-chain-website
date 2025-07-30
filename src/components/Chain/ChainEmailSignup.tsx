/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import { BiLoaderAlt } from 'react-icons/bi';
import styled from 'styled-components';

// Internal Configs
import { device } from '@site/src/config/globals';
import useEmailValidationAndSend from '@site/src/hooks/useEmailValidationAndSend';

// Internal Components
import { Span } from '@site/src/css/SharedStyling';

export type signupType = {
  showButton?: boolean;
  showArrow?: boolean;
  background?: string;
  borderColor?: string;
  inputWidth?: string;
  textColor?: string;
  buttonBg?: string;
  buttonBorder?: string;
  arrowColor?: string;
  loaderColor?: string;
  fontFamily?: string;
  blendMode?: string;
  boxShadow?: string;
  backdrop?: string;
};

const ArrowSvg = () => {
  return (
    <svg
      width='72'
      height='73'
      viewBox='0 0 72 73'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19.1516 36.7957H52.8484'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M39.1602 23.1074L52.8495 36.7968L39.1602 50.4861'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export const ChainEmailSignup = (props: signupType) => {
  const [isLoading, apiResponse, emailError, onEmailSubmit] =
    useEmailValidationAndSend(true);

  return (
    <Box>
      <Wrapper onSubmit={onEmailSubmit}>
        <SignupInputField
          type='text'
          name='email'
          placeholder='satoshi@bitcoin.com'
          background={props.background}
          inputWidth={props.inputWidth}
          textColor={props.textColor}
          border={props.borderColor}
          blendMode={props.blendMode}
          boxShadow={props.boxShadow}
          backdrop={props.backdrop}
          fontFamily={props.fontFamily}
          tabIndex={0}
          required
        />
        {props.showButton && (
          <>
            <Button
              tabIndex={0}
              type='submit'
              buttonBg={props.buttonBg}
              buttonBorder={props.buttonBorder}
              arrowColor={props.arrowColor}
              loaderColor={props.loaderColor}
            >
              {!isLoading && <ArrowSvg className='arrow' />}
              {isLoading && <BiLoaderAlt size={32} className='loader' />}
            </Button>
            {isLoading ? <MaskInput /> : null}
          </>
        )}
      </Wrapper>

      {apiResponse && (
        <ResponseSpan
          className='msg'
          color='#fff'
          fontFamily={props.fontFamily}
        >
          {apiResponse}
        </ResponseSpan>
      )}
      {!apiResponse && emailError && (
        <ResponseSpan className='msg' color='red' fontFamily={props.fontFamily}>
          {emailError}
        </ResponseSpan>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${device.tablet} {
    & .msg {
      font-size: 18px;
      margin: 10px auto 0px auto;
    }
  }
`;

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex: 1;
  gap: 12px;
  align-items: center;
  padding: 5px 0px;
  justify-content: space-between;
  background: transparent !important;

  @media ${device.tablet} {
    gap: 12px;
  }
`;

const Button = styled.button<{
  buttonBg?: string;
  buttonBorder?: string;
  arrowColor?: string;
  loaderColor?: string;
}>`
  cursor: pointer;
  background: ${(props) => props.buttonBg || '#000'};
  border: ${(props) => props.buttonBorder || '0'};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
  white-space: nowrap;

  @media ${device.tablet} {
    min-width: auto;
    font-size: 12px;
  }

  @media ${device.mobileL} {
    height: 72px;
    width: 72px;
  }

  .arrow {
    height: 100%;
    width: 100%;
    color: ${(props) => props.arrowColor || '#e492ff'};
  }

  .loader {
    height: 1.5rem;
    width: 1.5rem;
    color: ${(props) => props.arrowColor || '#e492ff'};
  }

  @keyframes loadingAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  & .loader {
    animation-name: loadingAnimation;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    color: ${(props) => props.loaderColor || '#FFF'};
  }
`;

/* Gradient border setup */
// border: 1px solid transparent;
// border-image: ${(props) =>
//   props.border
//     ? `linear-gradient(to bottom, rgba(255, 255, 255, 0.25), ${props.border})`
//     : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(112, 90, 208, 0.4))'};
// border-image-slice: 1;

const SignupInputField = styled.input`
  all: unset;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#a3a7ac'};
  font-family: ${(props) => props.fontFamily || 'DM Sans'};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.48px;
  background: ${(props) => props.background || '#ffffff'};
  width: ${(props) => props.inputWidth || '100%'};
  border: 1px solid ${(props) => props.border || 'transparent'};
  padding: 24px;
  flex: 1;
  border-radius: 16px;
  max-height: 72px;
  min-height: 72px;

  background-blend-mode: ${(props) => props.blendMode || 'normal'};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  backdrop-filter: ${(props) => props.backdrop || 'none'};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: ${(props) => props.boxShadow || 'none'} !important;
    -webkit-text-fill-color: ${(props) =>
      props.textColor || '#a3a7ac'} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media ${device.laptop} {
    min-width: auto;
  }

  @media ${device.mobileL} {
    font-size: 16px;
    padding: 16px 24px;
  }

  &::placeholder {
    color: ${(props) => props.textColor || '#a3a7ac'};
    opacity: 1;
  }
`;

const MaskInput = styled.div`
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 21px;
  opacity: 0.4;
  z-index: 10;
`;

const ResponseSpan = styled(Span)<{ fontFamily?: string }>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.fontFamily || 'DM Sans'};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-top: 12px;
`;
