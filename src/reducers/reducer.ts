import { TaskInterface } from "../context/data-context";

type State = {
  theme: any;
  modal: { visible: boolean; edit: boolean };
  tasks: TaskInterface[] | [];
  activeTask: null | TaskInterface;
};

type ACTIONTYPE = {
  type: string;
  payload: any;
};

export const reducer = (state: State, action: ACTIONTYPE) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, modal: { ...action.payload } };
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "SET_ACTIVE_TASK":
      return { ...state, activeTask: action.payload };
    default:
      throw new Error("This is not a defined action");
  }
};
