import fetchClients from '../../../Core/Services/fetchClients';
import fetchProjects from '../../../Core/Services/fetchProjects';

import { setProps } from '../props';

export default (props) => async (dispatch) => {
  
  dispatch(fetchClients());
  dispatch(fetchProjects());

  setProps(props);

}