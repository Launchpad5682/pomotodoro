import { useEffect, useState } from "react";
import { useDataProvider } from "../context/data-context";
import { darkTheme, lightTheme } from "../themes/themes";

/**
 * Use setTheme(colorTheme) to update the theme and store the preferred
 * theme in the localStorage to remember the user preference
 * @returns theme, toggleTheme
 */

export const useTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage?.getItem("theme") ?? "light"
  );

  const { dispatch } = useDataProvider();
  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  useEffect(() => {
    dispatch({
      type: "TOGGLE_THEME",
      payload: { theme: theme === "light" ? lightTheme : darkTheme },
    });
    localStorage.setItem("theme", theme === "light" ? "light" : "dark");
  }, [dispatch, theme]);

  return { theme, toggleTheme };
};
