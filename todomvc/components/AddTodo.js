import React, { PropTypes } from 'react';
import cx from 'classnames';

const propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
};

export const AddTodo = ({
  onSave,
  text,
  placeholder,
  editing,
  newTodo
}) => {
  let input;
  const handleBlur = (e) => {
    if (newTodo) {
      onSave(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    if (e.which === 13) {
      onSave(input.value);
      if (newTodo) {
        input.value = '';
      }
    }
  };

  const className = cx({
    edit: editing,
    'new-todo': newTodo
  });

  return (
    <input
      type="text"
      ref={node => { input = node; }}
      placeholder={placeholder}
      defaultValue={text}
      onBlur={handleBlur}
      onKeyDown={handleSubmit}
      className={className}
    >
    </input>
  );
};

AddTodo.propTypes = propTypes;
export default AddTodo;
