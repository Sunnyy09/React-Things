import React from "react";

function ViteBox({ likes, dislikes, onLike, onDislike }) {
  return (
    <div>
      <button onClick={onLike}>👍 Like({likes}) </button>
      <button onClick={onDislike}>👎 Dislike({dislikes}) </button>
    </div>
  );
}

export default ViteBox;
