import { useState } from "react";

import "./App.css";
import GreetingBox from "./component/GreetingBox";

function App() {
  const [value, setValue] = useState("");

  const handleGreeting = (value) => {
    setValue(value);
  };

  return (
    <>
      {value && <h2>Hello, {value}! Welcome to React.</h2>}
      <GreetingBox generateGreeting={handleGreeting} />
    </>
  );
}

export default App;
