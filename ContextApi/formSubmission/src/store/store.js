import React, { createContext, useState } from "react";

export const store = createContext();

export const Provider = ({ children }) => {
  const [state, setState] = useState({});

  return <store.Provider value={(state, setState)}>{children}</store.Provider>;
};
