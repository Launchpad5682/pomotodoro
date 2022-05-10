import styled from "styled-components";

const CircularTimer = styled.svg`
  display: block;
  max-width: 100%;
  aspect-ratio: 1;
  padding: 1rem;
  border-radius: 50%;
  transform: rotate(-90deg);
`;

const OuterCircle = styled.circle`
  fill: none;
`;

const InnerCircle = styled.circle`
  fill: none;
  transition: stroke-dashoffset 850ms ease-in-out;
  stroke-linecap: round;
`;

const TimeText = styled.span`
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  z-index: 2;
`;

export { CircularTimer, OuterCircle, InnerCircle, TimeText };
