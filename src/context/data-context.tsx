import { createContext, ReactNode, useContext, useReducer } from "react";
import { TaskInterface } from "../components/types";
import { reducer } from "../reducers/reducer";
import { lightTheme } from "../themes/themes";

interface DataContextInterface {
  theme: any;
  modal: { visible: boolean; edit: boolean };
  dispatch: Function;
  tasks: TaskInterface[] | [];
  activeTask: null | TaskInterface;
}

const initialState = {
  theme: lightTheme,
  modal: { visible: false, edit: false },
  tasks: [],
  activeTask: null,
  dispatch: () => {},
};

const DataContext = createContext<DataContextInterface>(initialState);

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
