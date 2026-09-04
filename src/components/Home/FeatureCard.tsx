// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import useBaseUrl from '@docusaurus/useBaseUrl';

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { device } from '@site/src/config/globals';

const FONT_MONO = "'IBM Plex Mono', monospace";

export default function FeatureCard({ item }) {
  const { t } = useTranslation();
  // Hoisted above the divided-card branch below: useBaseUrl is a hook, so it
  // cannot sit behind that early return or inside the conditional JSX.
  const imageUrl = useBaseUrl(item.image ?? '/');

  if (item.cardStyle === 'divided') {
    return (
      <DividedCard>
        {item.icon && (
          <IconImage
            src={
              require(
                `@site/static/assets/website/home/feature-grid-b/${item.icon}.png`
              ).default
            }
            alt=''
            aria-hidden='true'
          />
        )}
        <CardBody>
          <DividedTitle>{t(item.titleKey)}</DividedTitle>
          <DividedDescription>{t(item.descriptionKey)}</DividedDescription>
        </CardBody>
      </DividedCard>
    );
  }

  return (
    <BorderedCard>
      {item.image && (
        <CardFigure
          src={imageUrl}
          alt=''
          aria-hidden='true'
          loading='lazy'
          decoding='async'
          wide={item.imageWide}
        />
      )}
      <CardBody>
        <BorderedTitle>{t(item.titleKey)}</BorderedTitle>
        <BorderedDescription>{t(item.descriptionKey)}</BorderedDescription>
      </CardBody>
    </BorderedCard>
  );
}

const BorderedCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* Figma seats the illustration at the top and the copy at the bottom, but
     spread across the row's floor that left a wide band of nothing between
     them. They now sit together under the mark. */
  justify-content: flex-start;
  /* Figma's stroke is a vertical linear gradient — #ffffff at the top to
     #eb8afb at the bottom — drawn at 25% opacity, Outside, 1px. Extracted from
     the node's alpha channel (alpha 63/255 = 24.7%).
     CSS can't put a gradient on a border while honouring border-radius, so the
     border area is painted by a border-box gradient layer and the fill by a
     padding-box layer on top. Keeping the stops translucent (rather than
     pre-flattening them) reproduces Figma's Outside placement, where the
     stroke blends with the section gradient behind the card. */
  background:
    linear-gradient(#090909, #090909) padding-box,
    linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(235, 138, 251, 0.25) 100%
      )
      border-box;
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
`;

// The narrow cards carry a square mark centred over the copy; the two wide
// cards in the second row carry a full-width graphic instead.
const CardFigure = styled.img`
  display: block;
  max-width: 100%;
  object-fit: contain;
  margin: ${(props) => (props.wide ? '0 0 12px 0' : '0 auto 12px auto')};

  /* Two of the marks export with a viewBox but no width/height, so they need a
     size given to them; the aspect comes from the viewBox. Figma draws them at
     197-212px, and the wide pair fills the card. */
  ${(props) =>
    props.wide
      ? `width: 100%;
         height: auto;
         /* The squarer of the two wide marks rendered much taller than the
            other; a cap evens them up. */
         max-height: 180px;`
      : `height: 168px;
         width: auto;`}
`;

const BorderedTitle = styled.p`
  margin: 0;
  /* Titles carry their own line breaks, matching the design's wrap points. */
  white-space: pre-line;
  font-family: ${FONT_MONO};
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: -0.06em;
  line-height: 1.2;
  color: var(--ifm-color-white);
`;

const BorderedDescription = styled.p`
  /* The gap comes from CardBody, which is 16px like every other title and its
     subtext on the page; a margin here would stack on top of it. */
  margin: 0;
  font-size: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: var(--ifm-color-white);
`;

const DividedCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-left: 1px solid #2c2c35;

  /* Side by side, this is the rule between columns, so the first card must
     not carry one. Stacked, it is a line down each card's left edge instead --
     and dropping it from the first left that one card looking unfinished. */
  &:first-child {
    border-left: none;
  }

  @media ${device.laptop} {
    &:first-child {
      border-left: 1px solid #2c2c35;
    }
  }
`;

const IconImage = styled.img`
  width: 120px;
  height: 120px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  /* 16px between a title and its description, as everywhere else. */
  gap: 16px;
`;

const DividedTitle = styled.p`
  margin: 0;
  white-space: pre-line;
  font-family: ${FONT_MONO};
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: -0.06em;
  line-height: 1.2;
  color: var(--ifm-color-white);
`;

const DividedDescription = styled.p`
  margin: 0;
  font-size: 1.125rem;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: #a9a6b2;
`;
