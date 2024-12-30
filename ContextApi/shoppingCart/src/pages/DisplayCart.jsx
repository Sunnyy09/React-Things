import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ShoppingCart from "../components/ShoppingCart";

function DisplayItems() {
  const { items, handleDeleteItems, totalPrice } = useContext(CartContext);
  return (
    <div className="py-10 px-4">
      <ShoppingCart
        items={items}
        handleDeleteItem={handleDeleteItems}
        total={totalPrice}
      />
    </div>
  );
}

export default DisplayItems;
