import React from "react";
import { useAuth } from "../context/Auth";

function Home() {
  const { auth } = useAuth();
  return (
    <div className="w-full min-h-[85vh] flex justify-center items-center flex-col">
      <h1 className="text-5xl leading-relaxed">Welcome to Home Page</h1>

      <p className="text-3xl text-gray-700">
        <i>{auth ? "You are logged in!" : "You are not logged in!"}</i>
      </p>
    </div>
  );
}

export default Home;
