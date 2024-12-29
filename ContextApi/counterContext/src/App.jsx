import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { counterContext } from "./store/counterContext";

function App() {
  const { counter, handleCounterAdd, handleCounterMin } =
    useContext(counterContext);
  return (
    <>
      <h1>Counter Context</h1>
      <Counter
        counter={counter}
        handleAdd={handleCounterAdd}
        handleMin={handleCounterMin}
      />
    </>
  );
}

export default App;
