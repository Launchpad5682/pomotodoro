import { createContext, ReactNode, useContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import { lightTheme } from "../themes/themes";

interface DataContextInterface {
  theme: any;
  dispatch: Function;
}

const DataContext = createContext<DataContextInterface>({
  theme: lightTheme,
  dispatch: () => {},
});

const initialState = {
  theme: lightTheme,
};

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [{ theme }, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ theme, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataProvider = () => useContext(DataContext);

export { DataProvider, useDataProvider };
