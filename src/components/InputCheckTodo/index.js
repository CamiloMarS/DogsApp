import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const showStatusMessageTodo = status => {
  return status === true ? "Completed" : "No completed";
};

const InputCheckTodo = ({ status, handleChangeStatus, id }) => {
  return (
    <label className="container">
      <input
        type="checkbox"
        onChange={() => handleChangeStatus(id)}
        className="inputCheck"
      />
      <span className="checkmark">{showStatusMessageTodo(status)}</span>
    </label>
  );
};

//Hacer que falle silenciosamente
InputCheckTodo.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  handleChangeStatus: PropTypes.func.isRequired
};
export default InputCheckTodo;
