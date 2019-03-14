import { setPagination } from '../../../State/pagination';
import fetchClients from '../../../Services/fetchClients';

export default (pagination) => async (dispatch) => {

  window.scrollTo(0, 0);

  dispatch(setPagination(pagination));
  
  await dispatch(fetchClients());

}