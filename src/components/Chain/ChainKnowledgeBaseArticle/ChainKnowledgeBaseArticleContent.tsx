/* eslint-disable @docusaurus/no-html-links, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Link from '@docusaurus/Link';
import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/globals';
import { H1, ItemV, LI, UL } from '../../../css/SharedStyling';
import useMediaQuery from '../../../hooks/useMediaQuery';

import ChainKnowledgeBaseGrid from './ChainKnowledgeBaseGrid';
import ChainKnowledgeBaseIndexList from './ChainKnowledgeBaseIndexList';

const ChainKnowledgeBaseArticleContent = ({ item }) => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  if (!item || !item.content) {
    return <p>Loading...</p>; // or some fallback UI
  }

  return (
    <ChainKnowledgeBaseArticleWrapper>
      <ItemV alignItems='flex-start' gap='0px'>
        <BreadcrumbList>
          <LI>
            <BreadcrumbLink to='/'>Home</BreadcrumbLink>
          </LI>
          <LI>
            <span>{'>'}</span>
          </LI>
          <LI>
            <BreadcrumbLink to='/knowledge'>Knowledge Base</BreadcrumbLink>
          </LI>
        </BreadcrumbList>

        <H1
          fontSize='3.375rem'
          fontWeight='500'
          fontFamily='N27'
          lineHeight='120%'
          letterSpacing='-1.04px'
          color='#000'
        >
          {item?.title}
        </H1>
      </ItemV>

      {item.content?.map((block, blockIndex) => {
        if (block.type === 'indexlist') {
          return (
            <ChainKnowledgeBaseArticleContentWrapper
              topGap={block?.topGap}
              bottomGap={block?.bottomGap}
            >
              <ChainKnowledgeBaseIndexList
                key={blockIndex}
                block={block}
                blockIndex={blockIndex}
              />
            </ChainKnowledgeBaseArticleContentWrapper>
          );
        }

        if (block.type === 'list') {
          return (
            <ChainKnowledgeBaseArticleContentWrapper
              topGap={block?.topGap}
              bottomGap={block?.bottomGap}
            >
              <ChainKnowledgeBaseGrid
                items={block?.items}
                title={block?.title}
                mode={block?.mode}
              />
            </ChainKnowledgeBaseArticleContentWrapper>
          );
        }

        return null;
      })}
    </ChainKnowledgeBaseArticleWrapper>
  );
};

export default ChainKnowledgeBaseArticleContent;

const ChainKnowledgeBaseArticleWrapper = styled.div`
  margin: 213px auto 0 auto;
  width: 100%;
  position: relative;
  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;

const BreadcrumbList = styled(UL)`
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  color: #000;
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 400;
  font-family: 'N27', sans-serif;
  line-height: 140%;
  color: #000;
  @media ${device.tablet} {
    font-size: 1em;
  }
  &:hover {
    color: #cf59e2;
  }
`;

const ChainKnowledgeBaseArticleContentWrapper = styled.div`
  margin: auto;

  margin-top: ${({ topGap }) => (topGap ? '72px' : '0')};
  margin-bottom: ${({ bottomGap }) => (bottomGap ? '120px' : '0')};

  @media ${device.mobileL} {
    margin-top: ${({ topGap }) => (topGap ? '64px' : '0')};
    margin-bottom: ${({ bottomGap }) => (bottomGap ? '120px' : '0')};
  }
`;
