import { createAction, handleActions } from 'redux-actions';

const setEditMode = createAction('SCREENS/JOB_VIEW/SET_EDIT_MODE');
const clearEditMode = createAction('SCREENS/JOB_VIEW/CLEAR_EDIT_MODE');

const defaultState = {
  content: false,
  pricing: false,
  status: false
};

const reducer = handleActions(
  {
    [setEditMode]: (state, action) => Object.assign({}, state, action.payload),
    [clearEditMode]: () => defaultState
  },
  defaultState
);

export { setEditMode, clearEditMode, reducer };