type State = {
  theme: any;
};

type ACTIONTYPE = {
  type: string;
  payload: any;
};

export const reducer = (state: State, action: ACTIONTYPE) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    default:
      throw new Error("This is not a defined action");
  }
};
