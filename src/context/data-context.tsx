import { createContext, ReactNode, useContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import { lightTheme } from "../themes/themes";

export interface TaskInterface {}

interface DataContextInterface {
  theme: any;
  modal: boolean;
  dispatch: Function;
  task: null | TaskInterface;
  tasks: [] | TaskInterface[];
}

const initialState = {
  theme: lightTheme,
  modal: false,
  task: null,
  tasks: [],
  dispatch: () => {},
};

const DataContext = createContext<DataContextInterface>(initialState);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [{ theme, modal, task, tasks }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <DataContext.Provider value={{ theme, modal, task, tasks, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataProvider = () => useContext(DataContext);

export { DataProvider, useDataProvider };
