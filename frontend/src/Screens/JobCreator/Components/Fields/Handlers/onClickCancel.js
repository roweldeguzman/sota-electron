import { push } from 'connected-react-router';

export default () => async (dispatch) => {
  
  dispatch(push('/portal/jobs'));

}