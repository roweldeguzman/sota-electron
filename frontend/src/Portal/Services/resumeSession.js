import _ from 'lodash';
import { replace } from 'connected-react-router';
import { currentUser } from '../HttpRequests/auth';
import { unsetToken } from '../Actions/token';
import { setUser } from '../Actions/user';

export default () => async (dispatch, getState) => {

  const { token } = getState();
  const { pathname } = getState().router.location;
  const isOnLoginPage = pathname === '' || pathname === '/' || pathname.startsWith('/login');
  const redirectToLogin = () => dispatch(replace('/login'));
  const redirectToPortal = () => dispatch(replace('/portal/'));
  
  try {
    
    // return to login page if token not present
    if (!token) {
      if (!isOnLoginPage) redirectToLogin();
      return;
    }
    
    // get current user
    const currentUserResponse = await currentUser();
    const user = currentUserResponse.data.data;
    dispatch(setUser(user));

    // redirect to portal if pointing to login
    if (isOnLoginPage) {
      redirectToPortal();
    }
    
  } catch (error) {
    
    // redirect to login page if there was an authentication error
    if (_.has(error,'response.status') && error.response.status === 401) {
      dispatch(unsetToken())
      if (!isOnLoginPage) redirectToLogin();
    } else {
      throw error;
    }
    
  }
}
