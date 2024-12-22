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

  const handleDeleteItems = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, handleAddItems, handleDeleteItems }}>
      {children}
    </CartContext.Provider>
  );
};
