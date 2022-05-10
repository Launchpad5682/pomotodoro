import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDataProvider } from "./context/data-context";
import { Home, Todo } from "./routes";

function App() {
  const { theme } = useDataProvider();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
