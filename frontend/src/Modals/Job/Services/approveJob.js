import { message } from 'antd';
import { getProps } from '../props';
import { updateJobAsApproved } from '../../../HttpRequests/jobs';
import fetchJob from './fetchJob';
import handleException from '../../../Core/Helpers/handleException';

export default () => async (dispatch) => {

  try {
    
    const { jobId, didUpdate } = getProps();

    await updateJobAsApproved({ id: jobId });

    dispatch(fetchJob());

    if (didUpdate) didUpdate();

    message.success('Pricing Approved');

  } catch (error) {

    handleException(error);
    
  }
}
