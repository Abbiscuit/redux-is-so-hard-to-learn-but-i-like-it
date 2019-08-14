import React, { Component } from 'react';

import List from './components/list.component';
import Counter from './components/counter.component';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Articles</h2>
        <Counter />
        <List />
      </div>
    );
  }
}

export default App;
