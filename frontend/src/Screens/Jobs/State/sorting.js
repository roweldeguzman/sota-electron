import { createAction, handleActions } from 'redux-actions';

const setSorting = createAction("SCREENS/JOBS/SET_SORTING");
const clearSorting = createAction("SCREENS/JOBS/CLEAR_SORTING");

const defaultState = {
  columnKey: 'id',
  order: 'descend'
};

const reducer = handleActions(
  {
    [setSorting]: (state, action) => Object.assign({}, state, action.payload),
    [clearSorting]: () => defaultState
  },
  defaultState
);

export { setSorting, clearSorting, reducer };