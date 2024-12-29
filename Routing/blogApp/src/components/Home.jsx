import React from "react";
import AllPosts from "./AllPosts";

function Home() {
  return (
    <div className="min-h-[45vh] w-full py-8">
      <div className="w-full">
        <AllPosts className="w-full flex flex-col items-center " />
      </div>
    </div>
  );
}

export default Home;
