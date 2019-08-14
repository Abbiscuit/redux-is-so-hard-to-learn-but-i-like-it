import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getData } from '../redux/posts-data/posts-data.actions';

class Post extends Component {
  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Post);
