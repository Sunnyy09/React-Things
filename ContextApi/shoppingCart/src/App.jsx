import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import DisplayProducts from "./pages/DisplayProducts";
import DisplayItems from "./pages/DisplayCart";
import { useTheme } from "./context/ThemeContext";
import Home from "./components/Home/Home";

// commit :- add product details component and
//           wroking on routing in more better way

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
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
