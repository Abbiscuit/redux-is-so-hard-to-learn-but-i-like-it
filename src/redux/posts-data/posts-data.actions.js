import { DATA_LOADED } from './posts-data.types';

export const getData = () => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: DATA_LOADED,
          payload: json
        });
      });
  };
};
