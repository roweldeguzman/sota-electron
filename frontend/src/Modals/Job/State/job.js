import { createAction, handleActions } from 'redux-actions';

const loadJob = createAction('MODALS/JOB/LOAD_JOB');

const defaultState = null;

const reducer = handleActions(
  {
    [loadJob]: (state, action) => action.payload,
  },
  defaultState
);

export { loadJob, reducer };