import * as Styled from "./styles";
import { TodoListItem } from "../";
import { useDataProvider } from "../../context/data-context";

export function TodoList() {
  const { tasks } = useDataProvider();
  return (
    <Styled.TodoList>
      {tasks.length > 0 &&
        tasks.map((task) => <TodoListItem task={task} key={task._id} />)}
    </Styled.TodoList>
  );
}
