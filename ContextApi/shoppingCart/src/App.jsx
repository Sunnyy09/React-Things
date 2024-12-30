import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import DisplayProducts from "./pages/DisplayProducts";
import DisplayItems from "./pages/DisplayCart";
import { useTheme } from "./context/ThemeContext";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const { theme } = useTheme(); // This now works because ThemeProvider is above App

  return (
    <CartProvider>
      <div
        className={`min-h-screen w-full flex flex-wrap ${
          theme === "dark"
            ? "bg-[#000000] text-white"
            : "bg-slate-200 text-black"
        }`}
      >
        <Header />
        <div className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<DisplayProducts />} />
            <Route path="/cart" element={<DisplayItems />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
