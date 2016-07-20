import React, { PropTypes } from 'react';
import AddTodo from './AddTodo';
import { changeEditing } from '../module/ui';
import { connect } from 'react-redux';
import cx from 'classnames';

const propTypes = {
  ui: PropTypes.object,
  updateUI: PropTypes.func,
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

const TodoItem = ({
  ui,
  updateUI,
  todo,
  editTodo,
  deleteTodo,
  completeTodo
}) => {
  const handleSave = (id, text) => {
    if (!text.length) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    updateUI(false);
  };

  const handleDoubleClick = () => {
    updateUI(true);
  };

  const className = cx({
    completed: todo.completed,
    editing: ui.editing
  });

  let element;
  if (ui.editing) {
    element = (
      <AddTodo
        text={todo.text}
        editing={ui.editing}
        onSave={(text) => handleSave(todo.id, text)}
      />
    );
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>
          {todo.text}
        </label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    );
  }

  return (
    <li className={className}>
      {element}
    </li>
  );
};

TodoItem.propTypes = propTypes;
const mapStateToProps = (state) => ({
  ui: state.ui
});
const mapDispatchToProps = {
  updateUI: changeEditing
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
