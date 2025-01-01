import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState("");

  const onSubmit = (value) => {
    setTextValue(value);
  };

  return (
    <>
      <h1>Form Submission</h1>
      <Form onSubmit={onSubmit} paraValue={textValue} />
    </>
  );
}

export default App;
