import Details from '@theme/Details';
import React from 'react';
import styled from 'styled-components';

interface PushAPIReferenceProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  showRequiredNotice?: boolean;
}

/**
 * PushAPIReference component for rendering API documentation with consistent styling
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */
export default function PushAPIReference({
  children,
  showRequiredNotice = true,
  className = '',
}: PushAPIReferenceProps) {
  return (
    <ReferenceContainer className={className}>
      {showRequiredNotice && (
        <RequiredNotice hasNotice={showRequiredNotice}>
          <p>
            These{' '}
            <em>
              <code>Arguments</code>
            </em>{' '}
            are mandatory
          </p>
        </RequiredNotice>
      )}
      {children}
    </ReferenceContainer>
  );
}

const ReferenceContainer = styled.div``;

const RequiredNotice = styled.div<{ hasNotice?: boolean }>`
  ${(props) => props.hasNotice && 'border: 1px solid var(--ifm-border-color);'}
  border-radius: var(--ifm-global-radius);
  border: 1px solid var(--ifm-border-color);
  border-radius: var(--ifm-global-radius);
  margin-bottom: -8px;
  padding: 12px 12px 20px 12px;
  text-align: end;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0px;
`;
