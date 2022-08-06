import { FormEvent, SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDataProvider } from "../../context/data-context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TaskInterface } from "../types";

export const useTask = () => {
  const { modal, tasks, activeTask, dispatch } = useDataProvider();
  const { edit } = modal;

  const { setValue } = useLocalStorage<TaskInterface[]>(
    "tasks",
    tasks as TaskInterface[]
  );

  const initialValue: TaskInterface = {
    _id: uuidv4(),
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

  const [taskData, setTaskData] = useState<TaskInterface>(() =>
    edit ? (activeTask as TaskInterface) : initialValue
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

  const submitHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (edit) {
      clearActiveTask();
      const updatedTasks = tasks.map((tasc) =>
        tasc._id === taskData._id ? taskData : tasc
      );
      dispatch({ type: "SET_TASKS", payload: { tasks: updatedTasks } });
      setValue(updatedTasks);
    } else {
      saveData(taskData);
      setValue((tasks) => [...tasks, taskData]);
    }
    setTaskData({
      _id: uuidv4(),
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
