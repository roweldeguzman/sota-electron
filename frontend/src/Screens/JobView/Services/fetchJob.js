import { getJob } from '../../../HttpRequests/jobs';
import { loadJob } from '../State/job';
import handleException from '../../../Core/Helpers/handleException';
import { getProps } from '../props';

export default () => async (dispatch) => {

  try {
    
    const { id } = getProps().match.params;

    const params = {};

    params.include = ['client', 'project'].join();
    params.append = ['stage'].join();

    const response = await getJob({ params, id })

    dispatch(loadJob(response.data.data ));

  } catch (error) {

    handleException(error);

  }
}