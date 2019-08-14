import React from 'react';

const Header = ({ todos, currentUser, latestTodo }) => {
  return (
    <header className="header">
      <h1 className="title">Todo List</h1>
      <span className="logged-in-user">{`Logged in as ${currentUser}`}</span>
      <p className="todo-counter">
        Currently,{' '}
        {!todos.length ? "Todos don't exist" : `${todos.length} todos`}
      </p>
      <div className="latest-todo">
        <span>{latestTodo ? `最新のTodo: ${latestTodo}` : ''}</span>
      </div>
    </header>
  );
};

export default Header;
