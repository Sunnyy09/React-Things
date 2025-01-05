import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TododList from "./components/TododList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddBtn = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, done: false }]);
    // console.log(todo);
  };

  const handleDeleteBtn = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (index) => {
    const toggleTodo = todos.map((todo, id) =>
      todo.id === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(toggleTodo);
  };

  return (
    <>
      <h1>Dynamic Todo-List</h1>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <AddTodo addTodo={handleAddBtn} />
        <TododList
          todos={todos}
          deleteTodo={handleDeleteBtn}
          toggleTodo={handleToggleTodo}
        />
      </div>
    </>
  );
}

export default App;
