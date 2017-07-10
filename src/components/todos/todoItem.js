import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.userId}</strong>: {this.props.todo.userId}
        <strong>{this.props.todo.id}</strong>: {this.props.todo.id}
        <strong>{this.props.todo.title}</strong>: {this.props.todo.title}
        <strong>{this.props.todo.completed}</strong>: {this.props.todo.completed}
      </li>
    );
  }
}

export default TodoItem;
