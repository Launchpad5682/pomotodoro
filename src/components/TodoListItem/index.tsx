import * as Styled from "./styles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineOpenInNew } from "react-icons/md";
import { CheckBox } from "../CheckBox";
type Props = {
  title: string;
};

export const TodoListItem = ({ title }: Props) => {
  return (
    <Styled.TodoListItem>
      <CheckBox title={title} />
      <Styled.IconsContainer>
        <MdOutlineOpenInNew />
        <AiOutlineEdit />
        <AiOutlineDelete />
      </Styled.IconsContainer>
    </Styled.TodoListItem>
  );
};
