// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { createGridRows } from '../utils/CreateGridRows';

import { H3, ItemV } from '../../../css/SharedStyling';
import ChannelKnowledgeBaseComponentItem from '../ChainKnowledgeBase/ChannelKnowledgeBaseComponentItem';
import { knowledgeBaseArticleContent } from '../config/ChainKnowledgeBaseConfig';

interface KnowledgeBaseItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface ChainKnowledgeBaseGridProps {
  items?: KnowledgeBaseItem[];
  title?: string | null;
  mode?: 'playlist' | 'grid';
}

const ChainKnowledgeBaseGrid: React.FC<ChainKnowledgeBaseGridProps> = ({
  items,
  title,
  mode = 'grid',
}) => {
  const isMobile = useMediaQuery(device.mobileL);

  const gridRows = createGridRows(items ?? knowledgeBaseArticleContent);

  return (
    <ChainKnowledgeBaseGridWrapper>
      {title && (
        <ChainKnowledgeBaseGridWrapperTitle mode={mode}>
          <H3
            fontSize='2.3rem'
            fontWeight='600'
            lineHeight={isMobile ? '100%' : '150%'}
            letterSpacing='-0.8px'
            textAlign={mode === 'playlist' ? 'left' : 'center'}
            alignSelf={mode === 'playlist' ? 'flex-start' : 'center'}
            color='#FFF'
          >
            {title}
          </H3>
        </ChainKnowledgeBaseGridWrapperTitle>
      )}

      <ChainKnowledgeGridWrapper>
        {mode === 'grid' &&
          gridRows?.map((row, rowIndex) => (
            <ChainKnowledgeGrid key={rowIndex} itemsInRow={row.length}>
              {row.map((item, index) => (
                <ChannelKnowledgeBaseComponentItem
                  item={item}
                  index={index}
                  mode='grid'
                />
              ))}
            </ChainKnowledgeGrid>
          ))}

        {mode === 'playlist' && (
          <ChainKnowledgePlaylist>
            {items?.map((row, rowIndex) => (
              <ChannelKnowledgeBaseComponentItem
                item={row}
                index={rowIndex}
                mode='playlist'
              />
            ))}
          </ChainKnowledgePlaylist>
        )}
      </ChainKnowledgeGridWrapper>
    </ChainKnowledgeBaseGridWrapper>
  );
};

export default ChainKnowledgeBaseGrid;

const ChainKnowledgeBaseGridWrapper = styled.div``;

const ChainKnowledgeGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0 0 0;
`;

const ChainKnowledgeBaseGridWrapperTitle = styled(ItemV)`
  align-items: ${({ mode }) =>
    mode === 'playlist' ? 'flex-start' : 'flex-start'};
  justify-content: ${({ mode }) =>
    mode === 'playlist' ? 'flex-start' : 'center'};

  @media ${device.tablet} {
    align-items: ${({ mode }) =>
      mode === 'playlist' ? 'flex-start' : 'center'};
  }
`;

const ChainKnowledgeGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ itemsInRow }) =>
    itemsInRow === 3 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
  gap: 24px;
  width: 100%;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr); /* Two items per row for tablets */
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr; /* One item per row for mobile */
  }
`;

const ChainKnowledgePlaylist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  justify-content: center;
`;
