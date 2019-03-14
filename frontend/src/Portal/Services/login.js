import { login, currentUser } from '../HttpRequests/auth';
import { setToken } from '../Actions/token';
import { setUser } from '../Actions/user';

export default ({ username, email, password }) => async (dispatch) => {
  
  try {
    
    // authenticate
    
    const data = { username, email, password };
    
    const loginResponse = await login({ data });
    
    // save token
    
    const { token } = loginResponse.data;
    
    dispatch(setToken(token));
    
    // get current user
    
    const currentUserResponse = await currentUser();
    
    // save current user
    
    const user = currentUserResponse.data.data;
    
    dispatch(setUser(user));
    
    
  } catch (error) {
    
    throw error;
    
  }
}
