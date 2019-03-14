import { getJob } from '../../../HttpRequests/jobs';
import { loadJob } from '../State/job';
import { setFetching } from '../State/fetching';
import { getProps } from '../props';
import handleException from '../../../Core/Helpers/handleException';

export default () => async (dispatch) => {

  try {

    const { jobId } = getProps();

    const params = {};

    params.include = ['client', 'project', 'approved_by_user'].join();

    dispatch(setFetching(true));

    const response = await getJob({ id: jobId, params });

    dispatch(loadJob(response.data.data));

    dispatch(setFetching(false));
  
  } catch (error) {

    handleException(error);

    dispatch(setFetching(false));

  }

}