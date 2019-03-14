import { createAction, handleActions } from 'redux-actions';

const setFetching = createAction('MODALS/JOB/SET_FETCHING');

const defaultState = false

const reducer = handleActions(
  {
    [setFetching]: (state, action) => action.payload
  },
  defaultState
);

export { setFetching, reducer };