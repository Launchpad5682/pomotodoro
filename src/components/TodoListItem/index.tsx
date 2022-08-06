import * as Styled from "./styles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineOpenInNew } from "react-icons/md";
import { CheckBox } from "../CheckBox";
import { TaskInterface } from "../types";
import { useDataProvider } from "../../context/data-context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  task: TaskInterface;
};

export const TodoListItem = ({ task }: Props) => {
  const { _id, title, completed } = task;
  const { tasks, dispatch } = useDataProvider();
  const { setValue } = useLocalStorage<TaskInterface[]>(
    "tasks",
    tasks as TaskInterface[]
  );

  const navigate = useNavigate();

  const editHandler = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { modal: { visible: true, edit: true } },
    });
    dispatch({ type: "SET_ACTIVE_TASK", payload: { activeTask: task } });
  };
  const deleteHandler = () => {
    const updatedTasks = tasks.filter((tasc) => tasc._id !== task._id);
    setValue(updatedTasks as TaskInterface[]);
    dispatch({ type: "SET_TASKS", payload: { tasks: updatedTasks } });
  };
  const openTodoHandler = () => {
    navigate(`/${_id}`);
    dispatch({ type: "SET_ACTIVE_TASK", payload: { activeTask: task } });
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedTasks = tasks.map((tasc) =>
      tasc._id === task._id ? { ...task, completed: !task.completed } : tasc
    );

    setValue(updatedTasks);
    dispatch({ type: "SET_TASKS", payload: { tasks: updatedTasks } });
  };

  return (
    <Styled.TodoListItem>
      <CheckBox
        title={title}
        checked={completed}
        changeHandler={changeHandler}
      />
      <Styled.IconsContainer>
        <MdOutlineOpenInNew onClick={openTodoHandler} />
        <AiOutlineEdit onClick={editHandler} />
        <AiOutlineDelete onClick={deleteHandler} />
      </Styled.IconsContainer>
    </Styled.TodoListItem>
  );
};
