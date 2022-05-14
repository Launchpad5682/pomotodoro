import { ChangeEventHandler } from "react";
import * as Styled from "./styles";

type Props = {
  title: string;
  checked: boolean;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
};

export function CheckBox({ title, checked, changeHandler }: Props) {
  return (
    <Styled.Label>
      <Styled.CheckBox
        checked={checked}
        onChange={changeHandler}
        name="completed"
      />
      <Styled.LabelText>{title}</Styled.LabelText>
    </Styled.Label>
  );
}
