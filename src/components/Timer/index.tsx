import { useEffect, useState } from "react";
import * as Styled from "./styles";

type Props = {
  size: number;
  progress: number;
  strokeWidth: number;
  colorStrokeOne: string;
  colorStrokeTwo: string;
  timer: string;
};

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
    const progressOffset = -((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);
  return (
    <>
      <Styled.CircularTimer width={size}>
        <Styled.OuterCircle
          stroke={colorStrokeOne}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Styled.InnerCircle
          stroke={colorStrokeTwo}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </Styled.CircularTimer>
      <Styled.TimeText>{timer}</Styled.TimeText>
    </>
  );
}
