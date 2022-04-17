import { createContext, ReactNode, useContext } from "react";
import { lightTheme } from "../themes/themes";

interface DataContextInterface {
  theme: any;
}

const DataContext = createContext<DataContextInterface>({ theme: lightTheme });

const DataProvider = ({ children }: { children: ReactNode }) => {
  const theme = lightTheme;

  return (
    <DataContext.Provider value={{ theme }}>{children}</DataContext.Provider>
  );
};

const useDataProvider = () => useContext(DataContext);

export { DataProvider, useDataProvider };
