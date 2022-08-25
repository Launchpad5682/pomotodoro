import * as Styled from "./styles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineOpenInNew } from "react-icons/md";
import { CheckBox } from "../CheckBox";
import { TaskInterfaceWithID } from "../types";
import { useDataProvider } from "../../context/data-context";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthProvider } from "../../context/auth-context";

type Props = {
  task: TaskInterfaceWithID;
};

export const TodoListItem = ({ task }: Props) => {
  const { _id, title, completed } = task;
  const { dispatch } = useDataProvider();
  const { token } = useAuthProvider();

  const navigate = useNavigate();

  const editHandler = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { modal: { visible: true, edit: true } },
    });
    dispatch({ type: "SET_ACTIVE_TASK", payload: { activeTask: task } });
  };
  const deleteHandler = async () => {
    try {
      const { status } = await axios.delete(
        `${process.env.REACT_APP_API_URI}/todo/${_id}`,
        { headers: { authorization: token } }
      );

      if (status === 204) {
        dispatch({ type: "DELETE_TASK", payload: { task } });
      }
    } catch (error) {}
  };
  const openTodoHandler = () => {
    navigate(`/${_id}`);
    dispatch({ type: "SET_ACTIVE_TASK", payload: { activeTask: task } });
  };

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const { data, status } = await axios.put(
        `${process.env.REACT_APP_API_URI}/todo`,
        { todo: { ...task, completed: !task.completed } },
        { headers: { authorization: token } }
      );

      if (status === 200) {
        dispatch({ type: "UPDATE_TASK", payload: { task: data.todo } });
      }
    } catch (error) {}
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
