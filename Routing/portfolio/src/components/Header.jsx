import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-300 z-10 sticky top-0 h-24">
      <div className="w-full h-full py-2 px-28">
        <nav className="w-full h-full flex items-center justify-between">
          <div className="ml-4">
            <Link>
              <h1 className="text-4xl font-bold text-gray-400">Logo</h1>
            </Link>
          </div>
          <div className="">
            <ul className="flex justify-center items-center gap-6 list-none">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-800"
                    } text-lg font-semibold`
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
                      isActive ? "text-orange-700" : "text-gray-800"
                    } text-lg font-semibold`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-800"
                    } text-lg font-semibold`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-gray-800"
                    } text-lg font-semibold`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
