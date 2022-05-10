import { TaskInterface } from "../context/data-context";

type State = {
  theme: any;
  modal: boolean;
  task: TaskInterface | null;
  tasks: TaskInterface[] | [];
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
      return { ...state, modal: action.payload };
    default:
      throw new Error("This is not a defined action");
  }
};
