import { combineReducers } from 'redux';
import { reducer as token } from './token';
import { reducer as user } from './user';

export default combineReducers({
  token,
  user
})
