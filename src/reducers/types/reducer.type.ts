import { TaskInterface } from "../../components/types";
import { ThemeType } from "../../themes/type";

export type ModalType = { visible: boolean; edit: boolean };

export type StateType = {
  theme: ThemeType;
  modal: ModalType;
  tasks: TaskInterface[] | [];
  activeTask: null | TaskInterface;
};

export type ACTIONTYPE =
  | { type: "TOGGLE_THEME"; payload: { theme: ThemeType } }
  | { type: "TOGGLE_MODAL"; payload: { modal: ModalType } }
  | { type: "SET_TASKS"; payload: { tasks: TaskInterface[] | [] } }
  | { type: "ADD_TASK"; payload: { task: TaskInterface } }
  | { type: "SET_ACTIVE_TASK"; payload: { activeTask: null | TaskInterface } };
