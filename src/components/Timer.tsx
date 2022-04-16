import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  size: number;
  progress: number;
  strokeWidth: number;
  colorStrokeOne: string;
  colorStrokeTwo: string;
  timer: string;
};

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

const TimeText = styled.text`
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  z-index: 2;
`;

export function Timer({
  size,
  progress,
  strokeWidth,
  colorStrokeOne,
  colorStrokeTwo,
  timer,
}: Props) {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = -0.75 * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);
  return (
    <>
      <CircularTimer width={size}>
        <OuterCircle
          stroke={colorStrokeOne}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <InnerCircle
          stroke={colorStrokeTwo}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </CircularTimer>
      <TimeText x={center} y={center}>
        {timer}
      </TimeText>
    </>
  );
}
