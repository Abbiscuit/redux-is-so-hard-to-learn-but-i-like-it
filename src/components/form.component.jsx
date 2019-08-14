import React, { Component } from 'react';

import uuid from 'uuid';
import { connect } from 'react-redux';
import { addArticle } from '../redux/articles/articles.actions';

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
    this.props.addArticle({ id, title });
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

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
