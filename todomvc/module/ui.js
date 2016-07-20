import { SHOW_ALL } from '../constant';

export const CHANGE_FILTER = 'Change filter';
export const CHANGE_EDITING = 'Change editing';

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter
});
export const changeEditing = (editing) => ({
  type: CHANGE_EDITING,
  editing
});

const initialState = {
  filter: SHOW_ALL,
  editing: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });

    case CHANGE_EDITING:
      return Object.assign({}, state, {
        editing: action.editing
      });

    default:
      return state;
  }
};

export default reducer;
