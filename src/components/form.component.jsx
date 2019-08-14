import React, { Component } from 'react';

import uuid from 'uuid';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const id = uuid.v4();
    // this.props.addArticle({ title: title, id: id });
    console.log(title);
    console.log(id);
    this.setState({ title: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { title } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="title" onChange={handleChange} value={title} />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

export default Form;
