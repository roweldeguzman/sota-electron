import fetchClient from '../Services/fetchClient';
import { setProps } from '../props';

export default (props) => async (dispatch) => {

  setProps(props);
  dispatch(fetchClient());

}