import React, { Component } from 'react';

import List from './components/list.component';
import Counter from './components/counter.component';
import Form from './components/form.component';
import Post from './components/post.component';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Articles</h2>
        <Counter />
        <List />
        <h2>Add a new article</h2>
        <Form />
        <h2>API posts</h2>
        <Post />
      </div>
    );
  }
}

export default App;
