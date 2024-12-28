import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full min-h-56 flex justify-center items-center bg-gray-300">
      <div className="w-full h-full py-4 px-6">
        <div className="w-full px-8 flex items-center justify-between">
          <div className="w-2/5 self-start">
            <h2 className="text-3xl pt-6 text-gray-500 font-bold">Logo</h2>
          </div>
          <div className="w-3/5 h-full flex flex-col justify-center items-center">
            <div className="py-6">
              <ul className="flex px-6 py-2 justify-center gap-4 bg-orange-100 rounded-xl">
                <li className="textlg font-semibold hover:text-orange-700">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="textlg font-semibold hover:text-orange-700">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="textlg font-semibold hover:text-orange-700">
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li className="textlg font-semibold hover:text-orange-700">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center gap-6">
              <NavLink className={`text-2xl hover:text-blue-500`}>
                <i className="fa-brands fa-linkedin "></i>
              </NavLink>
              <NavLink className={`text-2xl hover:text-blue-500`}>
                <i class="fa-brands fa-github"></i>
              </NavLink>
              <NavLink className={`text-2xl hover:text-blue-500`}>
                <i class="fa-brands fa-facebook"></i>
              </NavLink>
              <NavLink className={`text-2xl hover:text-blue-500`}>
                <i class="fa-brands fa-instagram"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
