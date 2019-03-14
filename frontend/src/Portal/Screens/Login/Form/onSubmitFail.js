import { change } from 'redux-form';

export default (errors, dispatch, submitError, props) => {
  const { config } = props;
  dispatch(change('Login','password', null))
  dispatch(config.login.onFailure());
}

