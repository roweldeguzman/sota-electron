import { createAction, handleActions } from 'redux-actions';

const setFetching = createAction('SCREENS/CLIENTS/SET_FETCHING');

const defaultState = false

const reducer = handleActions(
  {
    [setFetching]: (state, action) => action.payload
  },
  defaultState
);

export { setFetching, reducer };