import { TaskInterfaceWithID } from "../../components/types";
import { ThemeType } from "../../themes/type";

export type ModalType = { visible: boolean; edit: boolean };

export type StateType = {
  theme: ThemeType;
  modal: ModalType;
  tasks: TaskInterfaceWithID[];
  activeTask: null | TaskInterfaceWithID;
};

export type ACTIONTYPE =
  | { type: "TOGGLE_THEME"; payload: { theme: ThemeType } }
  | { type: "TOGGLE_MODAL"; payload: { modal: ModalType } }
  | { type: "SET_TASKS"; payload: { tasks: TaskInterfaceWithID[] | [] } }
  | { type: "ADD_TASK"; payload: { task: TaskInterfaceWithID } }
  | { type: "UPDATE_TASK"; payload: { task: TaskInterfaceWithID } }
  | { type: "DELETE_TASK"; payload: { task: TaskInterfaceWithID } }
  | {
      type: "SET_ACTIVE_TASK";
      payload: { activeTask: null | TaskInterfaceWithID };
    };
