import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import Logout from "./Auth/Logout";

function Header() {
  const { auth } = useAuth();
  return (
    <header className="w-full h-20 bg-gray-300 sticky top-0">
      <div className="w-full h-full p-2">
        <nav className="h-full flex mx-8 justify-between items-center">
          <div className="ml-6">
            <Link to="/" className="text-3xl text-gray-700 font-bold">
              Logo
            </Link>
          </div>
          <div className="w-full flex justify-center items-center">
            <ul className="flex w-full items-center justify-center gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-indigo-700 underline" : "text-gray-800"
                    } text-lg font-semibold hover:text-indigo-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-indigo-700 underline" : "text-gray-800"
                    } text-lg font-semibold hover:text-indigo-700`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-indigo-700 underline" : "text-gray-800"
                    } text-lg font-semibold hover:text-indigo-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="space-x-3 flex">
            <Link
              to="/dashboard"
              className="bg-blue-700 text-lg font-semibold text-white px-2 py-1 rounded"
            >
              Dashboard
            </Link>

            {auth ? (
              <Logout />
            ) : (
              <Link
                to="/login"
                className="bg-blue-700 text-lg font-semibold text-white px-3 py-1 rounded"
              >
                Login
              </Link>
            )}

            {/* <Link
              to="/signup"
              className="bg-gray-700 text-lg font-semibold text-white px-3 py-1 rounded"
            >
              Signup
            </Link> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
