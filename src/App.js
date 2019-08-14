import React, { Component } from 'react';

import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'test todo here...'
      },
      {
        id: 2,
        title: 'more test todos ...'
      }
    ],
    currentUser: null,
    latestTodo: null
  };

  componentDidMount() {
    if (!this.state.currentUser) {
      this.setState({ currentUser: 'Guest User' });
    }

    this.setState({
      latestTodo: this.state.todos[this.state.todos.length - 1].title
    });
  }

  addTodo = todo => {
    todo.id = this.state.todos.length + 1;
    const todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
  };

  displayLatestTodo = latest => {
    const latestTodo = latest.title;
    this.setState({ latestTodo: latestTodo });
  };

  render() {
    const { todos, currentUser, latestTodo } = this.state;
    return (
      <div className="app">
        <Header
          todos={todos}
          currentUser={currentUser}
          latestTodo={latestTodo}
        />
        <AddTodo
          addTodo={this.addTodo}
          displayLatestTodo={this.displayLatestTodo}
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
