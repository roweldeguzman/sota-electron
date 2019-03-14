import { setProps } from '../props';
import initialize from '../Services/initialize';

export default (props) => (dispatch) => {

  setProps(props);

  dispatch(initialize());
  
}