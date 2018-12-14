/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createRootReducer from './reducers/rootReducer';

export const history = createHistory()

const initialState = {}

const enhancers = []

const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = compose(
 composeWithDevTools( applyMiddleware(...middleware),
  ...enhancers
))

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
)

export default store;
