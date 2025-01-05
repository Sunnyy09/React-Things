import React from "react";

function Cart({ cart }) {
  return (
    <div>
      <h2>Items in Cart:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
