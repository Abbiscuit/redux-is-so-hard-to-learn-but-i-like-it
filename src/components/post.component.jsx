import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getData } from '../redux/posts-data/posts-data.actions';

class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <section className="posts">
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}> {post.title} </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

const mapStateToProps = state => {
  console.log('post-component', state);
  return {
    posts: state.posts.remoteArticles.slice(0, 10)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
