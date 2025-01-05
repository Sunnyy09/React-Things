import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  function handlePosts() {
    setPosts((prevPosts) => [
      ...prevPosts,
      { id: Date.now(), title: "New Post" },
    ]);
  }

  return (
    <PostContext.Provider value={{ posts, handlePosts }}>
      {children}
    </PostContext.Provider>
  );
};
