// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// External Components
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FONT_MONO = "'IBM Plex Mono', monospace";

export default function FeatureCard({ item }) {
  const { t } = useTranslation();

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
  justify-content: flex-end;
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
  padding: 32px;
  box-sizing: border-box;
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
  /* Figma spaces the title and body by 24px (spacing-md), not 16px. */
  margin: 24px 0 0 0;
  font-size: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: var(--ifm-color-white);
`;

const DividedCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  border-left: 1px solid #2c2c35;

  &:first-child {
    border-left: none;
  }
`;

const IconImage = styled.img`
  width: 120px;
  height: 120px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
