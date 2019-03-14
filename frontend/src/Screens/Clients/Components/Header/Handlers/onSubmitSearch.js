import { setPagination } from '../../../State/pagination';
import fetchClients from '../../../Services/fetchClients';

export default () => async (dispatch) => {

  dispatch(setPagination({ current: 1 }));

  dispatch(fetchClients());
  
}