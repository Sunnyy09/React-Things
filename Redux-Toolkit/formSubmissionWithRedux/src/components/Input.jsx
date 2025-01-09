import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../store/authSlice";

function Input() {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setpassInput] = useState("");

  const addDataHandler = (e) => {
    e.preventDefault();
    dispatch(addData({ email: emailInput, password: passInput }));
    setEmailInput("");
    setpassInput("");
  };

  return (
    <form onSubmit={addDataHandler}>
      <input
        type="text"
        placeholder="Enter a email:"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter a password:"
        value={passInput}
        onChange={(e) => setpassInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;
