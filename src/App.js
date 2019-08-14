import React, { Component } from 'react';

import List from './components/list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [
        { title: 'React Redux Tutorial for Beginners', id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2>Articles</h2>
        <List articles={articles} />
      </div>
    );
  }
}

export default App;
