// import "./App.css";

import { Outlet, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#fff]">
      <div className="w-full flex flex-col">
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
