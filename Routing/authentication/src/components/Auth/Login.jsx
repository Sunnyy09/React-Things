import React from "react";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="w-full h-[90vh] flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAuth(true);
          navigate("/dashboard");
        }}
        className="bg-gray-600 w-[35vw] h-[70vh] flex flex-col items-center my-auto rounded-lg"
      >
        <div className="my-4">
          <h1 className="text-2xl text-white font-semibold">Login</h1>
        </div>
        <div className="flex flex-col w-full px-16 py-8 gap-6">
          <Input type="text" label="Username:" />
          <Input type="email" label="Email:" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-2 text-lg font-semibold text-white px-4 py-1 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
