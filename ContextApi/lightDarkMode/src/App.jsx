// import "./App.css";
import { useContext } from "react";
import Card from "./components/Card";
import { themeContext } from "./store/themeContext";

function App() {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div
      className={`min-h-[100vh] w-full flex flex-col justify-center items-center ${
        theme === "light" ? "bg-[#121212]" : "bg-white"
      }`}
    >
      <button
        className="bg-blue inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-5 right-5"
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
      <div className="w-full flex justify-center">
        <Card theme={theme} />
      </div>
    </div>
  );
}

export default App;
