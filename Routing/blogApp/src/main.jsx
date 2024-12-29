import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AllPosts from "./components/AllPosts";
import AddPost from "./components/AddPost";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />, // This layout wraps the Dashboard
        children: [
          {
            path: "/dashboard", // Only renders Dashboard when exactly on /dashboard
            element: <Dashboard />,
          },
          {
            path: "all-posts",
            element: <AllPosts />,
          },
          {
            path: "add-post",
            element: <AddPost />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
