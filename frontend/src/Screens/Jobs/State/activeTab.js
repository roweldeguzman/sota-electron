import { createAction, handleActions } from 'redux-actions';

const setActiveTab = createAction('SCREENS/JOBS/SET_ACTIVE_TAB');

const defaultState = 0;

const reducer = handleActions(
  {
    [setActiveTab]: (state, action) => action.payload
  },
  defaultState
);

export { setActiveTab, reducer };