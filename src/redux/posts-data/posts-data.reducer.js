import { DATA_LOADED } from './posts-data.types';

const INITIAL_STATE = {
  remoteArticles: []
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        remoteArticles: state.remoteArticles.concat(action.payload)
      };
    default:
      return state;
  }
};

export default postsReducer;
