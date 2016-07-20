import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../module/todos';
import { changeFilter } from '../module/ui';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constant';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo) => todo.completed
};
const propTypes = {
  ui: PropTypes.object,
  updateUI: PropTypes.func,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const Main = ({ ui, updateUI, todos, actions }) => {
  const handleShow = (filter) => {
    updateUI(filter);
  };

  const handleClearCompleted = () => {
    actions.clearCompleted();
  };

  const renderToggleAll = (completedCount) => {
    if (!todos.length) {
      return null;
    }

    return (
      <input
        className="toggle-all"
        type="checkbox"
        checked={completedCount === todos.length}
        onChange={actions.completeAll}
      />
    );
  };

  const renderFooter = (completedCount) => {
    if (!todos.length) {
      return null;
    }

    const activeCount = todos.length - completedCount;
    return (
      <Footer
        completedCount={completedCount}
        activeCount={activeCount}
        filter={ui.filter}
        onClearCompleted={handleClearCompleted}
        onShow={handleShow}
      />
    );
  };

  const filteredTodos = todos.filter(TODO_FILTERS[ui.filter]);
  const completedCount = todos.reduce((count, todo) => (
    todo.completed ? (count + 1) : count
  ), 0);

  return (
    <section className="main">
      {renderToggleAll(completedCount)}
      <ul className="todo-list">
        {
          filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ))
        }
      </ul>
      {renderFooter(completedCount)}
    </section>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  ui: state.ui
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
  updateUI: (filter) => dispatch(changeFilter(filter))
});

Main.propTypes = propTypes;
const container = connect(mapStateToProps, mapDispatchToProps)(Main);
export default container;
