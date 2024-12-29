import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="min-h-[45vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
