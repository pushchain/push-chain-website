/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Link from '@docusaurus/Link';
import { BsArrowUpRight } from 'react-icons/bs';
import { styled } from 'styled-components';
import { device } from '@site/src/config/globals';
import { H3, Image, Span } from '@site/src/css/SharedStyling';
import { GridTopItems } from '@site/src/config/DocsHubList';

export const Grid = () => {
  return (
    <GridWrapper>
      {GridTopItems.map((item, index) => (
        <GridCard
          key={index}
          bg={item.bgColor}
          bgImage={item.gridBG}
          href={item.href}
          target='_blank'
          rel='noopener noreferrer'
          alt={item.title}
        >
          <GridImage customWidth={item.customWidth}>
            <Image
              src={item.image}
              srcSet={`${item.image2x} 2x, ${item.image3x} 3x`}
              alt={`Image for ${item.title}`}
              loading='lazy'
              className='pulse-logo'
            />
          </GridImage>

          <TextDiv>
            <H3>{item.title}</H3>
            <Span>{item.description}</Span>

            <LinkTo className='hover-link'>
              <p>Learn More</p>
              <BsArrowUpRight />
            </LinkTo>
          </TextDiv>
        </GridCard>
      ))}
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-self: stretch;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const GridCard = styled(Link)`
  position: relative;
  border-radius: 32px;
  align-items: flex-start;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 414px;

  background: ${({ bg }) => bg};
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  &:hover .hover-link {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

const LinkTo = styled.div`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  margin-top: 0;

  p {
    font-size: 1.125rem;
    font-weight: 600;
  }

  ${GridCard}:hover & {
    opacity: 1;
    max-height: 50px;
    transform: translateY(0);
    margin-top: 20px;
  }
`;

const GridImage = styled.div`
  padding: 16px;
  border-radius: var(--radius-lg, 32px);
  border: 1px solid rgb(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.05);
  background-blend-mode: lighten;
  box-shadow:
    2.788px 2.598px 12px 0px rgba(255, 255, 255, 0.15) inset,
    1.858px 1.732px 6px 0px rgba(255, 255, 255, 0.15) inset;
  backdrop-filter: blur(4px);
  width: 148px;
  height: 148px;
  display: flex;
  justify-content: center;
  align-items: center;

  .pulse-logo {
    height: auto;
    width: ${({ customWidth }) => customWidth || '90px'};
    z-index: 99999;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    color: #fff;
    font-size: 1.625rem;
    font-weight: 600;
    line-height: 107.692%;
    font-family: 'DM Sans', sans-serif !important;
  }

  span {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 133.333%;
    font-family: 'DM Sans', sans-serif !important;
  }
`;
