import { useState } from "react";
import "./App.css";
import ThemeSwitcher from "./component/ThemeSwitcher";

function App() {
  // const theme = { background: "black", color: "white" };

  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    // e.preventDefault();
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeSwitcher theme={theme} />
      <button
        onClick={handleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Change Theme
      </button>
    </>
  );
}

export default App;
