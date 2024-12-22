import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ShoppingCart from "./ShoppingCart";

function DisplayItems() {
  const { items, handleDeleteItems, totalPrice } = useContext(CartContext);
  return (
    <div>
      <ShoppingCart
        items={items}
        handleDeleteItem={handleDeleteItems}
        total={totalPrice}
      />
    </div>
  );
}

export default DisplayItems;
