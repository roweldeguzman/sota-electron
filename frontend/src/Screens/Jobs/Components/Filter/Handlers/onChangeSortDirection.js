import { setSorting } from '../../../State/sorting';
import fetchJobs from '../../../Services/fetchJobs';

export default () => async (dispatch, getState) => {
  
  const { order } = getState().screens.Jobs.sorting;

  dispatch(setSorting({
    order: order === "descend" ? "ascend" : "descend"
  }));

  dispatch(fetchJobs());
}