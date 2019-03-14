import { createAction, handleActions } from 'redux-actions';
import _ from 'lodash';

const defaultState = {
  isStarting: true
};

export const setIsStarting = createAction('CORE/STATUS/SET_IS_STARTING');

export const reducer = handleActions(
  {
    [setIsStarting]: (state, action) => _.assign({}, state, { isStarting: !!action.payload })
  },
  defaultState
);

export default { setIsStarting, reducer };
