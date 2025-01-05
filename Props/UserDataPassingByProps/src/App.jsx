import { useState } from "react";

import "./App.css";
import UserList from "./components/UserList";

const users = [
  { name: "John", email: "john465@example.com" },
  { name: "Maxi", email: "maxi65@example.com" },
  { name: "Jordan", email: "jordan564@example.com" },
];

function App() {
  return (
    <div style={styles.app}>
      <h1>Users:</h1>
      <UserList users={users} list={styles.list} card={styles.card} />
    </div>
  );
}

export const styles = {
  app: { fontFamily: "Arial, sans-serif", padding: "20px" },
  list: { display: "flex", flexDirection: "column", gap: "10px" },
  card: { border: "2px solid #ddd", padding: "10px", borderRadius: "5px" },
};

export default App;
