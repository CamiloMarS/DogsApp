import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completed }) => {
  return (
    <span
      style={{
        padding: "5px",
        maxWidth: "25%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(120,22,230, .6)"
      }}
    >
      <span>Todo: {text} </span>
      <span style={{ fontSize: "10px" }}>
        {completed === true ? "Status: completed" : "Status: Incompleted"}
      </span>
    </span>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
export default Todo;
