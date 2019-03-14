import { createAction, handleActions } from 'redux-actions';

const defaultState = null;

export const setToken = createAction('CORE/TOKEN/SET_TOKEN');
export const unsetToken = createAction('CORE/TOKEN/UNSET_TOKEN');

export const reducer = handleActions(
  {
    [setToken]: (state, action) => action.payload,
    [unsetToken]: () => null
  },
  defaultState
);

export default { setToken, unsetToken, reducer };
