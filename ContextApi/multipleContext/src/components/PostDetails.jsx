import React, { useContext } from "react";
import { PostContext } from "../context/PostContext/postcontext";

function PostDetails() {
  const { posts, handlePosts } = useContext(PostContext);
  return (
    <div>
      <h2>User Posts:</h2>
      <button onClick={() => handlePosts()}>+ post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetails;
