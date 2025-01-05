import React from "react";

function FeedbackList({ feedback }) {
  return (
    <div>
      <h2>Feedbacks:</h2>
      <ul>
        {feedback.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;
