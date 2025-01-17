import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { contextStore } from "./store/counterStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={contextStore}>
      <App />
    </Provider>
  </StrictMode>
);
