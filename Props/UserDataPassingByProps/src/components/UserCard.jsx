import React from "react";

function UserCard({ name, email, card }) {
  return (
    <div style={card}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserCard;
