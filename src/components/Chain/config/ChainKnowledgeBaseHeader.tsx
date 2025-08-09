/* eslint-disable no-irregular-whitespace */
import React from 'react';

// Knowledge Base Header Configuration:
// This edits the Header, description oon /chain/knowledge
// FOr the header image, if you want to use an image, use the image field.
// If you want to use a youtube link or video, attach the embed link url in the video field

export const ChainKnowledgeBaseHeader = {
  title: 'Knowledge Base',
  description: () => (
    <div>
      <div style={{ color: '#BBBCD0' }}>
        Push Chain is a true universal blockchain designed to{' '}
        <b>eliminate fragmentation across all chains</b>.
      </div>
      <div style={{ color: '#CCC' }}>
        <p /> <p />
        <b>Developers</b> deploy once and instantly become compatible with all
        supported EVM and non-EVM chains.
        <p />
        <b>Users</b> use the same app no matter the chain they come from.
      </div>
    </div>
  ),
  // video: {
  //   src: 'https://www.youtube.com/embed/lhiwW3SfoZE',
  //   title: 'title',
  // },
  image: `knowledge-frame`,
  // learnMore: 'Hey! Want to learn more about Push Chain?',
};
