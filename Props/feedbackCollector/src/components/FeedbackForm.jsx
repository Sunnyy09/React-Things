import React, { useState } from "react";

function FeedbackForm({ onSubmitfeedback }) {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitfeedback(msg);
    setMsg("");
  };

  return (
    <form>
      <textarea
        cols="30"
        rows="10"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default FeedbackForm;
