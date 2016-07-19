import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import 'todomvc-app-css/index.css';

const mountNode = document.querySelector('#root');

render(
  <Root />,
  mountNode
);
