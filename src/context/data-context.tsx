import { createContext, ReactNode, useContext } from "react";
import { darkTheme, lightTheme } from "../themes/themes";

interface DataContextInterface {
  theme: any;
}

const DataContext = createContext<DataContextInterface>({ theme: lightTheme });

const DataProvider = ({ children }: { children: ReactNode }) => {
  const theme = darkTheme;

  return (
    <DataContext.Provider value={{ theme }}>{children}</DataContext.Provider>
  );
};

const useDataProvider = () => useContext(DataContext);

export { DataProvider, useDataProvider };
