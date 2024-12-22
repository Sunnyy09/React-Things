import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`w-full h-20 p-2 flex justify-center items-center ${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full flex items-center justify-around">
        <div className="text-2xl font-bold">
          <Link
            to="/"
            className={`theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"`}
          >
            Logo
          </Link>
        </div>
        <nav
          className={`space-x-7 ${
            theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
          }`}
        >
          <NavLink to="/" className="font-semibold">
            Home
          </NavLink>
          <NavLink to="/products" className="font-semibold">
            Products
          </NavLink>
          <NavLink to="/cart" className="font-semibold">
            Cart
          </NavLink>
        </nav>
        <div
          className={`text-white space-x-2 ${
            theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
          }`}
        >
          <Link
            to="/"
            className="bg-red-700 px-3 py-2 font-semibold hover:bg-red-800 focus:ring-2 hover:ring-red-800 outline-none ring-offset-2  rounded"
          >
            Sign up
          </Link>
          <Link
            to="/"
            className="bg-indigo-700 px-3 py-2 font-semibold hover:bg-indigo-800 focus:ring-2 hover:ring-indigo-800 outline-none ring-offset-2  rounded"
          >
            Login
          </Link>
          <button
            onClick={toggleTheme}
            to="/"
            className={`${
              theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-slate-200 text-black"
            } absolute right-2 top-6 px-3 py-1 font-semibold hover:bg-transparent ring-2 ring-offset-black outline-none ring-offset-2  rounded-full`}
          >
            {theme === "light" ? "dark" : "light"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
