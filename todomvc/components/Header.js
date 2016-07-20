import React, { PropTypes } from 'react';
import AddTodo from './AddTodo';
import { addTodo } from '../module/todos';
import { connect } from 'react-redux';

const propTypes = {
  dispatch: PropTypes.func.isRequired
};

const Header = ({ dispatch }) => {
  const handleSave = (text) => {
    if (text.length) {
      dispatch(addTodo(text));
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <AddTodo
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

Header.propTypes = propTypes;
export default connect()(Header);
