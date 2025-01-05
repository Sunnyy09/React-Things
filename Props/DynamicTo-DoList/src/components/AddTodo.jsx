import React from "react";
import { useState } from "react";

function AddTodo({ addTodo }) {
  const [msg, setMsg] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo(msg);
            setMsg("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
