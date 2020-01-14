
import React, { Component } from 'react';
import './components/css/Main.css';
import Todos from './components/TodoComponents/TodoList';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Todo List</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
