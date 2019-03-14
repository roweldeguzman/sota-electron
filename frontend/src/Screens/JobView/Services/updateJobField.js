import { message } from 'antd';

import handleException from '../../../Core/Helpers/handleException';
import { updateJob } from '../../../HttpRequests/jobs';
import fetchJob from './fetchJob';
import { getProps } from '../props';

export default (data) => async (dispatch) => {
  
  try {
    const { id } = getProps().match.params;

    await updateJob({ id, data });
    
    message.success("Job Lane Updated");
    
    dispatch(fetchJob());

  } catch (error) {
    
    handleException(error);

  }
}