import React, { useState } from "react";

function Form({ onSubmit, paraValue }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{paraValue}</p>
    </form>
  );
}

export default Form;
