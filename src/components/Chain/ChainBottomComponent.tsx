// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled from 'styled-components';

import ShortFAQs from '@site/src/components/ShortFAQs/ShortFAQs';

type ChainBottomComponentProps = {
  showFaq?: boolean;
};

const ChainBottomComponent: FC<ChainBottomComponentProps> = ({ showFaq }) => {
  return (
    <ChainBottomComponentWrapper showFaq={showFaq} id='faq'>
      {/* faq section */}
      {showFaq && <ShortFAQs />}
    </ChainBottomComponentWrapper>
  );
};

export default ChainBottomComponent;

const ChainBottomComponentWrapper = styled.div``;
