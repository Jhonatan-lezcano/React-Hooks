import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === "bg-light" ? setTheme("bg-dark") : setTheme("bg-light");
  };

  return (
    <div className="Header">
      <h1>ReactHooks with Rick and Morty</h1>
      <button
        className={darkMode ? `btn btn-light` : `btn btn-dark`}
        type="button"
        onClick={handleClick}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
