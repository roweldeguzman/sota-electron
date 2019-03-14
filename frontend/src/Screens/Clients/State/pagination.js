import { createAction, handleActions } from 'redux-actions';

const setPagination = createAction('SCREENS/CLIENTS/SET_PAGINATION');

const defaultState = {
  total: 0,
  pageSize: 10,
  current: 1
};

const reducer = handleActions(
  {
    [setPagination]: (state, action) => action.payload,
  },
  defaultState
);

export { setPagination, reducer };