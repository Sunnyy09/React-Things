import React from "react";

function Input({ type, label, className = "", ...props }) {
  return (
    <div>
      {label && <label className="mb-1 text-gray-200 text-lg">{label}</label>}
      <input
        type={type}
        className={`w-full px-1 outline-none shadow-md rounded ${className}`}
      />
    </div>
  );
}

export default Input;
