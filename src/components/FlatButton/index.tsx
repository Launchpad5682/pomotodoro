import * as Styled from "./styles";

type Props = {
  children: string;
};

export const FlatButton = ({ children }: Props) => {
  return <Styled.FlatButton>{children}</Styled.FlatButton>;
};
