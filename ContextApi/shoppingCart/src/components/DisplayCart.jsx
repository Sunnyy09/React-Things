import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import CartComponent from "./CartComponent";
import CartItems from "./CartItems";

function DisplayCart() {
  const [carts, setCarts] = useState(products);
  const { items, handleAddItems, handleDeleteItems } = useContext(CartContext);

  return (
    <div className="p-4 w-full flex">
      <div className="1/2">
        <ul className="space-y-4">
          {carts.map((cart) => (
            <li key={cart.id}>
              <CartComponent
                title={cart.title}
                price={cart.price}
                reviews={cart.reviews}
                detail={cart.details}
                id={cart.id}
                {...cart}
                addItemToCart={handleAddItems}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <CartItems items={items} handleDeleteItem={handleDeleteItems} />
      </div>
    </div>
  );
}

export default DisplayCart;

{
  /* title={cart.title}
              price={cart.price}
              reviews={cart.reviews}
              detail={cart.details}
              image={cart.image}  
    using spread operator istead of this*/
}
