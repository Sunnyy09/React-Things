import React from "react";
import { useLocation } from "react-router-dom";

function BlogDetails() {
  const location = useLocation();

  const { post } = location.state;

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="w-full">
      <div className="py-8 flex justify-center items-center gap-4">
        <div className="w-1/2">
          <img src={post.img} alt={post.title} className="w-full" />
        </div>
        <div className="w-1/2 px-8 ml-2 flex flex-wrap gap-6 justify-center items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-lg text-center px-4 text-gray-600">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
