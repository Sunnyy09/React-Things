import React, { useState } from "react";

function GreetingBox({ generateGreeting }) {
  const [textValue, setTextValue] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleBtn = (e) => {
    e.preventDefault();
    setGreeting(generateGreeting(textValue));
    setTextValue("");
  };

  return (
    <div>
      {/* {greeting && <h2>{greeting}</h2>} */}
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Enter your Name:"
      />
      <button onClick={handleBtn}>Generate Greeting</button>
    </div>
  );
}

export default GreetingBox;
