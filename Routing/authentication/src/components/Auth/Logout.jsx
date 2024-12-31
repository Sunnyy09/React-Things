import React from "react";
import { useAuth } from "../../context/Auth";

function Logout() {
  const { setAuth } = useAuth();
  return (
    <button
      onClick={() => setAuth(false)}
      type="submit"
      className="bg-blue-700 text-lg font-semibold text-white px-3 py-1 rounded"
    >
      Logout
    </button>
  );
}

export default Logout;
