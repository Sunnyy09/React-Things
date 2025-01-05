import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [submittedValue, setSubmittedValue] = useState("");

  const onSubmit = (value) => {
    setSubmittedValue(value);
  };

  return (
    <>
      <h1>Submitted Value: {submittedValue}</h1>
      <Form onSubmit={onSubmit} />
    </>
  );
}

export default App;
