import React, { useState, useEffect } from "react";
import LightButton from "../assets/website/light-mode.png";
import DarkButton from "../assets/website/dark-mode.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; 

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative flex items-center gap-2">
      <img 
        src={LightButton} 
        alt="Light Mode Button"
        onClick={() => setTheme("dark")}
        className="w-9 cursor-pointer drop-shadow-md transition-all duration-300 block dark:hidden"
      />
      

      <img 
        src={DarkButton} 
        alt="Dark Mode Button"
        onClick={() => setTheme("light")}
        className="w-7 cursor-pointer drop-shadow-md transition-all duration-300 hidden dark:block"
      />
    </div>
  );
};

export default DarkMode;