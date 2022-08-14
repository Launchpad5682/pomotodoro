import axios from "axios";
import { FormEvent, SyntheticEvent, useState } from "react";
import { useAuthProvider } from "../../context/auth-context";
import { useDataProvider } from "../../context/data-context";
import { TaskInterface, TaskInterfaceWithID } from "../types";

export const useTask = () => {
  const { modal, activeTask, dispatch } = useDataProvider();
  const { edit } = modal;
  const { token } = useAuthProvider();

  const initialValue: TaskInterface = {
    title: "",
    description: "",
    focusTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
    breakCount: 0,
    timerMode: "focus",
    timeStamp: null,
    completed: false,
  };

  const [taskData, setTaskData] = useState<TaskInterfaceWithID | TaskInterface>(
    () => (edit ? (activeTask as TaskInterfaceWithID) : initialValue)
  );

  const changeHandler = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(e.currentTarget.name);
    const { name, value } = e.currentTarget;

    switch (name) {
      case "title":
        setTaskData((prev) => ({ ...prev, [name]: value }));
        break;
      case "description":
        setTaskData((prev) => ({ ...prev, [name]: value }));
        break;
      case "focusTime":
        setTaskData((prev) => ({ ...prev, [name]: Number(value) }));
        break;
      case "shortBreakTime":
        setTaskData((prev) => ({ ...prev, [name]: Number(value) }));
        break;
      case "longBreakTime":
        setTaskData((prev) => ({ ...prev, [name]: Number(value) }));
        break;
      default:
        new Error("Not a valid input");
    }
  };

  const clearActiveTask = () =>
    dispatch({ type: "SET_ACTIVE_TASK", payload: { activeTask: null } });

  const closeHandler = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { modal: { visible: false, edit: false } },
    });
    if (edit) {
      clearActiveTask();
    }
  };

  const saveData = (task: TaskInterface) => {
    dispatch({ type: "ADD_TASK", payload: { task } });
  };

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (edit) {
      clearActiveTask();
      try {
        const { data, status } = await axios.put(
          `${process.env.REACT_APP_API_URI}/todo`,
          { todo: taskData },
          { headers: { authorization: token } }
        );

        if (status === 200) {
          dispatch({ type: "UPDATE_TASK", payload: { task: data.todo } });
        }
      } catch (error) {}
    } else {
      try {
        const { data, status } = await axios.post(
          `${process.env.REACT_APP_API_URI}/todo`,
          { todo: taskData },
          { headers: { authorization: token } }
        );
        if (status === 201) {
          saveData(data.todo);
        }
      } catch (error) {}
    }
    setTaskData({
      title: "",
      description: "",
      focusTime: 0,
      shortBreakTime: 0,
      longBreakTime: 0,
      timerMode: "focus",
      breakCount: 0,
      timeStamp: null,
      completed: false,
    });
    closeHandler();
  };

  return {
    taskData,
    edit,
    changeHandler,
    submitHandler,
    closeHandler,
  } as const;
};
