import { DATA_REQUESTED } from './posts-data.types';

export const getData = () => {
  return {
    type: DATA_REQUESTED
  };
};

/* 
// Redux-thunk
export const getData = () => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: DATA_LOADED,
          payload: json
        });
      });
  };
};
 */
