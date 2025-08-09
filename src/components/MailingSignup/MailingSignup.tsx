/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import { useTranslation } from 'react-i18next';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';
import styled from 'styled-components';

// Internal Components
import { Span } from '@site/src/css/SharedStyling';

import useEmailValidationAndSend from '@site/src/hooks/useEmailValidationAndSend';

// Internal Configs
import { device } from '@site/src/config/globals';

export type signupType = {
  showButton?: boolean;
  showArrow?: boolean;
  background?: string;
  borderColor?: string;
  inputWidth?: string;
  textColor?: string;
};

/**
 * MailingSignup component provides a user interface for subscribing to a mailing list.
 * It includes an input field for the email address and optional buttons for submission.
 * The component supports loading states and displays responses or errors based on the email validation process.
 *
 * @param {signupType} props - The properties object.
 * @param {boolean} [props.showButton] - Determines if the submit button should be displayed.
 * @param {boolean} [props.showArrow] - Determines if the arrow icon button should be displayed.
 * @param {string} [props.background] - Background color for the input field and wrapper.
 * @param {string} [props.borderColor] - Border color for the wrapper.
 * @param {string} [props.inputWidth] - Width of the input field.
 * @param {string} [props.textColor] - Text color for the input field.
 */
export const MailingSignup = (props: signupType) => {
  const [isLoading, apiResponse, emailError, onEmailSubmit] =
    useEmailValidationAndSend();

  // Internationalization
  const { t } = useTranslation();

  return (
    <Box>
      <Wrapper
        background={props.background}
        border={props.borderColor}
        onSubmit={onEmailSubmit}
        role='form'
        aria-label={t('components.mailing-signup.form-aria-label')}
      >
        <SignupInputField
          type='email'
          name='email'
          placeholder={t('components.mailing-signup.email-input-placeholder')}
          title={t('components.mailing-signup.email-input-title')}
          aria-label={t('components.mailing-signup.email-input-aria-label')}
          background={props.background}
          inputWidth={props.inputWidth}
          textColor={props.textColor}
          tabIndex={0}
          required
          autoComplete='email'
          autoCapitalize='none'
          autoCorrect='off'
          spellCheck='false'
        />
        {props.showButton && (
          <>
            <Button
              tabIndex={0}
              type='submit'
              title={t('components.mailing-signup.submit-button-title')}
              aria-label={t(
                'components.mailing-signup.submit-button-aria-label'
              )}
              disabled={isLoading}
            >
              {isLoading
                ? t('components.mailing-signup.loading-submit-button')
                : t('components.mailing-signup.submit-button')}
            </Button>
            {isLoading ? <MaskInput /> : null}
          </>
        )}
        {props.showArrow && (
          <>
            <IconButton
              aria-label={t(
                'components.mailing-signup.arrow-button-aria-label'
              )}
              title={t('components.mailing-signup.arrow-button-title')}
              className='icon'
              tabIndex={0}
              type='submit'
              disabled={isLoading}
            >
              {!isLoading && <AiOutlineArrowRight />}
              {/* {isLoading && <MaskInput />} */}
              {isLoading && <BiLoaderAlt size={24} className='loader' />}
            </IconButton>
          </>
        )}
      </Wrapper>

      {apiResponse && (
        <ResponseSpan
          className='msg'
          color='green'
          role='status'
          aria-label={t('components.mailing-signup.success-message-aria-label')}
          aria-live='polite'
        >
          {apiResponse}
        </ResponseSpan>
      )}
      {!apiResponse && emailError && (
        <ResponseSpan
          className='msg'
          color='#D98AEC'
          role='alert'
          aria-label={t('components.mailing-signup.error-message-aria-label')}
          aria-live='assertive'
        >
          {emailError}
        </ResponseSpan>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;

  // & ${Span} {
  //   font-size: 20px;
  //   margin: 10px 0px 0px 15px;
  //   font-weight: 300;

  //   &.msg {
  //     line-height: 138.5%;
  //     margin-top: 12px;
  //     letter-spacing: -0.03em;
  //   }
  }

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
  column-gap: 6px;
  align-items: center;
  background: ${(props) => props.background || '#ffffff'};
  border-bottom: 1px solid ${(props) => props.border || '#ffffff'};
  padding: 5px 0px;
  justify-content: space-between;

  @media ${device.tablet} {
    column-gap: 3px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  min-width: 160px;
  color: #ffffff;
  background: #dd44b9;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 32px;
  white-space: nowrap;
  border: 0;

  @media ${device.tablet} {
    min-width: auto;
    font-size: 12px;
    padding: 14px 16px;
  }
`;

const SignupInputField = styled.input`
  all: unset;

  box-sizing: border-box;
  font-family:
    DM Sans,
    san-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: normal;
  letter-spacing: -0.03em;
  color: ${(props) => props.textColor || '#a5abb8'};
  background: ${(props) => props.background || '#ffffff'};
  // min-width: 220px;
  width: ${(props) => props.inputWidth || '100%'};
  // padding: 0px;
  // padding-left: 8px;

  @media ${device.laptop} {
    min-width: auto;
  }

  &:placeholder {
    color: #a5abb8;
    opacity: 1;
  }
`;

const MaskInput = styled.div`
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 21px;
  opacity: 0.4;
  z-index: 10;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  & svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: #dd44b9;
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
  }
`;

const ResponseSpan = styled(Span)`
  margin: 0;
  padding: 0;
  font-family:
    DM Sans,
    san-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-top: 12px;
`;
