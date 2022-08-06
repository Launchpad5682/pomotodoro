import { TaskInterface } from "../components/types";
import { ThemeType } from "../themes/type";

export type ModalType = { visible: boolean; edit: boolean };

export type StateType = {
  theme: ThemeType;
  modal: ModalType;
  tasks: TaskInterface[] | [];
  activeTask: null | TaskInterface;
};

type ACTIONTYPE =
  | { type: "TOGGLE_THEME"; payload: { theme: ThemeType } }
  | { type: "TOGGLE_MODAL"; payload: { modal: ModalType } }
  | { type: "SET_TASKS"; payload: { tasks: TaskInterface[] | [] } }
  | { type: "ADD_TASK"; payload: {task: TaskInterface} }
  | { type: "SET_ACTIVE_TASK"; payload: { activeTask: null | TaskInterface } };

export const reducer = (state: StateType, action: ACTIONTYPE) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload.theme };
    case "TOGGLE_MODAL":
      return { ...state, modal: { ...action.payload.modal } };
    case "SET_TASKS":
      return { ...state, tasks: [...action.payload.tasks] };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload.task] };
    case "SET_ACTIVE_TASK":
      return { ...state, activeTask: action.payload.activeTask };
    default:
      return state;
  }
};
