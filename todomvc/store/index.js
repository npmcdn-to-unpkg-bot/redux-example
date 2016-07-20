import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import todos from '../module/todos';
import ui from '../module/ui';

const rootReducer = combineReducers({
  todos,
  ui
});
const logger = reduxLogger();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
  );

  // TODO support HMR

  return store;
}
