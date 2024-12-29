import React from "react";

function Counter({ counter, handleAdd, handleMin }) {
  return (
    <div
      style={{
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Count:{counter}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMin}>-</button>
    </div>
  );
}

export default Counter;
