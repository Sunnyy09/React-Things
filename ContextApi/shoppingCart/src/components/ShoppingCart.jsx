import React from "react";
import { useTheme } from "../context/ThemeContext";

function ShoppingCart({ items = [], handleDeleteItem, total }) {
  const { theme } = useTheme();
  return (
    <div
      className={`lg:w-2/3 sm:w-full flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-[#121212]" : "bg-[#fff]"
      }`}
    >
      <div className="w-full py-4 px-4 flex items-center justify-between">
        <h2
          className={` mb-4 font-bold text-2xl ${
            theme === "dark" ? "text-gray-200" : "text-black"
          }`}
        >
          Shopping Cart:
        </h2>
        <span>
          <strong>Total: ${total}</strong>
        </span>
      </div>
      <hr className="w-full" />
      <div className=" w-full flex flex-wrap sm:justify-center lg:justify-end px-4 py-8">
        <ul className="text-xl flex flex-wrap space-y-4 lg:w-3/5 sm:w-full">
          {items.map((item) => (
            <li
              key={item.id}
              className={`p-4 rounded w-full flex flex-col gap-5 ${
                theme === "dark"
                  ? "bg-black text-white"
                  : "bg-slate-200 text-black"
              }`}
            >
              <p className="flex justify-between">
                <span className="font-bold">{item.title}</span>{" "}
                <span>${item.price}</span>
              </p>

              <span className="text-blue-700 font-semibold text-base">
                {item.reviews} reviews
              </span>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="text-white font-semibold px-5 py-2 rounded right-2 bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
