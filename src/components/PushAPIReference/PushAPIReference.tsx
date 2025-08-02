import React from 'react';
import styled from 'styled-components';

interface PushAPIReferenceProps {
  children: React.ReactNode;
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
            These<code>Arguments</code>
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
  border-radius: var(--ifm-global-radius);
  margin-bottom: -8px;
  padding: 12px 12px 20px 12px;
  text-align: end;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0px;
  color: var(--ifm-navbar-dropdown-subtext);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 188.571%;

  code {
    background: transparent;
    padding: 2px 9px;
    display: inline-block !important;
    border-radius: 12px;
    border: 1px solid var(--ifm-sidebar-activetext-color);
    color: var(--ifm-color-primary-text);
    font-family: 'Fira Code';
    font-weight: 600;
    line-height: 165%;
    margin: 0px 4px;
  }
`;
