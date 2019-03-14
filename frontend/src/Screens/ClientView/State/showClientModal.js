import { createAction, handleActions } from 'redux-actions';

const setShowClientModal = createAction("SCREENS/CLIENT_VIEW/SET_SHOW_CLIENT_MODAL");

const defaultState = false;

const reducer = handleActions(
  {
    [setShowClientModal]: (state, action) => action.payload
  },
  defaultState
);

export { setShowClientModal, reducer };