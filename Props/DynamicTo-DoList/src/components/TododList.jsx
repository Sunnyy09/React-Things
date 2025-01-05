import React from "react";
import { useState } from "react";

function TododList({ todos, deleteTodo, toggleTodo }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div>
      <ul>
        {todos.map((todo, id) => (
          <li
            key={id}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              value={isDone}
              checked={todo.isDone}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                width: "100%",
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TododList;
