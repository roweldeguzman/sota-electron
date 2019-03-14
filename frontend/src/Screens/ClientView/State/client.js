import { createAction, handleActions } from 'redux-actions';

const loadClient = createAction("SCREENS/CLIENT_VIEW/LOAD_CLIENT");
const clearClient = createAction("SCREENS/CLIENT_VIEW/CLEAR_CLIENT");

const defaultState = null;

const reducer = handleActions(
  {
    [loadClient]: (state, action) => action.payload,
    [clearClient]: () => defaultState
  },
  defaultState
);

export { loadClient, clearClient, reducer };