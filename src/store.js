import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { mailReducer } from './reducers/mailReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  mail: mailReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
