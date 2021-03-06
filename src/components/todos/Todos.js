import React, { Component } from 'react';
import Todo from './Todo'; /* code changed */

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo key={index} text={todo.text} /> /* code changed */
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
