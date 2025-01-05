import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([]);

  const handleProduct = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <ProductList handleCart={handleProduct} />
      <Cart cart={cart} />
    </>
  );
}

export default App;
