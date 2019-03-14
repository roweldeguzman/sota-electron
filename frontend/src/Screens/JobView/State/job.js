import { createAction, handleActions } from 'redux-actions';

const loadJob = createAction("SCREENS/JOB_VIEW/LOAD_JOB");
const clearJob = createAction("SCREENS/JOB_VIEW/CLEAR_JOB");

const defaultState = null;

const reducer = handleActions(
  {
    [loadJob]: (state, action) => action.payload,
    [clearJob]: () => defaultState
  },
  defaultState
);

export { loadJob, clearJob, reducer };