import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const users = [{ name: "John", email: "john@example.com" }];

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
