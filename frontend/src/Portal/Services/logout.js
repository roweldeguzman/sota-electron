import { logout } from '../HttpRequests/auth';
import { unsetToken } from '../Actions/token';
import { unsetUser } from '../Actions/user';

export default () => async (dispatch) => {
  
  try {
    
    await logout();
    
    dispatch(unsetToken());
    dispatch(unsetUser());

    window.location = '/';
    
  } catch (error) {
    
    console.log(error);

    throw error;
    
  }
}
