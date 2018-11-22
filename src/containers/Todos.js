import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, changeStatusTodo } from "../reduxFiles/actions/index";
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";
import InputCheckTodo from "../components/InputCheckTodo";

class Todos extends Component {
  addTodo = object => {
    this.props.newTodo(object);
  };

  changeTodoStatus = idTodo => {
    const { completeTodo } = this.props;
    console.log("CAMBIAR SU ESTADO!", idTodo);
    completeTodo(idTodo);
  };

  render() {
    const { listTodos } = this.props;
    return (
      <div>
        <TodoForm getNewTodo={this.addTodo} />
        <h3>Lista de tareas!</h3>
        {listTodos.map((todo, i) => {
          return (
            <Todo
              key={i}
              text={todo.description}
              completed={
                <InputCheckTodo
                  id={todo.id}
                  status={todo.complete}
                  handleChangeStatus={this.changeTodoStatus}
                />
              }
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listTodos: state["todos"]
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { newTodo: addTodo, completeTodo: changeStatusTodo },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
