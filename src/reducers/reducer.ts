import { ACTIONTYPE, StateType } from "./types/reducer.type";


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
