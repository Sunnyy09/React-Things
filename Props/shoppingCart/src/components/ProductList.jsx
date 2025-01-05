import React from "react";

function ProductList({ handleCart }) {
  const products = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          {product}
          <button onClick={() => handleCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
