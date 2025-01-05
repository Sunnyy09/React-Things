import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function UserDetails() {
  const { user, handleUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#121212",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <button onClick={handleUser}>Add User</button>
      <br />
      <button onClick={toggleTheme} style={{ marginTop: "10px" }}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
      <h2>User Details</h2>
      {user && user.length > 0 ? (
        user.map((u) => (
          <div key={u.id}>
            <p>
              <strong>Name:</strong> {u.name}
            </p>
            <p>
              <strong>Email:</strong> {u.email}
            </p>
          </div>
        ))
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default UserDetails;
