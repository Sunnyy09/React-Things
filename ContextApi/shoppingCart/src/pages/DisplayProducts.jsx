import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import Products from "../components/Products";

function DisplayProducts() {
  const { handleAddItems } = useContext(CartContext);

  return (
    <div className="w-full py-10 px-4">
      <div className="w-full">
        <ul className="gap-x-4 gap-y-5 flex flex-wrap justify-center">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Products
                title={product.title}
                price={product.price}
                reviews={product.reviews}
                detail={product.details}
                id={product.id}
                {...product}
                addItemToCart={handleAddItems}
              />
            </Link>
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
