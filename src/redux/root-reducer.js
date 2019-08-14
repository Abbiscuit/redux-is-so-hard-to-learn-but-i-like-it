import { combineReducers } from 'redux';

import articlesReducer from './articles/articles.reducer';
import postsReducer from './posts-data/posts-data.reducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  posts: postsReducer
});

export default rootReducer;
