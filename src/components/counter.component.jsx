import React from 'react';

import { connect } from 'react-redux';

const Counter = ({ articles }) => {
  return (
    <section className="article-counter">
      <span>{`${articles.length} articles now`}</span>
    </section>
  );
};

const mapStateToProps = state => {
  console.log('counter-component', state);
  return {
    articles: state.articles.articles
  };
};

export default connect(mapStateToProps)(Counter);
