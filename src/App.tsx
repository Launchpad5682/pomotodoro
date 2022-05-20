import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TaskInterface } from "./components/types";
import { useDataProvider } from "./context/data-context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Home, Todo } from "./routes";

function App() {
  const { theme, dispatch } = useDataProvider();
  const { storedValue } = useLocalStorage<TaskInterface[]>("tasks", []);

  useEffect(() => {
    dispatch({ type: "SET_TASKS", payload: storedValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedValue]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:todo" element={<Todo />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
