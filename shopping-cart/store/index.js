import {
  applyMiddleware,
  createStore
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../modules';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger());
}

export default function (initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(middlewares)
  );

  return store;
}
