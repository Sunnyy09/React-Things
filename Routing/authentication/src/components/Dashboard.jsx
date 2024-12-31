import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

function Dashboard() {
  const { auth } = useAuth();
  if (!auth)
    return (
      <div>
        <h1>Please Login to visit Dashboard!</h1>
        <Navigate to="/login" />
      </div>
    );
  return (
    <div className="w-full h-[85vh]">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-indigo-900 text-3xl font-bold">
          Welcome to your Dashboard!
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
