import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completed }) => {
  return (
    <label
      style={{
        padding: "2rem",
        maxWidth: "25%",
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px dotted #ccc"
      }}
    >
      <span style={{ fontSize: "20px" }}>Todo: {text} </span>
      {completed}
    </label>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.element.isRequired
};
export default Todo;
