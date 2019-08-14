import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import apiSaga from './sagas/api-saga';

const initialSagaMiddleware = createSagaMiddleware();

const middlewares = [logger, initialSagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

initialSagaMiddleware.run(apiSaga);

export default store;
