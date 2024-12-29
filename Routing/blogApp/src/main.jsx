import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AllPosts from "./components/AllPosts";
import AddPost from "./components/AddPost";
import BlogDetails from "./components/BlogDetails";
// import DashboardLayout from "./components/Layout";

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
        children: [
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
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
