import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    if (!items.some((existingItems) => existingItems.id === item.id)) {
      setItems((prevItems) => [...prevItems, item]);
    }
  };

  const totalPrice = parseFloat(
    items.reduce((total, item) => total + item.price, 0).toFixed(2)
  );

  const handleDeleteItems = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ items, handleAddItems, handleDeleteItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
