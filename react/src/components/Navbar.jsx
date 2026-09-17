import React from "react";
import DarkLogo from "../assets/darkLogo.png";
import LightLogo from "../assets/lightLogo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./Darkmode";

const Navbar = () => {
  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-3">
        <div className="container flex justify-between items-center gap-2 sm:gap-4">
          {/* 1. Logo*/}
          <a
            href="#"
            className="font-bold text-xl sm:text-2xl flex items-center gap-2"
          >
            <img src={LightLogo} alt="logo" className="w-14 sm:w-20" />
            {/* <img
              src={DarkLogo}
              alt="logo"
              className="w-14 sm:w-20 hidden dark:block"
            /> */}
          </a>
          <div className="relative group hidden sm:block flex-1 max-w-xs mx-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-[180px] md:w-[250px] 
              group-hover:w-full 
              transition-all duration-300
              rounded-full border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-gray-800 px-3 py-1.5 text-sm
              focus:outline-none focus:border-pink-500"
            />
            {/* <IoMdSearch
              className="text-gray-500 dark:text-gray-400 group-hover:text-primary 
              absolute top-1/2 -translate-y-1/2 right-3 text-lg"
            /> */}
          </div>

          <div className="flex items-center gap-3">
            {/* Order Button */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-secondary to-secondary transition-all duration-200 text-white py-1.5 px-3 sm:px-4 rounded-full flex items-center gap-2 group shadow-sm"
            >
              <span className="hidden md:block text-sm font-medium">Order</span>
              <FaCartShopping className="text-lg text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode */}
            <DarkMode />
          </div>
        </div>
      </div>

      <div className="px-4 pb-3 sm:hidden">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm focus:outline-none focus:border-pink-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
