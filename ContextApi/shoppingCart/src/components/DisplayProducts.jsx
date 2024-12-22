import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import Products from "./Products";

function DisplayProducts() {
  const [carts, setCarts] = useState(products);
  const { handleAddItems } = useContext(CartContext);

  return (
    <div className="p-4 w-full">
      <div className="w-full">
        <ul className="gap-x-4 gap-y-5 flex flex-wrap justify-center">
          {carts.map((cart) => (
            <li key={cart.id}>
              <Products
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
    </div>
  );
}

export default DisplayProducts;

{
  /* title={cart.title}
              price={cart.price}
              reviews={cart.reviews}
              detail={cart.details}
              image={cart.image}  
    using spread operator istead of this*/
}
