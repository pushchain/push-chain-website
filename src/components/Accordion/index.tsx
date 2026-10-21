/* eslint-disable @docusaurus/no-html-links */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

// Internal Components
import { H3 } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { useSiteBaseUrl } from '../../hooks/useSiteBaseUrl';

// Internal Configs
import { device } from '@site/src/config/globals';

interface AccordionItem {
  title?: string;
  question?: string;
  content?: string;
  link?: string;
  renderAnswer?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  firstOpen?: boolean;
  fontWeight?: string;
  fontSize?: string;
  /**
   * 'pushCore' applies the Push Core landing spec (Figma node 49245:16793):
   * 32px item padding, a 12px gap before an open answer, a 1.5px #2d2d32
   * rule and a 32px toggle. Omit it and the accordion renders exactly as it
   * does on the other four pages that share this component.
   */
  variant?: 'default' | 'pushCore';
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  firstOpen,
  fontWeight,
  fontSize,
  variant = 'default',
}) => {
  const isPushCore = variant === 'pushCore';
  const [activeIndex, setActiveIndex] = useState<number | null>(
    firstOpen === false ? null : 0
  );
  const isMobile = useMediaQuery(device.mobileL);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const baseUrl = useSiteBaseUrl() || '';

  return (
    <div>
      {items.map((item, index) => (
        <AccordionSection key={index} $pushCore={isPushCore}>
          <AccordionParent
            onClick={() => toggleAccordion(index)}
            $pushCore={isPushCore}
            $open={activeIndex === index}
          >
            <H3
              color={'var(--ifm-color-white)'}
              fontSize={fontSize ? fontSize : isMobile ? '20px' : '1.5rem'}
              fontFamily={'DM Sans, sans-serif'}
              fontWeight={fontWeight || '600'}
              lineHeight={isPushCore ? '100%' : '140%'}
            >
              {item.title || item.question}
            </H3>
            <div>
              {activeIndex === index ? (
                <AiOutlineMinus
                  color={'var(--ifm-color-white)'}
                  size={isPushCore ? 32 : 22}
                />
              ) : (
                <AiOutlinePlus
                  color={'var(--ifm-color-white)'}
                  size={isPushCore ? 32 : 22}
                />
              )}
            </div>
          </AccordionParent>
          {activeIndex === index && item.content !== undefined && (
            <>
              <H3
                color={'var(--ifm-color-white)'}
                fontSize={isMobile ? '16px' : '19px'}
                fontFamily={'DM Sans, sans-serif'}
                fontWeight='400'
                padding='0 0 24px 0'
              >
                {item.content}

                {item.link && (
                  <a
                    color='var(--ifm-color-white)'
                    fontFamily={'DM Sans, sans-serif'}
                    fontSize='16px'
                    fontWeight='300'
                    letterSpacing='normal'
                    target='_blank'
                    href={item.link}
                  >
                    {' '}
                    - Link
                  </a>
                )}
              </H3>
            </>
          )}

          {activeIndex === index &&
            item.renderAnswer !== undefined &&
            item.renderAnswer(baseUrl)}
        </AccordionSection>
      ))}
    </div>
  );
};

const AccordionSection = styled.div`
  border-bottom: ${(props) =>
    props.$pushCore ? '1.5px solid #2d2d32' : '1px solid var(--ifm-color-gray-200)'};

  h3 {
    white-space: pre-wrap;
  }
`;

// In the pushCore spec an item is 32px-padded, but an open one tightens to a
// 12px gap before its answer (Figma: header at y=0, answer at y=44).
const AccordionParent = styled.div`
  padding: ${(props) => {
    if (!props.$pushCore) return '24px 0';
    return props.$open ? '32px 0 12px 0' : '32px 0';
  }};
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 24px;
`;

export default Accordion;
