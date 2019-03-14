import { createAction, handleActions } from 'redux-actions';

const loadClients = createAction("CORE/CLIENTS/LOAD_CLIENTS");

const defaultState = []

const reducer = handleActions(
  {
    [loadClients]: (state, action) => action.payload
  },
  defaultState
);

export { loadClients, reducer };