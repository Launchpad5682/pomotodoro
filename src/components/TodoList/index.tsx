import * as Styled from "./styles";
import { TodoListItem } from "../";

export function TodoList() {
  return (
    <Styled.TodoList>
      <TodoListItem title="Hello" />
    </Styled.TodoList>
  );
}
