import React, { Component } from 'react';
import TodoList from './components/todoList'
import AddTodo from './components/addTodo'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
