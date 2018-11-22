import React from "react";

class TodoForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.descriptionTodo = React.createRef();
    this.completed = React.createRef();
  }

  componentDidMount() {
    this.descriptionTodo.current.focus();
  }

  sendDataNewTodo = () => {
    const { descriptionTodo, completed } = this;
    if (descriptionTodo.current["value"] !== "") {
      this.props.getNewTodo({
        id: Math.trunc(Math.random() * (10000 - 1) + 1),
        description: descriptionTodo.current["value"],
        complete: completed.current.checked
      });
      descriptionTodo.current.value = "";
    }
  };

  render() {
    return (
      <div
        style={{
          width: "200px",
          padding: "10px",
          backgroundColor: "lightblue",
          margin: "5px auto"
        }}
      >
        <h3>Add new Todo</h3>
        Description: <textarea ref={this.descriptionTodo} />
        <br />
        Completed: <input ref={this.completed} type="checkbox" />
        <br />
        <button onClick={this.sendDataNewTodo}>Add </button>
      </div>
    );
  }
}

export default TodoForm;
