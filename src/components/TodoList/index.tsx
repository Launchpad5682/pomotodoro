import * as Styled from "./styles";
import { TodoListItem } from "../";
import { useDataProvider } from "../../context/data-context";
import { useEffect } from "react";
import axios from "axios";
import { useAuthProvider } from "../../context/auth-context";

export function TodoList() {
  const { tasks, dispatch } = useDataProvider();
  const { token } = useAuthProvider();

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          `${process.env.REACT_APP_API_URI}/todos`,
          { headers: { authorization: token } }
        );
        if (status === 200) {
          dispatch({ type: "SET_TASKS", payload: { tasks: data.todos } });
        }
      } catch (error) {}
    })();
  }, [dispatch, token]);

  return (
    <Styled.TodoList>
      {tasks.length > 0 ? (
        tasks.map((task) => <TodoListItem task={task} key={task._id} />)
      ) : (
        <Styled.EmptyTodoList>
          There's nothing in TO-DO, add something using + at the bottom right
        </Styled.EmptyTodoList>
      )}
    </Styled.TodoList>
  );
}
