import React from "react";

const UserMessage = ({ color, title, message }) => (
  <div
    style={{
      borderRadius: "30px",
      width: "80%",
      height: 50,
      backgroundColor: `${color}`,
      padding: "5px",
      margin: "5px auto",
      textAlign: "center"
    }}
  >
    <span style={{ fontSize: "18px", display: "block" }}>{title}</span>
    <span style={{ color: "#000" }}>{message}</span>
  </div>
);

export default UserMessage;
