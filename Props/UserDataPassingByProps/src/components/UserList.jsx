import React from "react";
import UserCard from "./UserCard";
import { styles } from "../App";

function UserList({ users, list }) {
  return (
    <div style={list}>
      <ul>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            card={styles.card}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
