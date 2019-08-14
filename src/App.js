import React, { Component } from 'react';

import List from './components/list.component';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Articles</h2>
        <List />
      </div>
    );
  }
}

export default App;
