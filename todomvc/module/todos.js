export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
});

export const completeAll = () => ({
  type: COMPLETE_ALL
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          text: action.text,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1
        },
        ...state
      ];

    case DELETE_TODO:
      return state.filter(todo => (
        todo.id !== action.id
      ));

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          text: action.text
        };
      });

    case COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
      });

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => (todo.completed === false));

    default:
      return state;
  }
};

export default reducer;
