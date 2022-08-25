import { createContext, ReactNode, useContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import { StateType } from "../reducers/types/reducer.type";
import { lightTheme } from "../themes/themes";

type DataContextType = StateType & {
  dispatch: Function;
};

const initialState = {
  theme: lightTheme,
  modal: { visible: false, edit: false },
  tasks: [],
  activeTask: null,
};

const DataContext = createContext<DataContextType>({
  ...initialState,
  dispatch: () => {},
});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [{ theme, modal, activeTask, tasks }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <DataContext.Provider value={{ theme, modal, activeTask, tasks, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataProvider = () => useContext(DataContext);

export { DataProvider, useDataProvider };
