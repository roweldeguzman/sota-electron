import { createAction, handleActions } from 'redux-actions';

const loadJobs = createAction('SCREENS/JOBS/LOAD_JOBS');

const defaultState = [];

const reducer = handleActions(
  {
    [loadJobs]: (state, action) => action.payload,
  },
  defaultState
);

export { loadJobs, reducer };