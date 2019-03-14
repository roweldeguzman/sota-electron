import fetchJob from '../Services/fetchJob';
import { setProps } from '../props';

export default (props) => async (dispatch) => {

  setProps(props);
  dispatch(fetchJob());

}