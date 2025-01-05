import React from "react";

function ThemeSwitcher({ theme }) {
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#000" : "lightgray",
        color: theme === "light" ? "#fff" : "#000",
        width: "400px",
        height: "300px",
        textAlign: "center",
      }}
    >
      <p>This is a themed box!</p>
    </div>
  );
}

export default ThemeSwitcher;
