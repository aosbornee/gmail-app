import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { mailReducer } from './reducers/mailReducer';

const reducer = combineReducers({
  mail: mailReducer,
});

const initialState = {};

const store = createStore(reducer, initialState, compose());

export default store;
