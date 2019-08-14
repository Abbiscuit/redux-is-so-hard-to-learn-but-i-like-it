import { ADD_ARTICLE } from './articles.types';

const INITIAL_STATE = {
  articles: []
};

const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      };
    default:
      return state;
  }
};

export default articlesReducer;
