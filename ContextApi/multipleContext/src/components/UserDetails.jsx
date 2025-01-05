import React, { useContext } from "react";
import { UserContext } from "../context/UserContext/userContext";

function UserDetails() {
  const { users } = useContext(UserContext);
  return (
    <div>
      <h2>User Name: {users[0].name}</h2>
      <h2>Email: {users[0].email}</h2>
    </div>
  );
}

export default UserDetails;
