import { ADD_ARTICLE } from './articles.types';

/* 
 // example
  {
    type: 'ADD_ARTICLE',
    payload: { id: 1, title: 'React Redux Tutorial }
  }
*/

export const addArticle = payload => ({
  type: ADD_ARTICLE,
  payload
});
