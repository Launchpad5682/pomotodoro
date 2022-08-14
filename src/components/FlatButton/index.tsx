import { MouseEventHandler } from "react";
import * as Styled from "./styles";

type Props = {
  children: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const FlatButton = ({
  children,
  disabled = false,
  onClick = () => {},
  ...props
}: Props) => {
  return (
    <Styled.FlatButton disabled={disabled} onClick={onClick} {...props}>
      {children}
    </Styled.FlatButton>
  );
};
