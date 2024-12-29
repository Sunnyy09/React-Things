import { createContext, useState } from "react";

const counterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleCounterAdd = () => {
    setCounter(counter + 1);
  };

  const handleCounterMin = () => {
    setCounter(counter - 1);
  };

  return (
    <counterContext.Provider
      value={{ counter, handleCounterAdd, handleCounterMin }}
    >
      {children}
    </counterContext.Provider>
  );
};

export { counterContext, CounterContextProvider };
