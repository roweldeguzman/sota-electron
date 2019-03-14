import { setPagination } from '../../../State/pagination';
import fetchJobs from '../../../Services/fetchJobs';

export default () => async (dispatch) => {

  dispatch(setPagination({ current: 1 }));

  dispatch(fetchJobs());
  
}