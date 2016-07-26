import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider, connect } from 'react-redux'
import Counter from './components/Counter';
import reducers from './reducers';

const initialState = window.__INITIAL_STATE__;
const store = createStore(reducers, initialState, applyMiddleware(logger()));
const DOMNode = document.querySelector('#root');
const mapStateToProps = (state) => ({
  value: state
});
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type: 'INCREMENT'}),
  onDecrement: () => dispatch({type: 'DECREMENT'})
});
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  DOMNode
);
