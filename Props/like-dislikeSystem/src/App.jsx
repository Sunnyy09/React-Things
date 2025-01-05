import { useState } from "react";
import "./App.css";
import ViteBox from "./components/ViteBox";

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  const handleDislike = (e) => {
    e.preventDefault();
    setDislikes(dislikes + 1);
  };

  return (
    <>
      <h1>Like/Dislike System</h1>
      <div>
        <ViteBox
          likes={likes}
          dislikes={dislikes}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </>
  );
}

export default App;
