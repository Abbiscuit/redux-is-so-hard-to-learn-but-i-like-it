import { DATA_LOADED } from './posts-data.types';

export const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      return {
        type: DATA_LOADED,
        payload: json
      };
    });
};
