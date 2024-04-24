import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/themeSlice";
import { styles } from "../styles/styles";

const ThemeToggler = () => {
  const palette = useSelector((state) => state.global.palette);
  const theme = useSelector((state) => state.global.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };
  return (
    <>
      <button
        onClick={toggleTheme}
        className={`rounded-lg px-3 py-2 ${styles.primaryBg} text-white font-medium fixed right-6 z-50 bottom-10`}
      >
        Switch Theme
      </button>
    </>
  );
};

export default ThemeToggler;
