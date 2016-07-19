import { createStore, combineReducers } from 'redux';
import todos from '../module/todos';
import { reducer as uiReducer } from 'redux-ui';

const rootReducer = combineReducers({
  todos,
  ui: uiReducer
});

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  // TODO support HMR

  return store;
}
