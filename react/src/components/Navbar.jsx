import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkLogo from "../assets/darkLogo.png";
import LightLogo from "../assets/lightLogo.png";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import DarkMode from "./DarkMode";

const navLinks = [
  { Label: "Home", path: "/" },
  { Label: "Shop", path: "/shop" },
  { Label: "Contact", path: "/contact" },
  { Label: "About us", path: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-3">
        <div className="container flex justify-between items-center gap-2 sm:gap-4">
          {/* 1. Logo */}
          <Link
            to="/"
            className="font-bold text-xl sm:text-2xl flex items-center gap-2 shrink-0"
          >
            <img src={LightLogo} alt="logo" className="w-14 sm:w-20" />
          </Link>

          <div className="hidden md:flex items-center">
            <ul className="flex gap-6 text-sm lg:text-base">
              {navLinks.map((link) => (
                <li
                  key={link.Label}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 border-gray-100 dark:border-gray-800"
                >
                  <Link
                    to={link.path}
                    className="cursor-pointer hover:text-secondary transition-colors block"
                  >
                    {link.Label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group hidden sm:block flex-1 max-w-[180px] md:max-w-xs mx-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-[140px] md:w-[200px] lg:w-[250px]
              group-hover:w-full
              transition-all duration-300
              rounded-full border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-800 px-3 py-1.5 text-sm
              focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden text-2xl p-1"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
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

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 text-sm">
          {navLinks.map((link) => (
            <li
              key={link.Label}
              onClick={() => setMenuOpen(false)}
              className="py-2 border-gray-100 dark:border-gray-800 cursor-pointer hover:text-secondary transition-colors"
            >
              <Link
                to={link.path}
                className="py-2 block cursor-pointer hover:text-secondary transition-colors"
              >
                {link.Label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
