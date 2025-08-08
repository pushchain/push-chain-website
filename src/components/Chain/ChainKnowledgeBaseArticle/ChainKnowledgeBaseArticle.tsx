// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import styled from 'styled-components';

import { Content, Section } from '../../../css/SharedStyling';
import ChainKnowledgeBaseArticleContent from './ChainKnowledgeBaseArticleContent';

const ChainKnowledgeBaseArticle = ({ item }) => {
  return (
    <ChainWrapper>
      <Content className='skeletonsmall'>
        <ChainKnowledgeBaseArticleContent item={item} />
      </Content>
    </ChainWrapper>
  );
};

export default ChainKnowledgeBaseArticle;

const ChainWrapper = styled(Section)`
  background: #000;
  font-family:
    DM Sans,
    sans-serif;
`;
