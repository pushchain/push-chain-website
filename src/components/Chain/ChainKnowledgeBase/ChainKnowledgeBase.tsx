// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';
import styled from 'styled-components';

// Internal Component
import { Content, Section } from '@site/src/css/SharedStyling';
import { ItemV } from '../../../css/SharedStyling';
import ChainBottomComponent from '../ChainBottomComponent';
import ChainKnowledgeBaseGrid from '../ChainKnowledgeBaseArticle/ChainKnowledgeBaseGrid';
import ChainKnowledgeBaseComponent from './ChainKnowledgeBaseComponent';

import { device } from '../../../config/globals';

const ChainKnowledgeBase = () => {
  return (
    <ChainWrapper>
      <Section>
        <Content className='skeletonsmall'>
          <ChainKnowledgeBaseComponent />
        </Content>
      </Section>

      <Section>
        <Content>
          <ChainKnowledgeBaseGrid title='Resources' />
        </Content>
      </Section>

      <Section>
        <Content>
          <ChainBottomComponent showFaq={true} />
        </Content>
      </Section>
    </ChainWrapper>
  );
};

export default ChainKnowledgeBase;

const ChainWrapper = styled(ItemV)`
  background: #000;
  font-family:
    DM Sans,
    sans-serif;
`;
