import "./App.css";
import React from "react";
import UserDetails from "./components/UserDetails";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div style={{ padding: "20px" }}>
          <h1>Context API Example</h1>
          <UserDetails />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
