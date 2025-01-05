import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState([]);

  const handleFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
  };

  return (
    <>
      <h1>Feedback Collector</h1>
      <FeedbackForm onSubmitfeedback={handleFeedback} />
      <div
        style={{
          backgroundColor: "lightblue",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
