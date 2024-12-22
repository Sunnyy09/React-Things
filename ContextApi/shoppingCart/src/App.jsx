import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import DisplayProducts from "./components/DisplayProducts";
import DisplayItems from "./components/DisplayCart";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme(); // This now works because ThemeProvider is above App

  return (
    <CartProvider>
      <div
        className={`min-h-screen w-full flex flex-wrap ${
          theme === "dark"
            ? "bg-[#121212] text-white"
            : "bg-slate-200 text-black"
        }`}
      >
        <Header />
        <div className="w-full min-h-screen py-10 px-5">
          <Routes>
            <Route path="/" element={<DisplayProducts />} />
            <Route path="/products" element={<DisplayProducts />} />
            <Route path="/cart" element={<DisplayItems />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
