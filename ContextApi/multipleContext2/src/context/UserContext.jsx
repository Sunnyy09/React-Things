import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const handleUser = () => {
    setUser((prevUser) => [
      ...prevUser,
      { id: Date.now(), name: "John Doe", email: "john@example.com" },
    ]);
  };

  return (
    <UserContext.Provider value={{ user, handleUser }}>
      {children}
    </UserContext.Provider>
  );
};
