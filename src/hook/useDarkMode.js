import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if the user prefers dark mode based on system settings
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
    } else if (savedTheme === "false") {
      setDarkMode(false);
    } else {
      // Check system preference for dark mode
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  // Toggle dark mode and save preference in local storage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
  