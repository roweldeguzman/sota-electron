import { createAction, handleActions } from 'redux-actions';

const setSelectedProjectId = createAction("SCREENS/CLIENT_VIEW/SET_SELECTED_PROJECT_ID");

const defaultState = null;

const reducer = handleActions(
  {
    [setSelectedProjectId]: (state, action) => action.payload
  },
  defaultState
);

export { setSelectedProjectId, reducer };
