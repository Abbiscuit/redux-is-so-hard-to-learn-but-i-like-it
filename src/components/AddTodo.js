import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.props.displayLatestTodo(this.state);
    this.setState({ title: '' });
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { onSubmitHandler, onChangeHandler } = this;
    const { title } = this.state;
    return (
      <section className="add-todo">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="title"
            placeholder="What to do today??"
            onChange={onChangeHandler}
            value={title}
          />
          <button disabled={title.length < 3 ? true : false}>Add</button>
        </form>
      </section>
    );
  }
}

export default AddTodo;
