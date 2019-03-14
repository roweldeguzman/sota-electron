import _ from 'lodash';
import { SubmissionError } from 'redux-form';
import login from '../../../Services/login';

export default async (values, dispatch, props) => {

  const { config } = props;
  
  const username = config.login.usernameIsEmail ? 'email' : 'username';

  const data = {
    [username]: values.username,
    password: values.password
  }
  
  try {

    await dispatch(login(data));

  } catch (error) {

    if (_.has(error,'response.status') && error.response.status === 401) {
      throw new SubmissionError({
        _error: 'Oops! That email / password combination is not valid.'
      })
    } else {
      throw new SubmissionError({
        _error: 'Oops! There seems to be a problem behind the scenes ...'
      })
    }

  }

}

