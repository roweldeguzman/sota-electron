import { createAction, handleActions } from 'redux-actions';

const setUser = createAction('CORE/USER/SET_USER');
const unsetUser = createAction('CORE/USER/UNSET_USER');

const defaultState = null;

const reducer = handleActions(
  {
    [setUser]: (state, action) => action.payload,
    [unsetUser]: () => null
  },
  defaultState
);

export { setUser, unsetUser, reducer };
