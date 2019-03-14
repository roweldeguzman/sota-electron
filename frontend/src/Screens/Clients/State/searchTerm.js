import { createAction, handleActions } from 'redux-actions';

const setSearchTerm = createAction('SCREENS/CLIENTS/SET_SEARCH_TERM');
const clearSearchTerm = createAction('SCREENS/CLIENTS/CLEAR_SEARCH_TERM');

const defaultState = '';

const reducer = handleActions(
  {
    [setSearchTerm]: (state, action) => action.payload,
    [clearSearchTerm]: () => defaultState
  },
  defaultState
);

export { setSearchTerm, clearSearchTerm, reducer };
