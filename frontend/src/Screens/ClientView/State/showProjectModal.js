import { createAction, handleActions } from 'redux-actions';

const setShowProjectModal = createAction("SCREENS/CLIENT_VIEW/SET_SHOW_PROJECT_MODAL");

const defaultState = false;

const reducer = handleActions(
  {
    [setShowProjectModal]: (state, action) => action.payload
  },
  defaultState
);

export { setShowProjectModal, reducer };