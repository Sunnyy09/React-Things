import CartItems from "./components/CartItems";
import DisplayCart from "./components/DisplayCart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#121212] text-white flex flex-wrap">
        <div className="w-full min-h-screen py-10 px-5 flex justify-center items-center  ">
          <DisplayCart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
