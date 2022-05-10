import * as Styled from "./styles";

type Props = {
  title: string;
};

export function CheckBox({ title }: Props) {
  return (
    <Styled.Label>
      <Styled.CheckBox />
      <Styled.LabelText>{title}</Styled.LabelText>
    </Styled.Label>
  );
}
