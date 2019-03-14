import { createAction, handleActions } from 'redux-actions';

const setJobContent = createAction("SCREENS/JOB_CREATOR/SET_JOB_CONTENT");
const clearJobContent = createAction("SCREENS/JOB_CREATOR/CLEAR_JOB_CONTENT");

const defaultState = "";

const reducer = handleActions(
  {
    [setJobContent]: (state, action) => action.payload,
    [clearJobContent]: () => defaultState
  },
  defaultState
);

export { setJobContent, clearJobContent, reducer };
