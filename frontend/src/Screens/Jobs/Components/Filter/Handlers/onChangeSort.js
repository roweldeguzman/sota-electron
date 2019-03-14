import { setSorting } from '../../../State/sorting';
import fetchJobs from '../../../Services/fetchJobs';

export default (value) => async (dispatch) => {
  
  dispatch(setSorting({ columnKey: value }));
  dispatch(fetchJobs());

}