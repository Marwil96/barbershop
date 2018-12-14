/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer
})