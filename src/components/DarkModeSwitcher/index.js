import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeSwitcher() {
  const isBrowser = typeof window !== "undefined";

  const [darkMode, setDarkMode] = useState(
    isBrowser ? localStorage.getItem("darkMode") === "true" : false
  );
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <motion.div
      initial={darkMode ? "dark" : "light"}
      animate={darkMode ? "dark" : "light"}
      className="rounded-full bg-gray w-14 h-8 flex items-center justify-start p-1 dark:bg-medium"
      onClick={toggleDarkMode}
    >
      <motion.div
        initial={darkMode ? "dark" : "light"}
        animate={darkMode ? "dark" : "light"}
        variants={{
          dark: { x: 28 },
          light: { x: 2 },
        }}
        className={`w-4 h-4 rounded-full flex items-center justify-center`}
      >
        {darkMode ? <FaSun color="yellow" /> : <FaMoon color="gray" />}
      </motion.div>
    </motion.div>
  );
}
