import { setProps } from '../props';
import fetchJob from '../Services/fetchJob';

export default (props) => async (dispatch) => {

  setProps(props);
  
  dispatch(fetchJob());
  
}