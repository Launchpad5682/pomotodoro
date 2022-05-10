import { MouseEventHandler, ReactNode } from "react";
import * as Styled from "./styles";

type Props = {
  handler: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const FloatingActionButton = ({ handler, children }: Props) => {
  return (
    <Styled.FloatingActionButton onClick={handler}>
      {children}
    </Styled.FloatingActionButton>
  );
};
