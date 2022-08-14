import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TaskInterface } from "./components/types";
import { useDataProvider } from "./context/data-context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Home, Todo } from "./routes";
import { Login } from "./routes/Auth/Login";
import { Signup } from "./routes/Auth/Signup";
import { useTheme } from "./hooks/useTheme";
import { PrivateRoute } from "./helper/PrivateRoute";

function App() {
  const { theme, dispatch } = useDataProvider();
  useTheme();
  const { storedValue } = useLocalStorage<TaskInterface[]>("tasks", []);

  useEffect(() => {
    dispatch({ type: "SET_TASKS", payload: { tasks: storedValue } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedValue]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/:todo" element={<Todo />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
