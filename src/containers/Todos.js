import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../reduxFiles/actions/index";
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";

class Todos extends Component {
  addTodo = object => {
    this.props.newTodo(object);
  };

  render() {
    const { listTodos } = this.props;
    return (
      <div>
        <TodoForm getNewTodo={this.addTodo} />
        {listTodos.map(todo => {
          return <Todo text={todo.description} completed={todo.completed} />;
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
  return bindActionCreators({ newTodo: addTodo }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
