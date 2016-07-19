import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './components/Counter';
import reducer from './reducers';

const store = createStore(reducer);
const DOMNode = document.querySelector('#root');
const renderDOM = () => {
  render(
    <App
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    DOMNode
  );
};
renderDOM();
store.subscribe(renderDOM);
