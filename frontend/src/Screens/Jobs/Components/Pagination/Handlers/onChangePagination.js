import { setPagination } from '../../../State/pagination';
import fetchJobs from '../../../Services/fetchJobs';

export default (page) => async (dispatch) => {

  window.scrollTo(0, 0);

  dispatch(setPagination({ current: page }));
  
  await dispatch(fetchJobs());

}