import { styled } from 'styled-components';
import { ItemV, ItemH, H2, Span } from './../../css/SharedStyling';

export const StatsSection = () => {
  return (
    <ItemV>
      <TextSection>
        <H2>
          Achieve Instant <br /> Interoperability
        </H2>
        <Span>
          Optimized for performance. <br />
          High TPS, ultra-low gas, and sub-second finality for real-time app
          execution.
        </Span>
      </TextSection>

      <StatsGrid></StatsGrid>
    </ItemV>
  );
};

const TextSection = styled(ItemH)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 236px;
  flex-wrap: nowrap;

  h2 {
    color: #fff;
    font-family:
      DM Sans,
      sans-serif;
    font-size: 3rem;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.96px;
    margin: 0;
  }

  span {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.4px;
    max-width: 400px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
