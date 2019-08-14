import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <section className="todo-list">
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
