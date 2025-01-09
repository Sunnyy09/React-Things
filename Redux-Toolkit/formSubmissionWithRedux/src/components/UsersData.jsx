import React from "react";
import { useSelector } from "react-redux";

function UsersData() {
  const users = useSelector((state) => state.auth.userData);
  console.log("Users data:", users);
  return (
    <div>
      <h1>All UsersData: </h1>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </div>
  );
}

export default UsersData;
