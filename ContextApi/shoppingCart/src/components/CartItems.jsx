import React from "react";

function CartItems({ items = [], handleDeleteItem }) {
  return (
    <div className="ml-10 w-full flex flex-col justify-center items-center">
      <h2 className="text-white mb-4 font-bold text-2xl">Cart Items:</h2>
      <div className=" w-4/5">
        <ul className="text-xl flex flex-wrap space-y-4 w-full">
          {items.map((item) => (
            <li
              key={item.id}
              className="text-black bg-white  p-4 rounded w-full flex flex-col gap-5"
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
                className="text-white font-semibold px-5 py-2 rounded right-2 bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartItems;
